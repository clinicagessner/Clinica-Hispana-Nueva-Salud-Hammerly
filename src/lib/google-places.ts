import { unstable_cache } from "next/cache";
import { GOOGLE_REVIEWS_DATA } from "@/lib/constants";

export interface GoogleReview {
  author: string;
  rating: number;
  text: string;
  relativeTime?: string;
  photoUrl?: string;
}

export interface GooglePlaceData {
  averageRating: number;
  totalReviews: number;
  reviews: GoogleReview[];
}

const FALLBACK: GooglePlaceData = {
  averageRating: GOOGLE_REVIEWS_DATA.averageRating,
  totalReviews: GOOGLE_REVIEWS_DATA.totalReviews,
  reviews: [],
};

/**
 * Trae rating + reseñas recientes de Google Places API (New).
 * Lanza error si la petición falla o si Places omite `reviews`: así
 * unstable_cache no guarda el fallo y sigue sirviendo las últimas reseñas
 * buenas mientras reintenta. La key vive solo en .env (server-side).
 */
async function fetchGooglePlaceData(): Promise<GooglePlaceData> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!apiKey || !placeId) return FALLBACK;

  const res = await fetch(
    `https://places.googleapis.com/v1/places/${placeId}`,
    {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "rating,userRatingCount,reviews",
        "Accept-Language": "es",
      },
      // unstable_cache maneja el cacheo; evitamos doble caché de fetch.
      cache: "no-store",
    },
  );
  if (!res.ok) throw new Error(`Google Places: HTTP ${res.status}`);
  const data = (await res.json()) as {
    rating?: number;
    userRatingCount?: number;
    reviews?: Array<{
      rating?: number;
      text?: { text?: string };
      originalText?: { text?: string };
      authorAttribution?: { displayName?: string; photoUri?: string };
      relativePublishTimeDescription?: string;
      publishTime?: string;
    }>;
  };

  if (!data.reviews) {
    // Places omite `reviews` (campo Enterprise) cuando el proyecto de la clave no tiene facturación.
    throw new Error("Google Places: la respuesta no incluye reviews; revisar facturación del proyecto de la API key");
  }

  // Los avatares generados por Google (usuarios sin foto de perfil) viven en
  // /a/ACg8oc…; las fotos reales subidas por el usuario viven en /a-/….
  // Solo usamos las reales; para el resto el sitio muestra iniciales de marca.
  const hasRealPhoto = (uri?: string) => Boolean(uri && uri.includes("/a-/"));

  const reviews: GoogleReview[] = (data.reviews ?? [])
    .filter((r) => (r.rating ?? 0) >= 5)
    .sort((a, b) => {
      // Primero autores con foto real; entre iguales, la más reciente.
      const photoDiff =
        Number(hasRealPhoto(b.authorAttribution?.photoUri)) -
        Number(hasRealPhoto(a.authorAttribution?.photoUri));
      if (photoDiff !== 0) return photoDiff;
      return (b.publishTime ?? "").localeCompare(a.publishTime ?? "");
    })
    .slice(0, 5)
    .map((r) => ({
      author: r.authorAttribution?.displayName ?? "Google",
      rating: r.rating ?? 5,
      text: r.text?.text ?? r.originalText?.text ?? "",
      relativeTime: r.relativePublishTimeDescription,
      photoUrl: hasRealPhoto(r.authorAttribution?.photoUri)
        ? r.authorAttribution?.photoUri
        : undefined,
    }))
    .filter((r) => r.text.length > 0);

  return {
    averageRating: data.rating ?? FALLBACK.averageRating,
    totalReviews: data.userRatingCount ?? FALLBACK.totalReviews,
    reviews,
  };
}

const getCachedGooglePlaceData = unstable_cache(
  fetchGooglePlaceData,
  ["google-place-data-v2"],
  { revalidate: 604800, tags: ["google-place-data-v2"] },
);

/**
 * Si la revalidación en segundo plano falla, Next sigue sirviendo el último
 * resultado bueno de la caché. Solo sin ningún resultado previo se usa el
 * fallback (rating y conteo, sin reseñas).
 */
export async function getGooglePlaceData(): Promise<GooglePlaceData> {
  try {
    return await getCachedGooglePlaceData();
  } catch (error) {
    console.warn(error instanceof Error ? error.message : error);
    return FALLBACK;
  }
}
