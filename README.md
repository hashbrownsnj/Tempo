# Tempo

Tempo is a modern AI-powered productivity platform built with Next.js 15, React, Tailwind CSS, Framer Motion, MongoDB/Mongoose, NextAuth credentials auth, bcrypt password hashing, Zod validation, and Zustand.

## Features

- Premium dark SaaS landing page with animated dashboard preview, pricing, testimonials, and credits to the Hash Browns coding team and private enterprise team.
- Authentication UI for login, signup, secure credentials sessions, and onboarding-ready account creation.
- Dashboard with quick-add tasks, productivity analytics, upcoming schedule, and focus timer widgets.
- Task management with priorities, tags, due times, drag-and-drop ordering, checklist-ready schema, list view, and Kanban view.
- Calendar UI with day/week/month controls, time blocking, drag-ready task/event cards, and calendar sync affordance.
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

Set `MONGODB_URI`, `NEXTAUTH_SECRET`, and `NEXTAUTH_URL` before enabling live authentication and MongoDB persistence.

## Database

Tempo uses Mongoose models in `lib/models` with MongoDB. For a free hosted database, create a MongoDB Atlas M0 cluster and use its connection string as `MONGODB_URI`.

## Free deployment

Deploy the **Next.js app on Vercel Hobby**, use **MongoDB Atlas M0 Free for the database**, and keep the repo on **GitHub Free** for automatic deploys. See [DEPLOYMENT.md](./DEPLOYMENT.md) for step-by-step setup, environment variables, and free-tier caveats.
