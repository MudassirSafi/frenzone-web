import { apiClient } from "@/lib/api/client";
import type { Session } from "@/types/auth";
export type LoginInput = { email: string; password: string };
export const authService = {
  getSession: () => apiClient.get<Session>("/auth/me"),
  login: (input: LoginInput) => apiClient.post<Session>("/auth/login", input),
  logout: () => apiClient.post<void>("/auth/logout"),
  refreshSession: () => apiClient.post<Session>("/auth/refresh"),
};
