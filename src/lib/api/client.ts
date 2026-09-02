import type { ApiError, ApiResponse } from "./types";
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
async function request<T>(path: string, init?: RequestInit): Promise<T> {
  if (!baseUrl)
    throw { status: 503, message: "The API is not configured." } satisfies ApiError;
  const response = await fetch(`${baseUrl}${path}`, {
    ...init,
    credentials: "include",
    headers: { "Content-Type": "application/json", ...init?.headers },
  });
  if (!response.ok)
    throw {
      status: response.status,
      message: "Something went wrong. Please try again.",
    } satisfies ApiError;
  return ((await response.json()) as ApiResponse<T>).data;
}
export const apiClient = {
  get: <T>(path: string) => request<T>(path),
  post: <T>(path: string, body?: unknown) =>
    request<T>(path, {
      method: "POST",
      body: body === undefined ? undefined : JSON.stringify(body),
    }),
};
