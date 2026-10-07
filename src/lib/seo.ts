import { SITE_CONFIG } from "@/lib/constants";
import type { Locale } from "@/types";

export function localePrefix(locale: Locale): string {
  return locale === "en" ? "/en" : "";
}

/** URL absoluta para un path interno en un locale (es sin prefijo). */
export function absoluteUrl(path: string, locale: Locale): string {
  const clean = path === "/" ? "" : path;
  return `${SITE_CONFIG.baseUrl}${localePrefix(locale)}${clean}`;
}

/**
 * Bloque alternates para generateMetadata: canonical del locale actual
 * + hreflang es / en / x-default. El español nunca lleva prefijo.
 */
export function buildAlternates(path: string, locale: Locale) {
  const clean = path === "/" ? "" : path;
  return {
    canonical: absoluteUrl(path, locale),
    languages: {
      es: `${SITE_CONFIG.baseUrl}${clean}`,
      en: `${SITE_CONFIG.baseUrl}/en${clean}`,
      "x-default": `${SITE_CONFIG.baseUrl}${clean}`,
    },
  };
}

/**
 * openGraph + twitter por página. En Next el openGraph de una página reemplaza
 * entero al del layout, así que hay que repetir la imagen o se pierde.
 */
export function buildSocial({
  title,
  description,
  path,
  locale,
  image = SITE_CONFIG.ogImage,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  image?: string;
  type?: "website" | "article";
}) {
  return {
    openGraph: {
      type,
      title,
      description,
      url: absoluteUrl(path, locale),
      siteName: SITE_CONFIG.name,
      locale: locale === "en" ? "en_US" : "es_US",
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [image],
    },
  };
}

// Landings de Google Ads (RED.md): su <title> no se toca sin aprobación del usuario.
// Ginecología, urinarias, crónicas, I-693 y sueros: aprobados el 2026-10-07 ("procede hammerly").
export const ADS_LANDING_SLUGS = new Set<string>([]);

/**
 * Título de 60 caracteres o menos: con el sufijo de marca del layout si cabe;
 * si no, el título solo (absolute). Los que pasan de 60 por sí solos llevan
 * un metaTitle propio.
 */
export function seoTitle(title: string) {
  const suffix = ` | ${SITE_CONFIG.shortName}`;
  if (title.length + suffix.length <= 60) return title;
  return { absolute: title };
}
