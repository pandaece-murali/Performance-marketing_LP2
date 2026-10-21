This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## GoHighLevel contact form delivery

The contact form posts to `POST /api/leads`. The server upserts the contact
directly through the GoHighLevel Contacts API. Configure these server-only
environment variables in Vercel and redeploy:

- `GHL_API_KEY`: a Private Integration Token for the target sub-account with
  `contacts.write` access.
- `GHL_LOCATION_ID`: the ID of that GHL sub-account/location.

For local development, put these variables in `.env.local` and restart the dev
server. The endpoint sends the contact's name, email, phone, business name,
source, and the service and goals in the `service_needed` and `message` custom
fields. It also adds `performance marketing`, `google ads`, `meta ads`, and
`digital marketing` tags, plus a tag for the selected service. Create the
custom fields in GHL with matching keys before using the form. Keep the API
token out of client code and source control.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
