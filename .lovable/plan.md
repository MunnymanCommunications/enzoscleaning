## Scope

Add account-based access to the gated Trident catalog (`/hardscaping/trident/` and `/hardscaping/trident/university/`), with magic-link login, signup with CRM sync to a new "Trident Members" board, per-product order request forms that submit to the existing "Website Forms" board and email Nick, plus analytics tracking. Magic-link emails will be branded with the `enzoscleaning.com` sender.

Note on route name: the Trident pages currently live at `/hardscaping/trident/...`. I'll apply this work there. If you want a new `/trident` URL alias, say the word and I'll add it.

## User flow

1. Visiting a Trident page shows the existing gate UI, but the primary CTA becomes **Sign in with email link**.
2. User enters their email → backend checks if a Trident member account exists.
   - Exists → Supabase Auth sends a magic link → "Check your email for a login link".
   - Does not exist → "Email not found. Would you like to sign up?" with a Sign up button revealing the full profile form (name, company, phone, etc.).
3. On signup, the profile is saved to a `trident_members` table, pushed to the **Trident Members** CRM board, and a magic link is sent for first login.
4. Clicking the link returns the user to `/hardscaping/trident/` fully authenticated. Session persists; gate UI is bypassed for signed-in members.
5. On product cards inside Trident pages, an **Add to request** button + quantity stepper lets the member build a cart. A floating "Review & submit request" button opens a summary, they approve, and submission:
   - Sends to **Website Forms** CRM board with `form_name: "Trident Member Order Request"`, member account details, and the line-item list as a custom field.
   - Emails Nick with the full order breakdown and member info.
6. Detailed analytics events (page views, button clicks, product adds, order submits) are recorded per member.

## Technical design

### Auth & data
- Enable Supabase email auth (no auto-confirm). Use `signInWithOtp({ shouldCreateUser: false, emailRedirectTo: 'https://enzoscleaning.com/hardscaping/trident/' })` for login so unregistered emails fail cleanly.
- Site URL + redirect allowlist set to `https://enzoscleaning.com` and the Lovable preview origin; magic-link sender uses the `enzoscleaning.com` brand.
- New table `trident_members` (FK to `auth.users.id`) with name, company, email, phone, role/title, address, created_at. RLS: members can select/update their own row.
- New table `trident_member_events` for analytics: `user_id`, `event_type`, `event_data jsonb`, `page_path`, timestamps. RLS: members insert their own; admins can read all.
- New table `trident_order_requests` + `trident_order_request_items` for an audit trail of submitted requests. Member-readable own rows.
- A "registered email" check uses an edge function (`check-trident-member`) that queries `trident_members` by email to drive the not-found message — avoids leaking auth.users.

### Edge functions
- `trident-signup` — validates payload, creates auth user (admin API, email-confirmed false), inserts `trident_members` row, posts to a new **Trident Members** CRM webhook (reuses `CRM_FORMS_WEBHOOK_URL` + `CRM_WEBHOOK_APIKEY`, new board id constant), then triggers `signInWithOtp` for first login.
- `check-trident-member` — `{ email }` → `{ exists: boolean }`.
- `submit-trident-order` — authenticated JWT required; accepts cart items, persists to `trident_order_requests`, posts to **Website Forms** board (board id `3c83cd01-…`, tenant `enzos`) with `form_name: "Trident Member Order Request"` and a `trident_member_order_request` custom field containing JSON line items + totals, and emails `Nick@munnymancommunications.com` via Resend.

You'll need to provide the Trident Members CRM board id (separate from the existing Website Forms board). I'll add it as a secret `CRM_TRIDENT_MEMBERS_BOARD_ID`.

### Frontend
- Replace the password-only gate with a tabbed `TridentAuthGate`: Sign in (email only) / Sign up (full profile). On valid session, render children. Keep the existing visitor tracking for anonymous browsing if desired, or hide gate entirely for logged-in members.
- New `useTridentMember()` hook wraps Supabase session + member profile.
- New `TridentOrderCartProvider` (context) with add/remove/update qty and submit; floating cart button + review modal.
- Wire **Add to request** buttons + qty steppers onto product cards in `Trident.tsx` and `TridentUniversity.tsx`.
- Analytics: small `trackEvent(type, data)` helper inserting into `trident_member_events` on page view, product add, cart open, order submit, link clicks. Surface counts in `TridentAdmin`.

### Files
- New: `src/components/trident/TridentAuthGate.tsx`, `SignInForm.tsx`, `SignUpForm.tsx`, `OrderCartProvider.tsx`, `OrderCartButton.tsx`, `OrderReviewDialog.tsx`, `ProductAddToRequest.tsx`; `src/hooks/useTridentMember.ts`; edge functions `check-trident-member`, `trident-signup`, `submit-trident-order`.
- Modified: `App.tsx` (wrap Trident routes with new gate), `Trident.tsx` / `TridentUniversity.tsx` (cart + add buttons), `TridentAdmin.tsx` (members + orders + events views), `Header.tsx` (Trident sign-in link).
- Migration adds the three tables, RLS, and a trigger updating `updated_at`.

## Open questions before I build

1. Confirm the Trident pages remain at `/hardscaping/trident/...` (or do you want a new `/trident` URL?).
2. CRM board id for **Trident Members** — please share so the signup webhook routes correctly.
3. For signup, should new accounts be auto-approved (immediate magic-link login) or pending admin approval in `TridentAdmin` before the first link is sent?
4. Should the existing access-code gate (`ENZOS`) be removed entirely once member auth is live, or kept as a fallback for non-members?
