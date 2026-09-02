"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { User, Building2, LogIn, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("alex.rivera@example.com");
  const [password, setPassword] = useState("••••••••••••");
  const [role, setRole] = useState<"CREATOR" | "AGENCY_OWNER">("CREATOR");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      if (role === "CREATOR") {
        router.push("/creator");
      } else {
        router.push("/agency");
      }
    }, 600);
  };

  const handleQuickSwitch = (targetRole: "CREATOR" | "AGENCY_OWNER") => {
    if (targetRole === "CREATOR") {
      router.push("/creator");
    } else {
      router.push("/agency");
    }
  };

  return (
    <div className="space-y-6">
      {/* Demo Mode Switcher Bar */}
      <div className="rounded-xl border border-brand/20 bg-gradient-to-r from-violet-50 via-indigo-50 to-pink-50 p-4 space-y-3">
        <div className="flex items-center space-x-2 text-xs font-bold text-brand uppercase tracking-wider">
          <Zap className="h-4 w-4 text-brand fill-brand" />
          <span>Demo Impersonation Quick-Switch</span>
        </div>
        <p className="text-xs text-text-secondary">
          Select a role to immediately preview the production static workspace:
        </p>

        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            type="button"
            onClick={() => handleQuickSwitch("CREATOR")}
            className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-lg bg-surface border border-border text-xs font-bold text-text-primary hover:border-brand hover:text-brand transition-colors cursor-pointer shadow-sm"
          >
            <User className="h-4 w-4 text-brand" />
            <span>Creator Hub</span>
          </button>

          <button
            type="button"
            onClick={() => handleQuickSwitch("AGENCY_OWNER")}
            className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-lg bg-surface border border-border text-xs font-bold text-text-primary hover:border-brand hover:text-brand transition-colors cursor-pointer shadow-sm"
          >
            <Building2 className="h-4 w-4 text-brand" />
            <span>Agency Portal</span>
          </button>
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <span className="h-px w-full bg-border" />
        <span className="bg-surface px-3 text-xs text-text-muted font-medium uppercase shrink-0">
          Or Sign In Manually
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-xs font-semibold text-text-secondary">Email Address</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 rounded-lg border border-border bg-surface px-3.5 py-2 text-sm text-text-primary outline-none focus:border-brand"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-text-secondary">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-1 rounded-lg border border-border bg-surface px-3.5 py-2 text-sm text-text-primary outline-none focus:border-brand"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-text-secondary">Target Workspace Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as any)}
            className="w-full mt-1 rounded-lg border border-border bg-surface px-3.5 py-2 text-sm font-medium text-text-primary outline-none focus:border-brand cursor-pointer"
          >
            <option value="CREATOR">Creator Portal (/creator)</option>
            <option value="AGENCY_OWNER">Agency Portal (/agency)</option>
          </select>
        </div>

        <Button type="submit" variant="primary" className="w-full" isLoading={isSubmitting} icon={<LogIn className="h-4 w-4" />}>
          Sign In to Workspace
        </Button>
      </form>
    </div>
  );
}
