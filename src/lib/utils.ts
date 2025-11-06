import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function syncTokenToCookie() {
  // Hanya jalan di client side
  if (typeof window === "undefined") return;

  const token = localStorage.getItem("authToken");
  if (token) {
    // Set cookie dengan token
    document.cookie = `token=${token}; path=/; max-age=86400; SameSite=Lax`;
  }
}

// Di component login/after auth
export function setAuthToken(token: string) {
  localStorage.setItem("authToken", token);
  document.cookie = `token=${token}; path=/; max-age=86400; SameSite=Lax`;
}

export function clearAuthToken() {
  localStorage.removeItem("authToken");
  document.cookie = "token=; path=/; max-age=0";
}