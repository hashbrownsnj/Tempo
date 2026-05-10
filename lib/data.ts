export const accent = "#3B82F6";

export const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/tasks", label: "Tasks" },
  { href: "/calendar", label: "Calendar" },
  { href: "/projects", label: "Projects" },
  { href: "/focus", label: "Focus" },
  { href: "/settings", label: "Settings" },
];

export const tasks = [
  { id: "t1", title: "Finalize investor update", project: "Tempo OS", priority: "High", due: "9:30 AM", progress: 82, tags: ["writing", "board"] },
  { id: "t2", title: "Review AI schedule suggestions", project: "Automation", priority: "Medium", due: "11:00 AM", progress: 45, tags: ["ai", "planning"] },
  { id: "t3", title: "Design onboarding checklist", project: "Activation", priority: "High", due: "2:00 PM", progress: 62, tags: ["design", "growth"] },
  { id: "t4", title: "Sync with private enterprise team", project: "Enterprise", priority: "Low", due: "4:30 PM", progress: 20, tags: ["team", "sales"] },
];

export const calendarEvents = [
  { time: "08:30", title: "Deep work sprint", color: "bg-blue-500", span: "h-24" },
  { time: "11:00", title: "Product standup", color: "bg-cyan-400", span: "h-16" },
  { time: "13:30", title: "Time-block: roadmap", color: "bg-indigo-500", span: "h-28" },
  { time: "16:00", title: "Inbox zero + planning", color: "bg-sky-400", span: "h-20" },
];

export const analytics = [
  { day: "Mon", focus: 3.8, tasks: 9 },
  { day: "Tue", focus: 4.4, tasks: 12 },
  { day: "Wed", focus: 2.9, tasks: 7 },
  { day: "Thu", focus: 5.2, tasks: 15 },
  { day: "Fri", focus: 4.8, tasks: 13 },
  { day: "Sat", focus: 2.2, tasks: 5 },
  { day: "Sun", focus: 3.1, tasks: 8 },
];

export const projects = [
  { name: "Tempo OS", description: "Unified productivity command center", progress: 78, members: 8, milestone: "Public beta" },
  { name: "Enterprise pilots", description: "Private enterprise team collaboration", progress: 54, members: 12, milestone: "SOC2 readiness" },
  { name: "AI orchestration", description: "Prioritization and scheduling engine", progress: 66, members: 5, milestone: "Suggestion quality" },
];
