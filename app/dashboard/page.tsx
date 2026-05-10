import { AppShell } from "@/components/app-shell";
import { ProductivityChart, TaskBarChart } from "@/components/charts";
import { TaskList } from "@/components/task-list";
import { Badge, Card, Progress } from "@/components/ui";
import { calendarEvents } from "@/lib/data";

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-7xl space-y-6">
        <header className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><Badge>Sunday planning mode</Badge><h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">Good morning, Alex.</h1><p className="mt-3 text-slate-400">AI has arranged your day around energy, deadlines, and meeting load.</p></div><button className="rounded-full bg-blue-500 px-5 py-3 font-semibold shadow-[0_0_36px_rgba(59,130,246,.45)]">Start focus sprint</button></header>
        <div className="grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
          <Card><div className="mb-4 flex items-center justify-between"><h2 className="text-xl font-semibold">Today&apos;s tasks</h2><Badge>Drag to reorder</Badge></div><TaskList /></Card>
          <div className="space-y-5"><Card><h2 className="text-xl font-semibold">Productivity analytics</h2><ProductivityChart /></Card><Card><h2 className="text-xl font-semibold">Focus timer</h2><p className="mt-4 text-6xl font-semibold tracking-tighter">25:00</p><Progress value={68} /><button className="mt-5 w-full rounded-2xl bg-white py-3 font-semibold text-black hover:bg-blue-100">Begin session</button></Card></div>
        </div>
        <div className="grid gap-5 lg:grid-cols-3"><Card className="lg:col-span-2"><h2 className="mb-4 text-xl font-semibold">Upcoming schedule</h2><div className="space-y-3">{calendarEvents.map((event) => <div key={event.title} className="flex items-center gap-4 rounded-2xl bg-white/[0.045] p-4"><span className="font-mono text-sm text-slate-400">{event.time}</span><span className={`h-10 w-1 rounded-full ${event.color}`} /><span>{event.title}</span></div>)}</div></Card><Card><h2 className="text-xl font-semibold">Completed tasks</h2><TaskBarChart /></Card></div>
      </div>
    </AppShell>
  );
}
