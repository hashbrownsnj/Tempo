# Deploy Tempo for free

This guide gives you the cheapest practical deployment path for Tempo: **Vercel Hobby for the Next.js app** + **Supabase Free for Auth/Postgres** + **Prisma migrations from your machine or GitHub Actions**.

> Free tiers change over time and have limits. This setup is best for prototypes, demos, portfolios, student projects, and early validation. For commercial production or higher traffic, review each provider's latest pricing and terms.

## Recommended free stack

| Layer | Free provider | Why |
| --- | --- | --- |
| Web app / SSR / API routes | Vercel Hobby | First-class Next.js deployment, Git-based CI/CD, preview URLs, and no server maintenance. |
| Auth + PostgreSQL | Supabase Free | Includes hosted Postgres, Auth, OAuth providers, storage, and dashboard tooling. |
| ORM | Prisma | Runs inside the Next.js app and against Supabase Postgres; no separate paid service required. |
| Source + optional CI | GitHub Free / GitHub Actions | Good for hosting the repo and optionally running checks/migrations. |

## 1. Prepare the repository

```bash
npm install
cp .env.example .env.local
npm run typecheck
npm run build
```

If install fails because of a private registry or organization policy, reset npm to the public registry and retry:

```bash
npm config set registry https://registry.npmjs.org/
npm install
```

## 2. Create the free Supabase backend

1. Go to [supabase.com](https://supabase.com) and create a free project.
2. Open **Project Settings → Database** and copy the pooled Postgres connection string.
3. Open **Project Settings → API** and copy:
   - Project URL
   - anon public key
4. Add these values locally:

```bash
DATABASE_URL="postgresql://..."
NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
SUPABASE_SERVICE_ROLE_KEY="only-for-secure-server-side-jobs-if-needed"
```

5. Generate Prisma and apply the schema:

```bash
npm run prisma:generate
npx prisma migrate dev --name init
```

For production deployments, apply migrations with:

```bash
npx prisma migrate deploy
```

## 3. Enable Google OAuth in Supabase

1. In Supabase, open **Authentication → Providers → Google**.
2. Enable Google and paste your Google OAuth client ID and secret.
3. Add these redirect URLs after you deploy to Vercel:

```text
https://YOUR_VERCEL_DOMAIN.vercel.app/auth/callback
http://localhost:3000/auth/callback
```

The current app contains the login/signup UI and Supabase client helper. If you want fully working OAuth callbacks next, add a Next.js route handler for `/auth/callback` that exchanges the code for a Supabase session.

## 4. Deploy the Next.js app on Vercel for free

### Option A: Vercel dashboard

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com), choose **Add New → Project**, and import the GitHub repo.
3. Keep defaults:
   - Framework preset: **Next.js**
   - Build command: `npm run build`
   - Install command: `npm install`
4. Add environment variables in **Project Settings → Environment Variables**:

```bash
DATABASE_URL
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
```

5. Deploy.

### Option B: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
vercel env add DATABASE_URL production
vercel env add NEXT_PUBLIC_SUPABASE_URL production
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production
vercel --prod
```

## 5. Run database migrations for production

Vercel should not run `prisma migrate dev` during every build. Use one of these free options instead:

### Simple local migration

```bash
DATABASE_URL="your-production-supabase-url" npx prisma migrate deploy
```

### Optional GitHub Actions migration

Use GitHub Actions if the repository is public or your account has enough free private-repo minutes. Store `DATABASE_URL` as a GitHub secret and run `npx prisma migrate deploy` before a release.

## 6. Free-tier caveats

- **Vercel Hobby** is excellent for demos and non-commercial/hobby projects, but review Vercel's terms before using it for a revenue-generating business.
- **Supabase Free** can pause inactive projects and has database/storage/bandwidth limits.
- **No free tier is unlimited**. Add usage monitoring before inviting real users.
- Keep `SUPABASE_SERVICE_ROLE_KEY` server-only. Never expose it in browser code.
- Use the `NEXT_PUBLIC_` prefix only for values that are safe to ship to the client.

## Best answer: where should Tempo deploy?

For a zero-dollar launch, deploy **Tempo on Vercel Hobby** and use **Supabase Free** for Auth + PostgreSQL. This is the fastest, cleanest, and most compatible free path for the current Next.js 15 + Supabase + Prisma architecture.
