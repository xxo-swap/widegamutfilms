"use client";

import { useState, useEffect, FormEvent } from "react";
import { verifyPortfolioPassword, checkAccessStatus } from "@/app/actions/auth";

interface PasswordGateProps {
  children: React.ReactNode;
}

export default function PasswordGate({ children }: PasswordGateProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if the user already has a valid session cookie
    checkAccessStatus().then((hasAccess) => {
      setIsAuthenticated(hasAccess);
    });
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await verifyPortfolioPassword(password);
    if (res.success) {
      setIsAuthenticated(true);
    } else {
      setError(res.error || "Access denied.");
    }
    setLoading(false);
  };

  // Avoid flash while reading the cookie
  if (isAuthenticated === null) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-neutral-400 border-t-transparent" />
      </div>
    );
  }

  // Render the protected content once verified
  if (isAuthenticated) {
    return <>{children}</>;
  }

  // Render the lock screen
  return (
    <div className="mx-auto my-12 flex max-w-sm flex-col items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900/60 p-8 text-center backdrop-blur-md">
      <div className="mb-4 rounded-full bg-neutral-800 p-3 text-neutral-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      </div>

      <h3 className="text-xl font-semibold text-white">Protected Work</h3>
      <p className="mt-1 text-sm text-neutral-400">
        This portfolio section is password-protected.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 w-full space-y-4">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter access code"
          disabled={loading}
          className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2 text-sm text-white placeholder-neutral-500 transition focus:border-neutral-400 focus:outline-none"
        />

        {error && <p className="text-xs text-rose-400">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-neutral-200 disabled:opacity-50"
        >
          {loading ? "Checking..." : "Unlock"}
        </button>
      </form>
    </div>
  );
}