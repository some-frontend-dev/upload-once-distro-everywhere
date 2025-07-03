import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    /*
      Match all routes except:
      - Next.js internals
      - public files like images, fonts, etc.
    */
    '/((?!_next|.*\\..*).*)',
  ],
};
