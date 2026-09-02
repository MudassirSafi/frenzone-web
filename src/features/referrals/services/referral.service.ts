import { apiClient } from "@/lib/api/client";
import type { ReferralContext } from "../types/referral";

export const referralService = {
  getContext(referralCode: string) {
    return apiClient.get<ReferralContext>(
      `/referrals/${encodeURIComponent(referralCode)}`,
    );
  },
  recordClick(referralCode: string) {
    return apiClient.post<void>(`/referrals/${encodeURIComponent(referralCode)}/click`);
  },
};
