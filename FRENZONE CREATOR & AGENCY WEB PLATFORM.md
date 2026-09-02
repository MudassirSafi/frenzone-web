# FRENZONE CREATOR & AGENCY WEB PLATFORM
## Master Frontend Architecture & Implementation Specification

You are working as a **senior frontend architect, full-stack engineer, UI/UX engineer, security engineer, and production SaaS engineer**.

Your task is to build the new **Frenzone Creator & Agency Web Platform** using **Next.js + TypeScript + Tailwind CSS**, with a production-grade architecture that will later integrate with the existing **Node.js backend and Frenzone Admin Panel**.

This is NOT a prototype.

Build the frontend as a scalable, maintainable, secure, API-ready production application.

---

# 1. CORE OBJECTIVE

Build the web platform for:

- Frenzone Creator Program
- Frenzone Agency Program
- Creator applications
- Agency applications
- Creator Portal
- Agency Portal
- Public Coin Store
- Referral/deep-link landing pages
- Authentication foundation
- Terms pages
- Future PayPal integration
- Future Node.js API integration

The frontend must be architected so the backend can be connected later without rewriting the UI architecture.

The existing Frenzone App and Admin Panel are authoritative systems.

DO NOT attempt to recreate backend business logic in the frontend.

---

# 2. NON-NEGOTIABLE ARCHITECTURAL RULES

Follow these rules throughout the entire implementation.

1. Use Next.js with TypeScript.
2. Use the App Router.
3. Use strict TypeScript.
4. Prefer Server Components by default.
5. Use Client Components only where interactivity requires them.
6. Never put business logic directly inside presentation components.
7. Never call APIs directly from arbitrary UI components.
8. All API communication must go through a centralized API/service layer.
9. Never hard-code API URLs throughout the application.
10. Never hard-code business rules throughout components.
11. Never calculate financial payouts, commissions, or earnings authoritatively on the client.
12. Never trust client-side authorization.
13. Never expose backend secrets in client-side code.
14. Never store sensitive secrets in NEXT_PUBLIC_* variables.
15. Never create fake authentication that will conflict with the future Node.js backend.
16. Never create duplicate API clients.
17. Never duplicate UI logic across Creator and Agency dashboards when reusable abstractions are appropriate.
18. Do not create a giant universal dashboard with conditional filters.
19. Creator and Agency experiences must remain architecturally separated.
20. Admin functionality is NOT part of this frontend unless explicitly requested later.
21. Do not modify or assume changes to the existing Node.js backend.
22. Create API contracts/interfaces that can later map cleanly to the Node.js backend.
23. Mock/demo data must be isolated from production service code.
24. Never mix mock data with real API responses.
25. Every feature must have a clear loading, empty, error, and success state.
26. Every protected page must have an authentication boundary.
27. Every role-specific page must have role-aware authorization handling.
28. Use accessible semantic HTML.
29. Responsive behavior is mandatory.
30. Do not sacrifice maintainability for premature abstraction.
31. Do not introduce microservices, unnecessary state management, or unnecessary libraries.
32. Do not refactor unrelated existing code.
33. Do not change working functionality without a direct requirement.
34. Before implementing a feature, inspect existing project structure and conventions.
35. Before creating a new abstraction, verify that an equivalent abstraction does not already exist.
36. Keep components small and composable.
37. Avoid deeply nested component logic.
38. Avoid `any`.
39. Avoid `@ts-ignore` and `@ts-nocheck`.
40. Do not suppress TypeScript errors to make builds pass.
41. Do not leave TODO-based fake implementations pretending to be production functionality.
42. If a backend feature does not exist yet, create a clean typed adapter/mock boundary instead of embedding fake backend logic into the UI.
43. Every architectural decision must favor future Node.js backend integration.

---

# 3. TECHNOLOGY BASELINE

Use:

- Next.js
- TypeScript
- App Router
- Tailwind CSS
- ESLint
- Prettier
- Zod for runtime validation where appropriate
- React Hook Form for complex forms
- TanStack Query for client-side server-state where appropriate
- Lucide React for icons

Do NOT add Redux unless a real requirement emerges.

Do NOT add Zustand unless local/global client state genuinely requires it.

Prefer:

Server Components
→ Server-side data fetching

Client Components
→ interactive UI

API service layer
→ backend communication

Typed domain models
→ consistent data contracts

Query/mutation hooks
→ reusable server-state access

---

# 4. PROJECT STRUCTURE

Use a feature-oriented architecture while keeping Next.js routing clean.

Recommended structure:

src/
├── app/
│   ├── (marketing)/
│   │   ├── creators/
│   │   │   └── page.tsx
│   │   ├── agencies/
│   │   │   └── page.tsx
│   │   ├── creator-apply/
│   │   │   └── page.tsx
│   │   ├── agency-apply/
│   │   │   └── page.tsx
│   │   ├── creator-program-terms/
│   │   │   └── page.tsx
│   │   ├── agency-program-terms/
│   │   │   └── page.tsx
│   │   ├── coins/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   │
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   │
│   ├── (portal)/
│   │   ├── creator/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── profile/
│   │   │   ├── performance/
│   │   │   ├── compliance/
│   │   │   ├── referrals/
│   │   │   ├── earnings/
│   │   │   ├── payouts/
│   │   │   ├── agency/
│   │   │   ├── marketing/
│   │   │   └── support/
│   │   │
│   │   └── agency/
│   │       ├── layout.tsx
│   │       ├── page.tsx
│   │       ├── profile/
│   │       ├── creators/
│   │       ├── invitations/
│   │       ├── performance/
│   │       ├── referrals/
│   │       ├── commissions/
│   │       ├── invoices/
│   │       ├── payouts/
│   │       ├── marketing/
│   │       └── support/
│   │
│   ├── join/
│   │   └── [referralCode]/
│   │       └── page.tsx
│   │
│   ├── error.tsx
│   ├── not-found.tsx
│   ├── loading.tsx
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── ui/
│   ├── layout/
│   ├── navigation/
│   ├── forms/
│   ├── feedback/
│   ├── charts/
│   ├── tables/
│   └── marketing/
│
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── schemas/
│   │   ├── services/
│   │   └── types/
│   │
│   ├── creator/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── schemas/
│   │   └── types/
│   │
│   ├── agency/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── schemas/
│   │   └── types/
│   │
│   ├── applications/
│   │   ├── creator/
│   │   ├── agency/
│   │   ├── schemas/
│   │   ├── services/
│   │   └── types/
│   │
│   ├── coins/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── types/
│   │
│   ├── referrals/
│   │   ├── components/
│   │   ├── services/
│   │   └── types/
│   │
│   └── payments/
│       ├── components/
│       ├── services/
│       └── types/
│
├── lib/
│   ├── api/
│   │   ├── client.ts
│   │   ├── config.ts
│   │   ├── errors.ts
│   │   └── types.ts
│   │
│   ├── auth/
│   │   ├── session.ts
│   │   ├── permissions.ts
│   │   └── redirects.ts
│   │
│   ├── validation/
│   ├── formatting/
│   ├── constants/
│   ├── utils/
│   └── env.ts
│
├── config/
│   ├── site.ts
│   ├── navigation.ts
│   ├── dashboard.ts
│   └── theme.ts
│
├── mocks/
│   ├── creator.ts
│   ├── agency.ts
│   ├── applications.ts
│   ├── coins.ts
│   └── index.ts
│
├── providers/
│   ├── query-provider.tsx
│   ├── auth-provider.tsx
│   └── index.tsx
│
├── styles/
│   ├── globals.css
│   └── tokens.css
│
└── types/
    ├── auth.ts
    ├── creator.ts
    ├── agency.ts
    ├── application.ts
    ├── referral.ts
    ├── coin.ts
    ├── payment.ts
    └── common.ts

public/
├── images/
├── icons/
├── logos/
└── marketing/

.env.example
.eslintrc
.prettierrc
next.config.ts
tailwind.config.ts
tsconfig.json
package.json
README.md

---

# 5. DESIGN SYSTEM

Create ONE centralized design system.

Do NOT scatter arbitrary Tailwind values throughout the application.

Create centralized design tokens.

The goal is that changing the brand colors, spacing, typography, radius, shadows, or layout dimensions can be done from a small number of files.

Primary design configuration:

src/config/theme.ts

and:

src/styles/tokens.css

Tailwind should consume these tokens.

---

# 6. FRENZONE VISUAL IDENTITY

The visual direction should feel:

- Premium
- Modern
- Creator-focused
- Technology-driven
- Energetic
- Trustworthy
- Professional
- Social
- High-end SaaS

Avoid:

- Generic bootstrap appearance
- Excessive gradients
- Excessive glassmorphism
- Cheap-looking neon effects
- Overuse of rounded cards
- Huge unnecessary text
- Visually noisy dashboards

Use visual hierarchy and whitespace.

---

# 7. COLOR SYSTEM

Use CSS variables rather than hard-coding colors.

Create semantic tokens:

--color-brand
--color-brand-hover
--color-brand-active
--color-brand-soft

--color-background
--color-surface
--color-surface-elevated
--color-surface-muted

--color-text-primary
--color-text-secondary
--color-text-muted
--color-text-inverse

--color-border
--color-border-subtle

--color-success
--color-warning
--color-danger
--color-info

Use the existing official Frenzone logo as the source of truth for the primary brand color if available.

If the exact official brand color is not available in the repository, DO NOT invent a random palette.

Create the palette centrally so it can be replaced without touching components.

Use semantic color names rather than names such as:

text-blue-500
bg-purple-500

Prefer:

bg-brand
text-text-primary
border-border
text-success

---

# 8. TYPOGRAPHY SYSTEM

Use one primary modern sans-serif family.

Recommended:

Inter

or another equivalent modern UI font if the existing Frenzone brand already defines one.

Define:

Display XL
Display LG
Heading XL
Heading LG
Heading MD
Heading SM
Body LG
Body MD
Body SM
Caption

Do not randomly choose font sizes page-by-page.

---

# 9. SPACING SYSTEM

Use a consistent spacing scale.

Prefer Tailwind's standard spacing system unless a project-specific token is required.

Major page structure:

Desktop content max width:
1280px–1440px depending on page

Marketing horizontal padding:
24px mobile
32px tablet
48px desktop

Portal horizontal padding:
16px mobile
24px tablet
32px desktop

Maintain consistent vertical rhythm.

---

# 10. RADIUS SYSTEM

Use a restrained radius system.

sm
md
lg
xl

Avoid making every element excessively rounded.

Buttons may use md/lg.

Cards generally use lg/xl.

Major marketing sections may use xl/2xl where appropriate.

---

# 11. SHADOW SYSTEM

Use subtle elevation.

Do not use dramatic shadows everywhere.

Define:

shadow-sm
shadow-card
shadow-elevated
shadow-modal

Cards should generally rely on:

border + subtle background difference

rather than heavy shadows.

---

# 12. LAYOUT SYSTEM

Create reusable:

Container
Section
Stack
Grid
PageHeader
PageShell
Card
StatCard
EmptyState
LoadingState
ErrorState

Do not duplicate layout code between pages.

---

# 13. PUBLIC WEBSITE

Build:

/creators
/agencies
/creator-apply
/agency-apply
/creator-program-terms
/agency-program-terms
/coins
/join/[referralCode]

Public pages must have:

- SEO metadata
- Open Graph metadata
- responsive layouts
- accessible navigation
- footer
- clear CTA hierarchy
- fast loading
- optimized images
- semantic HTML

---

# 14. CREATOR HUB

The Creator landing page should communicate:

Hero:
Become a Frenzone Creator

Explain:

- Creator Program
- Live-stream opportunities
- Creator earnings
- Gifts and tips
- Club revenue
- Referral income
- Growth tools

Requirements section:

- Daily live target
- Live duration
- Content requirements
- External promotion
- Compliance expectations

Benefits section.

How it works:

1. Apply
2. Get reviewed
3. Get approved
4. Start creating
5. Grow audience
6. Earn

Referral section.

FAQ.

CTA:

Apply as Creator

Secondary CTA:

Download Frenzone

Use realistic content architecture rather than placeholder lorem ipsum.

---

# 15. AGENCY HUB

Build an equally premium Agency landing page.

Explain:

- Agency partnership
- Creator management
- Creator performance
- Agency commissions
- Invitations
- Reporting
- Payments
- Growth opportunities

Include:

Apply as Agency

Sign in to Agency Dashboard

Contact/support CTA.

---

# 16. CREATOR APPLICATION

Create a professional multi-section application form.

Fields:

- Full legal name
- Frenzone username
- Email
- Phone
- Country
- Language
- 18+ confirmation
- Instagram
- TikTok
- YouTube
- Creator category
- Audience size
- Primary audience country
- Agency status
- Terms acceptance
- Privacy acceptance
- Creator agreement acceptance

Use React Hook Form + Zod.

Validation must happen client-side for UX.

Backend validation will remain authoritative later.

Do NOT pretend client validation is security.

Prepare the form submission through:

features/applications/creator/services/

Do not place API calls inside the page component.

---

# 17. AGENCY APPLICATION

Fields:

- Legal Agency name
- Country
- Business address
- Registration/tax number
- Website
- Social links
- Main contact
- Email
- Phone
- Markets
- Languages
- Creator categories
- Number of creators
- Payment/invoicing information
- Supporting documents
- Terms acceptance
- Agency agreement acceptance

Create reusable form primitives.

Supporting documents should be architected around a future secure upload API.

Do NOT upload sensitive documents directly to arbitrary public storage.

---

# 18. AUTHENTICATION ARCHITECTURE

The future backend will be Node.js.

Create a frontend authentication abstraction that does not assume the exact final backend implementation.

Example:

AuthService

Methods:

getSession()
login()
logout()
refreshSession()
getCurrentUser()

Authorization:

getUserRole()
hasPermission()
requireRole()

Supported roles:

ADMIN
ADMIN_STAFF
CREATOR
AGENCY_OWNER
AGENCY_MANAGER
AGENCY_FINANCE

Admin roles are included for API/domain compatibility but Admin UI is not required in this frontend.

---

# 19. ROLE ROUTING

After login:

Creator
→ /creator

Agency Owner
→ /agency

Agency Manager
→ /agency

Agency Finance
→ /agency

Admin/Admin Staff
→ existing Admin Panel

Never allow a Creator to access Agency routes.

Never allow Agency users to access Creator routes unless explicitly authorized by the backend.

Frontend guards are UX protection.

Backend authorization remains the security boundary.

---

# 20. CREATOR PORTAL

Create a dedicated Creator application shell.

Navigation:

Overview
Profile
Performance
Compliance
Referrals
Earnings
Payouts
Agency
Marketing
Support

Creator dashboard must contain:

- Profile/agreement status
- Referral code
- Referral link
- QR code
- Live hours
- Targets
- Content progress
- Compliance status
- Referral performance
- Viewers
- Watch time
- Gifts
- Tips
- Club revenue
- Creator earnings
- Bonuses
- Payment status

Use charts only where they communicate meaningful trends.

Do not overload the dashboard with charts.

---

# 21. AGENCY PORTAL

Dedicated Agency application shell.

Navigation:

Overview
Creators
Invitations
Performance
Referrals
Commissions
Invoices
Payouts
Marketing
Support

Agency dashboard:

- Creator count
- Active creators
- Live hours
- Content completion
- Signups
- Qualified users
- Retention
- Revenue
- Agency commission
- Pending payout
- Recent activity

Agency can view only authorized agency data.

---

# 22. DATA OWNERSHIP

Creator:

creatorId === authenticatedUser.creatorId

Agency:

agencyId === authenticatedUser.agencyId

Never trust IDs supplied by arbitrary UI controls.

Backend must enforce ownership.

Frontend should not expose selectors that allow users to browse arbitrary creators/agencies.

---

# 23. API ARCHITECTURE

Create a centralized API client:

src/lib/api/client.ts

Example conceptual structure:

apiClient.get()
apiClient.post()
apiClient.patch()
apiClient.delete()

Create feature-specific services:

creatorService
agencyService
applicationService
referralService
coinService
paymentService
authService

Example:

features/creator/services/creator.service.ts

The UI must never do:

fetch("https://backend...")

inside a component.

Instead:

creatorService.getDashboard()

---

# 24. API CONFIGURATION

Use environment variables.

Example:

NEXT_PUBLIC_API_BASE_URL=

Only public/non-sensitive configuration may use NEXT_PUBLIC_*.

Backend secrets must never be exposed.

Create:

src/lib/env.ts

to centralize environment validation.

If runtime validation is used, fail clearly during development/build rather than silently using undefined configuration.

---

# 25. API RESPONSE CONTRACT

Create generic types:

ApiResponse<T>

ApiError

PaginatedResponse<T>

PaginationMeta

Do not tightly couple UI components to raw backend response structures.

Normalize data inside services/adapters where appropriate.

Example:

Backend:

creator_name

Frontend domain model:

creatorName

The mapping belongs in the service/adapter layer.

---

# 26. FUTURE NODE.JS INTEGRATION

The frontend must be prepared for APIs such as:

POST /auth/login
POST /auth/logout
GET /auth/me

POST /creator-applications
GET /creator/profile
GET /creator/dashboard
GET /creator/performance
GET /creator/compliance
GET /creator/referrals
GET /creator/earnings
GET /creator/payouts

GET /agency/profile
GET /agency/dashboard
GET /agency/creators
POST /agency/invitations
GET /agency/performance
GET /agency/referrals
GET /agency/commissions
GET /agency/invoices
GET /agency/payouts

GET /coins/packages
POST /coins/orders
POST /coins/orders/:id/checkout

GET /referrals/:code
POST /referrals/:code/click

These are frontend API contract placeholders.

DO NOT assume these endpoints already exist.

DO NOT implement backend logic inside Next.js merely to make the frontend appear functional.

---

# 27. MOCK DATA ARCHITECTURE

During frontend-only development, mock data may be used.

However:

Mocks MUST live under:

src/mocks/

Mock services MUST be separated from production API services.

Example:

creator.service.ts
creator.mock.service.ts

or an adapter strategy.

The UI should consume the same domain types regardless of whether the source is mock or real.

This makes backend integration a service-layer replacement rather than a UI rewrite.

---

# 28. SERVER STATE

Use TanStack Query only where client-side server-state is actually needed.

Configure:

- staleTime
- gcTime
- retry policy
- query keys
- mutation handling

Do not refetch aggressively.

Do not create duplicate queries for the same resource.

Use predictable query keys.

---

# 29. FORMS

All complex forms should use:

React Hook Form
+
Zod

Centralize schemas.

Example:

features/applications/creator/schemas/creator-application.schema.ts

Forms must support:

- loading
- validation
- server errors
- successful submission
- retry
- disabled state
- accessible field errors

Never lose entered form data unnecessarily after a validation failure.

---

# 30. ERROR HANDLING

Create centralized API error handling.

Handle:

400
401
403
404
409
422
429
500
503

Display user-friendly messages.

Never expose:

- stack traces
- database errors
- internal service names
- secrets
- raw backend exceptions

---

# 31. LOADING STATES

Every dynamic page must have a deliberate loading experience.

Use:

- skeletons
- progressive loading
- suspense where useful

Avoid blank screens.

---

# 32. EMPTY STATES

Every list/table should have a meaningful empty state.

Examples:

No creators yet.

No referrals yet.

No payouts yet.

No invitations yet.

Never show an empty blank area.

---

# 33. SECURITY

Implement frontend security best practices.

Never expose:

- PayPal Client Secret
- backend secrets
- database credentials
- private API keys

Use HTTPS in production.

Do not trust URL parameters for authorization.

Do not put sensitive information into localStorage unless explicitly required and reviewed.

Prefer secure server-managed authentication architecture compatible with the future backend.

Do not log sensitive user information.

Do not log payment information.

Do not log tokens.

---

# 34. PAYPAL

PayPal is a future integration.

For now build the UI architecture only.

The future implementation must follow:

Frontend
→ backend creates PayPal order
→ PayPal Checkout
→ backend captures/verifies
→ backend webhook verification
→ backend transaction record
→ backend credits Coins exactly once

Never:

Frontend
→ PayPal success
→ directly credit Coins

The frontend must never contain the PayPal Client Secret.

---

# 35. COIN STORE

Create:

/coins

Public Coin Store UI.

It must support future:

- Coin packages
- Original price
- 10% public website discount
- Final price
- Payment selection
- Order review
- Payment status
- Success/failure state

Agency Coin Store will eventually live inside:

/agency/coins

with the 20% agency pricing model.

Do not implement authoritative discount calculations in the frontend.

The backend must determine final prices.

Frontend can display backend-provided pricing.

---

# 36. REFERRAL SYSTEM

Create:

/join/[referralCode]

The page should:

- read referral code
- validate/display referral context through future API
- explain Frenzone
- provide app download CTA
- support installed-app deep linking
- provide App Store / Google Play fallback

Do not implement attribution assumptions inside the frontend.

Prepare the UI/service architecture for:

click
install
signup
qualified user
revenue attribution

Do NOT use Firebase Dynamic Links.

The final system may use AppsFlyer OneLink, Branch, or another approved solution.

---

# 37. SEO

Every public page needs:

- title
- description
- canonical URL where appropriate
- Open Graph metadata
- Twitter/X metadata
- semantic heading hierarchy

Create reusable metadata helpers.

Do not duplicate metadata logic.

---

# 38. PERFORMANCE

Optimize for:

Core Web Vitals
LCP
CLS
INP

Use:

- Server Components
- optimized images
- next/image
- dynamic imports only where useful
- minimal client JavaScript
- lazy loading
- code splitting
- appropriate caching

Do not turn entire pages into Client Components unnecessarily.

---

# 39. ACCESSIBILITY

Target WCAG 2.2 AA principles.

Ensure:

- keyboard navigation
- visible focus states
- semantic buttons
- proper labels
- accessible dialogs
- accessible dropdowns
- sufficient contrast
- screen-reader-friendly form errors
- reduced-motion consideration

Do not use clickable divs where semantic buttons/links are appropriate.

---

# 40. RESPONSIVE DESIGN

Design mobile-first.

Required:

Mobile
Tablet
Desktop
Large desktop

Creator and Agency dashboards must work properly on mobile.

Tables should have deliberate responsive behavior.

Do not simply overflow every table horizontally.

---

# 41. COMPONENT RULES

Build reusable primitives first.

Examples:

Button
Input
Textarea
Select
Checkbox
Radio
Dialog
Dropdown
Badge
Card
Tabs
Tooltip
Table
Pagination
Skeleton
Alert
Toast
Avatar
StatCard

Then build domain components:

CreatorStatCard
PerformanceChart
ComplianceCard
ReferralCard
AgencyCreatorTable
CommissionCard
PayoutStatus
ApplicationProgress

Do not create generic abstractions that have no real reuse.

---

# 42. NAVIGATION

Create centralized navigation configuration.

Example:

creatorNavigation
agencyNavigation
marketingNavigation

Do not duplicate sidebar definitions in every page.

Navigation must support:

- active state
- permission awareness
- responsive mobile navigation
- future feature flags

---

# 43. FEATURE FLAGS

Prepare lightweight feature flags for future controlled releases.

Potential flags:

ENABLE_COIN_STORE
ENABLE_PAYPAL
ENABLE_AGENCY_COINS
ENABLE_REFERRALS
ENABLE_PAYOUTS
ENABLE_MARKETING_UPLOADS

Do not build a complex feature flag platform.

Use a simple centralized configuration layer initially.

---

# 44. ANALYTICS

Do not hard-code analytics calls into every component.

Create an analytics abstraction.

Example:

trackEvent()

Future provider can be connected without rewriting components.

Never send sensitive payment or private user information to analytics.

---

# 45. OBSERVABILITY

Prepare centralized error reporting abstraction.

Example:

reportError()

Do not expose internal errors to users.

Production monitoring provider can be integrated later.

---

# 46. CONTENT MANAGEMENT

Do not hard-code large marketing copy directly across JSX files.

Centralize reusable content where appropriate.

Example:

src/config/content/

However, do not over-engineer this into a CMS.

Keep content easy to edit.

---

# 47. DESIGN QUALITY

The website should feel like a real premium technology company.

Marketing pages should have:

- strong hero sections
- controlled visual hierarchy
- modern cards
- tasteful motion
- clear CTAs
- trust indicators
- benefits
- process sections
- FAQs
- strong footer

Avoid:

- excessive animations
- spinning elements
- unnecessary gradients
- random decorative shapes
- template-like layouts

Animations should support UX rather than distract.

Use subtle transitions.

Respect prefers-reduced-motion.

---

# 48. DASHBOARD UX

Creator and Agency dashboards should prioritize information hierarchy.

Top:

Page title
Context
Primary action

Then:

Important KPIs

Then:

Performance/compliance

Then:

Detailed data

Then:

Recent activity

Do not display every available metric on the first screen.

---

# 49. FINANCIAL UI

Financial values must be formatted consistently.

Create centralized utilities:

formatCurrency()
formatPercentage()
formatNumber()
formatDate()
formatDateTime()

Never manually concatenate:

"$" + amount

throughout the codebase.

Currency formatting must support future multi-currency requirements.

---

# 50. TABLES

Tables must support:

- responsive behavior
- loading
- empty state
- pagination
- sorting where needed
- filtering where needed
- accessible headers

Do not implement client-side loading of thousands of records.

The backend will eventually paginate.

---

# 51. DATE/TIME

Never assume browser-local time is the business timezone.

Create centralized date formatting.

The backend should provide authoritative timestamps.

Frontend handles presentation.

---

# 52. API PAGINATION

Design list APIs around pagination.

Prefer:

cursor-based pagination where appropriate

or:

page + limit

depending on backend conventions.

Do not assume entire datasets will be returned.

---

# 53. BUSINESS LOGIC BOUNDARY

The frontend may perform:

- formatting
- validation for UX
- display calculations
- visual progress calculations

The frontend must NOT authoritatively perform:

- earnings calculations
- commissions
- payout calculations
- fraud decisions
- qualification decisions
- Coin crediting
- payment verification
- referral attribution
- agency ownership
- authorization

Those belong to the backend.

---

# 54. APPLICATION STATUS

Support:

Pending Review
More Information Required
Approved
Rejected
Suspended

Create a reusable status system.

Example:

ApplicationStatusBadge

Do not duplicate status color logic.

---

# 55. CREATOR COMPLIANCE STATUS

Support:

Completed
Partial
Missed
Excused

Create semantic status styling centrally.

---

# 56. AGENCY-CREATOR RELATIONSHIP

Frontend must support future states:

Invitation Received
Pending Creator Consent
Pending Frenzone Approval
Active
Rejected
Removed
Transfer Requested
Suspended

Do not assume acceptance automatically activates a relationship.

---

# 57. ACCESS CONTROL MODEL

Frontend permission model should be declarative.

Example conceptual structure:

permissions.ts

ADMIN
ADMIN_STAFF
CREATOR
AGENCY_OWNER
AGENCY_MANAGER
AGENCY_FINANCE

Use role/permission helpers instead of scattered:

if (user.role === "...")

throughout the application.

---

# 58. TESTING

Set up testing architecture.

At minimum:

- TypeScript checks
- ESLint
- unit tests for important utilities
- schema validation tests
- component tests for critical forms
- integration tests for important user flows
- end-to-end testing architecture

Critical flows:

Creator application
Agency application
Login
Role redirect
Creator dashboard
Agency dashboard
Referral landing page
Coin purchase UI

---

# 59. CODE QUALITY

Before declaring implementation complete:

Run:

npm run lint
npm run typecheck
npm run build

If tests exist:

npm test

Fix all errors.

Do not hide errors.

Do not leave warnings caused by newly introduced code without explanation.

---

# 60. ENVIRONMENT CONFIGURATION

Create:

.env.example

Document:

NEXT_PUBLIC_API_BASE_URL
NEXT_PUBLIC_APP_URL
NEXT_PUBLIC_ENVIRONMENT

Potential future variables should be documented but MUST NOT contain real secrets.

Never commit:

.env
.env.local
production secrets

---

# 61. NEXT.JS CONFIGURATION

Configure:

- security-conscious headers where appropriate
- image optimization
- strict TypeScript
- production build optimization

Do not disable security or type checks simply to make the build pass.

---

# 62. MIDDLEWARE / ROUTE PROTECTION

Use middleware only for lightweight routing/session decisions.

Do not put complex business logic in middleware.

Final authorization remains backend responsibility.

Middleware should primarily help:

- redirect unauthenticated users
- prevent obvious role mismatches
- route users to appropriate portals

---

# 63. LOGGING

Do not use random console.log statements throughout production code.

Create a controlled logger abstraction if logging is required.

Never log:

passwords
tokens
payment secrets
financial sensitive information
private user information

---

# 64. DATABASE

The frontend does NOT connect directly to PostgreSQL, MongoDB, Supabase, or any database.

All data access goes through the backend API.

Never put database credentials in the frontend.

---

# 65. EXISTING BACKEND INTEGRATION

The Node.js backend will be integrated later.

When integration starts:

1. inspect actual backend endpoints
2. inspect request/response schemas
3. inspect authentication mechanism
4. inspect error format
5. inspect pagination
6. inspect role model
7. map backend contracts to frontend domain types
8. replace mock adapters with real adapters
9. preserve UI components wherever possible
10. test all critical flows

Do NOT redesign the backend merely to match the frontend.

If a mismatch exists, document it first.

---

# 66. IMPORTANT: DO NOT BUILD ADMIN UI

The current project is the new public website + Creator Portal + Agency Portal.

The existing Frenzone Admin Panel remains separate.

Do not duplicate the Admin Panel.

Do not create admin management screens unless explicitly requested.

---

# 67. IMPLEMENTATION ORDER

Follow this exact sequence.

STEP 1
Inspect repository.

STEP 2
Understand current Next.js configuration.

STEP 3
Create/verify design token architecture.

STEP 4
Create global layout and typography.

STEP 5
Create reusable UI primitives.

STEP 6
Create public marketing layout.

STEP 7
Build Creator Hub.

STEP 8
Build Agency Hub.

STEP 9
Build Creator Application.

STEP 10
Build Agency Application.

STEP 11
Build Terms pages.

STEP 12
Build Login UI.

STEP 13
Build authentication abstraction.

STEP 14
Build Creator Portal shell.

STEP 15
Build Agency Portal shell.

STEP 16
Build dashboard screens using typed mock adapters.

STEP 17
Build referral landing architecture.

STEP 18
Build Coin Store UI architecture.

STEP 19
Build API service boundaries.

STEP 20
Build loading/error/empty states.

STEP 21
Responsive audit.

STEP 22
Accessibility audit.

STEP 23
Performance audit.

STEP 24
TypeScript/lint/build checks.

STEP 25
Document backend integration points.

---

# 68. DEVELOPMENT PROCESS

For every task:

FIRST:

Inspect relevant files.

SECOND:

Explain:

- current structure
- root cause/problem
- affected files
- proposed solution

THIRD:

Implement only the requested scope.

FOURTH:

Run relevant validation.

FIFTH:

Report:

- exact files changed
- exact functionality implemented
- validation performed
- remaining limitations
- future backend integration points

Do not silently expand scope.

---

# 69. STRICT SCOPE CONTROL

If you discover unrelated issues:

DO NOT automatically fix them.

Report them separately.

If fixing the requested feature requires changing another system:

STOP.

Explain why.

Wait for approval before expanding scope.

---

# 70. NO FAKE PRODUCTION BEHAVIOR

Do not create fake:

payments
earnings
payouts
authorization
referral attribution
Coin crediting
fraud decisions

If a feature is not backed by a real API yet:

use a clearly isolated mock adapter.

The UI can demonstrate the intended experience, but the architecture must make the mock replaceable.

---

# 71. BACKEND-READY DOMAIN TYPES

Define stable domain models.

Examples:

User
Creator
Agency
CreatorApplication
AgencyApplication
CreatorPerformance
CreatorCompliance
Referral
Earning
Commission
Payout
CoinPackage
CoinOrder
Payment
AgencyInvitation
Agreement
SupportTicket

Keep these types independent from UI components.

---

# 72. FINANCIAL PRECISION

Never use floating-point arithmetic for authoritative financial calculations.

Frontend should display backend-provided monetary values.

When formatting monetary values, preserve the backend's precision and currency.

Do not calculate financial settlements in JavaScript.

---

# 73. DOCUMENTATION

Create a README containing:

- project purpose
- architecture
- setup
- environment variables
- development commands
- folder structure
- design system
- API architecture
- mock mode
- backend integration instructions
- testing
- deployment

Also create:

docs/
├── architecture.md
├── api-contracts.md
├── design-system.md
└── backend-integration.md

---

# 74. FINAL QUALITY STANDARD

Before declaring the frontend complete, verify:

Architecture is coherent.

Folder structure is clean.

No duplicated API logic.

No duplicated design tokens.

No arbitrary colors.

No arbitrary typography.

No unnecessary client components.

No unsafe secret exposure.

No direct database access.

No fake financial authority.

No fake authorization.

Creator and Agency portals are separated.

Public website is responsive.

Forms are validated.

Loading states exist.

Error states exist.

Empty states exist.

Accessibility has been considered.

SEO exists.

Build succeeds.

TypeScript succeeds.

Lint succeeds.

Critical flows are testable.

Backend integration points are documented.

---

# 75. MOST IMPORTANT INSTRUCTION

DO NOT treat this as a collection of pages.

Treat Frenzone Creator & Agency Web as a **single scalable product platform** with:

- a public marketing layer
- an application layer
- an authentication layer
- a Creator product
- an Agency product
- a referral layer
- a commerce layer
- a future payment layer
- a centralized API integration layer

The architecture must allow these systems to evolve independently while maintaining a consistent Frenzone design system.

Build for production quality, but do not over-engineer.

Prefer simple, explicit, maintainable architecture over unnecessary abstraction.

When uncertain, inspect existing code first.

When a requirement conflicts with existing architecture, do not guess.

When backend behavior is unknown, create an explicit integration boundary rather than inventing behavior.

When a requested change can be implemented without touching unrelated systems, keep it isolated.

Preserve all existing functionality.

Do not make destructive changes.

Do not rewrite the project unnecessarily.

The final result should be a **premium, scalable, secure, maintainable Next.js frontend ready for integration with the existing Frenzone Node.js backend.**