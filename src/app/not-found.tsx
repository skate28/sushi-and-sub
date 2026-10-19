import Link from "next/link";

import { buttonPrimary } from "@/components/styles";
import { site } from "@/content/site";

export default function NotFound() {
  const name = site.name.trim() || "Sushi & Sub";

  return (
    <main id="content" className="bg-rice">
      <div className="mx-auto max-w-xl px-5 py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">404</p>
        <h1 className="mt-3 font-display text-6xl uppercase leading-[0.9]">That page isn&apos;t on the menu.</h1>
        <p className="mt-4 text-lg leading-relaxed">
          The rolls, hours, and directions are on the home page.
        </p>
        <Link href="/" className={`${buttonPrimary} mt-8`}>
          Back to {name}
        </Link>
      </div>
    </main>
  );
}
