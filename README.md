# SF Date Roulette

Stop overthinking. Start adventuring.

What this is
- A small Next.js app that randomly selects one San Francisco date idea from a static dataset.
- No backend, no accounts, no external APIs.

How it works
- Client-only filters: Mood, Time, Budget, and optional link requirements (Maps/Yelp/Website).
- "Pick a date" chooses one matching idea at random. If nothing matches, the app progressively relaxes filters (budget → mood → time → links) and explains what was relaxed.

Run locally
1. Install dependencies:

```bash
cd sf-date-roulette
npm install
```

2. Run in dev mode:

```bash
npm run dev
```

3. Open http://localhost:3000

Files added
- [package.json](package.json), project manifest and scripts
- [pages/index.js](pages/index.js), main UI and logic
- [pages/_app.js](pages/_app.js), global CSS import
- [data/ideas.js](data/ideas.js), static dataset (60 ideas)
- [styles/globals.css](styles/globals.css), minimal styles

Notes / assumptions
- Optimized for clarity and speed; minimal dependencies (Next, React).
- Mood options are derived from the dataset.
- You can tweak relaxation order in `pages/index.js` if you prefer a different fallback strategy.
