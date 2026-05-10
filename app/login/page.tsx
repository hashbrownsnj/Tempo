import Link from "next/link";
import { Focus } from "lucide-react";

export default function LoginPage() {
  return <AuthFrame mode="login" />;
}

function AuthFrame({ mode }: { mode: "login" | "signup" }) {
  return (
    <main className="grid min-h-screen place-items-center px-4 text-white"><div className="glass w-full max-w-md rounded-[2rem] p-8"><Link href="/" className="mb-8 flex items-center gap-3 font-semibold"><span className="grid size-10 place-items-center rounded-xl bg-blue-500"><Focus className="size-4" /></span>Tempo</Link><h1 className="text-3xl font-semibold">Welcome back</h1><p className="mt-2 text-slate-400">Sign in to your AI productivity workspace.</p><button className="mt-8 w-full rounded-2xl bg-white py-3 font-semibold text-black hover:bg-blue-100">Continue with Google</button><div className="my-6 h-px bg-white/10" /><div className="space-y-3"><input className="w-full rounded-2xl border border-white/10 bg-white/7 px-4 py-3 outline-none focus:border-blue-400/60" placeholder="Email" /><input className="w-full rounded-2xl border border-white/10 bg-white/7 px-4 py-3 outline-none focus:border-blue-400/60" placeholder="Password" type="password" /><Link href="/dashboard" className="block w-full rounded-2xl bg-blue-500 py-3 text-center font-semibold">{mode === "login" ? "Log in" : "Create account"}</Link></div><p className="mt-6 text-center text-sm text-slate-400">New to Tempo? <Link className="text-blue-300" href="/signup">Create an account</Link></p></div></main>
  );
}
