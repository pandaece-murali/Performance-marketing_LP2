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

  try {
    lead = (await request.json()) as LeadPayload;
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

  const webhookUrl = process.env.LEADS_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("Lead submission is unavailable: LEADS_WEBHOOK_URL is not set.");
    return Response.json(
      { error: "Lead submissions are not configured yet. Please contact our team directly." },
      { status: 503 },
    );
  }

  try {
    const delivery = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: lead.name.trim(),
        email: lead.email.trim(),
        phone: lead.phone.trim(),
        company: typeof lead.company === "string" ? lead.company.trim() : "",
        service: lead.service.trim(),
        message: lead.message.trim(),
        source: typeof lead.source === "string" ? lead.source : "Website contact form",
        submittedAt: new Date().toISOString(),
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!delivery.ok) {
      console.error(`Lead webhook returned HTTP ${delivery.status}.`);
      return Response.json({ error: "We couldn't deliver your request." }, { status: 502 });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Lead webhook delivery failed.", error);
    return Response.json({ error: "We couldn't deliver your request." }, { status: 502 });
  }
}
