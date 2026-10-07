import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { getAllServiceSlugs } from "@/lib/services";
import { getAllPosts } from "@/lib/blog";
import { locales } from "@/i18n/config";
import { serviceLastReviewed } from "@/lib/content-dates";

const BASE = SITE_CONFIG.baseUrl;

// Sin changefreq/priority: Google los ignora. Sí usa lastmod para decidir qué
// volver a rastrear. Las fechas reflejan cambios REALES de contenido (sacadas
// del historial de git): actualízalas solo cuando cambie algo visible.
const LASTMOD = {
  home: "2026-10-07", // bloque "¿Qué es…?", FAQ propias y footer con todos los servicios
  walkIn: "2026-10-07",
  promociones: "2026-10-07",
  servicesIndex: "2026-10-07",
  blogIndex: "2026-10-07",
} as const;


const localePath = (locale: string) => (locale === "es" ? "" : `/${locale}`);

// Cada idioma lleva su propia <url> con alternates recíprocos (formato que pide
// Google para hreflang en sitemaps). /privacy no va: tiene noindex.
function entries(path: string, lastModified: string): MetadataRoute.Sitemap {
  const clean = path === "/" ? "" : path;
  return locales.map((locale) => ({
    url: `${BASE}${localePath(locale)}${clean}`,
    lastModified,
    alternates: {
      languages: {
        es: `${BASE}${clean}`,
        en: `${BASE}/en${clean}`,
        "x-default": `${BASE}${clean}`,
      },
    },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...entries("/", LASTMOD.home),
    ...entries("/services", LASTMOD.servicesIndex),
    ...entries("/promociones", LASTMOD.promociones),
    ...entries("/blog", LASTMOD.blogIndex),
    ...entries("/walk-in", LASTMOD.walkIn),
    ...getAllServiceSlugs().flatMap((slug) =>
      entries(`/services/${slug}`, serviceLastReviewed(slug)),
    ),
    ...getAllPosts("es").flatMap((post) =>
      entries(`/blog/${post.slug}`, post.updated ?? post.date),
    ),
  ];
}
