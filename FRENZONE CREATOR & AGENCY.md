# FRENZONE CREATOR & AGENCY
# STRICT DEVELOPMENT RULES

These rules are mandatory for the entire Frenzone Creator & Agency website.

The coding agent MUST follow these rules for every implementation, every component, every page, every refactor, and every future feature.

These rules have higher priority than convenience.

---

## 1. PROJECT SAFETY RULES

1. Do NOT rewrite the existing project unnecessarily.
2. Do NOT delete existing functionality unless explicitly instructed.
3. Do NOT modify unrelated files.
4. Do NOT introduce unrelated refactors.
5. Do NOT change backend behavior.
6. Do NOT invent backend functionality.
7. Do NOT modify the existing Admin Panel.
8. Do NOT create a duplicate Admin Panel.
9. Do NOT connect the frontend directly to a database.
10. Do NOT expose backend secrets.
11. Do NOT commit credentials, API keys, tokens, passwords, or secrets.
12. Do NOT use production secrets in mock/demo code.
13. Do NOT make destructive changes without explicit approval.
14. Inspect the existing project before making architectural decisions.
15. Reuse existing components/utilities when they are appropriate.
16. Do not create duplicate components that solve the same problem.

---

# 2. UI CONSISTENCY — ABSOLUTE RULE

The entire Frenzone website must look like **ONE PRODUCT**.

The Creator pages, Agency pages, application forms, marketing pages, login, Coin Store, and dashboards must share the same visual language.

Do NOT design every page independently.

Maintain consistency in:

- Colors
- Typography
- Font weights
- Font sizes
- Spacing
- Border radius
- Shadows
- Borders
- Buttons
- Inputs
- Cards
- Icons
- Navigation
- Tables
- Status badges
- Charts
- Empty states
- Loading states
- Error states
- Responsive behavior

If a component already exists, reuse it.

If a new component is required, make it visually compatible with the existing design system.

---

# 3. CENTRALIZED DESIGN CONTROL

There must be a centralized source of truth for visual design.

Colors, typography, spacing, radius, shadows, breakpoints, and important layout values must be controlled through design tokens/theme configuration.

Do NOT scatter custom values throughout JSX.

Avoid:

text-[#123456]
bg-[#abcdef]
rounded-[17px]
text-[37px]
p-[29px]

unless there is a genuine design-system reason.

Prefer semantic tokens.

Example:

bg-brand
text-primary
text-secondary
border-default
bg-surface
text-success

The goal:

ONE place to change the brand.

ONE place to change typography.

ONE place to change visual tokens.

ONE place to adjust layout constants.

---

# 4. MINIMALISTIC UI RULE

Frenzone must have a **clean, premium, modern, minimalistic interface**.

Do NOT fill the interface simply because empty space exists.

Whitespace is intentional.

Do NOT add:

- unnecessary paragraphs
- unnecessary cards
- unnecessary badges
- unnecessary statistics
- unnecessary buttons
- unnecessary sections
- unnecessary decorative elements
- repetitive explanations

Every element must have a purpose.

If an element does not improve:

- understanding
- navigation
- conversion
- trust
- usability
- information hierarchy

remove it.

---

# 5. TEXT RULE — VERY IMPORTANT

DO NOT create text-heavy interfaces.

Users should be able to understand the page quickly.

Prefer:

Short heading
+
Short supporting sentence
+
Visual
+
CTA

instead of:

Large heading
+
multiple long paragraphs
+
multiple explanatory paragraphs
+
large blocks of text.

Marketing content must be concise and human.

Dashboard content must be even more concise.

Avoid writing walls of text.

---

# 6. ICON-FIRST COMMUNICATION

Use icons where they improve comprehension.

Use a consistent icon library such as:

Lucide React.

Examples:

Live Hours → video/live icon

Referrals → link/share icon

Earnings → wallet icon

Performance → chart icon

Compliance → check/shield icon

Support → headset/message icon

Agency → building/users icon

Payouts → bank/wallet icon

Do NOT replace every word with an icon.

Icons should support text, not make the interface ambiguous.

---

# 7. NO ICON CHAOS

Never use multiple icon libraries.

Do not mix:

Lucide
Font Awesome
Heroicons
random SVG libraries

unless there is a specific approved requirement.

Prefer one consistent icon system.

Icons should have:

consistent size
consistent stroke weight
consistent alignment

Typical UI icon sizes:

16px
18px
20px
24px

Do not randomly use huge icons.

---

# 8. TYPOGRAPHY RULES

Typography must be deliberate.

Do NOT randomly change font sizes to make sections look impressive.

Use the centralized typography scale.

Avoid:

- excessive giant headings
- excessive bold text
- too many font weights
- uppercase text everywhere
- tiny unreadable text

Headings should establish hierarchy.

Body text should remain comfortable to read.

Dashboard typography should prioritize information density and clarity.

---

# 9. HEADING RULE

Every page should have one clear primary heading.

Do not create:

H1
H1
H1
H1

throughout a page.

Use:

H1 → page title

H2 → major section

H3 → subsection

Do not skip hierarchy unnecessarily.

---

# 10. BUTTON RULES

Buttons must have a clear purpose.

Do NOT create five competing primary buttons.

Each section should generally have:

ONE primary action.

Secondary actions should visually remain secondary.

Use:

Primary
Secondary
Ghost
Destructive

consistently.

Do not invent a new button style for every page.

---

# 11. CARD RULES

Do NOT put everything inside cards.

Cards should group related information.

Bad:

Card
→ Card
→ Card
→ Card
→ Card
→ Card
→ Card

This creates visual clutter.

Use cards strategically.

Prefer:

Section
→ content

rather than:

Section
→ card
→ card
→ card

for everything.

---

# 12. DASHBOARD DENSITY

Dashboards must be informative but not overwhelming.

Prioritize:

1. Most important KPI
2. Important trend
3. Important action
4. Detailed information

Do not show every available metric on the dashboard homepage.

Move secondary information into dedicated pages.

---

# 13. CREATOR DASHBOARD UI

Creator Dashboard should emphasize:

- Today's progress
- Live target
- Content target
- Compliance
- Earnings
- Referrals
- Important actions

Avoid displaying excessive financial/performance information simultaneously.

Use progressive disclosure.

---

# 14. AGENCY DASHBOARD UI

Agency Dashboard should emphasize:

- Creator count
- Active creators
- Performance
- Compliance
- Revenue
- Commission
- Important invitations/actions

Do not overwhelm the Agency owner with every creator metric on the overview.

Detailed information belongs in dedicated pages.

---

# 15. RESPONSIVE RULE

Every page must be designed for:

Mobile
Tablet
Desktop
Large desktop

Do NOT design desktop first and simply shrink it.

Think about mobile information hierarchy from the beginning.

On mobile:

- navigation collapses
- cards stack appropriately
- tables become responsive
- actions remain accessible
- typography remains readable
- spacing remains intentional

---

# 16. MOBILE NAVIGATION

Creator and Agency dashboards must have deliberate mobile navigation.

Do not simply squeeze a desktop sidebar into mobile.

Use an appropriate:

drawer
sheet
bottom navigation
or other suitable responsive pattern.

Keep the most important navigation immediately accessible.

---

# 17. SPACING CONSISTENCY

Use the centralized spacing system.

Avoid random spacing.

Do not have:

Section A → 37px
Section B → 51px
Section C → 23px

unless deliberately defined.

Create visual rhythm.

Related elements should have smaller spacing.

Unrelated sections should have larger spacing.

---

# 18. COLOR DISCIPLINE

Use a controlled color palette.

Do NOT use random colors.

Avoid rainbow dashboards.

Do not make:

one card blue
one card green
one card purple
one card orange
one card pink

unless color communicates a specific semantic meaning.

Use color primarily for:

- brand
- hierarchy
- status
- feedback
- actions

---

# 19. STATUS COLORS

Status colors must be consistent globally.

Success:

green semantic token

Warning:

amber/yellow semantic token

Error:

red semantic token

Information:

blue semantic token

Do not change status colors between pages.

---

# 20. ANIMATION RULES

Use animation sparingly.

Animations should improve:

- feedback
- navigation
- perceived performance
- hierarchy

Avoid:

- excessive bouncing
- spinning decorations
- constant movement
- flashy effects
- distracting gradients
- animation everywhere

Respect:

prefers-reduced-motion.

---

# 21. MARKETING PAGE RULE

Marketing pages should be visually driven.

Prefer:

Heading
+
short explanation
+
visual illustration
+
CTA

rather than large blocks of text.

Use:

- feature cards
- icons
- visual diagrams
- metrics
- screenshots
- product visuals
- concise benefits

where useful.

---

# 22. HERO SECTION RULE

Hero sections must communicate the value proposition immediately.

Avoid writing an entire paragraph in the hero.

Recommended structure:

Small label
→ Strong headline
→ Short supporting text
→ Primary CTA
→ Secondary CTA

Keep it focused.

---

# 23. FAQ RULE

FAQs should be concise.

Use accordion/collapsible components.

Do NOT display every answer expanded by default if it creates a wall of text.

---

# 24. FORM UI RULES

Forms must be easy to scan.

Group related fields.

Example:

Personal Information

Professional Information

Social Profiles

Audience

Agency Information

Agreements

Do not create one giant uninterrupted form.

Use:

- clear section headings
- concise descriptions
- proper labels
- appropriate icons where useful
- validation feedback

---

# 25. FORM TEXT RULE

Form descriptions must be short.

Bad:

"Please enter your complete legal name exactly as it appears on your government-issued documentation because this information may be used for..."

Prefer:

"Enter your legal name as shown on your official documents."

Keep helper text concise.

---

# 26. ERROR MESSAGE RULE

Never show technical errors directly to users.

Bad:

"AxiosError: Request failed with status code 500"

Bad:

"PostgreSQL connection refused"

Prefer:

"Something went wrong. Please try again."

If useful:

"Your application could not be submitted. Please try again."

Technical details belong in logs, not UI.

---

# 27. EMPTY STATE RULE

Empty states must be useful.

Include:

Icon
Short heading
One-line explanation
Optional action

Example:

No referrals yet

Share your referral link to start building your network.

[Copy referral link]

Do not create giant empty-state illustrations with paragraphs of text.

---

# 28. LOADING STATE RULE

Loading states must match the content structure.

Use skeletons where appropriate.

Do not display:

"Loading..."
"Loading..."
"Loading..."

everywhere.

Prefer content-aware skeletons.

---

# 29. TABLE RULES

Tables should remain clean.

Do not display unnecessary columns.

If a table has 15 fields, ask whether users actually need all 15.

Prioritize important information.

Secondary information can be shown:

- on detail pages
- in expandable rows
- in dialogs
- behind actions

---

# 30. DATA VISUALIZATION

Charts must answer a question.

Do not add charts merely because dashboards look more sophisticated with charts.

Every chart must communicate something useful.

Examples:

Revenue trend
Live hours trend
Referral growth
Creator performance

Avoid unnecessary decorative charts.

---

# 31. IMAGE RULES

Use optimized images.

Use Next.js image optimization where appropriate.

Do not load huge images unnecessarily.

Do not use random stock photography simply to fill space.

Visual assets should support Frenzone's brand.

---

# 32. LOGO RULE

Use the official Frenzone logo.

Do NOT:

- recolor the logo arbitrarily
- distort the logo
- stretch it
- rotate it
- add effects that compromise brand integrity

Maintain appropriate clear space.

---

# 33. ACCESSIBILITY

Accessibility is mandatory.

Ensure:

- keyboard navigation
- focus states
- labels
- semantic HTML
- proper buttons
- proper links
- alt text
- accessible dialogs
- accessible form errors
- sufficient color contrast

Never rely only on color to communicate status.

---

# 34. SECURITY UI RULE

Never expose sensitive information unnecessarily.

Creators should not see other creators' private data.

Agencies should not see other agencies' data.

Never display:

- access tokens
- API secrets
- internal IDs unnecessarily
- private messages
- sensitive moderation information
- payment secrets

---

# 35. API RULE

Components must NOT directly contain backend API logic.

Bad:

useEffect(() => {
  fetch(...)
}, [])

inside a large component.

Use:

service
→ hook/query
→ component

Keep data access separate from presentation.

---

# 36. MOCK DATA RULE

Mock data is allowed during frontend development.

But mock data must remain isolated.

Never mix:

mock response
+
real API response
+
hard-coded UI data

inside the same component.

When backend integration arrives, replacing the data source should not require rebuilding the UI.

---

# 37. BUSINESS LOGIC RULE

Frontend is NOT the authority for:

- earnings
- commissions
- payouts
- Coin balances
- payment verification
- referral attribution
- fraud decisions
- agency ownership
- authorization

The Node.js backend is authoritative.

Frontend displays backend results.

---

# 38. FINANCIAL UI RULE

Never visually imply that a calculated frontend amount is final.

Use backend-provided values.

For example:

Pending Earnings
Available Earnings
Approved Payout

must come from authoritative backend data.

---

# 39. PERFORMANCE RULE

Do not make every component a Client Component.

Prefer Server Components.

Only use `"use client"` where interaction/state/browser APIs require it.

Avoid unnecessary JavaScript.

---

# 40. STATE MANAGEMENT RULE

Do not introduce global state unless genuinely required.

Prefer:

Server state → TanStack Query where appropriate

Local UI state → React state

Form state → React Hook Form

Global state should be the exception.

---

# 41. DEPENDENCY RULE

Before adding a package:

Ask:

1. Is it actually necessary?
2. Does Next.js/React already solve this?
3. Does the project already have an equivalent?
4. Does the dependency increase bundle size unnecessarily?
5. Is it actively maintained?

Do not install libraries for trivial functionality.

---

# 42. COMPONENT REUSE RULE

Reuse components where the behavior and visual purpose are genuinely shared.

Do not duplicate:

buttons
cards
inputs
modals
status badges
page headers
tables
navigation
loading states

Create reusable components when reuse is real.

Do not over-abstract simple one-off components.

---

# 43. FILE ORGANIZATION RULE

Files must live in logical locations.

Do not create:

components/final-final/
components/new/
components/test2/
utils/random.ts

Use meaningful domain-based names.

---

# 44. NAMING RULE

Use clear names.

Prefer:

CreatorPerformanceCard

instead of:

Box2

Prefer:

AgencyInvitationTable

instead of:

TableNew

Prefer:

creator-application.schema.ts

instead of:

schema2.ts

---

# 45. NO DEAD CODE

Do not leave:

unused imports
unused components
unused variables
dead routes
unused mock data
unused dependencies

Remove code that is genuinely no longer required.

---

# 46. NO MAGIC VALUES

Avoid unexplained numbers.

Bad:

if (progress > 80)

Prefer a named constant where the value represents a business/UI rule.

Business thresholds that belong to the backend must NOT be recreated in frontend constants.

---

# 47. SEO RULE

Public pages must have:

- meaningful title
- meaningful description
- appropriate metadata
- correct heading hierarchy
- semantic content

Do not keyword-stuff pages.

---

# 48. URL RULE

Use clean URLs.

Public:

/creators
/agencies
/creator-apply
/agency-apply
/creator-program-terms
/agency-program-terms
/coins

Portal:

/creator
/creator/performance
/creator/referrals

/agency
/agency/creators
/agency/performance

Do not create meaningless URLs.

---

# 49. AUTHENTICATION RULE

Authentication must be centralized.

Do not implement separate login systems for Creator and Agency.

One authentication system.

Role determines destination and permissions.

---

# 50. CREATOR / AGENCY SEPARATION

Creator and Agency are separate products inside the same platform.

Do NOT create one dashboard with:

if creator → this
if agency → that

for the entire application.

Use separate layouts and navigation.

Shared primitives may be reused.

Product experiences remain separate.

---

# 51. ADMIN SEPARATION

The Admin Panel is a separate privileged product.

Do not expose Admin functionality in the Creator/Agency frontend.

Do not create frontend shortcuts around Admin authorization.

---

# 52. ROUTE SECURITY

Protected routes must have appropriate authentication boundaries.

Frontend route protection is for UX.

Backend authorization is the actual security boundary.

Never assume that hiding a link protects a resource.

---

# 53. MOBILE QUALITY RULE

Before completing any page, inspect:

320px
375px
390px
430px
768px
1024px
1280px
1440px+

The UI must remain usable.

Do not allow:

- clipped buttons
- broken layouts
- overflowing text
- unusable tables
- horizontal page overflow

unless a specific component intentionally supports horizontal scrolling.

---

# 54. DESIGN REVIEW RULE

Before considering a page complete, ask:

Is it visually consistent?

Is it too text-heavy?

Can some text become an icon/visual?

Are there unnecessary cards?

Are there unnecessary buttons?

Is the primary CTA obvious?

Is the spacing consistent?

Is the typography consistent?

Is the page visually balanced?

Does it look like Frenzone rather than a generic template?

---

# 55. CODE REVIEW RULE

Before considering code complete:

Check:

- TypeScript
- ESLint
- accessibility
- responsive behavior
- component reuse
- API boundaries
- error handling
- loading states
- empty states
- security
- performance

---

# 56. AGENT BEHAVIOR RULE

The coding agent MUST NOT blindly execute instructions.

It must first understand the existing implementation.

For every significant task:

1. Inspect relevant files.
2. Identify existing architecture.
3. Identify reusable components.
4. Identify affected files.
5. Explain the proposed approach.
6. Implement the smallest correct change.
7. Validate.
8. Report results.

---

# 57. SCOPE CONTROL

If an unrelated problem is discovered:

DO NOT fix it automatically.

Report:

"Unrelated issue discovered: ..."

Continue only if it does not affect the requested task.

If the requested task cannot be safely completed without modifying unrelated architecture:

STOP and explain the dependency.

---

# 58. NO UNNECESSARY REFACTORING

Do not refactor working code simply because you personally prefer another style.

Refactor only when:

- required by the feature
- required for security
- required for maintainability
- required for correctness
- explicitly requested

---

# 59. PRODUCTION QUALITY RULE

Every feature should be considered from:

UX
Security
Performance
Accessibility
Maintainability
Scalability
API integration
Error handling
Responsive design

Do not optimize only for "it works".

---

# 60. FINAL UI PRINCIPLE

The Frenzone website should follow this philosophy:

**Less, but better.**

Strong hierarchy.

Clean spacing.

Consistent components.

Minimal text.

Useful icons.

Purposeful visuals.

Clear actions.

Professional typography.

Controlled colors.

No visual noise.

No unnecessary complexity.

No template-like repetition.

The final product should feel like a **premium modern creator technology platform**, not a generic dashboard template.

---

# FINAL AGENT COMMAND

Before every implementation, remember:

BUILD CONSISTENTLY.

BUILD MINIMALLY.

BUILD ACCESSIBLY.

BUILD SECURELY.

BUILD FOR SCALE.

DO NOT DUPLICATE.

DO NOT OVER-ENGINEER.

DO NOT INVENT BACKEND LOGIC.

DO NOT EXPOSE SECRETS.

DO NOT CREATE TEXT-HEAVY UI.

DO NOT USE RANDOM COLORS.

DO NOT CREATE RANDOM COMPONENT STYLES.

DO NOT BREAK EXISTING FUNCTIONALITY.

DO NOT EXPAND SCOPE WITHOUT APPROVAL.

**ONE FRENZONE. ONE DESIGN SYSTEM. ONE CONSISTENT EXPERIENCE.**