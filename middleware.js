// middleware.js
import { NextResponse } from "next/server";

const PIN = "1234"; // change this to your secret PIN

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // allow static files and assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/assets") ||
    pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  // check cookie
  const pinCookie = req.cookies.get("site-pin")?.value;
  if (pinCookie === PIN) {
    return NextResponse.next();
  }

  // allow lock page without cookie
  if (pathname === "/lock") {
    return NextResponse.next();
  }

  // redirect to /lock
  const url = req.nextUrl.clone();
  url.pathname = "/lock";
  return NextResponse.redirect(url);
}
