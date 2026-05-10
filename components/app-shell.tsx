"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, CheckSquare, Command, Focus, Home, Plus, Settings, Sparkles, Timer, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useTempoStore } from "@/store/use-tempo-store";

const icons = { Dashboard: Home, Tasks: CheckSquare, Calendar: CalendarDays, Projects: Users, Focus: Timer, Settings };

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { commandOpen, toggleCommand, setCommandOpen } = useTempoStore();

  return (
    <div className="min-h-screen bg-black/20 text-white">
      <div className="pointer-events-none fixed inset-0 grid-mask bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <aside className="fixed left-0 top-0 z-30 hidden h-screen w-72 border-r border-white/10 bg-black/45 p-5 backdrop-blur-2xl lg:block">
        <Link href="/" className="mb-9 flex items-center gap-3 rounded-2xl px-2 py-3">
          <span className="grid size-11 place-items-center rounded-2xl bg-blue-500 shadow-[0_0_30px_rgba(59,130,246,.65)]"><Focus className="size-5" /></span>
          <span><strong className="block text-lg">Tempo</strong><span className="text-xs text-slate-400">AI productivity OS</span></span>
        </Link>
        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = icons[item.label as keyof typeof icons];
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className={cn("group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-slate-400 hover:bg-white/7 hover:text-white", active && "bg-blue-500/15 text-white ring-1 ring-blue-400/20")}>
                <Icon className="size-4" />
                {item.label}
                {active && <motion.span layoutId="nav-dot" className="ml-auto size-2 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(59,130,246,.9)]" />}
              </Link>
            );
          })}
        </nav>
        <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-blue-400/20 bg-blue-500/10 p-4">
          <Sparkles className="mb-3 size-5 text-blue-300" />
          <p className="text-sm font-medium">AI recommends a 90-minute deep work block before meetings.</p>
          <button className="mt-4 w-full rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-blue-100">Apply plan</button>
        </div>
      </aside>
      <main className="relative z-10 min-h-screen px-4 pb-28 pt-4 lg:ml-72 lg:px-8 lg:py-8">{children}</main>
      <div className="fixed bottom-4 left-4 right-4 z-40 flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-black/80 p-2 backdrop-blur-2xl lg:hidden">
        {navItems.slice(0, 5).map((item) => <Link key={item.href} href={item.href} className="rounded-2xl px-3 py-2 text-xs text-slate-300 hover:bg-white/10">{item.label}</Link>)}
      </div>
      <button onClick={toggleCommand} className="fixed bottom-6 right-6 z-50 grid size-14 place-items-center rounded-full bg-blue-500 text-white shadow-[0_0_42px_rgba(59,130,246,.75)] hover:scale-105" aria-label="Open command palette"><Plus /></button>
      <button onClick={toggleCommand} className="fixed right-6 top-6 z-40 hidden items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-slate-300 backdrop-blur-xl hover:text-white md:flex"><Command className="size-4" /> Cmd K</button>
      <AnimatePresence>
        {commandOpen && (
          <motion.div className="fixed inset-0 z-[60] grid place-items-start bg-black/70 px-4 pt-24 backdrop-blur-xl md:place-items-center md:pt-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setCommandOpen(false)}>
            <motion.div initial={{ opacity: 0, y: 24, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: .98 }} onClick={(event) => event.stopPropagation()} className="glass w-full max-w-2xl rounded-[2rem] p-4">
              <input autoFocus placeholder="Ask AI, create a task, jump anywhere..." className="w-full rounded-2xl border border-white/10 bg-white/7 px-5 py-4 text-lg outline-none placeholder:text-slate-500 focus:border-blue-400/60" />
              <div className="mt-4 grid gap-2 text-sm text-slate-300">
                {["What should I work on now?", "Create task from selected text", "Schedule deep work tomorrow", "Open focus mode"].map((action) => <button key={action} className="rounded-2xl px-4 py-3 text-left hover:bg-blue-500/15">{action}</button>)}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
