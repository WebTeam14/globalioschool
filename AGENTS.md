You are helping build an internal ERP/admin panel for Global IoT School, a Mumbai edtech (AI, IoT, Cybersecurity and SAP certification courses, degree programs, placement cell, college consultancy; branches: CBD Belapur and Kandivali West).
 
STACK
Monorepo. apps/web = Next.js App Router + TypeScript + Tailwind + shadcn/ui + TanStack Query + React Hook Form + Zod. apps/api = Node + Express + TypeScript + Mongoose + MongoDB. packages/types = shared types and zod schemas.
 
ARCHITECTURE RULES
- Modular monolith. Each API module has routes, controller, service, model, zod schema. Controllers stay thin; business logic lives in services.
- All routes under /api/v1. One error shape: { code, message, details }.
- Permissions are strings like leads:read. Authorization is enforced on the server: authenticate -> authorize(permission) -> branch/ownership scope -> validate(zod) -> controller. The UI hides things for UX only.
- Roles: super_admin, branch_manager, counsellor, accounts, placement, trainer.
- Soft delete for business records. Audit log on every write. Never return passwordHash. Money is stored as integer paise, never floats.
- No secrets in code; use env vars. Never read, print or commit .env files. Never use a production database connection.
 
CODE QUALITY
- Strict TypeScript, no any. ESLint + Prettier. Tests with Vitest + supertest.
- Small, focused commits. Do not refactor unrelated code.
- Match the existing patterns in the repo before inventing new ones.
 
WORKING AGREEMENT (EVERY TASK)
1. Before coding, restate the plan in 5 bullets and list the files you will create or change. Wait for approval on large or risky changes.
2. Implement only what the task asks. If something is ambiguous, state your assumption instead of expanding scope.
3. Run lint, typecheck and tests. Fix failures before reporting.
4. After coding, list what I should test manually, and anything you skipped.
5. Ask before running destructive commands (deleting files, dropping databases, force pushes).
 
UI DIRECTION
Dark teal sidebar (208px) on a light workspace, one teal accent (#0F766E), IBM Plex Sans. Sidebar: Dashboard, Leads, Students, Courses, Fees, Placement, Consultancy, Reports, Users and roles. Hide nav items the user cannot access; forbidden URLs show a 403 page. Real buttons, labelled inputs, 4.5:1 text contrast.
