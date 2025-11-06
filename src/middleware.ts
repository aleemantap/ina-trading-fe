// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  console.log("=== MIDDLEWARE DEBUG ===");
  console.log("Path:", request.nextUrl.pathname);
  console.log("Token from cookie:", token ? "EXISTS" : "NULL");
  console.log("All cookies:", request.cookies.getAll());
  console.log("=== END DEBUG ===");

  // Protect dashboard routes
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    if (!token) {
    
      return NextResponse.redirect(new URL("/login", request.url));
    }
    console.log(" Token found, allowing access to dashboard");
  }

  //  Redirect if already authenticated
  if (request.nextUrl.pathname.startsWith("/login")) {
    if (token) {
      console.log("Already authenticated, redirecting to dashboard");
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    console.log(" No token, showing login page");
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};
