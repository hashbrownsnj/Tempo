"use client";

import { Area, AreaChart, Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { analytics } from "@/lib/data";

export function ProductivityChart() {
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={analytics} margin={{ left: 0, right: 0, top: 20, bottom: 0 }}>
          <defs>
            <linearGradient id="focus" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.7} />
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
          <Tooltip contentStyle={{ background: "#020617", border: "1px solid rgba(148,163,184,.2)", borderRadius: 16, color: "white" }} />
          <Area type="monotone" dataKey="focus" stroke="#60A5FA" strokeWidth={3} fill="url(#focus)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function TaskBarChart() {
  return (
    <div className="h-40 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={analytics}>
          <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
          <Tooltip cursor={{ fill: "rgba(59,130,246,.08)" }} contentStyle={{ background: "#020617", border: "1px solid rgba(148,163,184,.2)", borderRadius: 16, color: "white" }} />
          <Bar dataKey="tasks" radius={[10, 10, 0, 0]} fill="#3B82F6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
