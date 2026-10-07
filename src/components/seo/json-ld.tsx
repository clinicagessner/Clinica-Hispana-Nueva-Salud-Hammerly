import { getLocale } from "next-intl/server";
import {
  CONTACT_INFO,
  OPENING_HOURS,
  SITE_CONFIG,
  SOCIAL_LINKS,
} from "@/lib/constants";
import { getAllServices } from "@/lib/services";
import { getGooglePlaceData } from "@/lib/google-places";
import { getLocalizedService } from "@/lib/utils";
import { absoluteUrl } from "@/lib/seo";
import type { Locale, LocalizedFaq } from "@/types";

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON serializado de forma segura
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: CONTACT_INFO.address,
  addressLocality: CONTACT_INFO.city,
  addressRegion: CONTACT_INFO.state,
  postalCode: CONTACT_INFO.zip,
  addressCountry: "US",
};

export const CLINIC_ID = `${SITE_CONFIG.baseUrl}/#clinic`;

// Solo perfiles reales de la clínica (los mismos que enlaza el sitio).
// Más el perfil de Facebook que enlaza la ficha de Google.
const SAME_AS = [
  SOCIAL_LINKS.facebook,
  SOCIAL_LINKS.instagram,
  "https://www.facebook.com/630614486793803",
];

// Valores de la enumeración MedicalSpecialty de schema.org.
const MEDICAL_SPECIALTY = [
  "https://schema.org/PrimaryCare",
  "https://schema.org/Gynecologic",
  "https://schema.org/LaboratoryScience",
];

export const serviceProcedureId = (slug: string) =>
  `${SITE_CONFIG.baseUrl}/services/${slug}#procedure`;

// Tipo de procedimiento por servicio; el resto es no invasivo.
const PROCEDURE_TYPE: Record<string, string> = {
  "cirugias-menores": "SurgicalProcedure",
  "drenaje-abscesos": "SurgicalProcedure",
  "unas-encarnadas": "SurgicalProcedure",
  "suturas-heridas": "SurgicalProcedure",
  "extraccion-implantes": "SurgicalProcedure",
  "examenes-sangre": "PercutaneousProcedure",
  "sueros-vitaminados": "PercutaneousProcedure",
  "vacunas": "PercutaneousProcedure",
  "prueba-tuberculosis": "PercutaneousProcedure",
};

/**
 * Nodo ligero de la clínica para todas las páginas menos la home: resuelve el
 * mismo @id sin repetir rating, reseñas y servicios en cada página.
 */
export async function JsonLdMedicalClinicRef() {
  const locale = (await getLocale()) as Locale;
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        "@id": CLINIC_ID,
        name: SITE_CONFIG.name,
        url: absoluteUrl("/", locale),
        telephone: CONTACT_INFO.phone,
        address: postalAddress,
        sameAs: SAME_AS,
      }}
    />
  );
}

/**
 * MedicalClinic completo, solo en la home (montado en la home). Async: trae rating y
 * reseñas 5★ en vivo (cache 7 días) con fallback a GOOGLE_REVIEWS_DATA.
 * availableService usa MedicalProcedure (sin price → no rompe validación).
 */
export async function JsonLdMedicalClinic({ locale }: { locale: Locale }) {
  const place = await getGooglePlaceData();
  const services = getAllServices().map((s) => getLocalizedService(s, locale));
  const homeUrl = absoluteUrl("/", locale);

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": CLINIC_ID,
    name: SITE_CONFIG.name,
    // Nombre exacto de la ficha de Google Business Profile.
    alternateName: "Clinica Hispana Nueva Salud Hammerly",
    description:
      locale === "en" ? SITE_CONFIG.descriptionEn : SITE_CONFIG.description,
    // Ubicación exacta para que buscadores e IAs no la mezclen con clínicas de nombre parecido.
    disambiguatingDescription:
      locale === "en"
        ? `Walk-in Hispanic clinic at ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, TX ${CONTACT_INFO.zip}. Phone ${CONTACT_INFO.phoneDisplay}. Not affiliated with other clinics of similar name.`
        : `Clínica hispana sin cita en ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, TX ${CONTACT_INFO.zip}. Teléfono ${CONTACT_INFO.phoneDisplay}. Sin relación con otras clínicas de nombre parecido.`,
    url: homeUrl,
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    image: `${SITE_CONFIG.baseUrl}${SITE_CONFIG.ogImage}`,
    logo: `${SITE_CONFIG.baseUrl}${SITE_CONFIG.logoUrl}`,
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    // Datos de la ficha de Google Business Profile.
    amenityFeature: [
      "Wheelchair-accessible entrance",
      "Wheelchair-accessible parking",
      "Wheelchair-accessible restroom",
      "On-site parking",
      "Free parking",
    ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: CONTACT_INFO.coordinates.lat,
      longitude: CONTACT_INFO.coordinates.lng,
    },
    hasMap: CONTACT_INFO.googleMapsUrl,
    // Áreas de servicio publicadas en la ficha de Google.
    areaServed: [
      { "@type": "City", name: "Houston, TX" },
      { "@type": "Place", name: "Spring Branch, Houston, TX" },
    ],
    availableLanguage: ["es", "en"],
    knowsLanguage: ["es", "en"],
    openingHoursSpecification: OPENING_HOURS.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${h.day}`,
      opens: h.opens,
      closes: h.closes,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: place.averageRating,
      reviewCount: place.totalReviews,
      bestRating: 5,
      worstRating: 1,
    },
    medicalSpecialty: MEDICAL_SPECIALTY,
    availableService: services.map((s) => ({
      "@type": "MedicalProcedure",
      "@id": serviceProcedureId(s.slug),
      name: s.title,
      url: absoluteUrl(`/services/${s.slug}`, locale),
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: locale === "en" ? "Medical Services" : "Servicios Médicos",
      itemListElement: services.map((s, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: { "@id": serviceProcedureId(s.slug) },
      })),
    },
    sameAs: SAME_AS,
  };

  if (place.reviews.length > 0) {
    data.review = place.reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
      },
      reviewBody: r.text,
    }));
  }

  return <JsonLd data={data} />;
}

export function JsonLdBreadcrumb({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: item.url,
        })),
      }}
    />
  );
}

// `provider` no es una propiedad de MedicalProcedure; la relación con la clínica
// va por el @id que la home lista en availableService.
export function JsonLdMedicalProcedure({
  slug,
  name,
  description,
  url,
  image,
}: {
  slug: string;
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "@id": serviceProcedureId(slug),
        name,
        description,
        url,
        mainEntityOfPage: url,
        procedureType: `https://schema.org/${PROCEDURE_TYPE[slug] ?? "NoninvasiveProcedure"}`,
        ...(image && { image: `${SITE_CONFIG.baseUrl}${image}` }),
      }}
    />
  );
}

export function JsonLdFaqPage({ faqs }: { faqs: LocalizedFaq[] }) {
  if (faqs.length === 0) return null;
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }}
    />
  );
}

export function JsonLdCollectionPage({
  name,
  description,
  url,
  items,
}: {
  name: string;
  description: string;
  url: string;
  items: { name: string; url: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name,
        description,
        url,
        mainEntity: {
          "@type": "ItemList",
          itemListElement: items.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.name,
            url: item.url,
          })),
        },
      }}
    />
  );
}
