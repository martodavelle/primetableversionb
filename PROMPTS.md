# Prompts

The prompts used to research, design and build the Prime Table prototype, in the order they were given. Wording is as typed. The access token in prompt 25 has been removed.

## 1. Finding the idea

1. I need ideas on a possible membership app/platform to build, that fills a gap in the market and does not currently exist in Singapore today
2. Expand upon idea 2. are there different variants
3. what items will people be interested in borrowing
4. what about membership to be able to see vacancies at restaurants at real-time
5. Chope is for reservations only right, it cannot see live vacancies?

## 2. Shaping the product

6. for the idea of a membership to access seats at hard-to-get tables, provide me with a prompt that I could use in AI Studio to build the product. It needs to cover the top 25 hardest-to-get-seats restaurants in Singapore. keep it sharp, impactful and simple.
7. Elaborate more on the membership tiers.
8. bookings at a time means there is a specified window?

## 3. Building the app

9. Ok with this. Do not include Corporate. Create this app for me.
10. Provide me a prompt for this that I can try in Google AI Studio as well, while you work on this.
11. Apply the 10 heuristics principles for enhancing usability of an app.
12. Incorporate suitable images into the app. *(interrupted and replaced by the next prompt)*
13. Change to light theme and add a suitable, classy background image.
14. 1. Move "Join" to the first bar.
15. 2. Remove "Alerts" and "Concierge".
16. Replace the top right "View as..." with "My Profile. It should include membership information, etc.
17. For Discover, every restaurant should be accompanied with a photo.
18. for the "how it works", no.3 does not make sense. do you have suggestions to replace it with?
19. Use no. 1
20. For the member demos, there is a repetition between "account" and "my profile"
21. Toggle back to non member *(a separate toggle was started, then undone)*
22. Sign out from my profile
23. for the two "apply for membership" buttons, can you make it animated (glaring) and a eye-catching colour
24. Adjust submit application button under request membership page as well to have the same effect

## 4. Publishing

25. gitpush `https://[TOKEN REMOVED]@https://github.com/martodavelle/primetableversionb.git`
26. collate all prompts above to PROMPTS.md and push to the same github repository

---

## Appendix: Google AI Studio prompts

Two prompts written for Google AI Studio's Build mode during the conversation.

### A. First version (from prompt 6)

```
Build a mobile-first web app called "Prime Table": a members-only club that gives access to prime-time seats at Singapore's 25 hardest-to-book restaurants.

THE PROBLEM
The best tables in Singapore are gone the moment booking opens. Restaurants also lose money to no-shows on their busiest nights.

THE SOLUTION
Partner restaurants release a few prime slots each week to members only. Members prepay a minimum spend to confirm a booking. The whole prepayment goes toward the bill, so no-shows stop costing the restaurant.

MEMBERSHIP TIERS
- Access (S$300/yr): book released slots up to 14 days ahead.
- Priority (S$1,200/yr): 30-day window, first alert on cancellations, 2 guest passes.
- Concierge (S$5,000/yr): dedicated requests, private-room and group bookings.

CORE SCREENS
1. Landing page: value proposition, tiers, "Apply for membership" (members are approved, not instant sign-ups).
2. Discover: grid of the 25 restaurants with cuisine, area, accolade, a 1–5 difficulty score, and minimum spend per head.
3. Restaurant page: upcoming member-only slots (date, time, party size). Tap a slot, prepay, get a confirmation.
4. Drops: a live feed of newly released slots and cancellations, with a countdown timer on each.
5. Watchlist and alerts: members set "party of 4, Fri–Sat, any of these 5 restaurants" and get notified when a match appears.
6. My Bookings: upcoming and past bookings, cancellation rules, a "transfer to a fellow member" option. Reselling is never allowed.
7. AI Concierge (use Gemini): natural-language requests like "anniversary dinner for 2, Japanese, next Saturday". It replies with matching slots and alternatives.
8. Partner portal: restaurants release slots, set the minimum spend, and see no-show savings and member revenue.
9. Admin: approve members, manage restaurants, view key numbers (fill rate, revenue, members by tier).

SEED DATA: the 25 restaurants
Les Amis, Odette, Zén, 1887 by André, Cloudstreet, Jaan by Kirk Westaway, Meta, Saint Pierre, Seroja, Shoukouwa, Sushi Sakuta, Thevar, Burnt Ends, Born, Labyrinth, Nae:um, Peach Blossoms, Araya, Candlenut, Buona Terra, Omakase @ Stevens, Fiz, Cote Singapore, Luke's Oyster Bar & Chophouse, Sushi Kimura Plus.
Give each one: cuisine, neighbourhood, a short neutral description, a sample minimum spend, and 6–10 sample slots over the next 30 days. Mark all availability and prices as SAMPLE DATA.

DESIGN
Dark, understated luxury: near-black background, warm off-white text, one gold accent, serif headings, generous spacing. Use abstract food or texture placeholders. Do not use restaurant logos or real photos.

RULES
- This is a concept demo. Show a persistent banner: "Prototype – restaurants listed are not partners. No real bookings."
- Use mock payments only. Never collect real card details.
- Use local state or a mock backend. Keep code clean and modular so it's easy to extend.
```

### B. Updated version (from prompt 10)

Reflects the final tier design, without the Corporate tier. Later changes to the built app (light theme, photos, My Profile, removal of Alerts and Concierge chat) are not included.

```
Build a mobile-first web app called "Prime Table": a members-only club that gives access to prime-time seats at Singapore's 25 hardest-to-book restaurants.

HOW IT WORKS
Partner restaurants release a few prime slots each week to members only. Members prepay the restaurant's minimum spend to confirm. The whole prepayment goes toward the bill, so no-shows stop costing restaurants money.

MEMBERSHIP TIERS (annual, approved by application, not instant sign-up)
- Access, S$300/yr. No dining credit. Book up to 14 days ahead. Hold 2 upcoming bookings at a time. New drops unlock for Access 30 minutes after other tiers. No guest passes.
- Priority, S$1,500/yr. S$1,000 back as dining credit, so the effective cost is ~S$500. 30-day window. Hold 4 at a time. First look at every new release and cancellation. 2 guest passes a year. Priority waitlist.
- Concierge, S$6,000/yr. S$5,000 back as dining credit, so the effective cost is ~S$1,000. 60-day window, plus requests for dates not yet released. Fair-use bookings (cap 12). Named concierge. Private rooms and groups of 8+. Events. 6 guest passes a year.
"Bookings at a time" = how many upcoming reservations a member can hold at once. A place frees up after they dine or cancel. The "booking window" = how far ahead they can book.

HOUSE RULES (enforce in the app)
- Prepay every booking: minimum spend × guests. Dining credit can pay part or all of it.
- Cancel 72+ hours ahead: full refund. Inside 72 hours: the seat goes back to members as a "cancellation" drop. If it's rebooked, the prepayment returns as credit. If not, it's forfeited. A late cancel counts as a strike.
- No-show: the restaurant keeps the prepayment, plus a strike.
- 2 strikes in 12 months: booking is paused for 90 days.
- No reselling. Members can transfer a booking to another member in the app, after ticking "no payment involved".
- Dining credit expires after 12 months and has no cash value.

SCREENS
1. Landing: hero, "How it works" in 3 steps, tier cards, a tier comparison table, house rules, and an "Apply" button.
2. Apply: name, email, mobile, tier, and "how do you like to dine". Then a "Pending review" status screen.
3. Discover: the 25 restaurants with search, cuisine filter chips, and sorting (hardest first, most open slots, lowest minimum spend, A–Z). Each card shows accolade, cuisine, area, difficulty from 1 to 5, minimum spend per head, and the number of open slots in the member's window.
4. Restaurant page: description, slots inside the member's window with Book buttons, and locked slots further ahead with a "Priority+" or "Concierge" label. An "Alert me" button. For Concierge members, "Request a date not listed".
5. Checkout: choose number of guests, an optional note, and a "use credit" toggle. Show a live breakdown (prepayment, credit, charged now). Payment is mocked.
6. Drops: a live feed of releases and cancellations from the last 6 hours. Show an "unlocks in mm:ss" countdown for Access members.
7. Alerts: party size, days, and restaurants. Show current matches, and pop a notification when a new slot matches.
8. Bookings: upcoming bookings with cancel, transfer, and demo buttons for "mark dined" and "simulate no-show". Also concierge requests and history, plus a counter of bookings held against the tier limit, and the credit balance.
9. Concierge chat: uses Gemini to understand requests like "anniversary dinner for 2, Japanese, this weekend". It returns bookable slots inside the member's window, suggests alternatives, and logs a request for Concierge members.
10. Account: a membership card (tier, ID, credit and its expiry, guest passes, strikes), sending guest passes, and switching tiers in the demo.
11. Partner portal: pick a restaurant; release a slot (date, time, table size); set the minimum spend; show stats (slots released, fill rate, prepaid revenue, estimated no-show loss avoided at a 10% rate).
12. Admin: member counts by tier, fee revenue, dining credit owed, fill rate, prepayments; an applications queue with approve and decline; a restaurant table.
Add a "View as: Member / Restaurant partner / Admin" switcher in the header, and a "Try the demo" option that lets you pick a tier.

SEED DATA: the 25 restaurants
Burnt Ends, Odette, Zén, Les Amis, 1887 by André, Shoukouwa, Sushi Sakuta, Cloudstreet, Jaan by Kirk Westaway, Meta, Saint Pierre, Seroja, Thevar, Born, Nae:um, Labyrinth, Peach Blossoms, Araya, Candlenut, Buona Terra, Omakase @ Stevens, Sushi Kimura Plus, Fiz, Cote Singapore, Luke's Oyster Bar & Chophouse.
Give each one: cuisine, area, accolade, difficulty, a sample minimum spend, and 9–12 sample slots over 60 days, some already "claimed". Mark a few as released in the last few hours so the Drops feed has content.

DESIGN
Dark, understated luxury: near-black background, warm off-white text, one gold accent, serif headings (Cormorant Garamond) with a sans-serif body (Inter). Bottom tab bar on mobile. Use abstract gradient placeholders with initials. No restaurant logos or real photos.

RULES
- Concept demo. Show a persistent banner: "Prototype – restaurants listed are not partners. No real bookings."
- Mock payments only. Never collect card details.
- Keep everything in local state. Write clean, modular code.
```
