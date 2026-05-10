import { AppShell } from "@/components/app-shell";
import { Badge, Card } from "@/components/ui";
import { calendarEvents } from "@/lib/data";

export default function CalendarPage() {
  const hours = Array.from({ length: 12 }, (_, index) => `${index + 7}:00`);
  return (
    <AppShell>
      <div className="mx-auto max-w-7xl space-y-6"><header className="flex flex-col justify-between gap-4 md:flex-row md:items-center"><div><Badge>Calendar</Badge><h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em]">Time-block the week.</h1></div><button className="rounded-full border border-white/10 bg-white/7 px-5 py-3">Sync Google Calendar</button></header><Card><div className="mb-5 flex gap-2">{["Day", "Week", "Month"].map((view, i) => <button key={view} className={`rounded-full px-4 py-2 text-sm ${i === 1 ? "bg-blue-500 text-white" : "bg-white/7 text-slate-300"}`}>{view}</button>)}</div><div className="grid grid-cols-[70px_1fr] overflow-hidden rounded-3xl border border-white/10"><div className="bg-white/[0.03]">{hours.map((hour) => <div key={hour} className="h-20 border-b border-white/10 p-3 text-xs text-slate-500">{hour}</div>)}</div><div className="relative">{hours.map((hour) => <div key={hour} className="h-20 border-b border-white/10" />)}{calendarEvents.map((event, index) => <div key={event.title} className="absolute w-[42%] rounded-2xl border border-white/15 bg-blue-500/20 p-4 shadow-[0_0_30px_rgba(59,130,246,.2)]" style={{ left: `${(index % 3) * 12 + 5}%`, top: `${index * 118 + 28}px`, height: index === 2 ? 112 : 82 }}><p className="font-medium">{event.title}</p><p className="text-xs text-blue-100/80">{event.time} • resizable</p></div>)}</div></div></Card></div>
    </AppShell>
  );
}
