# Sushi & Sub

## Ownership

- **Leads** owns `src/content/site.ts` and `public/images/`.
- **Development** owns everything else: pages, components, styles, libs, and config.

Change copy, hours, menu, photos, testimonials, FAQ, and palette in `src/content/site.ts`. Do not invent prices, quotes, or photos in components.

## Content rules

- Prices come from the shop's printed takeout menu. **The owner must confirm every price before public launch.**
- Photos are customer photos (UGC from Google Maps and Yelp). **Do not treat them as owner-approved** until the owner signs off. Do not add stock or AI photos of the food or the shop.
- `public/images/takeout-menu-pink.jpg` and `public/images/takeout-menu-green.jpg` stay in the repo for price reference. Never render them. The gallery skips those filenames and every `menu-board` photo.
- Walk-in or call only. No delivery button and no online Order Now. `orderingLinks` drive call buttons only when `kind` is `phone` and the href is `tel:`. Ignore `online` and `delivery`.
- Text pre-order stays hidden while `textNumber` is null. Do not fall back to the shop line for SMS. It is unknown whether that line can receive texts.
- `paymentNote` stays hidden while it is empty.
- Do not publish owner personal names. Photo `credit` values are keys only. Do not put photo-source URLs in the client bundle.
- Do not link the unofficial ad-funded copycat of this shop, in the UI, the README, or any href.

## Indexing

Search indexing is off until the owner approves. `ALLOW_INDEXING` must be the exact string `true`. Any other value, including blank:

- `robots.txt` disallows every path
- metadata robots is `noindex, nofollow`
- responses send `X-Robots-Tag: noindex, nofollow`

The flag is read at build time. Redeploy after changing it.

## Stack

Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, framer-motion, lucide-react, zod. Restaurant JSON-LD is built from `src/content/site.ts`.

This Next.js version can differ from older training data. Read `node_modules/next/dist/docs/` before changing framework APIs.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
