# Email and Privacy Relay

Email is part of the product's trust boundary.

## Why direct contact is avoided

The marketplace should not push students to put personal phone numbers, home addresses, or exact email addresses into public listing pages. In-app inquiry gives both sides a safer starting point.

## Email workflows

Useful workflows include:

- signup and login emails
- password reset
- secondary email verification
- inquiry notifications
- report notifications
- listing moderation updates
- seller rating reminders

## Link safety

State-changing email links should not write data on `GET`. Mail clients, security scanners, and preview systems may open links before a user clicks intentionally.

Safer pattern:

1. `GET` opens a confirmation page.
2. User confirms.
3. `POST` performs the state change.
4. Token is consumed after the intentional action.

## Inbound relay

If reply relay is enabled, inbound webhooks should require a secret and normalize message handling. Public probes should not receive useful success signals from sensitive endpoints.
