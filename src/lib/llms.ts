import {
  CONTACT_INFO,
  PROMOTIONS,
  SERVICE_CATEGORIES,
  SITE_CONFIG,
  SOCIAL_LINKS,
} from "@/lib/constants";
import { getAllPosts } from "@/lib/blog";
import { getGooglePlaceData, type GooglePlaceData } from "@/lib/google-places";
import { HOME_FAQS } from "@/lib/home-faqs";
import { getServiceFaqs } from "@/lib/service-faqs";
import { getAllServices } from "@/lib/services";
import { getLocalizedFaq, getLocalizedService } from "@/lib/utils";
import { absoluteUrl } from "@/lib/seo";
import type { Locale } from "@/types";

// llms.txt y llms-full.txt se generan desde los mismos datos que las páginas
// (servicios, promociones, posts, FAQ, contacto), así no quedan desfasados.
// Solo hechos que el sitio o la ficha de Google ya publican. Toda URL va como
// enlace Markdown [texto](url). Rating y conteo de reseñas en vivo de Places
// (se fijan en cada deploy: las rutas son estáticas).

const base = SITE_CONFIG.baseUrl;
const ADDRESS = `${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}`;
const WA = CONTACT_INFO.whatsapp.replace(/\D/g, "");
const link = (text: string, path: string, locale: Locale) =>
  `[${text}](${absoluteUrl(path, locale)})`;

const AREAS = "Houston and the Spring Branch area";
const AREAS_ES = "Houston y la zona de Spring Branch";

const T = {
  en: {
    title: `${SITE_CONFIG.name} — Spring Branch, Houston, TX`,
    about: "About",
    entity: `${SITE_CONFIG.name} is a Hispanic family walk-in clinic at ${ADDRESS}, on Hammerly Blvd in Spring Branch, Houston. It is not affiliated with other clinics of similar name. Care is given in Spanish and English, and no insurance is needed.`,
    contact: "Location and contact",
    hours: "Open seven days a week: Monday to Saturday 9:00 AM to 9:00 PM, Sunday 9:00 AM to 5:00 PM. Walk-ins welcome at any time the clinic is open.",
    facts: (r: GooglePlaceData) => [
      "Immigration medical exam (Form I-693) performed by a USCIS-designated civil surgeon.",
      "Free on-site parking; wheelchair-accessible entrance, parking and restrooms.",
      "No insurance needed.",
      `Serves ${AREAS}.`,
      `Google rating: ${r.averageRating.toFixed(1)} from ${r.totalReviews} reviews.`,
    ],
    services: "Services",
    promos: "Current promotions",
    posts: "Health guides",
    faq: "Frequently asked questions",
    phone: "Phone",
    whatsapp: "WhatsApp",
    email: "Email",
    address: "Address",
    map: "Google Maps",
    languages: "Languages: Spanish and English",
    includes: "Includes",
    more: "More",
  },
  es: {
    title: `${SITE_CONFIG.name} — Spring Branch, Houston, TX`,
    about: "Quiénes somos",
    entity: `${SITE_CONFIG.name} es una clínica hispana familiar sin cita previa en ${ADDRESS}, sobre Hammerly Blvd en Spring Branch, Houston. No tiene relación con otras clínicas de nombre parecido. Atiende en español y en inglés, y no hace falta seguro médico.`,
    contact: "Ubicación y contacto",
    hours: "Abierto los siete días de la semana: lunes a sábado de 9:00 AM a 9:00 PM y domingo de 9:00 AM a 5:00 PM. Se atiende sin cita en todo el horario.",
    facts: (r: GooglePlaceData) => [
      "Examen médico de inmigración (Formulario I-693) realizado por un médico autorizado por USCIS (civil surgeon).",
      "Estacionamiento gratuito en el lugar; entrada, estacionamiento y baños accesibles para silla de ruedas.",
      "No hace falta seguro médico.",
      `Atiende a ${AREAS_ES}.`,
      `Calificación en Google: ${r.averageRating.toFixed(1)} con ${r.totalReviews} reseñas.`,
    ],
    services: "Servicios",
    promos: "Promociones vigentes",
    posts: "Guías de salud",
    faq: "Preguntas frecuentes",
    phone: "Teléfono",
    whatsapp: "WhatsApp",
    email: "Correo",
    address: "Dirección",
    map: "Google Maps",
    languages: "Idiomas: español e inglés",
    includes: "Incluye",
    more: "Más",
  },
} as const;

function contactBlock(locale: Locale, r: GooglePlaceData): string[] {
  const t = T[locale];
  return [
    `## ${t.contact}`,
    "",
    `- ${t.address}: [${ADDRESS}](${CONTACT_INFO.googleMapsUrl})`,
    `- ${t.phone}: [${CONTACT_INFO.phoneDisplay}](tel:${CONTACT_INFO.phone})`,
    `- ${t.whatsapp}: [wa.me/${WA}](https://wa.me/${WA})`,
    `- ${t.email}: [${CONTACT_INFO.email}](mailto:${CONTACT_INFO.email})`,
    `- ${t.map}: [${SITE_CONFIG.name}](${CONTACT_INFO.googleMapsUrl})`,
    `- ${t.hours}`,
    `- ${t.languages}`,
    `- Facebook: [${SOCIAL_LINKS.facebook.replace("https://www.", "")}](${SOCIAL_LINKS.facebook})`,
    `- Instagram: [${SOCIAL_LINKS.instagram.replace("https://www.", "")}](${SOCIAL_LINKS.instagram})`,
    "",
    ...t.facts(r).map((f) => `- ${f}`),
    "",
  ];
}

function servicesBlock(locale: Locale, full: boolean): string[] {
  const t = T[locale];
  const services = getAllServices().map((s) => getLocalizedService(s, locale));
  const L: string[] = [`## ${t.services}`, ""];
  for (const c of SERVICE_CATEGORIES) {
    const items = services.filter((s) => s.category === c.value);
    if (items.length === 0) continue;
    L.push(`### ${locale === "en" ? c.labelEn : c.label}`, "");
    for (const s of items) {
      L.push(`- ${link(s.title, `/services/${s.slug}`, locale)}: ${s.shortDescription}`);
      if (!full) continue;
      if (s.features.length) L.push(`  - ${s.features.join("; ")}`);
      for (const f of getServiceFaqs(s.slug).map((q) => getLocalizedFaq(q, locale))) {
        L.push(`  - **${f.question}** ${f.answer}`);
      }
    }
    L.push("");
  }
  return L;
}

function promosBlock(locale: Locale, full: boolean): string[] {
  const t = T[locale];
  const en = locale === "en";
  const L: string[] = [`## ${t.promos}`, ""];
  for (const p of PROMOTIONS) {
    const title = en ? p.titleEn : p.title;
    const price = p.price ? ` (${p.price})` : "";
    L.push(`- ${link(title, "/promociones", locale)}${price}`);
    if (full) {
      L.push(`  - ${en ? p.blurbEn : p.blurb}`);
      L.push(`  - ${t.includes}: ${(en ? p.includesEn : p.includes).join("; ")}`);
    }
  }
  L.push("");
  return L;
}

function postsBlock(locale: Locale): string[] {
  const t = T[locale];
  return [
    `## ${t.posts}`,
    "",
    ...getAllPosts(locale).map((p) => `- ${link(p.title, `/blog/${p.slug}`, locale)}: ${p.description}`),
    "",
  ];
}

function faqBlock(locale: Locale): string[] {
  const t = T[locale];
  return [
    `## ${t.faq}`,
    "",
    ...HOME_FAQS.map((f) => getLocalizedFaq(f, locale)).flatMap((f) => [`### ${f.question}`, "", f.answer, ""]),
  ];
}

function header(): string[] {
  return [
    `# ${T.en.title}`,
    "",
    `> ${SITE_CONFIG.descriptionEn}`,
    "",
    `## ${T.en.about}`,
    "",
    T.en.entity,
    "",
    T.es.entity,
    "",
  ];
}

export async function buildLlmsTxt(): Promise<string> {
  const r = await getGooglePlaceData();
  const L = [
    ...header(),
    ...contactBlock("en", r),
    ...servicesBlock("en", false),
    ...promosBlock("en", false),
    ...postsBlock("en"),
    ...faqBlock("en"),
    `## ${T.en.more}`,
    "",
    `- ${link("Services", "/services", "en")} · ${link("Walk-in care", "/walk-in", "en")} · ${link("Promotions", "/promociones", "en")} · ${link("Blog", "/blog", "en")}`,
    `- ${link("Sitio en español", "/", "es")} · [llms-full.txt](${base}/llms-full.txt)`,
    "",
  ];
  return L.join("\n");
}

export async function buildLlmsFullTxt(): Promise<string> {
  const r = await getGooglePlaceData();
  const L = [...header()];
  for (const locale of ["en", "es"] as const) {
    L.push(
      `# ${locale === "en" ? "English" : "Español"}`,
      "",
      ...contactBlock(locale, r),
      ...servicesBlock(locale, true),
      ...promosBlock(locale, true),
      ...postsBlock(locale),
      ...faqBlock(locale),
    );
  }
  return L.join("\n");
}
