import { apiClient } from "@/lib/api/client";

export type ReferralCodeResponse = {
  success: boolean;
  creatorId?: string;
  referralCode: string;
  referralUrl: string;
  referralLink: string;
  displayName?: string;
  username?: string;
  avatarUrl?: string;
  trackingEnabled?: boolean;
};

export type ReferralStatsResponse = {
  success: boolean;
  stats: {
    totalReferred: number;
    qualifiedCount: number;
    totalScans?: number;
    conversionRate: string;
    totalReferralEarningsUSD?: string;
    referralTier?: string;
    tierDetail?: string;
    trend?: {
      value: string;
      positive: boolean;
    };
  };
  recentReferrals: any[];
};

export type TrackScanResponse = {
  success: boolean;
  valid: boolean;
  referralCode: string;
  creator?: {
    id: string;
    name: string;
    username: string;
  };
  recorded: boolean;
  isSelfScan?: boolean;
};

export const referralService = {
  async getCode(): Promise<ReferralCodeResponse> {
    return apiClient.get<ReferralCodeResponse>("/referral/code");
  },

  async getStats(): Promise<ReferralStatsResponse> {
    return apiClient.get<ReferralStatsResponse>("/referral/stats");
  },

  async trackScan(referralCode: string): Promise<TrackScanResponse> {
    try {
      return await apiClient.post<TrackScanResponse>("/referral/track-scan", {
        referralCode,
      });
    } catch (err) {
      console.warn("Non-blocking referral scan tracking failure:", err);
      return { success: false, valid: false, referralCode, recorded: false };
    }
  },

  async getContext(referralCode: string) {
    const origin = typeof window !== "undefined" ? window.location.origin : (process.env.NEXT_PUBLIC_APP_URL || "https://frenzone.live");
    return {
      code: referralCode,
      shareUrl: `${origin}/signup?ref=${encodeURIComponent(referralCode)}`,
    };
  },

  async recordClick(referralCode: string) {
    return this.trackScan(referralCode);
  },
};
