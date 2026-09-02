# API Contracts

Future Node.js communication is centralized in `src/lib/api` and feature service modules. Components consume frontend domain models, not raw response shapes. The frontend never directly connects to a database or authoritatively processes money, access, payments, or referrals.
