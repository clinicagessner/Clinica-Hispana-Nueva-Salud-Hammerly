import { ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import type { Locale } from "@/types";

/**
 * Caja de revisión médica (§12 B2 del playbook). Sin nombre y credenciales de
 * un médico responsable, el contenido se firma como "equipo médico de la
 * clínica" (§9). Las fechas van en `<time datetime>` y coinciden con
 * `datePublished` / `lastReviewed` / `dateModified` del JSON-LD.
 */
export function MedicalReview({
  locale,
  published,
  reviewed,
}: {
  locale: Locale;
  /** ISO (YYYY-MM-DD). Opcional: los servicios no tienen fecha de publicación. */
  published?: string;
  /** ISO (YYYY-MM-DD) de la última revisión del contenido. */
  reviewed: string;
}) {
  const en = locale === "en";
  const fmt = (iso: string) =>
    new Date(`${iso}T12:00:00Z`).toLocaleDateString(en ? "en-US" : "es-MX", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });

  return (
    <aside className="mt-10 flex gap-3 rounded-xl border border-blue-light bg-white p-5 text-sm text-slate-primary">
      <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-dark" aria-hidden />
      <div>
        <p className="font-heading font-semibold text-slate-dark">
          {en ? "Medical review" : "Revisión médica"}
        </p>
        <p className="mt-1 leading-relaxed">
          {en
            ? "Content reviewed by the medical team at "
            : "Contenido revisado por el equipo médico de "}
          <strong className="font-semibold text-slate-dark">{SITE_CONFIG.name}</strong>.{" "}
          {en
            ? "This page is general information and does not replace a medical visit."
            : "Esta página es información general y no sustituye una consulta médica."}
        </p>
        <p className="mt-2 text-xs text-slate-primary">
          {published ? (
            <>
              {en ? "Published " : "Publicado el "}
              <time dateTime={published}>{fmt(published)}</time>
              {" · "}
            </>
          ) : null}
          {en ? "Last reviewed " : "Última revisión: "}
          <time dateTime={reviewed}>{fmt(reviewed)}</time>
        </p>
      </div>
    </aside>
  );
}
