# Data Model

The data model is built around a small set of durable concepts.

## Identity

- `school_domains`: supported domains and school metadata
- `profiles`: student-facing profile records
- `admin_roles`: admin permissions and review access

## Marketplace

- `categories`: allowed listing categories
- `listings`: core item or service records
- `listing_images`: uploaded media metadata
- `favorites`: saved listings

## Communication

- `inquiry_requests`: buyer-to-seller request records
- `inquiry_messages`: thread messages
- read state fields for unread counts and thread summaries

## Trust

- `reports`: user-submitted reports
- `moderation_logs`: admin action history
- `abuse_guard_events`: rate limit and duplicate detection rail

## Reputation

- `seller_ratings`: buyer feedback after an eligible sale
- rating reminder tokens and email events

## Why status is split

One status field is not enough. The system needs:

- publication status for seller intent
- moderation status for safety review
- sale status for buyer-facing trade state

That separation prevents messy states such as `sold_but_flagged_and_archived` from creeping into one overloaded column.
