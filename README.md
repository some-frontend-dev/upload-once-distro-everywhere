# Project: Upload Once, Distro Everywhere

This project allows creators (starting with DJs) to upload media (audio/video) once and automatically distribute it across multiple third-party platforms.

some text 

## 🧪 Local Dev

in Bash  
npm install  
npm run dev  

Runs on http://localhost:3000

## 🔧 Tech Stack

- Framework: Next.js 14 (App Router)
- Auth: Clerk (Magic link)
- Payments: Stripe
- Styling: Tailwind CSS
- State Management: React/Context (for brand config, etc.)
- Infrastructure: Server-side rendering (SSR-first), white-label friendly

## 🧱 Project Structure

upload-once-distro-everywhere/  
├── public/ # Static assets  
├── src/  
│ ├── app/ # App directory (Next.js)  
│ │ ├── layout.tsx # Root layout  
│ │ ├── page.tsx # Home page  
│ │ ├── upload/ # Upload flow pages  
│ │ ├── dashboard/ # User dashboard (uploaded files, status, settings)  
│ │ ├── login/ # Auth pages (magic link)  
│ │ └── settings/ # User settings, incl. brand config  
│ ├── components/ # Reusable UI components  
│ ├── lib/ # Helpers, utils, and integrations (e.g. Clerk, Stripe, queue)  
│ ├── config/  
│ │ └── brandConfig.ts # White-label brand settings  
│ └── types/ # Shared TypeScript types  
├── .env.local # Local environment vars (Clerk, Stripe, etc.)  
├── package.json  
├── README.md  
└── tsconfig.json

## ✨ Key Features

- ⚙️ **White-label ready**: Switch brand/mediaType experience via config  
- 🔐 **Passwordless auth** via Clerk  
- 💳 **Optional paid tier** via Stripe for file retention, features  
- 🚀 **Automated distribution** to external platforms (e.g. YouTube, SoundCloud)  
- 🧹 **Auto-delete files** post-distribution (free users)
