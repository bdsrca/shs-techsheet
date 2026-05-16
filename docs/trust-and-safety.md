# Trust and Safety

Trust and safety is not a banner on the homepage. It is a set of product and engineering choices.

## Public safety copy

The public rules stay short:

- meet in public
- check the item before paying
- do not post direct contact details
- use broad area hints
- report anything strange
- leave if something feels off

## Product boundaries

The product should not claim:

- buyer protection
- escrow protection
- school endorsement
- verified legal identity
- guaranteed safety
- AI-guaranteed moderation

Clear boundaries are safer than impressive promises.

## Enforcement surfaces

Safety appears in:

- RLS policies
- public profile views
- listing validation
- restricted category rules
- report creation checks
- admin moderation flows
- abuse guards
- email link handling
- webhook authorization

## Abuse controls

Useful early controls include:

- honeypot fields for anonymous forms
- duplicate payload suppression
- per-user and per-IP rate limits
- cooldown windows for repeated actions
- admin-alert dedupe for repeated reports
- safe redirect sanitization

The goal is not perfect prevention. The goal is to make obvious abuse harder and easier to review.
