"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Navigation, Phone } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";
import { CONTACT_INFO } from "@/lib/constants";
import { cn, whatsappHref } from "@/lib/utils";

export function FloatingButtons() {
  const t = useTranslations("Floating");
  const tc = useTranslations("Common");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Todos aparecen al hacer scroll: el hero ya muestra sus propios CTAs.
  const revealed = scrolled
    ? "translate-y-0 opacity-100"
    : "pointer-events-none translate-y-3 opacity-0";

  return (
    <>
      {/* Volver arriba — lado opuesto a los botones de contacto */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label={t("backToTop")}
        className={cn(
          "fixed bottom-5 left-4 z-40 flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-deep/10 bg-white text-blue-dark shadow-md transition-all duration-300 hover:bg-sand-bg hover:text-red-accent sm:bottom-6 sm:left-6",
          revealed,
        )}
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      <div className="pointer-events-none fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
        {/* Cómo llegar — círculo en móvil, pastilla con texto en escritorio */}
        <a
          href={CONTACT_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("directions")}
          className={cn(
            "pointer-events-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-dark font-heading text-sm font-semibold text-white shadow-lg shadow-blue-deep/30 ring-1 ring-white/10 transition-all duration-300 hover:bg-blue-deep sm:h-12 sm:w-auto sm:gap-2 sm:px-5",
            revealed,
          )}
        >
          <Navigation className="h-5 w-5 shrink-0" />
          <span className="hidden sm:inline">{t("directions")}</span>
        </a>

        {/* Llamar — círculo en móvil, pastilla con teléfono en escritorio */}
        <a
          href={`tel:${CONTACT_INFO.phone}`}
          aria-label={t("call")}
          className={cn(
            "pointer-events-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-accent font-heading text-sm font-semibold text-white shadow-lg shadow-red-accent/30 ring-1 ring-white/10 transition-all duration-300 hover:bg-red-dark sm:h-12 sm:w-auto sm:gap-2 sm:px-5",
            revealed,
          )}
        >
          <Phone className="h-5 w-5 shrink-0" />
          <span className="hidden sm:inline">{CONTACT_INFO.phoneDisplay}</span>
        </a>

        {/* WhatsApp — número exclusivo de WhatsApp (nunca en tel:) */}
        <a
          href={whatsappHref(tc("whatsappMessage"))}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${tc("whatsappCta")} ${CONTACT_INFO.whatsappFormatted}`}
          className={cn(
            "pointer-events-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-whatsapp font-heading text-sm font-semibold text-white shadow-lg shadow-whatsapp/30 ring-1 ring-white/10 transition-all duration-300 hover:bg-whatsapp-dark sm:h-12 sm:w-auto sm:gap-2 sm:px-5",
            revealed,
          )}
        >
          <WhatsappLogoIcon weight="fill" className="h-5 w-5 shrink-0" />
          <span className="hidden sm:inline">{t("whatsapp")}</span>
        </a>
      </div>
    </>
  );
}
