"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { Suspense, useState, type FormEvent } from "react";
import { Focus, Loader2 } from "lucide-react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/dashboard";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError("Invalid email or password.");
      return;
    }

    router.push(callbackUrl);
    router.refresh();
  }

  return (
    <main className="grid min-h-screen place-items-center px-4 text-white">
      <form onSubmit={handleSubmit} className="glass w-full max-w-md rounded-[2rem] p-8">
        <Link href="/" className="mb-8 flex items-center gap-3 font-semibold">
          <span className="grid size-10 place-items-center rounded-xl bg-blue-500"><Focus className="size-4" /></span>
          Tempo
        </Link>
        <h1 className="text-3xl font-semibold">Welcome back</h1>
        <p className="mt-2 text-slate-400">Sign in to your AI productivity workspace.</p>
        {error && <p className="mt-5 rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">{error}</p>}
        <div className="mt-8 space-y-3">
          <label className="sr-only" htmlFor="email">Email</label>
          <input id="email" value={email} onChange={(event) => setEmail(event.target.value)} className="w-full rounded-2xl border border-white/10 bg-white/7 px-4 py-3 outline-none focus:border-blue-400/60" placeholder="Email" type="email" autoComplete="email" required />
          <label className="sr-only" htmlFor="password">Password</label>
          <input id="password" value={password} onChange={(event) => setPassword(event.target.value)} className="w-full rounded-2xl border border-white/10 bg-white/7 px-4 py-3 outline-none focus:border-blue-400/60" placeholder="Password" type="password" autoComplete="current-password" required />
          <button disabled={loading} className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-500 py-3 text-center font-semibold disabled:cursor-not-allowed disabled:opacity-70" type="submit">
            {loading && <Loader2 className="size-4 animate-spin" />}
            {loading ? "Signing in..." : "Log in"}
          </button>
        </div>
        <p className="mt-6 text-center text-sm text-slate-400">New to Tempo? <Link className="text-blue-300" href="/signup">Create an account</Link></p>
      </form>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
