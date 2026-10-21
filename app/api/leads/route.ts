type LeadPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  company?: unknown;
  service?: unknown;
  message?: unknown;
  source?: unknown;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  let lead: LeadPayload;
  const isBrowserFormPost = !request.headers
    .get("content-type")
    ?.includes("application/json");

  try {
    if (request.headers.get("content-type")?.includes("application/json")) {
      lead = (await request.json()) as LeadPayload;
    } else {
      const formData = await request.formData();
      lead = Object.fromEntries(formData.entries()) as LeadPayload;
    }
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (
    !isNonEmptyString(lead.name) ||
    !isNonEmptyString(lead.email) ||
    !isNonEmptyString(lead.phone) ||
    !isNonEmptyString(lead.service) ||
    !isNonEmptyString(lead.message) ||
    !/^\S+@\S+\.\S+$/.test(lead.email.trim())
  ) {
    return Response.json(
      { error: "Please provide valid contact details and all required fields." },
      { status: 400 },
    );
  }

  const apiKey = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!apiKey || !locationId) {
    console.error("Lead submission is unavailable: GHL credentials are not set.");
    return Response.json(
      { error: "Lead submissions are not configured yet. Please contact our team directly." },
      { status: 503 },
    );
  }

  try {
    const fullName = lead.name.trim();
    const [firstName, ...lastNameParts] = fullName.split(/\s+/);
    const customFields = [
      {
        key: "service_needed",
        fieldValue: lead.service.trim(),
      },
      {
        key: "message",
        fieldValue: lead.message.trim(),
      },
    ];

    const delivery = await fetch("https://services.leadconnectorhq.com/contacts/upsert", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Version: "v3",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        locationId,
        name: fullName,
        firstName,
        lastName: lastNameParts.join(" "),
        email: lead.email.trim(),
        phone: lead.phone.trim(),
        companyName: typeof lead.company === "string" ? lead.company.trim() : "",
        source: "PANDAeCe Landing Page Form",
        customFields,
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!delivery.ok) {
      await logGhlError("contact upsert", delivery);
      return Response.json({ error: "We couldn't deliver your request." }, { status: 502 });
    }

    const upsertResult = (await delivery.json().catch(() => null)) as
      | { contact?: { id?: unknown } }
      | null;
    const contactId = upsertResult?.contact?.id;
    if (typeof contactId !== "string" || !contactId) {
      console.error("GHL contact upsert succeeded without returning a contact ID.");
      return Response.json({ error: "We couldn't finish saving your request." }, { status: 502 });
    }

    const serviceTag: Record<string, string> = {
      "Google Ads": "google ads",
      "Meta Ads": "meta ads",
      "Landing Pages & Websites": "landing pages",
      "Campaign Optimisation": "campaign optimisation",
      "CRM & Lead Tracking": "crm & lead tracking",
      "Multiple Services": "multiple services",
    };
    const tags = [
      "performance marketing",
      "google ads",
      "meta ads",
      "digital marketing",
    ];
    const selectedServiceTag = serviceTag[lead.service.trim()];
    if (selectedServiceTag) tags.push(selectedServiceTag);

    const tagResponse = await fetch(
      `https://services.leadconnectorhq.com/contacts/${encodeURIComponent(contactId)}/tags`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          Version: "v3",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ tags }),
        signal: AbortSignal.timeout(10_000),
      },
    );

    if (!tagResponse.ok) {
      await logGhlError("add contact tags", tagResponse);
      return Response.json(
        { error: "Your lead was saved, but its GHL tags could not be applied. Please contact our team." },
        { status: 502 },
      );
    }

    if (isBrowserFormPost) {
      return Response.redirect(new URL("/thank-you", request.url), 303);
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("GHL contact upsert failed.", error);
    return Response.json({ error: "We couldn't deliver your request." }, { status: 502 });
  }
}

async function logGhlError(action: string, response: Response) {
  const responseBody = (await response.json().catch(() => null)) as
    | { message?: unknown; error?: unknown; code?: unknown }
    | null;
  const providerMessage =
    typeof responseBody?.message === "string"
      ? responseBody.message
      : typeof responseBody?.error === "string"
        ? responseBody.error
        : "No error message returned";
  const providerCode =
    typeof responseBody?.code === "string" ||
    typeof responseBody?.code === "number"
      ? responseBody.code
      : "unknown";
  console.error(`GHL ${action} rejected the request.`, {
    status: response.status,
    code: providerCode,
    message: providerMessage.slice(0, 500),
  });
}
