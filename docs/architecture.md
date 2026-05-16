# Architecture Notes

The system is split by user surface, not by page count.

## Public surface

Public routes cover the homepage, marketplace browsing, public listing pages, safety pages, terms, privacy, and AI explanation pages. The public surface should feel light. It should help students answer three questions quickly:

1. What is available near me?
2. Can I post or message with my school email?
3. How do I meet safely?

## Student dashboard

Signed-in routes cover account setup, saved items, listing creation, inquiries, chat threads, and sale status updates. This is where the marketplace turns from browsing into action.

## Admin surface

Admin routes cover reports, categories, school domains, listing review, and moderation logs. The admin surface should expose enough context to make decisions, but it should not leak private data into public views.

## Backend posture

The backend should own important decisions:

- whether a listing is public
- whether a buyer can contact a seller
- whether a report is valid
- whether a webhook request is authorized
- whether an email-link action can mutate state
- whether cache should be revalidated

The browser should not be trusted to enforce marketplace policy.

## Deployment posture

A simple production setup is enough for this stage:

- Next.js app deployed on Vercel
- Supabase for Auth, Postgres, and Storage
- transactional email provider for outbound messages
- cron endpoints for cleanup and reminders
- strict environment variable handling

The architecture is small by design. The product is only valuable if it stays understandable.
