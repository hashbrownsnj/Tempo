"use client";

import { Check, GripVertical, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { tasks as initialTasks } from "@/lib/data";
import { Badge, Progress } from "@/components/ui";

export function TaskList() {
  const [items, setItems] = useState(initialTasks);
  const [draggedId, setDraggedId] = useState<string | null>(null);

  function moveTask(targetId: string) {
    if (!draggedId || draggedId === targetId) return;
    const next = [...items];
    const from = next.findIndex((task) => task.id === draggedId);
    const to = next.findIndex((task) => task.id === targetId);
    const [removed] = next.splice(from, 1);
    next.splice(to, 0, removed);
    setItems(next);
  }

  return (
    <div>
      <div className="mb-4 flex gap-3">
        <input className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-white/7 px-4 py-3 outline-none placeholder:text-slate-500 focus:border-blue-400/60" placeholder="Quick-add a task with natural language..." />
        <button className="rounded-2xl bg-blue-500 px-4 py-3 font-semibold shadow-[0_0_24px_rgba(59,130,246,.45)] hover:bg-blue-400" aria-label="Add task"><Plus className="size-5" /></button>
      </div>
      <div className="space-y-3">
        {items.map((task) => (
          <motion.div
            layout
            draggable
            onDragStart={() => setDraggedId(task.id)}
            onDragOver={(event) => event.preventDefault()}
            onDrop={() => moveTask(task.id)}
            onDragEnd={() => setDraggedId(null)}
            key={task.id}
            className="group rounded-3xl border border-white/10 bg-white/[0.045] p-4 hover:border-blue-400/40 hover:bg-blue-500/8"
          >
            <div className="flex items-start gap-4">
              <button className="mt-1 grid size-6 place-items-center rounded-full border border-white/15 text-transparent hover:border-blue-400 hover:bg-blue-500 hover:text-white" aria-label={`Complete ${task.title}`}><Check className="size-4" /></button>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-medium text-white">{task.title}</h3>
                  <Badge className={task.priority === "High" ? "border-blue-300/40 bg-blue-500/20" : ""}>{task.priority}</Badge>
                </div>
                <p className="mt-1 text-sm text-slate-400">{task.project} • due {task.due}</p>
                <div className="mt-3"><Progress value={task.progress} /></div>
                <div className="mt-3 flex flex-wrap gap-2">{task.tags.map((tag) => <span key={tag} className="rounded-full bg-white/7 px-2 py-1 text-xs text-slate-400">#{tag}</span>)}</div>
              </div>
              <span className="cursor-grab rounded-xl p-2 text-slate-600 group-hover:text-slate-300" aria-hidden="true"><GripVertical className="size-5" /></span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
