// Fecha de la última revisión de contenido de cada servicio. La usan el
// sitemap (lastmod), la caja de revisión médica y `MedicalWebPage.lastReviewed`
// de la página del servicio, para que las tres fechas no diverjan.
// Actualízala solo cuando cambie algo visible del servicio (texto, FAQ,
// features o metadatos).

/** Revisión base del catálogo: los 29 servicios se reescribieron el 2026-10-07 (B3). */
export const SERVICES_LAST_REVIEWED = "2026-10-07";

/** Excepciones posteriores a la revisión base (slug → fecha ISO). */
export const SERVICE_DATES: Record<string, string> = {
  "condiciones-cronicas": "2026-10-15",
  "tiroides": "2026-10-15",
  "ginecologia": "2026-10-15",
  "alergias": "2026-10-15",
  "enfermedades-respiratorias": "2026-10-15",
  "anticonceptivos": "2026-10-15",
  "infecciones-urinarias": "2026-10-15",
  "prueba-strep": "2026-10-15",
  "enfermedades-transmision-sexual": "2026-10-15",
  "drenaje-abscesos": "2026-10-15",
  "farmacia": "2026-10-15",
};

export function serviceLastReviewed(slug: string): string {
  return SERVICE_DATES[slug] ?? SERVICES_LAST_REVIEWED;
}
