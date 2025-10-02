# SchoolRun PWA (GitHub Pages Ready)

## What's inside
- `index.html` — your app with manifest & service worker hooks in place.
- `manifest.webmanifest` — PWA manifest with icons.
- `sw.js` — minimal service worker.
- `icons/` — 192/512 (including maskable) PNG placeholders. Replace with your branded icons when ready.

## Deploy to GitHub Pages (project site)
1. Create a repo (e.g., `schoolrun-pwa`). Put all files at the repo root.
2. Settings → Pages → Source: *Deploy from a branch* → Branch: `main` → `/ (root)`.
3. Visit `https://<username>.github.io/<repo>/` after the build finishes.
4. In DevTools → Application → Manifest, confirm **Installable** and that icons load.

### Notes
- Paths are relative (`./`) for project Pages compatibility.
- Manifest includes your current remote logo URL as fallback. Prefer local icons for speed/reliability.
- iOS uses `apple-touch-icon`; Android supports `purpose: "maskable"` for adaptive icons.
