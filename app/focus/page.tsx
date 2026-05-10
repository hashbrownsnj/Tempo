import { AppShell } from "@/components/app-shell";
import { ProductivityChart } from "@/components/charts";
import { Badge, Card, Progress } from "@/components/ui";

export default function FocusPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-7xl space-y-6"><header><Badge>Focus mode</Badge><h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em]">Distraction-free execution.</h1></header><div className="grid gap-5 lg:grid-cols-[1fr_.8fr]"><Card className="grid min-h-[560px] place-items-center text-center"><div><p className="text-sm uppercase tracking-[0.4em] text-blue-200">Pomodoro</p><p className="mt-6 text-8xl font-semibold tracking-tighter md:text-9xl">25:00</p><p className="mx-auto mt-5 max-w-md text-slate-400">Tempo has silenced notifications and queued your next break. Press F for fullscreen focus.</p><button className="mt-8 rounded-full bg-blue-500 px-8 py-4 font-semibold shadow-[0_0_44px_rgba(59,130,246,.55)]">Start session</button></div></Card><div className="space-y-5"><Card><h2 className="text-xl font-semibold">Streak</h2><p className="mt-4 text-5xl font-semibold">18 days</p><Progress value={88} /></Card><Card><h2 className="text-xl font-semibold">Session tracking</h2><ProductivityChart /></Card></div></div></div>
    </AppShell>
  );
}
