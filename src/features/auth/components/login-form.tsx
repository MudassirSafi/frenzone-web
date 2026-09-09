"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { LogIn, Eye, EyeOff, ShieldCheck, Video, Building2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GoogleIcon } from "@/components/ui/google-icon";
import { authService } from "@/features/auth/services/auth.service";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [targetPortal, setTargetPortal] = useState<"CREATOR" | "AGENCY">("CREATOR");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleSubmitting, setIsGoogleSubmitting] = useState(false);
  const [isDemoSubmitting, setIsDemoSubmitting] = useState<"CREATOR" | "AGENCY" | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>();

  const handleDemoQuickSwitch = async (role: "CREATOR" | "AGENCY") => {
    setIsDemoSubmitting(role);
    setErrorMsg(undefined);

    try {
      const res = await authService.loginDemo(role);
      if (res.error) {
        setErrorMsg(res.error);
        return;
      }

      if (role === "CREATOR") {
        router.push("/creator");
      } else {
        router.push("/agency");
      }
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to initialize demo session.");
    } finally {
      setIsDemoSubmitting(null);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const portal = params.get("portal");
      if (portal && portal.toUpperCase() === "AGENCY") {
        setTargetPortal("AGENCY");
      }
    }
  }, []);

  const handlePortalRedirect = (user: any) => {
    if (targetPortal === "AGENCY") {
      if (user.isAgencyMember || user.role?.startsWith("AGENCY_")) {
        router.push("/agency");
      } else {
        // User intended to log in to Agency portal but hasn't created their agency yet.
        // Seamlessly route to Agency Onboarding to complete agency profile.
        router.push("/agency-apply");
      }
    } else {
      // Target is CREATOR
      if (user.isAgencyMember && !user.isCreator && user.creatorStatus !== "approved") {
        setErrorMsg("Access denied. Your account is registered strictly as an Agency. Please select the Agency Portal.");
        return;
      }
      if (user.isCreator || user.creatorStatus === "approved" || user.creatorStatus === "pending") {
        router.push("/creator");
      } else {
        // Standard registered user: route to Creator apply page to initiate onboarding
        router.push("/creator-apply");
      }
    }
  };

  const handleGoogleSignIn = async () => {
    setIsGoogleSubmitting(true);
    setErrorMsg(undefined);

    try {
      const res = await authService.loginWithGoogle(targetPortal);
      if (res.error) {
        setErrorMsg(res.error);
        return;
      }

      const session = await authService.getSession();
      handlePortalRedirect(session.user);
    } catch (err: any) {
      setErrorMsg(err.message || "Google sign-in failed. Please try again.");
    } finally {
      setIsGoogleSubmitting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(undefined);

    try {
      // 100% Backend Authoritative Authentication API Call
      const res = await authService.login({
        email: email.trim().toLowerCase(),
        password,
      });

      if (res.error) {
        setErrorMsg(res.error);
        return;
      }

      // Authoritative Role Resolution from backend session
      const session = await authService.getSession();
      handlePortalRedirect(session.user);
    } catch (err: any) {
      setErrorMsg(err.message || "Invalid credentials. Please check your email and password.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Demo Impersonation Quick-Switch Bar */}
      <div className="rounded-2xl border border-brand/20 bg-gradient-to-r from-violet-50 via-indigo-50 to-pink-50 p-4 space-y-3 shadow-sm">
        <div className="flex items-center space-x-2 text-xs font-bold text-brand uppercase tracking-wider">
          <Zap className="h-4 w-4 text-brand fill-brand shrink-0" />
          <span>Demo Impersonation Quick-Switch</span>
        </div>
        <p className="text-xs text-text-secondary leading-relaxed">
          Instantly test fully authenticated production workspaces with real database records in 1 click:
        </p>

        <div className="grid grid-cols-2 gap-2 pt-0.5">
          <button
            type="button"
            onClick={() => handleDemoQuickSwitch("CREATOR")}
            disabled={isDemoSubmitting !== null || isSubmitting || isGoogleSubmitting}
            className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl bg-surface border border-border text-xs font-bold text-text-primary hover:border-brand hover:text-brand transition-all cursor-pointer shadow-sm hover:shadow active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isDemoSubmitting === "CREATOR" ? (
              <div className="h-3.5 w-3.5 border-2 border-brand border-t-transparent rounded-full animate-spin" />
            ) : (
              <Video className="h-4 w-4 text-brand shrink-0" />
            )}
            <span>{isDemoSubmitting === "CREATOR" ? "Signing In..." : "Creator Hub"}</span>
          </button>

          <button
            type="button"
            onClick={() => handleDemoQuickSwitch("AGENCY")}
            disabled={isDemoSubmitting !== null || isSubmitting || isGoogleSubmitting}
            className="flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl bg-surface border border-border text-xs font-bold text-text-primary hover:border-brand hover:text-brand transition-all cursor-pointer shadow-sm hover:shadow active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isDemoSubmitting === "AGENCY" ? (
              <div className="h-3.5 w-3.5 border-2 border-brand border-t-transparent rounded-full animate-spin" />
            ) : (
              <Building2 className="h-4 w-4 text-brand shrink-0" />
            )}
            <span>{isDemoSubmitting === "AGENCY" ? "Signing In..." : "Agency Portal"}</span>
          </button>
        </div>
      </div>

      <div className="relative flex items-center justify-center my-1">
        <div className="border-t border-border w-full" />
        <span className="bg-surface px-3 text-[11px] font-semibold uppercase tracking-wider text-text-muted absolute">
          Or sign in manually
        </span>
      </div>

      <div className="space-y-4">
        {errorMsg ? (
          <div className="rounded-lg bg-red-50 p-3.5 border border-red-200 text-xs text-danger font-semibold">
            {errorMsg}
          </div>
        ) : null}

        <div>
          <label className="text-xs font-semibold text-text-secondary block mb-1.5">
            Select Destination Workspace
          </label>
          <div className="grid grid-cols-2 gap-2 p-1 bg-surface-muted rounded-xl border border-border">
            <button
              type="button"
              onClick={() => setTargetPortal("CREATOR")}
              className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center space-x-1.5 cursor-pointer ${
                targetPortal === "CREATOR"
                  ? "bg-brand text-white shadow-sm"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              <Video className="h-3.5 w-3.5" />
              <span>Creator Portal</span>
            </button>
            <button
              type="button"
              onClick={() => setTargetPortal("AGENCY")}
              className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center space-x-1.5 cursor-pointer ${
                targetPortal === "AGENCY"
                  ? "bg-brand text-white shadow-sm"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              <Building2 className="h-3.5 w-3.5" />
              <span>Agency Portal</span>
            </button>
          </div>
        </div>

        {/* Google Authentication Button */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={isGoogleSubmitting || isSubmitting}
          className="w-full flex items-center justify-center space-x-2.5 py-2.5 px-4 rounded-xl border border-border bg-surface hover:bg-surface-muted active:scale-[0.99] text-sm font-semibold text-text-primary transition-all shadow-sm hover:shadow cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isGoogleSubmitting ? (
            <div className="h-4 w-4 border-2 border-brand border-t-transparent rounded-full animate-spin" />
          ) : (
            <GoogleIcon className="h-4 w-4 shrink-0" />
          )}
          <span>{isGoogleSubmitting ? "Signing in with Google..." : "Continue with Google"}</span>
        </button>

        {/* Divider */}
        <div className="relative flex items-center justify-center my-2">
          <div className="border-t border-border w-full" />
          <span className="bg-surface px-3 text-[11px] font-semibold uppercase tracking-wider text-text-muted absolute">
            Or continue with email
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
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-text-secondary">Password</label>
          <div className="relative mt-1 flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-border bg-surface px-3.5 py-2 pr-10 text-sm text-text-primary outline-none focus:border-brand"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowPassword((prev) => !prev);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors cursor-pointer p-1.5 z-10 flex items-center justify-center"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4 text-brand" />
              ) : (
                <Eye className="h-4 w-4 text-text-muted hover:text-text-primary" />
              )}
            </button>
          </div>
        </div>

        <Button type="submit" variant="primary" className="w-full" isLoading={isSubmitting} icon={<LogIn className="h-4 w-4" />}>
          Sign In to Workspace
        </Button>

        <div className="text-center pt-2">
          <p className="text-xs text-text-muted">
            Don't have an account yet?{" "}
            <Link href="/signup" className="text-brand font-bold hover:underline">
              Create a Frenzone Account
            </Link>
          </p>
        </div>
      </form>
      </div>
    </div>
  );
}
