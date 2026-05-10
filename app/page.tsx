import Link from "next/link";
import { ArrowRight, Brain, Calendar, CheckCircle2, Focus, Sparkles, Timer, Users } from "lucide-react";
import { FadeIn } from "@/components/motion-provider";
import { Badge, Card, Progress } from "@/components/ui";
import { TaskBarChart } from "@/components/charts";

const features = [
  { icon: Brain, title: "AI planning", copy: "Prioritize, break down, and schedule work with an assistant that understands your energy and deadlines." },
  { icon: Calendar, title: "Time blocking", copy: "Drag tasks into beautiful day, week, and month timelines with resizable focus blocks." },
  { icon: Timer, title: "Focus mode", copy: "Pomodoro sessions, streaks, and distraction-free execution with session analytics." },
  { icon: Users, title: "Projects", copy: "Milestones, workspaces, collaboration structure, and progress tracking for teams." },
];

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-5 py-6 text-white md:px-10">
      <div className="absolute left-1/2 top-0 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-2xl">
        <Link href="/" className="flex items-center gap-3 font-semibold"><span className="grid size-9 place-items-center rounded-xl bg-blue-500"><Focus className="size-4" /></span>Tempo</Link>
        <div className="hidden gap-6 text-sm text-slate-300 md:flex"><a href="#features">Features</a><a href="#pricing">Pricing</a><a href="#testimonials">Customers</a></div>
        <Link href="/dashboard" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-blue-100">Launch app</Link>
      </nav>

      <section className="mx-auto grid max-w-7xl items-center gap-14 py-24 lg:grid-cols-[1fr_.95fr] lg:py-32">
        <FadeIn>
          <Badge>Built by Hash Browns coding team + private enterprise team</Badge>
          <h1 className="mt-7 max-w-5xl text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl lg:text-8xl">The AI productivity platform for focused teams.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">Tempo combines tasks, calendar scheduling, focus tools, projects, and an AI assistant into one calm command center for modern work.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/signup" className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-4 font-semibold shadow-[0_0_44px_rgba(59,130,246,.55)] hover:bg-blue-400">Start free <ArrowRight className="size-4 group-hover:translate-x-1" /></Link>
            <Link href="/login" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/7 px-6 py-4 font-semibold text-white hover:bg-white/12">Sign in</Link>
          </div>
        </FadeIn>
        <FadeIn delay={0.15} className="animate-float">
          <Card className="relative overflow-hidden p-4 md:p-6">
            <div className="absolute right-4 top-4 h-32 w-32 rounded-full bg-blue-500/25 blur-3xl" />
            <div className="mb-5 flex items-center justify-between"><div><p className="text-sm text-slate-400">Today</p><h2 className="text-2xl font-semibold">Command center</h2></div><Badge>AI optimized</Badge></div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl bg-white/[0.055] p-4"><p className="text-sm text-slate-400">Focus streak</p><p className="mt-2 text-4xl font-semibold">18 days</p><Progress value={82} /></div>
              <div className="rounded-3xl bg-white/[0.055] p-4"><p className="text-sm text-slate-400">Next best action</p><p className="mt-2 font-medium">Finalize investor update</p><span className="mt-4 inline-flex rounded-full bg-blue-500/15 px-3 py-1 text-xs text-blue-200">90 min deep work</span></div>
            </div>
            <div className="mt-5 rounded-3xl bg-black/30 p-4"><TaskBarChart /></div>
          </Card>
        </FadeIn>
      </section>

      <section id="features" className="mx-auto grid max-w-7xl gap-4 py-16 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => <Card key={feature.title} className="group hover:-translate-y-1 hover:border-blue-400/35"><feature.icon className="mb-6 size-7 text-blue-300" /><h3 className="text-xl font-semibold">{feature.title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{feature.copy}</p></Card>)}
      </section>

      <section id="pricing" className="mx-auto grid max-w-6xl gap-5 py-16 md:grid-cols-3">
        {["Starter", "Pro", "Enterprise"].map((tier, index) => <Card key={tier} className={index === 1 ? "border-blue-400/40 shadow-[0_0_70px_rgba(59,130,246,.18)]" : ""}><h3 className="text-2xl font-semibold">{tier}</h3><p className="mt-4 text-4xl font-semibold">{index === 2 ? "Custom" : `$${index === 0 ? 0 : 16}`}<span className="text-sm text-slate-400"> /seat</span></p><ul className="mt-6 space-y-3 text-sm text-slate-300">{["AI scheduling", "Tasks and projects", "Focus analytics"].map((item) => <li key={item} className="flex gap-2"><CheckCircle2 className="size-4 text-blue-300" />{item}</li>)}</ul></Card>)}
      </section>

      <section id="testimonials" className="mx-auto max-w-5xl py-16 text-center"><Sparkles className="mx-auto mb-5 text-blue-300" /><p className="text-3xl font-semibold tracking-tight md:text-5xl">“Tempo feels like Linear, Notion, and a chief of staff had a beautiful AI-native product baby.”</p><p className="mt-6 text-slate-400">Credits: Hash Browns coding team and private enterprise team.</p></section>
    </main>
  );
}
