# Source-Code Map

This repository includes public-safe policy examples, not production source code.

## Included modules

| File | Purpose |
| --- | --- |
| `src/statusPolicy.js` | Decides whether a listing is visible or contactable |
| `src/listingQuality.js` | Checks listing text for clarity and safety issues |
| `src/inquiryPolicy.js` | Validates buyer-to-seller inquiry attempts |
| `src/abuseGuard.js` | Provides duplicate and rate-limit helpers |
| `src/answerSafetySummary.js` | Builds an admin-friendly review package |
| `src/demo.js` | Runs the examples with sample data |
| `tests/run-tests.js` | Verifies the policy behavior |

## Why include snippets

A portfolio repo should show how the product thinks, not just what the UI looks like. These modules make the state and safety logic concrete without copying private app code.
