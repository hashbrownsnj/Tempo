"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState, type FormEvent } from "react";
import { Focus, Loader2 } from "lucide-react";

type FieldErrors = Partial<Record<"name" | "email" | "password", string[]>>;

function passwordClientError(password: string) {
  if (password.length < 8) return "Password must be at least 8 characters.";
  if (!/[A-Z]/.test(password)) return "Password must contain at least one uppercase letter.";
  if (!/[0-9]/.test(password)) return "Password must contain at least one number.";
  return "";
}

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const passwordError = passwordClientError(password);

    if (passwordError) {
      setError(passwordError);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name || undefined, email, password }),
      });

      if (response.status === 409) {
        setError("An account with that email already exists.");
        return;
      }

      if (response.status === 400) {
        const data = (await response.json()) as { errors?: FieldErrors };
        const flattenedErrors = Object.values(data.errors ?? {}).flat().filter(Boolean);
        setError(flattenedErrors[0] ?? "Please check your details and try again.");
        return;
      }

      if (!response.ok) {
        setError("Unable to create account. Please try again.");
        return;
      }

      const result = await signIn("credentials", { email, password, redirect: false });

      if (result?.error) {
        setError("Account created, but sign in failed. Please log in.");
        return;
      }

      router.push("/dashboard");
      router.refresh();
    } catch {
      setError("Unable to create account. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="grid min-h-screen place-items-center px-4 text-white">
      <form onSubmit={handleSubmit} className="glass w-full max-w-md rounded-[2rem] p-8">
        <Link href="/" className="mb-8 flex items-center gap-3 font-semibold">
          <span className="grid size-10 place-items-center rounded-xl bg-blue-500"><Focus className="size-4" /></span>
          Tempo
        </Link>
        <h1 className="text-3xl font-semibold">Create your workspace</h1>
        <p className="mt-2 text-slate-400">Onboard your team in under a minute.</p>
        {error && <p className="mt-5 rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">{error}</p>}
        <div className="mt-8 space-y-3">
          <label className="sr-only" htmlFor="name">Name</label>
          <input id="name" value={name} onChange={(event) => setName(event.target.value)} className="w-full rounded-2xl border border-white/10 bg-white/7 px-4 py-3 outline-none focus:border-blue-400/60" placeholder="Name" autoComplete="name" />
          <label className="sr-only" htmlFor="email">Work email</label>
          <input id="email" value={email} onChange={(event) => setEmail(event.target.value)} className="w-full rounded-2xl border border-white/10 bg-white/7 px-4 py-3 outline-none focus:border-blue-400/60" placeholder="Work email" type="email" autoComplete="email" required />
          <label className="sr-only" htmlFor="password">Password</label>
          <input id="password" value={password} onChange={(event) => setPassword(event.target.value)} className="w-full rounded-2xl border border-white/10 bg-white/7 px-4 py-3 outline-none focus:border-blue-400/60" placeholder="Password" type="password" autoComplete="new-password" required />
          <button disabled={loading} className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-500 py-3 text-center font-semibold disabled:cursor-not-allowed disabled:opacity-70" type="submit">
            {loading && <Loader2 className="size-4 animate-spin" />}
            {loading ? "Creating account..." : "Start onboarding"}
          </button>
        </div>
        <p className="mt-6 text-center text-sm text-slate-400">Already have an account? <Link className="text-blue-300" href="/login">Log in</Link></p>
      </form>
    </main>
  );
}
