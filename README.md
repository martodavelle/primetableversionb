# Prime Table — concept prototype

A members-only club concept: Singapore's 25 hardest-to-book restaurants release prime-time tables to members, who prepay the restaurant's minimum spend (all of it goes toward the bill).

Built with Vite, React and TypeScript. Front-end only: no server.

## Run it

```bash
npm install
npm run dev        # local development
npm run build      # production build into dist/
npm run preview    # serve the production build
```

Vercel builds it automatically (see `vercel.json`: framework Vite, output `dist`).

- **Try it:** on the Join page, tap "Skip: try the demo as a member" and pick a tier.
- **Other views:** My Profile → Prototype views switches to the Restaurant partner and Admin screens.

## A/B test

`src/pt.ts` (provided for the Persuasive Technology module) assigns each visitor version A or B, handles consent, loads Microsoft Clarity and records events to Supabase.

- **Element under test:** the "Apply for membership" button at the top of the Join page. Version B shows it; version A is the same screen without it. Nothing else differs.
- **Events:** `screen_view` when the screen first appears, `cta_click` when a button labelled "Apply for membership" is pressed, `goal_complete` when a visitor submits the membership application.
- **Consent:** a notice at the bottom with equal Accept and Decline buttons. Clarity loads and events leave the browser only after Accept.
- **Preview a version:** add `?v=A` or `?v=B` to the address. Forced visits are flagged as `forced` in the data.

`npm run typecheck` reports two strict-mode warnings inside `src/pt.ts` (the `crypto` fallback). The file is kept exactly as provided, and the warnings don't affect how it runs.

## Notes

- Prototype only. Restaurants are listed for illustration and are **not partners**. No real bookings or payments.
- Accolades are as reported for the MICHELIN Guide Singapore 2026 and Asia's 50 Best Restaurants 2026. Areas, minimum spends, availability and member numbers are sample data.
- Restaurant photos are representative images from Unsplash (Unsplash License), not photos of the restaurants. Offline, the cards show drawn artwork instead.
- App data lives in memory and resets on reload.
