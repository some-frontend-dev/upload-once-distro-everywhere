# DJ Distro Project — DevlinGPT Handover Format

## 🧠 Core Summary

- **Owner**: Blake (User)
- **Persona-in-charge**: Devlin (Creative Ops), Rey (Ops Strategy)
- **Project Type**: Media upload and distribution pipeline for a DJ friend
- **Emotional Driver**: Prove capability, repay social loyalty, protect reputation
- **Urgency Level**: 🔥 High — self-imposed 1-month sprint

---

## ✅ Current Sprint (Week 1)

### Objectives:
- [x] Identify platforms (YouTube, SoundCloud, Audius, etc.) ✅ Completed
- [x] Test upload flow ✅ Completed
- [ ] Build automated upload pipeline (minimum viable)
- [ ] Design metadata system (title templates, tags, descriptions)
- [ ] Structure folder architecture for repeated drops

### Priority Notes:
- “Upload once, distribute everywhere” = central design pattern
- Must be simple enough for project manager to use (non-tech user)
- Build with scalability in mind, not overengineering

---

## 🧱 Infrastructure Stack (Initial Plan)

- **Platform Inputs**: Audio files, YouTube videos, mix covers
- **Upload Targets**: YouTube Shorts, TikTok, Audius, SoundCloud, Insta
- **Automation Ideas**: Puppeteer, Playwright, Python scripting
- **Future Proofing**: Cloudflare R2 or S3 for media storage

---

## 💡 Open Questions

- Does DJ friend want brand name/site?
  - Clarification: Final version should resemble a simple SoundCloud-style upload interface with 1-click distribution. Not placeholder HTML. Not MVP-grade. 
- What upload schedule is ideal? Weekly? Daily batch?
  - Answer: Needs to be determined by end user; system should support "upload whenever" with post-scheduling ability.
- How much creative control stays with you vs the DJ?
  - To be decided post-core memory sync. Likely semi-automated flows controlled by **Owner** initially.

---

## 🔄 Next Actions

1. Devlin: Finish uploading previous test content for pipeline testing ✅ Partial
2. Rey: Build week-by-week sprints + output estimate for MVP ⚙️ Queued
3. **Owner**: Confirm scope creep boundaries (what’s in vs out) 🔁 In Progress
4. AI: Output automation ideas (safe-mode only for now) ⏳ Queued

---

## 🧰 Assets (Linkable — stubbed)

> These files/folders do **not yet exist** but are expected in future drops:

- `/templates/metadata-template.txt`
- `/data/upload-map.csv`
- `/scripts/upload-automation-v1.py` (placeholder)
- `/visuals/cover-template.psd` (optional asset)

These paths will auto-resolve when included in the local working directory or repo.

---

## 📌 Tags

`#dj-distro` `#upload-once` `#automation` `#friend-support` `#proving-ground` `#core-project`

---

_Last updated: 20250712_

