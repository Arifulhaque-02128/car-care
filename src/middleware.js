import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server";

export const middleware = async (req) => {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  
  const isAuthenticated = token?.username || token?.name;
  const isAuthenticatedRoute = req.nextUrl.pathname.startsWith("/checkout");
  
  if (!isAuthenticated && isAuthenticatedRoute) {
    console.log("Can't browse authenticated route.")
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const haveEmail = token?.email;
  const isEmailRestrictedRoute = req.nextUrl.pathname.startsWith("/my-bookings");

  if (!haveEmail && isEmailRestrictedRoute) {
    console.log("Can't browse authenticated route.")
    return NextResponse.redirect(new URL("/", req.url));
  }

  const isAdmin = token?.email === "ariiifhaque@gmail.com" || token?.email === "jsmith@gmail.com" ;
  const isAdminRestrictedRoute = req.nextUrl.pathname.startsWith("/admin/dashboard");

  if (!isAdmin && isAdminRestrictedRoute) {
    console.log("Can't browse authenticated route.")
    return NextResponse.redirect(new URL("/login", req.url));
  }
  
  return NextResponse.next();
}