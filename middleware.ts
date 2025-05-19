import { NextRequest, NextResponse } from "next/server";
import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { getToken } from "next-auth/jwt";

const { auth } = NextAuth(authConfig);

const PUBLIC_ROUTES = ['/signin', '/signup'];

export const middleware = async (req: NextRequest) => {
   const { nextUrl } = req;
   const session = await auth(); // Get session
   const isAuthenticated = !!session?.user;
   const path = req.nextUrl.pathname;

   const isApiRoute = path.startsWith('/api');
   const isAuthRoute = path.startsWith('/api/auth/');
   const isPublicRoute = PUBLIC_ROUTES.includes(path); // Use includes for exact matches
   const isDashboardRoute = path.startsWith('/dashboard');

   const token = await getToken({ req, secret: process.env.AUTH_SECRET })

   if (isApiRoute && !isAuthRoute && !isAuthenticated) { // Protect API routes EXCEPT /api/auth
      return NextResponse.redirect(new URL('/signin', nextUrl));
   }

   if (isAuthRoute || path=='/') { // Allow access to /api/auth routes regardless of authentication
      return NextResponse.next();
   }

   if (isPublicRoute && isAuthenticated) {
      return NextResponse.redirect(new URL('/', nextUrl));
   }

   // Role-based protection for dashboard
   if (isDashboardRoute) {
      if (!isAuthenticated) {
         return NextResponse.redirect(new URL('/signin', nextUrl));
      }
      // Only allow users with 'admin' role to access /dashboard/admin, for example
      if (path.startsWith('/dashboard')) {
         if (token?.role != 'admin') {
            return NextResponse.redirect(new URL('/', nextUrl));
         }
      }
      // You can add more role checks for other dashboard subroutes here
   }

   if (!isPublicRoute && !isApiRoute && !isAuthenticated) { // Protect all other routes
      return NextResponse.redirect(new URL('/signin', nextUrl));
   }

   return NextResponse.next();
};

export const config = {
   matcher: ["/((?!api|static|.*\\..*|_next).*)"], // Simpler matcher, excludes api and static
};