import { AppShell } from "@/components/app-shell";
import { Badge, Card, Progress } from "@/components/ui";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-7xl space-y-6"><header><Badge>Projects</Badge><h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em]">Workspaces with momentum.</h1><p className="mt-3 text-slate-400">Track milestones, team velocity, and cross-functional execution.</p></header><div className="grid gap-5 md:grid-cols-3">{projects.map((project) => <Card key={project.name} className="hover:-translate-y-1 hover:border-blue-400/35"><div className="mb-10 flex items-start justify-between"><div><h2 className="text-2xl font-semibold">{project.name}</h2><p className="mt-2 text-sm text-slate-400">{project.description}</p></div><Badge>{project.members} people</Badge></div><Progress value={project.progress} /><div className="mt-5 flex items-center justify-between text-sm text-slate-400"><span>{project.progress}% complete</span><span>{project.milestone}</span></div></Card>)}</div><Card><h2 className="mb-4 text-xl font-semibold">Milestone timeline</h2><div className="grid gap-3 md:grid-cols-4">{["Research", "Build", "Pilot", "Launch"].map((step, index) => <div key={step} className="rounded-3xl bg-white/[0.045] p-5"><span className="text-sm text-blue-200">0{index + 1}</span><h3 className="mt-4 font-semibold">{step}</h3><p className="mt-2 text-sm text-slate-500">AI-generated project plan and accountability checkpoint.</p></div>)}</div></Card></div>
    </AppShell>
  );
}
