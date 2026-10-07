"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();

  // Enlace real (<a href>) para que Google y los bots de IA descubran la otra
  // versión. Href a mano: con localePrefix "as-needed" el Link de next-intl
  // con locale="es" genera /es (307).
  function hrefFor(l: string) {
    if (l === routing.defaultLocale) return pathname;
    return pathname === "/" ? `/${l}` : `/${l}${pathname}`;
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-blue-light bg-white p-0.5 text-xs font-semibold",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((l) => (
        <Link
          key={l}
          href={hrefFor(l)}
          replace
          hrefLang={l}
          lang={l}
          aria-current={l === locale ? "true" : undefined}
          className={cn(
            "rounded-full px-2.5 py-1 uppercase tracking-wide transition-colors",
            l === locale
              ? "bg-blue-dark text-white"
              : "text-slate-muted hover:text-blue-dark",
          )}
        >
          {l}
        </Link>
      ))}
    </div>
  );
}
