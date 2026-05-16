# Launch and QA Checklist

## Public pages

- Homepage loads on production domain.
- Marketplace loads with filters, sort, and pagination.
- How-it-works, safety, privacy, terms, and AI pages are reachable.
- Footer links are correct.
- Public copy avoids overpromising safety or payment protection.

## Auth

- Signup supports the intended school domains.
- Unsupported domains get clear public copy.
- Login works with production callback URLs.
- Password reset links return to the production host.
- Raw auth-provider errors are not reflected to users.

## Listings

- Draft, publish, pause, archive, on-hold, and sold flows work.
- Removed or under-review listings do not appear as normal public listings.
- Images upload, display, and fail gracefully.
- No exact address or direct contact details are encouraged.

## Inquiries and chat

- Buyers can contact eligible listings.
- Buyers cannot contact their own listings.
- Sold or removed listings block new inquiries.
- Thread messages render in order.
- Unread counts update.
- Closed threads block new messages.

## Trust and safety

- Report flow works for listing, profile, and inquiry targets.
- Duplicate reports do not spam admins.
- Abuse limits work on high-risk forms.
- Admin moderation actions are logged.
- AI triage stays advisory.

## Email

- Outbound sender domain is configured.
- Auth email templates point to the production domain.
- State-changing email actions use confirm-then-POST.
- Inbound webhook endpoints require authorization.

## Operations

- Cron endpoints are protected.
- Media cleanup is conservative.
- Cache refreshes after write actions.
- Tests pass before deploy.
