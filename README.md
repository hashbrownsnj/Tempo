# Tempo

Tempo is a modern AI-powered productivity platform built with Next.js 15, React, Tailwind CSS, Framer Motion, Supabase, Prisma, PostgreSQL, and Zustand.

## Features

- Premium dark SaaS landing page with animated dashboard preview, pricing, testimonials, and credits to the Hash Browns coding team and private enterprise team.
- Authentication UI for login, signup, Google OAuth entry points, and onboarding-ready account creation.
- Dashboard with quick-add tasks, productivity analytics, upcoming schedule, and focus timer widgets.
- Task management with priorities, tags, due times, drag-and-drop ordering, checklist-ready schema, list view, and Kanban view.
- Calendar UI with day/week/month controls, time blocking, drag-ready task/event cards, and Google Calendar sync affordance.
- AI command palette, assistant prompts, schedule suggestions, and productivity insight surfaces.
- Focus mode with Pomodoro timer, session tracking, streaks, and fullscreen-ready UX.
- Project workspaces with milestones, progress tracking, and team collaboration structure.
- Settings for themes, notifications, integrations, account controls, and keyboard shortcuts.

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Set `DATABASE_URL`, `NEXT_PUBLIC_SUPABASE_URL`, and `NEXT_PUBLIC_SUPABASE_ANON_KEY` before enabling live Supabase authentication and PostgreSQL persistence.

## Database

```bash
npm run prisma:generate
npx prisma migrate dev
```

## Free deployment

Deploy the app on Vercel Hobby and use Supabase Free for Auth + PostgreSQL. See [DEPLOYMENT.md](./DEPLOYMENT.md) for step-by-step setup, migration commands, OAuth redirect URLs, and free-tier caveats.
