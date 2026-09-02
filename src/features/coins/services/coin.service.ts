import { apiClient } from "@/lib/api/client";
import type { CoinOrder, CoinPackage } from "../types/coin";

export const coinService = {
  getPackages() {
    return apiClient.get<CoinPackage[]>("/coins/packages");
  },
  createOrder(packageId: string) {
    return apiClient.post<CoinOrder>("/coins/orders", { packageId });
  },
  beginCheckout(orderId: string) {
    return apiClient.post<{ checkoutUrl: string }>(`/coins/orders/${orderId}/checkout`);
  },
};
