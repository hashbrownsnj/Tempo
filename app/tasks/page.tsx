import { AppShell } from "@/components/app-shell";
import { TaskList } from "@/components/task-list";
import { Badge, Card, Progress } from "@/components/ui";

const lanes = ["Backlog", "In progress", "Review", "Done"];

export default function TasksPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-7xl space-y-6"><header><Badge>Tasks</Badge><h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em]">Plan, prioritize, execute.</h1></header><div className="grid gap-5 xl:grid-cols-[.85fr_1.15fr]"><Card><h2 className="mb-4 text-xl font-semibold">List view</h2><TaskList /></Card><Card><h2 className="mb-4 text-xl font-semibold">Kanban board</h2><div className="grid gap-3 md:grid-cols-4">{lanes.map((lane, index) => <div key={lane} className="min-h-96 rounded-3xl border border-white/10 bg-black/25 p-3"><h3 className="mb-3 text-sm font-medium text-slate-300">{lane}</h3>{[0, 1].map((card) => <div key={card} className="mb-3 rounded-2xl bg-white/[0.06] p-3"><p className="text-sm font-medium">{lane} task {card + 1}</p><p className="mt-2 text-xs text-slate-500">Recurring • checklist • due soon</p><div className="mt-3"><Progress value={(index + card + 2) * 15} /></div></div>)}</div>)}</div></Card></div></div>
    </AppShell>
  );
}
