import { NextResponse } from "next/server";

export const config = {
  matcher: "/dashboard/:path*",
  runtime: "experimental-edge", // Changed from 'edge' to 'experimental-edge'
};

export function middleware(request) {
  const authToken = request.cookies.get("auth_token");

  if (!authToken?.value && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}
