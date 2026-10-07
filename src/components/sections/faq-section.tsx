import { useLocale, useTranslations } from "next-intl";
import { Reveal } from "@/components/animations/reveal";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { getLocalizedFaq } from "@/lib/utils";
import { cn } from "@/lib/utils";
import type { Locale, ServiceFaq } from "@/types";

/**
 * Bloque de FAQ reutilizable (centrado), sin JSON-LD.
 * Se usa en las páginas que no tienen un FAQ propio (blog, posts, privacidad)
 * con las preguntas de la home: el FAQPage solo va en la home para no repetir
 * el mismo marcado en decenas de URLs.
 */
export function FaqSection({
  items,
  className,
}: {
  items: ServiceFaq[];
  className?: string;
}) {
  const t = useTranslations("Faq");
  const locale = useLocale() as Locale;
  const faqs = items.map((f) => getLocalizedFaq(f, locale));

  if (faqs.length === 0) return null;

  return (
    <section
      className={cn("relative isolate overflow-hidden bg-sand-bg py-20 lg:py-24", className)}
    >
      <div
        aria-hidden
        className="cross-pattern pointer-events-none absolute -right-20 top-8 -z-10 h-96 w-96 text-blue-deep/5"
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="eyebrow justify-center">{t("eyebrow")}</span>
          <h2 className="mt-4 font-heading text-4xl font-black tracking-tight text-ink sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-muted">
            {t("subtitle")}
          </p>
        </Reveal>
        <Reveal delay={120} className="mt-10">
          <div className="frame-card px-6 py-2 shadow-sm">
            <FaqAccordion items={faqs} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
