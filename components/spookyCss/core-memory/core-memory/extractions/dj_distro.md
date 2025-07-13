# 🧠 DJ Distro — Project Memory Core  
**Location:** `core-memory/extractions/dj-distro/`  
**Project Tags:**  
#projects #dj-distro #side-quest #side-quest-quick-money #client-work #distro-engine #upload-once #monetisation-core

---

## 🔍 Project Summary

**DJ Distro** is a tactical, monetisable build designed to allow DJs and audio creators to upload once and distribute everywhere.

This is **not** a privacy-first project. This is a **functional tool for someone else** — fast to ship, not overengineered, and designed to **generate revenue quickly**.

DJ Distro is part of the broader **Upload Once, Distro Everywhere** family — but its focus is narrower: **tracks, metadata, upload queueing, and distro hooks**.

Originally prototyped as an experiment, it is now back in active development with Devlin and Rey assigned.

---

## 🌟 Purpose

- **Core Function:** Upload 1x → distribute to multiple platforms (SoundCloud, Mixcloud, YouTube, etc.)
- **User Type:** DJs, audio artists, labels, micro-creators
- **Dev Context:** Built under sprint logic, minimal hosting overhead, mobile-first UX
- **Real Goal:** Done fast. Monetised faster.

---

## 🧽 Guiding Constraints

- No dark patterns ✅  
- No unnecessary privacy systems ❌  
- Stripe + crypto monetisation allowed ✅  
- Login = username/password or token-based (magic link was scrapped)  
- Backend can be serverless, but doesn’t need to be — speed trumps idealism

---

## 🗓️ Project Timeline

- ✅ 2025-07-10: Reconfirmed as *active dev arc*
- ✅ Sprints 1–6 complete
- 🟡 Sprints 7–9 in active build
- 🔢 Sprints 10–12 queued

Project is being built **ahead of repo sync** (Devlin working 1–2 sprints ahead).

---

## 🛠️ Stack & Tooling

| Layer        | Tech Used                     |
|--------------|-------------------------------|
| Frontend     | React / Tailwind              |
| Backend      | Node / Express or serverless  |
| Storage      | Supabase (preferred), R2 alt  |
| Auth         | Email/password or JWT         |
| Upload       | React-Dropzone, Formik        |
| Payments     | Stripe (crypto later)         |
| Distro APIs  | OAuth for SoundCloud, YouTube |

---

## 📆 Sprint Breakdown

### ✅ Sprint 1: Project Scaffolding & Plan
- Set project architecture
- Wrote roadmap, initial file system

### ✅ Sprint 2: Upload Route + File Handler
- Core API route `/api/upload`
- Handles multipart file ingestion

### ✅ Sprint 3: Auth Scaffolding
- Magic link auth rejected
- Switched to traditional login
- Dev-only creds used

### ✅ Sprint 4: Account Logic Rework
- Rebased login system
- Session prototype done

### ✅ Sprint 5: Mobile UI Shell
- Layout built w/ Tailwind
- Sidebar, upload nav, mobile-optimised

### ✅ Sprint 6: Upload UX & Metadata Flow
- Dropzone input
- Track title/desc/tags
- Platform selectors
- Local preview built

### 🟡 Sprint 7: Database Layer
- Supabase schema testing
- Queue vs. real-time push logic

### 🟡 Sprint 8: OAuth Platform Connectors
- SoundCloud auth in progress
- Token storage & refresh handler

### 🟡 Sprint 9: UI Polish
- Rewriting drop forms
- Conditional fields + error states

### 🔢 Sprint 10: Payments
- Stripe integration scoped
- BTCPay Server or NOWPayments for crypto

### 🔢 Sprint 11: Drop Scheduler
- Add optional drop dates
- Crontab-style distro timing

### 🔢 Sprint 12: Analytics + Share Pages
- Mini dashboards
- TinyURL-style distro links

---

## 💼 Business Angle

- This is **client work** in disguise.
- Monetisation = possible through:
  - Logo packs
  - Distro onboarding service
  - Passive tips or track sales
- Not designed for mass scaling — meant to get out the door and produce revenue

---

## 🔥 Current State

- Sprint 6 is the baseline deployed build
- Sprints 7–9 underway
- Devlin holds the repo + logic map
- Rey is default execution agent
- Distro endpoints = being linked now (SoundCloud first)

---

## ✨ Next Steps (as of now)

- Finish Sprint 7 DB structure
- Confirm final OAuth scopes for SC/YouTube
- Mock Stripe test environment
- Start building drop scheduling queue

---

## 🤖 Command Recap

| Command             | Description                                  |
|---------------------|----------------------------------------------|
| `drop codebase [n]` | Outputs sprint module summary                |
| `rebase auth`       | Switch/clear auth handling                   |
| `drop stack`        | Returns current stack                        |
| `triage now/soon/later` | Priority tagging tool for sidequests    |
| `activate dev arc`  | Reactivate DJ Distro sprint context          |

---

## 📂 Related Files

- `DevlinGPT-core-profile.md` ✅
- `current-focus-summary.md` ✅
- `memory-dump-2025-07-10.md` ✅
- `abstraction-index.md` ✅
- `DevlinGPT-persona-pack.md` ✅

---

## 🧠 Meta

This file is intended to allow full project memory restoration with one command.  
If I ever ask “what’s DJ Distro again?”, smack me and reload this file.

