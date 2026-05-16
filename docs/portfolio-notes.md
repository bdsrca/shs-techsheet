# Portfolio Notes

## Short project description

Built a school-gated student marketplace for local listings and in-person exchange. The system supports public browsing, school-email access, listing creation, signed media, inquiry-based messaging, report handling, admin moderation, seller ratings, email workflows, cache revalidation, scheduled maintenance, and AI-assisted review signals with human oversight.

## Strong technical talking points

- Designed a real listing lifecycle instead of a single demo status.
- Used school-domain access as a practical community gate without overclaiming identity verification.
- Kept private contact details out of public listings by using inquiry-first communication.
- Modeled trust and safety through data, permissions, reports, and moderation logs.
- Treated AI as a background support layer, not an automated judge.
- Avoided payment scope until the trust, reporting, and dispute surfaces are ready.

## Interview version

The interesting part of this project is not the listing grid. It is the policy layer behind it. A student marketplace needs clear access rules, listing states, media handling, in-app communication, reports, admin review, and careful safety copy. I built the product around those constraints instead of treating them as edge cases.

## Resume bullet

Built a school-gated local marketplace using a Next.js/Supabase architecture, with server-side discovery, signed listing media, inquiry threads, report/moderation workflows, email notifications, RLS-backed data boundaries, scheduled cleanup, and AI-assisted review signals.
