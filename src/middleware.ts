import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    // Explicitly protect your app routes
    '/dashboard(.*)',
    '/upload(.*)',
    '/settings(.*)',
    '/api/(.*)',
    '/trpc/(.*)',
  ],
};
