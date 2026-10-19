import { Plus } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { focusRing } from "@/components/styles";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

export function Faq() {
  const items = site.faq.filter((item) => item.question.trim() && item.answer.trim());
  if (items.length === 0) return null;

  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-rice">
      <div className="mx-auto max-w-3xl px-5 py-20 lg:py-24">
        <SectionHeading kicker="Before you visit" title="Questions" id="faq-heading" />
        <div className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
          {items.map((item) => (
            <details key={item.question} className="group py-4">
              <summary
                className={cn(
                  "cursor-pointer list-none rounded-lg font-semibold outline-none [&::-webkit-details-marker]:hidden",
                  focusRing,
                )}
              >
                <span className="flex items-start justify-between gap-4">
                  {item.question}
                  <Plus
                    aria-hidden
                    className="mt-0.5 size-5 shrink-0 text-accent transition-transform group-open:rotate-45"
                  />
                </span>
              </summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-ink/85">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
