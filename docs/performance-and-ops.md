# Performance and Operations

The goal is not enterprise infrastructure. The goal is to avoid slow, fragile marketplace behavior.

## Server-side browse

The marketplace should handle filters, search, sorting, and pagination on the server. Client-only full-dataset filtering is fine for mockups but becomes a problem once the listing count grows.

## Media handling

Good media behavior:

- compress before upload when possible
- store metadata such as size, width, height, MIME type, and sort order
- use signed URLs for private storage
- use stable image aspect ratios in cards
- keep no-image and broken-image fallbacks
- run cleanup for stale draft or removed listing media

## Cache revalidation

Writes should refresh the right surfaces:

- listing detail
- marketplace browse
- seller dashboard
- inquiry threads
- admin review lists
- public profile slices

Cache tags keep this manageable.

## Scheduled tasks

Early cron tasks:

- stale media cleanup
- rating reminders
- admin queue digest direction
- expired token cleanup

Daily is enough at this stage.
