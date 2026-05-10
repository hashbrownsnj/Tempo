import { AppShell } from "@/components/app-shell";
import { Badge, Card } from "@/components/ui";

const settings = ["Theme customization", "Notifications", "Account settings", "Integrations", "Keyboard shortcuts", "Data export"];

export default function SettingsPage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-5xl space-y-6"><header><Badge>Settings</Badge><h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em]">Tune your workspace.</h1></header><Card><div className="divide-y divide-white/10">{settings.map((item) => <div key={item} className="flex items-center justify-between py-5"><div><h2 className="font-medium">{item}</h2><p className="mt-1 text-sm text-slate-500">Configure Tempo for your team workflow.</p></div><button className="rounded-full border border-white/10 bg-white/7 px-4 py-2 text-sm hover:bg-white/12">Manage</button></div>)}</div></Card><Card><h2 className="text-xl font-semibold">Integrations</h2><div className="mt-5 grid gap-3 md:grid-cols-3">{["Google Calendar", "Slack", "Supabase"].map((name) => <button key={name} className="rounded-3xl border border-white/10 bg-white/[0.045] p-5 text-left hover:border-blue-400/40"><span className="font-medium">{name}</span><p className="mt-2 text-sm text-slate-500">Connected UI ready</p></button>)}</div></Card></div>
    </AppShell>
  );
}
