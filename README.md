# Sushi & Sub

Pitch site for Sushi & Sub, a sushi counter at 5800 Beach Blvd #202, Jacksonville, FL. Walk in, or call (904) 858-7032. Monday–Saturday 10 AM–8 PM. Closed Sunday.

Next.js (App Router), TypeScript, and Tailwind CSS. It deploys on Vercel with no extra adapter. If this repository is not yet a Vercel project, import `skate28/sushi-and-sub` and leave `ALLOW_INDEXING` unset.

## Ownership

- **Leads** owns `src/content/site.ts` and `public/images/`.
- **Development** owns everything else.

## Scripts

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Where things live

```
src/content/site.ts     All editable content (the only copy file)
src/content/types.ts    Content shapes
src/app/page.tsx        Home: hero, about, menu, gallery, reviews, FAQ, visit
public/images/          Shop photos, including two takeout-menu files that are not shown
```

Components read `site.ts` and hide empty sections. Menu prices render only when an item has a real `price`.

## Ordering

Primary actions are tap-to-call and Get directions (`site.mapUrl`). There is no delivery and no online Order Now.

`orderingLinks` drives buttons only for `kind: "phone"` with a `tel:` href. `online` and `delivery` links are ignored.

Text pre-order stays hidden while `textNumber` is null. Do not imply the shop line can receive texts. `paymentNote` stays hidden while it is empty.

The shop is in the plaza at Beach Blvd & University Blvd, next to The UPS Store. Map apps often stop at the beauty store out front.

## Photos and prices

Photos are real customer photos. They are user-generated content pending the owner's OK. Do not add stock or AI pictures.

`takeout-menu-pink.jpg` and `takeout-menu-green.jpg` are kept for menu-price reference and are filtered out of the gallery and every other view.

Prices were transcribed from that printed menu. **The owner needs to confirm every price before public launch.**

## SEO

Indexing stays off until the owner signs off. `ALLOW_INDEXING` must be the exact string `true`. Anything else blocks indexing with `noindex, nofollow`, a disallow-all `robots.txt`, and `X-Robots-Tag`. Redeploy after changing it. Copy `.env.example` to `.env.local` when you need local overrides.

The document title and description come from `site.seo`. Restaurant JSON-LD is generated from the content file. The footer credit is `site.footerCredit`, linked to [nicklopacki.com](https://nicklopacki.com).

Do not publish owner personal names or photo-source URLs. Photo credits in content are keys only.

Do not link the unofficial ad-funded copycat of this shop.
