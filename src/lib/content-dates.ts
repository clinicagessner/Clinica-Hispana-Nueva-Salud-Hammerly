// Fecha de la última revisión de contenido de cada servicio. La usan el
// sitemap (lastmod), la caja de revisión médica y `MedicalWebPage.lastReviewed`
// de la página del servicio, para que las tres fechas no diverjan.
// Actualízala solo cuando cambie algo visible del servicio (texto, FAQ,
// features o metadatos).

/** Revisión base del catálogo: los 29 servicios se reescribieron el 2026-10-07 (B3). */
export const SERVICES_LAST_REVIEWED = "2026-10-07";

/** Excepciones posteriores a la revisión base (slug → fecha ISO). */
export const SERVICE_DATES: Record<string, string> = {};

export function serviceLastReviewed(slug: string): string {
  return SERVICE_DATES[slug] ?? SERVICES_LAST_REVIEWED;
}
