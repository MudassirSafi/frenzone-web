# Architecture

Frenzone is a Next.js App Router frontend with public marketing, application, authentication, Creator, Agency, referral, and commerce layers.

Presentation components use domain services and never call backend endpoints directly. Creator and Agency remain separate product areas; shared primitives live in `src/components`.
