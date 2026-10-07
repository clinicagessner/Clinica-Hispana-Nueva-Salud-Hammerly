import type {
  NavLink,
  Promotion,
  Service,
  ServiceCategory,
} from "@/types";

// Normaliza la URL del sitio: añade https:// si falta el esquema y quita la
// barra final. Evita que un valor mal puesto en la env (p. ej.
// "clinicahispananhammerly.com" sin https) rompa `new URL()` en el build.
function normalizeBaseUrl(raw: string): string {
  const trimmed = raw.trim();
  const withScheme = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;
  return withScheme.replace(/\/+$/, "");
}

const SITE_URL = normalizeBaseUrl(
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.clinicahispananhammerly.com",
);

export const SITE_CONFIG = {
  name: "Clínica Hispana Nueva Salud Hammerly",
  shortName: "Nueva Salud Hammerly",
  tagline: "Centro médico 100% en español en Houston, TX",
  taglineEn: "Medical center 100% in Spanish in Houston, TX",
  description:
    "Clínica hispana en Houston, TX (Spring Branch): centro médico con atención 100% en español, sin cita previa y con precios accesibles. No necesitas seguro médico. Medicina familiar, ginecología, exámenes de inmigración, laboratorio y más.",
  descriptionEn:
    "Hispanic clinic in Houston, TX (Spring Branch): medical center with care 100% in Spanish, walk-ins welcome, no insurance needed. Family medicine, gynecology, immigration exams, lab work and more.",
  baseUrl: SITE_URL,
  locale: "es-MX",
  logoUrl: "/logo-nueva-salud.webp",
  ogImage: "/images/og/og-default.png",
} as const;

export const CONTACT_INFO = {
  address: "8538 Hammerly Blvd Suite B",
  city: "Houston",
  state: "TX",
  zip: "77055",
  phone: "+18322809555",
  phoneFormatted: "+1 (832) 280-9555",
  phoneDisplay: "(832) 280-9555",
  // WhatsApp — el de la ficha de Google, (832) 831-4016, compartido por varias
  // clínicas del grupo Nueva Salud: el mensaje prellenado (`whatsappMessage`)
  // nombra esta clínica y su calle para que quien conteste sepa de dónde viene.
  // Solo chat: nunca en tel:, NAP, schema ni listados.
  whatsapp: "+18328314016",
  whatsappFormatted: "+1 (832) 831-4016",
  email: "clinicahns4@gmail.com",
  // Horario según la ficha de Google (2026-10-02): lunes a sábado 9 AM - 9 PM, domingo 9 AM - 5 PM.
  hours: "Lunes a Sábado: 9:00 AM - 9:00 PM · Domingo: 9:00 AM - 5:00 PM",
  hoursEn: "Monday to Saturday: 9:00 AM - 9:00 PM · Sunday: 9:00 AM - 5:00 PM",
  hoursWeekday: "Lunes a Sábado: 9:00 AM - 9:00 PM",
  hoursWeekend: "Domingo: 9:00 AM - 5:00 PM",
  // Coordenadas exactas del listado de Google (Places API New).
  coordinates: { lat: 29.8114012, lng: -95.5000267 },
  // Place ID real del listado de Google (Places API New, jul 2026).
  googlePlaceId: "ChIJe8vz0gPFQIYR_09Ps_iQioU",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Cl%C3%ADnica+Hispana+Nueva+Salud+Hammerly&query_place_id=ChIJe8vz0gPFQIYR_09Ps_iQioU",
  // Enlace directo al cuadro de "escribir reseña" de Google (Place ID real).
  googleReviewUrl:
    "https://search.google.com/local/writereview?placeid=ChIJe8vz0gPFQIYR_09Ps_iQioU",
  googleMapsEmbed:
    "https://maps.google.com/maps?q=8538+Hammerly+Blvd+Suite+B,+Houston,+TX+77055&t=m&z=16&ie=UTF8&iwloc=&output=embed",
} as const;

// Horario estructurado para JSON-LD (openingHoursSpecification).
export const OPENING_HOURS = [
  { day: "Monday", opens: "09:00", closes: "21:00" },
  { day: "Tuesday", opens: "09:00", closes: "21:00" },
  { day: "Wednesday", opens: "09:00", closes: "21:00" },
  { day: "Thursday", opens: "09:00", closes: "21:00" },
  { day: "Friday", opens: "09:00", closes: "21:00" },
  { day: "Saturday", opens: "09:00", closes: "21:00" },
  { day: "Sunday", opens: "09:00", closes: "17:00" },
] as const;

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/ClinicaHispanaNuevaSaludHammerly",
  instagram: "https://www.instagram.com/clinicahispanahammerly",
} as const;

// Fallback de build para rating/reseñas (valores reales del listado de Google
// de Hammerly, Places API jul 2026). La data en vivo la trae
// getGooglePlaceData() cuando hay GOOGLE_PLACES_API_KEY + GOOGLE_PLACE_ID.
// Respaldo de Places (solo nota y conteo, sin reseñas): comprobado en la web en
// vivo el 2026-10-07 (4,9 con 339 reseñas).
export const GOOGLE_REVIEWS_DATA = {
  averageRating: 4.9,
  totalReviews: 339,
} as const;

// Navbar (header): sin "Sin cita".
export const NAV_LINKS: NavLink[] = [
  { key: "services", href: "/services" },
  { key: "promotions", href: "/promociones" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/#contacto" },
];

// Footer: incluye "Sin cita" (walk-in).
export const FOOTER_NAV_LINKS: NavLink[] = [
  { key: "services", href: "/services" },
  { key: "promotions", href: "/#promociones" },
  { key: "blog", href: "/blog" },
  { key: "walkIn", href: "/walk-in" },
  { key: "contact", href: "/#contacto" },
];

// Promociones / ofertas vigentes. Los flyers (ya optimizados a webp 1080x1350,
// 4:5) viven en /public/images/promotions/<slug>.webp. El precio está incrustado
// en el diseño del flyer; en datos se usa solo como dato de texto. Una sola
// fuente alimenta el carrusel de la home y la página /promociones.
// Redacción factual (sin claims médicos exagerados) por compliance de salud.
export const PROMOTIONS: Promotion[] = [
  {
    slug: "chequeo-completo-mujer",
    image: "/images/promotions/chequeo-completo-mujer.webp",
    price: "$79",
    order: 1,
    title: "Chequeo Completo de Mujer",
    blurb:
      "Prevención hoy, tranquilidad siempre. Un chequeo integral para cuidar tu salud femenina en una sola visita, con atención discreta y en español.",
    includes: [
      "Examen Papanicolau",
      "Examen de orina",
      "Orden de mamografía",
      "Consulta ginecológica",
    ],
    alt: "Flyer de la promoción Chequeo Completo de Mujer por $79 en Clínica Hispana Nueva Salud Hammerly: examen Papanicolau, examen de orina, orden de mamografía y consulta ginecológica.",
    titleEn: "Complete Women's Checkup",
    blurbEn:
      "Prevention today, peace of mind always. A comprehensive checkup to care for your health in a single visit, with discreet care in Spanish.",
    includesEn: [
      "Pap smear",
      "Urine test",
      "Mammogram order",
      "Gynecological consultation",
    ],
    altEn: "Flyer for the Complete Women's Checkup promotion for $79 at Clínica Hispana Nueva Salud Hammerly: Pap smear, urine test, mammogram order and gynecological consultation.",
  },
  {
    slug: "chequeo-completo-hombres",
    image: "/images/promotions/chequeo-completo-hombres.webp",
    price: "$89",
    order: 2,
    title: "Chequeo Completo para Hombres",
    blurb:
      "Prevenir hoy para vivir mejor. Un chequeo integral pensado para el hombre: revisa tu próstata, tu testosterona y tu salud general en una sola visita.",
    includes: [
      "Examen de orina",
      "Examen de próstata (prevención de cáncer)",
      "Examen de testosterona",
      "Consulta médica",
    ],
    alt: "Flyer de la promoción Chequeo Completo para Hombres por $89 en Clínica Hispana Nueva Salud Hammerly: examen de orina, examen de próstata, examen de testosterona y consulta médica.",
    titleEn: "Complete Men's Checkup",
    blurbEn:
      "Prevent today to live better. A comprehensive checkup designed for men: prostate, testosterone and overall health reviewed in a single visit.",
    includesEn: [
      "Urine test",
      "Prostate exam (cancer prevention)",
      "Testosterone test",
      "Medical consultation",
    ],
    altEn: "Flyer for the Complete Men's Checkup promotion for $89 at Clínica Hispana Nueva Salud Hammerly: urine test, prostate exam, testosterone test and medical consultation.",
  },
  {
    slug: "examen-general-sangre-vitaminas",
    image: "/images/promotions/examen-general-sangre-vitaminas.webp",
    price: "$99",
    order: 3,
    title: "Examen General de Sangre + Vitaminas",
    blurb:
      "Evaluación completa de tu salud para detectar a tiempo, con dos dosis de vitamina que impulsan tu energía. Más energía, más vida, ¡mejor tú!",
    includes: [
      "Examen general de sangre",
      "2 dosis de vitamina para la energía",
      "Consulta médica con revisión de resultados",
    ],
    alt: "Flyer de la promoción Examen General de Sangre más Vitaminas por $99 en Clínica Hispana Nueva Salud Hammerly: examen general de sangre, 2 dosis de vitamina para la energía y consulta médica.",
    titleEn: "Complete Blood Panel + Vitamins",
    blurbEn:
      "A complete health evaluation to detect issues early, plus two vitamin doses to boost your energy. More energy, more life, a better you!",
    includesEn: [
      "Complete blood panel",
      "2 vitamin doses for energy",
      "Medical consultation with results review",
    ],
    altEn: "Flyer for the Complete Blood Panel plus Vitamins promotion for $99 at Clínica Hispana Nueva Salud Hammerly: complete blood panel, 2 vitamin doses for energy and medical consultation.",
  },
  {
    slug: "examen-testosterona",
    image: "/images/promotions/examen-testosterona.webp",
    price: "$79",
    order: 4,
    title: "Examen de Testosterona",
    blurb:
      "¿Cansado, con menos energía o menos deseo sexual? Revisa tu testosterona: examen de testosterona más examen de orina, con consulta médica gratis, por solo $79 (precio regular $220).",
    includes: [
      "Examen de testosterona",
      "Examen de orina",
      "Consulta médica gratis",
    ],
    alt: "Flyer de la promoción Examen de Testosterona por $79 en Clínica Hispana Nueva Salud Hammerly: examen de testosterona, examen de orina y consulta médica gratis.",
    titleEn: "Testosterone Test",
    blurbEn:
      "Tired, low on energy or with less sexual desire? Check your testosterone: testosterone test plus a urine test, with a free medical consultation, for only $79 (regular price $220).",
    includesEn: [
      "Testosterone test",
      "Urine test",
      "Free medical consultation",
    ],
    altEn:
      "Flyer for the Testosterone Test promotion for $79 at Clínica Hispana Nueva Salud Hammerly: testosterone test, urine test and free medical consultation.",
  },
  {
    slug: "chequeo-mujer-ultrasonido",
    image: "/images/promotions/chequeo-mujer-ultrasonido.webp",
    price: "$179",
    order: 5,
    title: "Chequeo de la Mujer con Ultrasonido",
    blurb:
      "¿Hace cuánto no revisas tu salud femenina? Chequeo completo con ultrasonido pélvico, papanicolaou y examen de orina, más consulta médica gratis, por solo $179 (precio regular $300).",
    includes: [
      "Ultrasonido pélvico",
      "Papanicolaou",
      "Examen de orina",
      "Consulta médica gratis",
    ],
    alt: "Flyer de la promoción Chequeo de la Mujer con Ultrasonido por $179 en Clínica Hispana Nueva Salud Hammerly: ultrasonido pélvico, papanicolaou, examen de orina y consulta médica gratis.",
    titleEn: "Women's Checkup with Ultrasound",
    blurbEn:
      "How long has it been since you checked your women's health? Complete checkup with a pelvic ultrasound, Pap smear and urine test, plus a free medical consultation, for only $179 (regular price $300).",
    includesEn: [
      "Pelvic ultrasound",
      "Pap smear",
      "Urine test",
      "Free medical consultation",
    ],
    altEn:
      "Flyer for the Women's Checkup with Ultrasound promotion for $179 at Clínica Hispana Nueva Salud Hammerly: pelvic ultrasound, Pap smear, urine test and free medical consultation.",
  },
];

export const SERVICE_CATEGORIES: {
  value: ServiceCategory;
  label: string;
  labelEn: string;
}[] = [
  { value: "medicina-general", label: "Medicina general", labelEn: "General medicine" },
  { value: "salud-mujer", label: "Salud de la mujer", labelEn: "Women's health" },
  { value: "examenes", label: "Exámenes y certificados", labelEn: "Exams & certificates" },
  { value: "laboratorio", label: "Laboratorio y pruebas", labelEn: "Lab & testing" },
  { value: "tratamientos", label: "Tratamientos", labelEn: "Treatments" },
];


export const SERVICES: Service[] = [
  {
    slug: "condiciones-cronicas",
    order: 1,
    category: "medicina-general",
    icon: "Activity",
    highlighted: true,
    title: "Control de Diabetes, Hipertensión y Colesterol",
    titleEn: "Diabetes, Hypertension & Cholesterol Care",
    shortDescription:
      "Exámenes y control de diabetes, presión alta y dislipidemias (colesterol y triglicéridos), con seguimiento cercano.",
    shortDescriptionEn:
      "Testing and management of diabetes, high blood pressure and dyslipidemia (cholesterol and triglycerides), with close follow-up.",
    description:
      "Control de diabetes, hipertensión y dislipidemias en Houston, TX. Laboratorio y seguimiento en español, con precios accesibles.",
    descriptionEn:
      "Diabetes, hypertension and dyslipidemia management in Houston, TX. Lab work and follow-up in Spanish, with affordable pricing.",
    keywords: [
      "control de diabetes houston",
      "doctor diabetes español houston",
      "control de presion alta houston",
      "colesterol alto tratamiento houston",
    ],
    keywordsEn: [
      "diabetes management houston",
      "high blood pressure doctor houston",
      "cholesterol management houston",
      "chronic disease clinic houston",
    ],
    features: [
      "Diagnóstico y monitoreo de laboratorio",
      "Control de glucosa, presión y colesterol",
      "Ajuste de medicamentos",
      "Plan de alimentación y hábitos",
    ],
    featuresEn: [
      "Diagnosis and lab monitoring",
      "Glucose, blood pressure and cholesterol control",
      "Medication adjustment",
      "Nutrition and lifestyle plan",
    ],
    longDescription: `En Clínica Hispana Nueva Salud Hammerly, en Spring Branch, llevamos el control de diabetes, hipertensión y colesterol de adultos que necesitan vigilar sus números con regularidad. Sirve tanto a quien ya tiene diagnóstico y toma tratamiento como a quien sospecha que algo anda alto y nunca se ha medido en Houston.

## ¿Qué números vigilamos en cada visita de control?

- **Azúcar en sangre:** la glucosa en ayunas y la hemoglobina A1c, que muestra tu promedio de un periodo largo y no solo el valor de esa mañana.
- **Presión arterial:** la tomamos contigo sentado, en reposo y con el brazo apoyado, para que la cifra no salga alterada por la caminata desde el carro.
- **Perfil de lípidos:** colesterol total, LDL, HDL y triglicéridos, procesados en el laboratorio de la clínica.
- **Riñones y orina:** cuando el equipo médico lo considera útil, porque la diabetes y la presión alta los desgastan sin avisar.
- **Peso y cintura:** dos medidas sencillas que dicen si el plan de alimentación va dando fruto.

## ¿Cómo te preparas para el análisis de control?

Si te toca glucosa en ayunas o perfil de lípidos, llega sin desayunar; el agua sí está permitida. Las pastillas de la presión tómalas como siempre, salvo que el equipo te haya indicado otra cosa. Mete en una bolsa las cajas de todas tus medicinas, incluidas las vitaminas y los remedios naturales, y si usas glucómetro o monitor de presión en casa, trae tus lecturas apuntadas en una libreta o en el teléfono.

## ¿Qué pasa cuando tus resultados están listos?

1. Te avisamos y repasamos cada valor contigo, comparándolo con tu control anterior.
2. El equipo médico de la clínica decide si tu tratamiento se queda igual, se ajusta o se cambia.
3. Te llevas metas concretas: qué cambiar en el plato, cuánto moverte y cuándo volver a medirte.
4. La farmacia de la clínica te entrega los medicamentos indicados en la consulta.

## ¿Por qué no alcanza con sentirse bien?

La glucosa alta, la presión elevada y el colesterol casi nunca duelen. Por eso mucha gente suspende la pastilla cuando "ya se siente bien", mientras el daño avanza en silencio sobre el corazón, los riñones y la vista. Medirte con constancia es la única manera de comprobar que el tratamiento funciona. Si hace falta mirar más a fondo, el equipo puede pedir un [electrocardiograma](/services/electrocardiograma) o [análisis de sangre](/services/examenes-sangre) adicionales.

¿Te toca revisar tu diabetes, tu presión o tu colesterol? Pasa por Hammerly Blvd cualquier día de la semana o llámanos para saber qué traer a tu control.`,
    longDescriptionEn: `At Clínica Hispana Nueva Salud Hammerly in Spring Branch, we manage diabetes, high blood pressure and cholesterol for adults who need to keep an eye on their numbers. It works for people already diagnosed and on medication, and for anyone in Houston who suspects something is running high but has never been checked.

## Which numbers do we track at each check-in?

- **Blood sugar:** fasting glucose plus hemoglobin A1c, which reflects your average over a long stretch rather than just that morning's reading.
- **Blood pressure:** taken while you sit, rested, with your arm supported, so the walk in from the parking lot doesn't skew it.
- **Lipid panel:** total cholesterol, LDL, HDL and triglycerides, run in the clinic's own lab.
- **Kidneys and urine:** when the medical team finds it useful, since diabetes and high blood pressure wear them down quietly.
- **Weight and waistline:** two simple measurements that show whether your eating plan is paying off.

## How should you get ready for your follow-up labs?

If fasting glucose or a lipid panel is on the list, skip breakfast; plain water is fine. Keep taking your blood pressure pills as usual unless the team told you otherwise. Put the boxes of every medicine you take in a bag, vitamins and herbal remedies included, and if you own a glucose meter or home blood pressure cuff, bring your logged readings on paper or on your phone.

## What happens once your results come back?

1. We let you know they're in and go over each value with you, side by side with your previous check.
2. The clinic's medical team decides whether your treatment stays the same, gets adjusted or changes.
3. You leave with concrete goals: what to swap on your plate, how much to move and when to measure again.
4. The clinic pharmacy hands you the medications prescribed during the visit.

## Why isn't feeling fine enough?

Elevated sugar, pressure or lipids almost never announce themselves with pain. That's why so many people stop their pills once they "feel better" while damage keeps building in the heart, kidneys and eyes. Regular measurements are the only way to confirm your treatment is working. When a closer look is needed, the team may order an [EKG](/en/services/electrocardiograma) or additional [blood work](/en/services/examenes-sangre).

Due for a diabetes, blood pressure or cholesterol check? Stop by our Hammerly Blvd office any day of the week, or call us to find out what to bring.`,
  },
  {
    slug: "tiroides",
    order: 2,
    category: "medicina-general",
    icon: "Thermometer",
    title: "Exámenes y Tratamiento de la Tiroides",
    titleEn: "Thyroid Testing & Treatment",
    shortDescription:
      "Diagnóstico y tratamiento de enfermedades de la tiroides (hipotiroidismo e hipertiroidismo) con seguimiento en español.",
    shortDescriptionEn:
      "Diagnosis and treatment of thyroid conditions (hypothyroidism and hyperthyroidism) with follow-up in Spanish.",
    description:
      "Exámenes y tratamiento de la tiroides en Houston, TX. Pruebas de laboratorio y control en español, con precios accesibles.",
    descriptionEn:
      "Thyroid testing and treatment in Houston, TX. Lab tests and follow-up in Spanish, with affordable pricing.",
    keywords: [
      "tiroides houston",
      "examen de tiroides houston",
      "hipotiroidismo tratamiento houston",
      "doctor tiroides español houston",
    ],
    keywordsEn: [
      "thyroid testing houston",
      "thyroid doctor houston",
      "hypothyroidism treatment houston",
      "thyroid clinic houston",
    ],
    features: [
      "Pruebas de función tiroidea (TSH, T3, T4)",
      "Diagnóstico de hipo e hipertiroidismo",
      "Tratamiento y ajuste de medicamentos",
      "Seguimiento en español",
    ],
    featuresEn: [
      "Thyroid function tests (TSH, T3, T4)",
      "Diagnosis of hypo- and hyperthyroidism",
      "Treatment and medication adjustment",
      "Follow-up in Spanish",
    ],
    longDescription: `La consulta de tiroides de Clínica Hispana Nueva Salud Hammerly, en Spring Branch, sirve para averiguar si esa glándula del cuello trabaja de más o de menos. Está pensada para adultos de Houston con cansancio, cambios de peso o de ánimo sin explicación, y para quienes ya toman tratamiento tiroideo y necesitan revisarlo.

## ¿Qué señales hacen sospechar de la tiroides?

Cuando la glándula se queda corta (**hipotiroidismo**), el cuerpo entero parece ir en cámara lenta: sueño aunque hayas dormido, piel reseca, estreñimiento, frío cuando los demás están cómodos y kilos que suben sin comer más. Cuando se acelera (**hipertiroidismo**) pasa lo contrario: el corazón late fuerte en reposo, tiemblan las manos, sobra el calor, cuesta dormir y bajas de peso sin proponértelo. Muchas personas atribuyen estas molestias al estrés o a la edad durante mucho tiempo antes de medirse.

## ¿Qué miden la TSH, la T3 y la T4?

La **TSH** es la hormona con la que el cerebro le ordena a la tiroides que produzca; suele ser el primer valor que se revisa. La **T4** y la **T3** son las hormonas que la propia tiroides fabrica, y ayudan a precisar el diagnóstico. Todo sale de una sola muestra de sangre que se toma y procesa en el laboratorio de la clínica. Avisa si tomas suplementos de biotina, porque pueden alterar algunos resultados, y pregunta antes de la extracción si debes tomar tu pastilla de tiroides antes o después.

## ¿Cómo se afina el tratamiento tiroideo con los controles?

1. El equipo médico de la clínica interpreta tus valores junto con tus síntomas y tu historia.
2. Si hay un desequilibrio, te explica el tratamiento y la farmacia de la clínica te entrega lo indicado.
3. Tras un periodo de prueba, repites el análisis para comprobar si la dosis se quedó corta o se pasó.
4. Una vez estable, los controles se espacian y te avisamos cuándo te toca el siguiente.

Si en la consulta aparece un nódulo u otro hallazgo que necesita más estudio, se orienta la referencia al especialista como parte del seguimiento. Como la tiroides suele convivir con otras condiciones, puedes revisar en la misma visita tu glucosa y tu colesterol dentro del [control de condiciones crónicas](/services/condiciones-cronicas) o ampliar tus [análisis de sangre](/services/examenes-sangre).

Nuestra sede de Hammerly Blvd recibe pacientes de tiroides los siete días de la semana, también por la tarde.`,
    longDescriptionEn: `The thyroid visit at Clínica Hispana Nueva Salud Hammerly in Spring Branch is meant to find out whether that small gland in your neck is working too hard or not hard enough. It's for adults in Houston dealing with unexplained tiredness, weight shifts or mood changes, and for people already on thyroid medication who need it reviewed.

## What signs point to a thyroid problem?

When the gland falls short (**hypothyroidism**), your whole body seems to run in slow motion: sleepy after a full night, dry skin, constipation, chilly while everyone else is comfortable, and pounds that creep on without eating more. When it speeds up (**hyperthyroidism**), it's the reverse: a pounding heart at rest, shaky hands, feeling overheated, trouble sleeping and weight loss you didn't plan. Many people blame stress or age for these complaints for a long time before getting tested.

## What do TSH, T3 and T4 tell us?

**TSH** is the hormone your brain uses to tell the thyroid to get to work, and it's usually the first value checked. **T4** and **T3** are the hormones the thyroid itself makes, and they help sharpen the diagnosis. All of it comes from one blood draw collected and processed in the clinic's lab. Mention any biotin supplements, since they can throw off some results, and ask before the draw whether to take your thyroid pill before or after.

## How is treatment fine-tuned over time?

1. The clinic's medical team reads your values together with your symptoms and history.
2. If something is off balance, they walk you through the treatment and the clinic pharmacy provides what was prescribed.
3. After a trial period you repeat the test to see whether the dose falls short or overshoots.
4. Once you're stable, checks are spaced out and we remind you when the next one is due.

If the exam turns up a nodule or another finding that needs a closer look, a referral to the right specialist is arranged as part of your follow-up. Because thyroid issues often travel with other conditions, you can also check your glucose and cholesterol through [chronic condition care](/en/services/condiciones-cronicas) or expand your [blood work](/en/services/examenes-sangre).

Our Hammerly Blvd office sees thyroid patients seven days a week, evenings included.`,
  },
  {
    slug: "alergias",
    order: 3,
    category: "medicina-general",
    icon: "Leaf",
    title: "Exámenes y Tratamiento de Alergias",
    titleEn: "Allergy Testing & Treatment",
    shortDescription:
      "Evaluación y tratamiento de alergias estacionales, respiratorias y de la piel, con atención en español.",
    shortDescriptionEn:
      "Evaluation and treatment of seasonal, respiratory and skin allergies, with care in Spanish.",
    description:
      "Exámenes y tratamiento de alergias en Houston, TX. Diagnóstico y manejo en español, con precios accesibles.",
    descriptionEn:
      "Allergy testing and treatment in Houston, TX. Diagnosis and management in Spanish, with affordable pricing.",
    keywords: [
      "alergias houston",
      "tratamiento de alergias houston",
      "doctor de alergias español houston",
      "examen de alergias houston",
    ],
    keywordsEn: [
      "allergy treatment houston",
      "allergy testing houston",
      "allergy doctor houston",
      "allergy clinic houston",
    ],
    features: [
      "Evaluación de síntomas y desencadenantes",
      "Tratamiento de alergias respiratorias y de piel",
      "Manejo de rinitis y congestión",
      "Atención en español",
    ],
    featuresEn: [
      "Evaluation of symptoms and triggers",
      "Treatment of respiratory and skin allergies",
      "Management of rhinitis and congestion",
      "Care in Spanish",
    ],
    longDescription: `En Clínica Hispana Nueva Salud Hammerly, en Spring Branch, atendemos alergias que se notan en la nariz, los ojos o la piel: estornudos en cadena, picazón, ronchas o congestión que regresa cada temporada en Houston. Recibimos a niños y adultos que quieren entender qué les provoca la reacción y cómo calmarla sin vivir a base de pañuelos.

## ¿Qué te preguntamos para dar con el desencadenante?

La pista casi siempre está en tu rutina, así que la consulta empieza con preguntas muy concretas:

- ¿Empeora dentro de casa, en el trabajo o cuando cortas el pasto?
- ¿Hay perros, gatos o alfombras viejas donde duermes?
- ¿Coincide con los meses de polen, con lluvias y humedad o con manchas de moho en el baño?
- ¿Cambiaste de detergente, jabón, crema o perfume poco antes de que empezara?
- ¿Probaste un alimento o un medicamento nuevo?

Con tus respuestas y la revisión física, el equipo médico de la clínica decide si hace falta algún análisis de laboratorio y qué tratamiento probar primero.

## ¿Cómo se calman la nariz tapada y los ojos llorosos?

Para la rinitis alérgica suelen usarse antihistamínicos, aerosoles nasales o gotas para los ojos; el equipo elige la combinación según tu edad, tus otros medicamentos y si el sueño durante el día es un problema para tu trabajo. La farmacia de la clínica te entrega lo indicado en la consulta, y además te damos ideas prácticas: lavar la ropa de cama con agua caliente, cerrar ventanas en días de mucho polen y ducharte al volver del jardín.

## ¿Qué hacemos cuando la reacción sale en la piel?

Las ronchas que aparecen y desaparecen, el sarpullido donde tocó un producto nuevo o el eccema que pica de noche necesitan una revisión de cerca. Miramos la forma y el lugar de las lesiones, preguntamos qué cambió en tu entorno y el equipo indica cremas o medicamentos por boca según el caso. Si la tos acompaña a la alergia, vale la pena revisar también las [enfermedades respiratorias](/services/enfermedades-respiratorias).

## ¿Cuándo no debes esperar a la consulta?

Si se te hinchan los labios, la lengua o la garganta, o te cuesta respirar después de una picadura, un alimento o un medicamento, llama al 911: es una emergencia y no puede esperar.

Para lo demás, trae tus antialérgicos actuales a Hammerly Blvd; atendemos sin cita hasta la noche de lunes a sábado.`,
    longDescriptionEn: `At Clínica Hispana Nueva Salud Hammerly in Spring Branch, we treat allergies that show up in your nose, eyes or skin: sneezing fits, itching, hives or congestion that comes back every Houston season. We see children and adults who want to understand what sets off their reaction and how to calm it down without living on tissues.

## What do we ask to track down the trigger?

The clue is almost always in your routine, so the visit starts with very specific questions:

- Is it worse at home, at work or when you mow the lawn?
- Are there dogs, cats or old carpet where you sleep?
- Does it line up with pollen months, rainy humid stretches or mold spots in the bathroom?
- Did you switch detergent, soap, lotion or perfume shortly before it started?
- Did you try a new food or medication?

With your answers and a physical exam, the clinic's medical team decides whether any lab work is needed and which treatment to try first.

## How do we ease a stuffy nose and watery eyes?

Allergic rhinitis is usually handled with antihistamines, nasal sprays or eye drops; the team picks the combination based on your age, your other medications and whether daytime drowsiness would get in the way of your job. The clinic pharmacy provides whatever is prescribed, and we add practical tips: wash bedding in hot water, keep windows shut on high-pollen days and shower after yard work.

## What do we do when the reaction shows up on your skin?

Hives that come and go, a rash where a new product touched you, or eczema that itches at night all deserve a close look. We check the shape and location of the spots, ask what changed around you, and the team recommends creams or oral medication depending on the case. If a cough comes along with the allergy, it's worth looking into [respiratory illness care](/en/services/enfermedades-respiratorias) as well.

## When shouldn't you wait for a regular visit?

If your lips, tongue or throat swell, or breathing gets hard after a sting, a food or a medication, call 911. That's an emergency and can't wait.

For everything else, bring your current allergy medicine to Hammerly Blvd; we take walk-ins into the evening Monday through Saturday.`,
  },
  {
    slug: "enfermedades-respiratorias",
    order: 4,
    category: "medicina-general",
    icon: "Wind",
    title: "Pruebas de Flu y COVID y Enfermedades Respiratorias",
    titleEn: "Flu & COVID Testing and Respiratory Illness Care",
    shortDescription:
      "Pruebas de detección de influenza (flu) y COVID, y tratamiento de gripe, tos y enfermedades respiratorias.",
    shortDescriptionEn:
      "Influenza (flu) and COVID detection testing, plus treatment of flu, cough and respiratory illnesses.",
    description:
      "Pruebas de flu y COVID y tratamiento de enfermedades respiratorias en Houston, TX. Sin cita previa, en español.",
    descriptionEn:
      "Flu and COVID testing and respiratory illness treatment in Houston, TX. Walk-ins welcome, in Spanish.",
    keywords: [
      "prueba de covid houston",
      "prueba de flu houston",
      "tratamiento gripe houston",
      "enfermedades respiratorias houston",
    ],
    keywordsEn: [
      "covid test houston",
      "flu test houston",
      "flu treatment houston",
      "respiratory illness houston",
    ],
    features: [
      "Prueba rápida de flu y COVID",
      "Diagnóstico el mismo día",
      "Tratamiento de gripe, tos y bronquitis",
      "Atención sin cita en español",
    ],
    featuresEn: [
      "Rapid flu and COVID testing",
      "Same-day diagnosis",
      "Treatment of flu, cough and bronchitis",
      "Walk-in care in Spanish",
    ],
    longDescription: `Si tienes fiebre, tos o dolor de garganta y quieres saber si es flu o COVID, en Clínica Hispana Nueva Salud Hammerly, en Spring Branch, hacemos pruebas rápidas de ambos virus y revisamos cómo están tus pulmones. Atendemos a niños y adultos de Houston con gripe, bronquitis y otras infecciones de las vías respiratorias.

## ¿Cómo se toma la muestra para flu y COVID?

1. Medimos tu temperatura y tus signos vitales y escuchamos tus pulmones.
2. Con un hisopo delgado tomamos una muestra de la nariz; se siente incómodo unos segundos, pero no duele.
3. La muestra se procesa en la clínica con pruebas rápidas.
4. Al leer la prueba, el equipo médico de la clínica te dice si salió flu, COVID o ninguno de los dos, y con eso arma tu plan.

## ¿Por qué conviene saber qué virus es?

Porque el plan cambia. Para la influenza existen antivirales que funcionan mejor cuando se empiezan pronto, al inicio de los síntomas; por eso no conviene esperar a ver si se pasa solo. Con COVID, el equipo revisa si tienes factores de riesgo que hagan recomendable algún tratamiento específico. Y en ambos casos te explicamos cómo cuidar a tu familia en casa para que el contagio no pase de uno a otro.

## ¿Qué otras molestias respiratorias revisamos?

- Tos que se alarga después de un resfriado, con flemas o silbido en el pecho
- Bronquitis y molestias al respirar hondo
- Senos nasales tapados con dolor en la cara o los dientes de arriba
- Dolor de garganta con placas blancas, que puede requerir la [prueba de strep](/services/prueba-strep)
- Crisis de tos en personas con asma o alergias, que también se tratan en [alergias](/services/alergias)

Los antibióticos solo sirven contra bacterias, así que el equipo médico los indica únicamente cuando hay una infección bacteriana. La farmacia de la clínica te entrega los medicamentos indicados en la consulta, y también productos de venta libre para la fiebre y la congestión.

## ¿Qué señales piden ir a emergencias?

Labios o uñas morados, falta de aire en reposo, dolor fuerte en el pecho, confusión o un bebé que no quiere comer ni despierta bien: ante cualquiera de estas, llama al 911 o acude a una sala de emergencias.

Para todo lo demás, no esperes a que la tos empeore: ven hoy mismo a Hammerly Blvd, abrimos también los domingos.`,
    longDescriptionEn: `If you're running a fever, coughing or nursing a sore throat and want to know whether it's flu or COVID, Clínica Hispana Nueva Salud Hammerly in Spring Branch runs rapid tests for both viruses and checks how your lungs sound. We treat children and adults across Houston for flu, bronchitis and other airway infections.

## How is the flu and COVID sample collected?

1. We take your temperature and vital signs and listen to your lungs.
2. A thin swab collects a sample from your nose; it feels odd for a few seconds but doesn't hurt.
3. The sample is run in the clinic with rapid tests.
4. With the result in hand, the medical team tells you which virus it is and what treatment fits.

## Why does it matter which virus you have?

Because the plan changes. Flu has antiviral medicines that work best when started early, right as symptoms begin, so waiting to see whether it passes isn't a great idea. With COVID, the team checks for risk factors that might call for a specific treatment. Either way, we explain how to protect the rest of your household so the bug doesn't make the rounds.

## What other breathing problems do we look at?

- A cough that lingers after a cold, with phlegm or wheezing
- Bronchitis and discomfort when you take a deep breath
- Blocked sinuses with pain in your face or upper teeth
- A sore throat with white patches, which may call for a [strep test](/en/services/prueba-strep)
- Coughing spells in people with asthma or allergies, also handled under [allergy care](/en/services/alergias)

Antibiotics only work on bacteria, so the medical team prescribes them only when there's a bacterial infection. The clinic pharmacy provides the medications prescribed during your visit, along with over-the-counter products for fever and congestion.

## Which warning signs mean going to the ER?

Blue lips or fingernails, shortness of breath at rest, strong chest pain, confusion, or a baby who won't feed or is hard to wake: for any of these, call 911 or head to an emergency room.

For everything else, don't let the cough drag on. Come see us at Hammerly Blvd today; we're open Sundays too.`,
  },
  {
    slug: "examen-fisico-escolar",
    order: 5,
    category: "examenes",
    icon: "ClipboardList",
    title: "Chequeos Físicos Escolares y Deportivos",
    titleEn: "School & Sports Physical Exams",
    metaTitle: "Examen Físico Escolar y Deportivo en Houston",
    metaTitleEn: "School & Sports Physicals in Houston",
    shortDescription:
      "Exámenes físicos para la escuela y los deportes, rápidos y con los formularios completados.",
    shortDescriptionEn:
      "Physical exams for school and sports, fast and with the forms completed.",
    description:
      "Chequeos físicos escolares y deportivos en Houston, TX. Rápidos, en español y con precios accesibles.",
    descriptionEn:
      "School and sports physical exams in Houston, TX. Fast, in Spanish, with affordable pricing.",
    keywords: [
      "examen fisico escolar houston",
      "physical para la escuela houston",
      "examen deportivo houston",
      "chequeo escolar houston",
    ],
    keywordsEn: [
      "school physical houston",
      "sports physical houston",
      "school physical exam houston",
      "kids physical houston",
    ],
    features: [
      "Examen físico completo",
      "Revisión de signos vitales",
      "Formularios escolares y deportivos llenados",
      "Atención en español",
    ],
    featuresEn: [
      "Complete physical exam",
      "Vital-signs check",
      "School and sports forms completed",
      "Care in Spanish",
    ],
    longDescription: `El chequeo físico escolar y deportivo de Clínica Hispana Nueva Salud Hammerly, en Spring Branch, comprueba que tu hijo esté en condiciones de estudiar, entrar a un equipo o ir a un campamento. Lo hacemos para niños y adolescentes de Houston y completamos el formulario que te pidió la escuela, la liga o el entrenador.

## ¿Qué conviene meter en la mochila antes de venir?

- El formulario de la escuela o de la liga, con la parte de los padres ya llenada y firmada
- El registro de vacunas, en papel o en foto
- Los nombres de los medicamentos que toma y de cualquier alergia conocida
- Los lentes, si los usa, para la prueba de visión
- Ropa cómoda y tenis, porque habrá que moverse un poco

Si el estudiante es menor de edad, debe venir con su madre, padre o tutor legal.

## ¿Qué revisa el equipo médico durante el examen?

Empezamos por lo que se mide: peso, estatura, presión arterial y pulso. Luego el equipo médico de la clínica escucha el corazón y los pulmones, revisa la columna, las articulaciones y la fuerza de piernas y brazos, y hace una prueba sencilla de visión. También pregunta por desmayos durante el ejercicio, dolor de pecho al correr o familiares que hayan tenido problemas del corazón a temprana edad, porque esas respuestas son las que más pesan en un permiso deportivo.

## ¿Y si falta alguna vacuna en el registro?

Es frecuente descubrirlo justo al llenar los papeles. Revisamos el registro contigo y te orientamos en nuestro servicio de [vacunas](/services/vacunas) sobre las que pide la escuela para la edad de tu hijo, para que el trámite no se quede a medias.

## ¿Qué pasa si el chequeo encuentra algo?

La mayoría de los niños sale con el formulario firmado y listo. Si aparece un soplo, una presión más alta de lo esperado o una molestia al hacer ejercicio, el equipo puede pedir un [electrocardiograma](/services/electrocardiograma) en la clínica o, si el resultado lo requiere, se orienta la referencia al especialista antes de autorizar el deporte. Lo importante es que tu hijo juegue seguro.

Las tardes entre semana y los sábados en Hammerly Blvd son buen momento para traer a los muchachos sin faltar a clases.`,
    longDescriptionEn: `The school and sports physical at Clínica Hispana Nueva Salud Hammerly in Spring Branch checks that your child is ready to learn, join a team or head off to camp. We do it for kids and teens across Houston and fill out the form the school, league or coach asked you for.

## What should you pack before coming in?

- The school or league form, with the parent section already filled in and signed
- The vaccination record, on paper or as a photo
- The names of any medications they take and any known allergies
- Their glasses, if they wear them, for the vision check
- Comfortable clothes and sneakers, since they'll need to move around a bit

If the student is a minor, a parent or legal guardian has to come along.

## What does the medical team check during the exam?

We start with the measurements: weight, height, blood pressure and pulse. Then the clinic's medical team listens to the heart and lungs, checks the spine, joints and strength in the arms and legs, and runs a simple vision screen. They also ask about fainting during exercise, chest pain while running, or relatives who had heart problems at a young age, because those answers carry the most weight in a sports clearance.

## What if the vaccine record is missing a shot?

It often comes up right when you're filling out the paperwork. We go over the record with you and point you to our [vaccination service](/en/services/vacunas) for the shots the school requires at your child's age, so the paperwork doesn't stall halfway.

## What happens if the physical turns something up?

Most kids walk out with a signed form ready to go. If there's a heart murmur, higher-than-expected blood pressure or discomfort during exercise, the team may order an [EKG](/en/services/electrocardiograma) at the clinic or, when the result calls for it, arrange a referral to the right specialist before clearing them for sports. What matters is that your child plays safely.

Weekday evenings and Saturdays at our Hammerly Blvd clinic are a good time to bring the kids in without missing class.`,
  },
  {
    slug: "ginecologia",
    order: 6,
    category: "salud-mujer",
    icon: "Flower2",
    highlighted: true,
    title: "Ginecología: Papanicolaou, Cultivos y Chequeo",
    titleEn: "Gynecology: Pap Smear, Cultures & Checkup",
    metaTitle: "Ginecología en Houston: Papanicolaou y Chequeo",
    metaTitleEn: "Gynecology in Houston: Pap Smear & Checkup",
    shortDescription:
      "Papanicolaou, cultivos vaginales y tratamiento de infecciones vaginales, con privacidad y en español.",
    shortDescriptionEn:
      "Pap smear, vaginal cultures and treatment of vaginal infections, with privacy and in Spanish.",
    description:
      "Ginecología en Houston, TX, en una clínica hispana: papanicolaou, cultivos vaginales y tratamiento de infecciones. En español, con precios accesibles.",
    descriptionEn:
      "Gynecology in Houston, TX, at a Hispanic clinic: Pap smear, vaginal cultures and infection treatment. In Spanish, with affordable pricing.",
    keywords: [
      "ginecologia en houston",
      "ginecologo houston español",
      "papanicolaou houston",
      "cultivo vaginal houston",
      "infeccion vaginal tratamiento houston",
    ],
    keywordsEn: [
      "gynecology in houston",
      "gynecologist houston spanish",
      "pap smear houston",
      "vaginal culture houston",
      "vaginal infection treatment houston",
    ],
    features: [
      "Papanicolaou y chequeo ginecológico",
      "Cultivos vaginales",
      "Tratamiento de infecciones vaginales",
      "Atención privada en español",
    ],
    featuresEn: [
      "Pap smear and gynecological checkup",
      "Vaginal cultures",
      "Treatment of vaginal infections",
      "Private care in Spanish",
    ],
    longDescription: `La ginecología básica de Clínica Hispana Nueva Salud Hammerly, en Spring Branch (Houston), cubre el papanicolaou, los cultivos vaginales y el chequeo de rutina de la mujer. Es para ti si te toca tu revisión periódica o si tienes flujo, comezón o ardor que no se van, y prefieres explicarlo con calma en tu idioma.

## ¿Cómo te preparas para el papanicolaou?

- Procura venir cuando no estés con la regla; el sangrado puede dificultar la lectura de la muestra.
- No uses duchas vaginales, óvulos ni cremas vaginales, y deja las relaciones sexuales en pausa un par de días antes de venir.
- Recuerda cuándo empezó tu última regla y si usas algún método anticonceptivo.
- Si tienes resultados de papanicolaou anteriores, tráelos o tenlos a mano en el teléfono.

## ¿Qué hacemos si tienes flujo distinto o comezón?

Las molestias vaginales no siempre tienen la misma causa: pueden ser hongos, un desequilibrio de bacterias o una infección de transmisión sexual, y cada una se trata diferente. Por eso el equipo médico de la clínica revisa la zona, toma un cultivo cuando hace falta y, si el diagnóstico es claro, empieza el tratamiento en la consulta. La farmacia de la clínica te entrega los medicamentos indicados. Si hay sospecha de una infección de transmisión sexual, también podemos hacer las [pruebas de ETS](/services/enfermedades-transmision-sexual) con total discreción.

## ¿Qué pasa después de tomar la muestra?

1. La muestra se envía al laboratorio y te avisamos cuando el resultado esté listo.
2. Repasamos contigo qué significa cada parte del informe, sin palabras complicadas.
3. Si el equipo necesita ver el útero o los ovarios, el [ultrasonido](/services/ultrasonido) se hace en la misma clínica.
4. Cuando un resultado requiere estudios más avanzados, se orienta la referencia al especialista para que sigas sin perder tiempo.

## ¿Qué más puedes resolver en la misma visita?

Muchas mujeres aprovechan para hacerse una [prueba de embarazo](/services/prueba-embarazo) o hablar de métodos anticonceptivos. Cuéntanos todo lo que te preocupa al inicio de la consulta y organizamos la visita para cubrirlo.

¿Te toca tu consulta de ginecología? Llámanos o ven a Hammerly Blvd: te recibimos los siete días de la semana, sin necesidad de seguro.`,
    longDescriptionEn: `Basic gynecology at Clínica Hispana Nueva Salud Hammerly in Spring Branch (Houston) covers the Pap smear, vaginal cultures and the routine women's checkup. It's for you if your regular exam is due, or if you're dealing with discharge, itching or burning that won't go away and would rather talk it through calmly in your own language.

## How do you get ready for a Pap smear?

- Try to come when you're not on your period; bleeding can make the sample harder to read.
- In the days before, skip douching, vaginal suppositories, vaginal creams and sex.
- Remember when your last period started and whether you use any birth control.
- If you have previous Pap results, bring them or keep them handy on your phone.

## What do we do about unusual discharge or itching?

Vaginal discomfort doesn't always have the same cause: it might be yeast, a bacterial imbalance or a sexually transmitted infection, and each is treated differently. That's why the clinic's medical team examines the area, takes a culture when needed and, if the diagnosis is clear, starts treatment during the visit. The clinic pharmacy provides the prescribed medications. If an STI is suspected, we can also run [STD testing](/en/services/enfermedades-transmision-sexual) with complete discretion.

## What happens after the sample is taken?

1. The sample goes to the lab and we let you know when your result is ready.
2. We go over what each part of the report means, in plain words.
3. If the team needs to look at the uterus or ovaries, the [ultrasound](/en/services/ultrasonido) is done right at the clinic.
4. When a result calls for more advanced testing, a referral to the right specialist is arranged so you can keep moving forward.

## What else can you take care of in the same visit?

Many women use the visit to get a [pregnancy test](/en/services/prueba-embarazo) or talk about birth control. Tell us everything on your mind at the start and we'll plan the visit to cover it.

Ready for your gynecology visit? Call us or stop by Hammerly Blvd. We see patients seven days a week, no insurance required.`,
  },
  {
    slug: "prueba-embarazo",
    order: 7,
    category: "salud-mujer",
    icon: "Baby",
    title: "Examen y Diagnóstico de Embarazo",
    titleEn: "Pregnancy Testing & Confirmation",
    shortDescription:
      "Pruebas de embarazo confiables y orientación sobre tus siguientes pasos, en español.",
    shortDescriptionEn:
      "Reliable pregnancy tests and guidance on your next steps, in Spanish.",
    description:
      "Examen y diagnóstico de embarazo en Houston, TX. Pruebas confiables y orientación en español, con precios accesibles.",
    descriptionEn:
      "Pregnancy testing and confirmation in Houston, TX. Reliable tests and guidance in Spanish, with affordable pricing.",
    keywords: [
      "prueba de embarazo houston",
      "examen de embarazo houston",
      "confirmar embarazo houston",
      "test de embarazo español houston",
    ],
    keywordsEn: [
      "pregnancy test houston",
      "pregnancy confirmation houston",
      "confirm pregnancy houston",
      "pregnancy testing houston",
    ],
    features: [
      "Prueba de embarazo confiable",
      "Confirmación médica",
      "Orientación sobre próximos pasos",
      "Atención en español",
    ],
    featuresEn: [
      "Reliable pregnancy test",
      "Medical confirmation",
      "Guidance on next steps",
      "Care in Spanish",
    ],
    longDescription: `En Clínica Hispana Nueva Salud Hammerly, en Spring Branch, confirmamos un posible embarazo con una prueba de orina o de sangre procesada en nuestro laboratorio. Es para ti si se te retrasó la regla, si la prueba casera salió dudosa o si necesitas una confirmación con respaldo médico en Houston, con privacidad y sin juicios.

## ¿Prueba de orina o de sangre: cuál te conviene?

Las dos buscan la hormona hCG, que el cuerpo produce cuando hay embarazo. La prueba de **orina** es sencilla y responde con un sí o un no. La de **sangre** puede detectar cantidades más pequeñas de la hormona y medir cuánto hay, algo útil cuando la prueba casera mostró una línea muy tenue o cuando el equipo médico necesita seguir cómo evoluciona. En la consulta te recomendamos la que tenga más sentido para tu situación.

## ¿Cuándo vale la pena hacerse la prueba?

Lo ideal es a partir del retraso de la regla. Si te la haces demasiado pronto, el resultado puede salir negativo aunque estés embarazada, porque la hormona todavía no alcanza el nivel que la prueba detecta. Si sale negativa pero la regla sigue sin llegar, repítela o vuelve para que el equipo busque otras causas del retraso, como cambios de la [tiroides](/services/tiroides), estrés o algún medicamento.

## ¿Qué sigue si el resultado es positivo?

1. El equipo médico de la clínica confirma el resultado y te lo explica en privado.
2. Revisamos contigo los medicamentos y suplementos que tomas, por si alguno debe cambiarse.
3. Te orientamos sobre los primeros cuidados: alimentación, qué evitar y señales de alarma como sangrado o dolor fuerte.
4. Si el equipo lo indica, el [ultrasonido](/services/ultrasonido) se hace en la clínica, y te orientamos sobre dónde continuar tu control prenatal.

## ¿Y si sale negativo y no buscabas embarazo?

Es buen momento para hablar de planificación. En la misma visita puedes informarte sobre [métodos anticonceptivos](/services/anticonceptivos) y elegir el que mejor se acomode a tu vida.

Pasa por Hammerly Blvd cuando lo necesites, incluso por la noche entre semana; no hace falta llamar antes.`,
    longDescriptionEn: `At Clínica Hispana Nueva Salud Hammerly in Spring Branch, we confirm a possible pregnancy with a urine or blood test run in our own lab. It's for you if your period is late, your home test was hard to read, or you need medically backed confirmation in Houston, handled privately and without judgment.

## Urine or blood test: which one fits you?

Both look for hCG, the hormone your body makes during pregnancy. The **urine** test is simple and gives a yes-or-no answer. The **blood** test can pick up smaller amounts of the hormone and measure how much is there, which helps when a home test showed a very faint line or when the medical team needs to follow how things progress. During the visit we suggest whichever makes more sense for you.

## When is it worth taking the test?

Ideally once your period is late. Test too early and the result may come back negative even if you're pregnant, because the hormone hasn't yet reached the level the test can detect. If it's negative but your period still doesn't come, repeat it or come back so the team can look at other reasons for the delay, such as [thyroid](/en/services/tiroides) changes, stress or a medication.

## Positive result: what are your next steps?

1. The clinic's medical team confirms the result and explains it to you privately.
2. We review the medications and supplements you take in case any of them should change.
3. We guide you through early care: eating well, what to avoid, and warning signs like bleeding or strong pain.
4. If the team recommends it, the [ultrasound](/en/services/ultrasonido) is done right at the clinic, and we point you to where you can continue prenatal care.

## What if it's negative and you weren't trying to conceive?

That makes it a natural time to bring up family planning. During the same visit you can learn about [birth control options](/en/services/anticonceptivos) and pick the one that suits your life.

Stop by Hammerly Blvd whenever you need to, weekday evenings included. There's no need to call ahead.`,
  },
  {
    slug: "anticonceptivos",
    order: 8,
    category: "salud-mujer",
    icon: "Tablets",
    title: "Tratamientos Anticonceptivos",
    titleEn: "Contraceptive Methods",
    shortDescription:
      "Orientación y métodos anticonceptivos (pastillas, inyección y más) para decidir con información, en español.",
    shortDescriptionEn:
      "Guidance and contraceptive methods (pills, injection and more) to decide with clear information, in Spanish.",
    description:
      "Tratamientos anticonceptivos en Houston, TX: orientación, pastillas e inyección. En español, con precios accesibles.",
    descriptionEn:
      "Contraceptive methods in Houston, TX: guidance, pills and injection. In Spanish, with affordable pricing.",
    keywords: [
      "anticonceptivos houston",
      "metodos anticonceptivos houston",
      "inyeccion anticonceptiva houston",
      "pastillas anticonceptivas houston",
    ],
    keywordsEn: [
      "birth control houston",
      "contraception clinic houston",
      "birth control shot houston",
      "birth control pills houston",
    ],
    features: [
      "Orientación personalizada",
      "Pastillas e inyección anticonceptiva",
      "Inicio y seguimiento del método",
      "Atención en español",
    ],
    featuresEn: [
      "Personalized guidance",
      "Birth control pills and injection",
      "Method start and follow-up",
      "Care in Spanish",
    ],
    longDescription: `En Clínica Hispana Nueva Salud Hammerly, en Spring Branch, te ayudamos a elegir y empezar un método anticonceptivo, como la pastilla o la inyección, después de revisar tu salud. Es para mujeres de Houston que quieren decidir cuándo tener hijos, o si tenerlos, con información clara y sin que nadie las presione.

## ¿Qué aspectos de tu salud influyen en la elección?

Antes de recomendar un método, el equipo médico de la clínica revisa contigo varios puntos:

- **Presión arterial**, que medimos en la consulta
- **Si fumas**, sobre todo a partir de cierta edad
- **Migrañas**, especialmente las que vienen con luces o manchas en la vista
- **Lactancia**, si estás dando pecho
- **Antecedentes de coágulos** en ti o en tu familia
- **Medicamentos que tomas**, porque algunos reducen la eficacia de los anticonceptivos hormonales

## ¿En qué se diferencian la pastilla y la inyección?

La **pastilla** se toma todos los días, idealmente a la misma hora, y te da control total: la dejas cuando quieras. Funciona bien si tienes una rutina estable y no te cuesta acordarte. La **inyección** se aplica en la clínica y se repite de forma periódica, así que no tienes que pensar en ella cada día; a cambio, su efecto no se puede retirar de inmediato y la regla puede volverse irregular. El equipo médico te explica ventajas y efectos esperados de cada opción para que compares con calma.

## ¿Cómo es tu primera visita?

1. Nos cuentas tus planes y qué métodos has usado antes.
2. Medimos tu presión y revisamos tu historia de salud.
3. Si existe la posibilidad de embarazo, primero hacemos una [prueba de embarazo](/services/prueba-embarazo).
4. Eliges el método con toda la información y la farmacia de la clínica te entrega lo indicado en la consulta.
5. Acordamos cuándo volver para revisar cómo te sientes.

## ¿Y si quieres cambiar de método?

Puedes hacerlo cuando quieras. Si el método actual te da molestias o ya no encaja con tu vida, lo hablamos en la consulta. Si llevas un implante en el brazo, también hacemos la [extracción de implantes subdérmicos](/services/extraccion-implantes).

En Hammerly Blvd te atendemos en español o en inglés, también los domingos.`,
    longDescriptionEn: `At Clínica Hispana Nueva Salud Hammerly in Spring Branch, we help you choose and start a birth control method, such as the pill or the shot, after looking at your health. It's for women in Houston who want to decide when, or whether, to have children, with clear information and no pressure from anyone.

## Which parts of your health shape the choice?

Before recommending a method, the clinic's medical team goes over several points with you:

- **Blood pressure**, which we measure at the visit
- **Whether you smoke**, especially past a certain age
- **Migraines**, particularly the kind that come with flashing lights or spots in your vision
- **Breastfeeding**, if you're nursing
- **History of blood clots** in you or your family
- **Medications you take**, since some lower the effectiveness of hormonal birth control

## How do the pill and the shot compare?

The **pill** is taken every day, ideally at the same time, and keeps you fully in charge: you can stop whenever you want. It works well if your routine is steady and remembering isn't a problem. The **shot** is given at the clinic and repeated periodically, so you don't think about it daily; the trade-off is that its effect can't be undone right away and your period may become irregular. The medical team explains the upsides and expected effects of each option so you can compare calmly.

## What does your first visit look like?

1. You tell us your plans and which methods you've used before.
2. We check your blood pressure and go over your health history.
3. If there's any chance of pregnancy, we start with a [pregnancy test](/en/services/prueba-embarazo).
4. You choose the method with all the information, and the clinic pharmacy provides what was prescribed.
5. We agree on when to come back to see how you're doing.

## What if you want to switch methods?

You can switch whenever you like. If your current method is causing discomfort or no longer fits your life, we talk it through at the visit. If you have an implant in your arm, we also handle [subdermal implant removal](/en/services/extraccion-implantes).

At Hammerly Blvd we see you in Spanish or English, Sundays included.`,
  },
  {
    slug: "extraccion-implantes",
    order: 9,
    category: "salud-mujer",
    icon: "Bandage",
    title: "Extracción de Implantes Subdérmicos",
    titleEn: "Subdermal Implant Removal",
    shortDescription:
      "Retiro seguro de implantes anticonceptivos subdérmicos del brazo, por personal capacitado.",
    shortDescriptionEn:
      "Safe removal of subdermal arm contraceptive implants by trained staff.",
    description:
      "Extracción de implantes subdérmicos en Houston, TX, procedimiento seguro y en español. Con precios accesibles.",
    descriptionEn:
      "Subdermal implant removal in Houston, TX, a safe procedure in Spanish. With affordable pricing.",
    keywords: [
      "extraccion de implante subdermico houston",
      "quitar implante del brazo houston",
      "retiro de implante anticonceptivo houston",
      "remover implante houston",
    ],
    keywordsEn: [
      "subdermal implant removal houston",
      "arm implant removal houston",
      "contraceptive implant removal houston",
      "birth control implant removal houston",
    ],
    features: [
      "Procedimiento ambulatorio",
      "Anestesia local",
      "Personal capacitado",
      "Cuidado posterior explicado",
    ],
    featuresEn: [
      "Outpatient procedure",
      "Local anesthesia",
      "Trained staff",
      "After-care explained",
    ],
    longDescription: `Si tu implante anticonceptivo del brazo ya cumplió su tiempo o simplemente quieres dejar de usarlo, en Clínica Hispana Nueva Salud Hammerly, en Spring Branch, lo retiramos con anestesia local en un procedimiento ambulatorio. Es para mujeres de Houston que prefieren quitárselo en una clínica cercana, con explicaciones claras y en su idioma.

## ¿Cómo se ubica el implante antes de retirarlo?

El equipo médico de la clínica palpa la parte interna del brazo para encontrar la varilla y marcar sus dos extremos. En la gran mayoría de los casos se siente bajo la piel sin problema. Si no se logra tocar, porque quedó muy profundo o se movió, te explicamos qué estudio hace falta y se orienta la referencia al especialista para retirarlo con seguridad.

## ¿Qué pasos tiene el procedimiento?

1. Limpiamos la piel del brazo con antiséptico.
2. Aplicamos anestesia local en el punto donde está la punta del implante; sentirás un pequeño piquete y después solo presión.
3. Con una incisión pequeña, el equipo empuja suavemente la varilla hasta sacarla.
4. Verificamos que salió completa y la medimos.
5. Cerramos con cinta adhesiva y colocamos un vendaje de presión.

## ¿Cómo cuidar el brazo en casa?

- Mantén el vendaje limpio y seco el tiempo que te indique el equipo.
- Evita cargar bolsas pesadas o hacer ejercicio fuerte con ese brazo los primeros días.
- Es normal ver un moretón o sentir el área sensible.
- Vuelve si notas enrojecimiento que se extiende, pus, calor intenso o fiebre. Si la herida necesita revisión, también te atendemos en [curación de heridas](/services/curacion-heridas).

## ¿Qué método usarás después?

La protección contra el embarazo termina en cuanto sale el implante, así que conviene decidir antes qué sigue. Si quieres seguir evitando el embarazo, en la misma consulta puedes hablar de otros [métodos anticonceptivos](/services/anticonceptivos). Si buscas embarazarte, te damos recomendaciones para empezar con buen pie.

Para el retiro, ven a Hammerly Blvd con una blusa de manga corta; no necesitas cita.`,
    longDescriptionEn: `If your arm birth control implant has reached the end of its run or you want to stop using it, Clínica Hispana Nueva Salud Hammerly in Spring Branch removes it under local anesthesia as an outpatient procedure. It's for Houston women who would rather have it taken out at a nearby clinic, explained clearly in their own language.

## How is the implant located before removal?

The clinic's medical team feels along the inner arm to find the rod and mark both ends. In the vast majority of cases it's easy to feel under the skin. If it can't be felt, because it sits deep or has shifted, we explain which test is needed and arrange a referral to the right specialist so it can be removed safely.

## What are the steps of the procedure?

1. We clean the skin of your arm with antiseptic.
2. Local anesthesia goes in where the tip of the implant sits; you'll feel a small pinch and then just pressure.
3. Through a small incision, the team gently pushes the rod out.
4. We check that it came out whole and measure it.
5. We close with adhesive strips and put on a pressure bandage.

## How should you care for your arm at home?

- Keep the bandage clean and dry for as long as the team tells you.
- Avoid carrying heavy bags or working out hard with that arm for the first few days.
- A bruise or some tenderness is normal.
- Come back if you notice spreading redness, pus, strong warmth or fever. If the incision needs a check, we also help through [wound care](/en/services/curacion-heridas).

## Which method will you use next?

Protection against pregnancy ends as soon as the implant is out, so it's smart to decide beforehand what comes next. If you want to keep preventing pregnancy, you can discuss other [birth control options](/en/services/anticonceptivos) at the same visit. If you're hoping to conceive, we'll share tips to get off to a good start.

For the removal, come to Hammerly Blvd in a short-sleeved top; no appointment needed.`,
  },
  {
    slug: "salud-hombre",
    order: 10,
    category: "medicina-general",
    icon: "Mars",
    highlighted: true,
    title: "Salud del Hombre: Examen de Próstata (PSA)",
    titleEn: "Men's Health: Prostate Exam (PSA)",
    shortDescription:
      "Exámenes de salud del hombre: antígeno prostático (PSA), testosterona y chequeo general, en español.",
    shortDescriptionEn:
      "Men's health exams: prostate antigen (PSA), testosterone and general checkup, in Spanish.",
    description:
      "Salud del hombre en Houston, TX: examen de próstata (PSA) y chequeo general con laboratorio, en español y sin seguro médico.",
    descriptionEn:
      "Men's health in Houston, TX: prostate exam (PSA) and a general checkup with lab work, in Spanish and with no insurance needed.",
    keywords: [
      "examen del hombre houston",
      "prueba psa houston",
      "examen de prostata houston",
      "chequeo del hombre houston",
    ],
    keywordsEn: [
      "mens health houston",
      "psa test houston",
      "prostate exam houston",
      "mens checkup houston",
    ],
    features: [
      "Antígeno prostático (PSA)",
      "Nivel de testosterona",
      "Chequeo general del hombre",
      "Resultados explicados en español",
    ],
    featuresEn: [
      "Prostate antigen (PSA)",
      "Testosterone level",
      "General men's checkup",
      "Results explained in Spanish",
    ],
    longDescription: `El chequeo de salud del hombre en Clínica Hispana Nueva Salud Hammerly, en Spring Branch, reúne el análisis de antígeno prostático (PSA), la revisión de tus signos vitales y otros estudios según tu edad y tus molestias. Es para hombres de Houston que llevan años sin revisarse o que notan cambios al orinar.

## ¿Qué es el PSA y qué puede indicar?

El PSA es una proteína que fabrica la próstata y que se mide en una muestra de sangre. Puede subir por varias razones: el crecimiento benigno de la próstata que llega con la edad, una inflamación, una infección o, en algunos casos, un cáncer. Por eso un valor alto no es un diagnóstico, sino una señal para mirar más de cerca. Según las recomendaciones del [USPSTF](https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/prostate-cancer-screening), la decisión de hacerse esta prueba conviene tomarla conversando con un profesional de salud, y esa conversación forma parte de la consulta.

## ¿Cómo te preparas para la muestra?

- Evita la eyaculación y el ciclismo intenso en los días previos, porque pueden elevar el valor.
- Avisa si tienes ardor al orinar o fiebre: una infección también lo altera.
- Trae la lista de tus medicamentos; algunos para la próstata o la caída del cabello bajan el PSA.
- No hace falta ayuno, salvo que en la misma muestra se midan glucosa o colesterol.

## ¿Qué otros análisis pueden sumarse a la visita?

Si te sientes sin energía o con el ánimo bajo, el equipo médico de la clínica puede incluir la medición de testosterona junto con otros valores que influyen en el cansancio. Muchos hombres descubren en este chequeo una glucosa o una presión alta que nunca se habían medido; si es tu caso, sigues en el [control de condiciones crónicas](/services/condiciones-cronicas). Y si tienes molestias al orinar, el examen de orina se hace en el laboratorio de la clínica dentro del servicio de [infecciones urinarias](/services/infecciones-urinarias).

## ¿Qué pasa si un valor sale fuera de rango?

1. Te avisamos cuando los resultados estén listos y te los explicamos con calma.
2. El equipo médico valora si conviene repetir el análisis para confirmar.
3. Revisamos tus síntomas, tu historia familiar y lo que pudo alterar el valor.
4. Si el resultado lo requiere, se orienta la referencia al especialista en urología.

Los hombres que trabajan de día encuentran en Hammerly Blvd consulta hasta la noche entre semana.`,
    longDescriptionEn: `The men's health checkup at Clínica Hispana Nueva Salud Hammerly in Spring Branch brings together the prostate-specific antigen (PSA) test, a look at your vital signs and other labs based on your age and complaints. It's for men in Houston who haven't been checked in years or who notice changes when they urinate.

## What is PSA and what can it signal?

The prostate releases a protein called PSA into the bloodstream, and a single blood draw measures it. It can rise for several reasons: the benign prostate enlargement that comes with age, inflammation, an infection or, in some cases, cancer. So a high value isn't a diagnosis; it's a signal to take a closer look. The [U.S. Preventive Services Task Force (USPSTF)](https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/prostate-cancer-screening) recommends that the decision to get this test be made in conversation with a health professional, and that's exactly what happens during the visit.

## How should you prepare for the sample?

- Avoid ejaculation and intense cycling in the days before, since both can push the number up.
- Mention any burning when you urinate or a fever; an infection also throws it off.
- Bring your medication list; some drugs for the prostate or hair loss lower PSA.
- No fasting is needed unless glucose or cholesterol are measured from the same draw.

## What other labs can be added to the visit?

If you feel low on energy or your mood is down, the clinic's medical team may include a testosterone level along with other values that affect fatigue. Many men discover a high glucose or blood pressure during this checkup that had never been measured; if that's you, you continue with [chronic condition care](/en/services/condiciones-cronicas). And if urinating is uncomfortable, the urine test is done in the clinic's lab under our [urinary tract infection service](/en/services/infecciones-urinarias).

## What happens if a value comes back out of range?

1. We let you know when the results are ready and go over them calmly.
2. The medical team weighs whether to repeat the test to confirm it.
3. We review your symptoms, family history and anything that might have affected the number.
4. If the result calls for it, a referral to a urology specialist is arranged.

Men who work daytime hours can find evening appointments at our Hammerly Blvd office on weekdays.`,
  },
  {
    slug: "examenes-sangre",
    order: 11,
    category: "laboratorio",
    icon: "FlaskConical",
    highlighted: true,
    title: "Exámenes de Sangre | Laboratorio",
    titleEn: "Blood Tests | Lab",
    metaTitle: "Exámenes de Sangre en Houston | Laboratorio",
    metaTitleEn: "Blood Tests in Houston | Lab",
    shortDescription:
      "Análisis de sangre completos con resultados rápidos e interpretación en español, sin cita previa.",
    shortDescriptionEn:
      "Complete blood work with fast results and results explained in Spanish, no appointment needed.",
    description:
      "Exámenes de sangre en Houston, TX: biometría, química, glucosa, colesterol y más. Resultados en español, con precios accesibles.",
    descriptionEn:
      "Blood tests in Houston, TX: CBC, chemistry, glucose, cholesterol and more. Results in Spanish, with affordable pricing.",
    keywords: [
      "examenes de sangre houston",
      "analisis de sangre houston",
      "laboratorio houston",
      "laboratorio cerca de mi houston",
    ],
    keywordsEn: [
      "blood test houston",
      "blood work houston",
      "lab near me houston",
      "clinical lab houston",
    ],
    features: [
      "Biometría y química sanguínea",
      "Glucosa, colesterol y triglicéridos",
      "Pruebas de tiroides, hígado y riñón",
      "Resultados explicados en español",
    ],
    featuresEn: [
      "CBC and blood chemistry",
      "Glucose, cholesterol and triglycerides",
      "Thyroid, liver and kidney tests",
      "Results explained in Spanish",
    ],
    longDescription: `Los exámenes de sangre de Clínica Hispana Nueva Salud Hammerly sirven para revisar cómo andan tu azúcar, tu colesterol, tus órganos y tus células sanguíneas. Están pensados para adultos que quieren un chequeo, para quien lleva el control de una condición crónica y para quien necesita análisis para un trámite, aquí en Spring Branch, Houston.

## ¿Qué análisis puedes pedir en nuestro laboratorio?

- **Biometría hemática:** cuenta glóbulos rojos, glóbulos blancos y plaquetas; ayuda a buscar anemia o señales de una infección.
- **Química sanguínea:** glucosa, colesterol y triglicéridos, la base para vigilar la diabetes y el riesgo del corazón.
- **Función de hígado y riñón:** se pide mucho cuando tomas medicinas todos los días, porque muestra cómo las está tolerando tu cuerpo.
- **Perfil de tiroides:** útil si notas cansancio, cambios de peso o caída del cabello; se complementa con la consulta de [tiroides](/services/tiroides).

## ¿Tienes que llegar en ayunas?

No todos los análisis lo exigen. La glucosa y el perfil de grasas suelen pedir ayuno desde la noche anterior, y durante ese tiempo sí puedes tomar agua natural. La biometría y la tiroides normalmente no lo necesitan. Si no sabes cuál te toca, llama antes y el personal te dice cómo presentarte. Sigue tomando tus medicinas como de costumbre, salvo que el equipo médico te indique otra cosa, y trae anotados sus nombres y dosis.

## ¿Cómo es la extracción?

Te sientas, se limpia la piel del brazo y se toma la muestra con una aguja fina en un proceso corto. Luego presionas el algodón un momento para evitar el moretón y puedes seguir con tu día. Si te pones nervioso con las agujas o alguna vez te has desmayado, coméntalo antes de empezar para tomar la muestra con más calma.

## ¿Qué pasa cuando llegan los números?

Te avisamos cuando estén listos y el equipo médico de la clínica revisa contigo cada valor que salió alto o bajo, con palabras sencillas. Si tienes diabetes o presión alta, esos datos sirven para ajustar tu plan de [condiciones crónicas](/services/condiciones-cronicas). Si algún valor amerita ir más allá de la clínica, te ayudamos con la referencia al especialista indicado.

Si vienes en ayunas, pasa temprano por 8538 Hammerly Blvd Suite B para no quedarte toda la mañana sin desayunar.`,
    longDescriptionEn: `Blood tests at Clínica Hispana Nueva Salud Hammerly show how your sugar, cholesterol, organs and blood cells are doing. They're meant for adults who want a checkup, for anyone keeping a chronic condition under control and for people who need lab work for paperwork, right here in Spring Branch, Houston.

## Which tests can our lab run for you?

- **Complete blood count (CBC):** tallies the cells in your blood, a quick way to spot anemia or a body fighting an infection.
- **Blood chemistry:** glucose, cholesterol and triglycerides, the starting point for keeping an eye on diabetes and heart risk.
- **Liver and kidney function:** often ordered when you take medication every day, since it shows how your body is handling it.
- **Thyroid panel:** worth checking if you feel tired, gain or lose weight or notice hair loss; it pairs with our [thyroid](/en/services/tiroides) visit.

## Do you need to fast first?

It depends on what's being measured. Glucose and the lipid panel usually call for fasting from the night before, and plain water is fine during that time. A CBC or thyroid test normally doesn't. If you're not sure which applies to you, call ahead and our staff will tell you how to come in. Keep taking your usual medication unless the medical team says otherwise, and bring a note with the names and doses.

## What is the draw like?

You sit down, the skin on your arm is cleaned and the sample is taken with a thin needle in a short process. Then you press the cotton ball for a moment to avoid a bruise and go on with your day. If needles make you anxious or you've ever fainted, tell us before we start so we can take it slowly.

## What happens once the numbers come in?

We let you know when they're ready, and the clinic's medical team goes over every value that came out high or low with you in plain language. If you live with diabetes or high blood pressure, those numbers help adjust your [chronic conditions](/en/services/condiciones-cronicas) plan. When a result needs a closer look, we guide the referral to the right specialist.

If you're fasting, stop by 8538 Hammerly Blvd Suite B early so you're not stuck without breakfast all morning.`,
  },
  {
    slug: "infecciones-urinarias",
    order: 12,
    category: "tratamientos",
    icon: "Droplet",
    title: "Examen de Orina y Tratamiento de Infecciones Urinarias",
    titleEn: "Urinalysis & Urinary Infection Treatment",
    metaTitle: "Tratamiento de Infecciones Urinarias en Houston",
    metaTitleEn: "UTI Treatment & Urinalysis in Houston",
    shortDescription:
      "Examen de orina y tratamiento de infecciones urinarias el mismo día, en español.",
    shortDescriptionEn:
      "Urinalysis and same-day urinary infection treatment, in Spanish.",
    description:
      "Examen de orina y tratamiento de infecciones urinarias en Houston, TX, el mismo día. En español, con precios accesibles.",
    descriptionEn:
      "Urinalysis and urinary infection treatment in Houston, TX, same day. In Spanish, with affordable pricing.",
    keywords: [
      "infecciones urinarias houston",
      "examen de orina houston",
      "tratamiento infeccion urinaria houston",
      "doctor infeccion de orina houston",
    ],
    keywordsEn: [
      "urinalysis houston",
      "urinary tract infection houston",
      "uti treatment houston",
      "uti doctor houston",
    ],
    features: [
      "Examen de orina en la clínica",
      "Diagnóstico de infección urinaria",
      "Tratamiento el mismo día",
      "Atención sin cita en español",
    ],
    featuresEn: [
      "In-clinic urinalysis",
      "Diagnosis of urinary infection",
      "Same-day treatment",
      "Walk-in care in Spanish",
    ],
    longDescription: `¿Te arde al orinar? En Clínica Hispana Nueva Salud Hammerly, en Spring Branch, el examen de orina se hace en la clínica y, si confirma infección, te vas con tu tratamiento el mismo día. Atendemos infecciones urinarias en mujeres y hombres adultos, sin cita previa y con explicaciones claras en español.

## ¿Qué molestias apuntan a una infección urinaria?

Lo más típico es que orinar queme, que tengas que correr al baño a cada rato y que al final salga apenas un chorrito. Algunas personas notan la orina turbia, con olor fuerte o con un tono rosado, y sienten presión en la parte baja del vientre. En personas mayores la infección a veces se nota primero como confusión o mucho cansancio, así que vale la pena revisar la orina aunque no haya ardor.

## ¿Cómo se recoge bien la muestra de orina?

1. Recibes un vaso estéril marcado con tu nombre.
2. Te lavas las manos y limpias la zona genital de adelante hacia atrás.
3. Dejas caer el primer chorro en el inodoro y llenas el vaso con la orina del medio.
4. Tapas el vaso sin tocar el interior y se lo entregas al personal.

Una muestra tomada así evita que la piel la contamine y que el resultado confunda.

## ¿Qué pasa si el examen confirma la infección?

El equipo médico revisa el examen de orina junto con tus síntomas, elige el antibiótico adecuado y te explica cómo tomarlo hasta terminarlo, aunque te sientas mejor antes. Ese antibiótico lo recoges en nuestra [farmacia](/services/farmacia) antes de irte a casa. En algunos casos conviene además un urocultivo para identificar la bacteria exacta; ese estudio tarda varios días y te avisamos cuando esté listo, por si hay que cambiar el antibiótico.

## ¿Cuándo una infección urinaria ya no puede esperar?

Fiebre, escalofríos, vómito o dolor en el costado o la espalda baja pueden indicar que la infección subió hacia los riñones: ven hoy mismo. Si estás embarazada, avísanos al llegar, porque el tratamiento se elige con más cuidado. Si las infecciones se te repiten, buscamos la causa en [ginecología](/services/ginecologia) o en la consulta de [salud del hombre](/services/salud-hombre).

No aguantes otra noche de ardor: llama o pasa directo por 8538 Hammerly Blvd Suite B y te atendemos.`,
    longDescriptionEn: `Burning when you pee? At Clínica Hispana Nueva Salud Hammerly in Spring Branch, the urine test happens at the clinic and, if it shows an infection, you walk out with your treatment the same day. We treat urinary tract infections in adult women and men, with no appointment and clear explanations in Spanish or English.

## Which symptoms point to a urinary infection?

The classic signs are burning while urinating, rushing to the bathroom over and over and only passing a few drops at the end. Some people notice cloudy, strong-smelling or pinkish urine and feel pressure low in the belly. In older adults an infection sometimes shows up first as confusion or unusual tiredness, so a urine check is worth it even without burning.

## How do you collect a good urine sample?

1. You get a sterile cup labeled with your name.
2. You wash your hands and clean the genital area from front to back.
3. You let the first stream go into the toilet and fill the cup with midstream urine.
4. You close the cup without touching the inside and hand it to our staff.

A sample collected this way keeps skin bacteria out, so the result isn't misleading.

## What happens if the test confirms an infection?

The medical team looks at your urinalysis together with your symptoms, picks the right antibiotic and explains how to take every dose, even if you feel better early. You pick up that antibiotic right at our [pharmacy](/en/services/farmacia) before heading home. Sometimes a urine culture is also worth doing to identify the exact bacteria; that test takes several days and we call you when it's ready in case the antibiotic needs to change.

## When can a urinary infection not wait?

Fever, chills, vomiting or pain in your side or lower back may mean the infection has moved up toward the kidneys: come in today. If you're pregnant, tell us when you arrive, because the treatment is chosen with extra care. If infections keep coming back, we look for the cause in [gynecology](/en/services/ginecologia) or in our [men's health](/en/services/salud-hombre) visit.

Don't put up with another night of burning: call us or walk in at 8538 Hammerly Blvd Suite B and we'll see you.`,
  },
  {
    slug: "examen-heces",
    order: 13,
    category: "laboratorio",
    icon: "TestTubes",
    title: "Exámenes de Heces Fecales",
    titleEn: "Stool Tests",
    shortDescription:
      "Análisis de heces fecales para detectar infecciones y problemas digestivos, en español.",
    shortDescriptionEn:
      "Stool analysis to detect infections and digestive problems, in Spanish.",
    description:
      "Exámenes de heces fecales en Houston, TX. Detección de parásitos e infecciones, en español, con precios accesibles.",
    descriptionEn:
      "Stool tests in Houston, TX. Detection of parasites and infections, in Spanish, with affordable pricing.",
    keywords: [
      "examen de heces houston",
      "analisis de heces fecales houston",
      "examen de parasitos houston",
      "laboratorio heces houston",
    ],
    keywordsEn: [
      "stool test houston",
      "stool analysis houston",
      "parasite test houston",
      "stool lab houston",
    ],
    features: [
      "Análisis de heces fecales",
      "Detección de parásitos e infecciones",
      "Evaluación de síntomas digestivos",
      "Resultados explicados en español",
    ],
    featuresEn: [
      "Stool analysis",
      "Detection of parasites and infections",
      "Digestive symptom evaluation",
      "Results explained in Spanish",
    ],
    longDescription: `El examen de heces de Clínica Hispana Nueva Salud Hammerly analiza una pequeña muestra de excremento para buscar parásitos, bacterias, sangre escondida y otras pistas de lo que ocurre en tu intestino. Lo indicamos a niños y adultos de Spring Branch con diarrea que no se quita, dolor de barriga frecuente o cambios al ir al baño.

## ¿Qué puede encontrar el laboratorio en tu muestra?

- Huevos o formas de parásitos intestinales, algo que se ve con frecuencia en niños y después de viajes.
- Señales de infección por bacterias que explican una diarrea que dura más de lo normal.
- Sangre oculta, es decir, sangre que no se ve a simple vista pero que el análisis sí detecta.
- Restos de grasa o comida mal digerida, que orientan sobre problemas para absorber los alimentos.

## ¿Cómo recoger la muestra en casa sin contaminarla?

1. Pide en la clínica el frasco con tapa y las instrucciones; no uses un recipiente de cocina.
2. Orina primero, para que la orina no se mezcle con la muestra.
3. Haz la evacuación sobre un plástico limpio o un recipiente desechable, no directo en el agua del inodoro.
4. Usa la cucharita que trae la tapa para pasar al frasco un trozo pequeño, como una nuez; si ves moco o sangre, escoge de esa parte.
5. Cierra bien, escribe tu nombre y trae el frasco a la clínica lo antes posible; si vas a tardar, guárdalo en el refrigerador dentro de una bolsa.

## ¿Hay algo que debas avisar antes del examen?

Cuéntale al equipo médico si tomaste antibióticos, laxantes, antiácidos o medicinas contra los parásitos en las últimas semanas, porque pueden esconder lo que se busca. En las mujeres, la menstruación puede dar un falso positivo de sangre oculta, así que conviene esperar a que termine.

## ¿Qué sigue si aparece un parásito o una infección?

Te avisamos cuando el resultado esté listo y el equipo médico te indica el tratamiento; con algunos parásitos se trata también a quienes viven contigo. Si hay sangre oculta o el dolor continúa, se puede completar el estudio con [exámenes de sangre](/services/examenes-sangre) o un [ultrasonido](/services/ultrasonido), y si hace falta se orienta la referencia al especialista.

Puedes dejar el frasco en Hammerly Blvd cualquier día de la semana, también el domingo por la tarde.`,
    longDescriptionEn: `The stool test at Clínica Hispana Nueva Salud Hammerly checks a small sample of your bowel movement for parasites, bacteria, hidden blood and other clues about what's going on in your gut. Families in Spring Branch bring it in when a child or adult has lingering diarrhea, stomach cramps that keep returning or bowel habits that suddenly changed.

## What can the lab find in your sample?

- Eggs or forms of intestinal parasites, which turn up often in kids and after travel.
- Signs of a bacterial infection that explain diarrhea lasting longer than usual.
- Occult blood, meaning blood you can't see with your eyes but the test can pick up.
- Fat or poorly digested food, which hints at trouble absorbing nutrients.

## How do you collect the sample at home without contaminating it?

1. Ask the clinic for the lidded container and instructions; don't use a kitchen jar.
2. Urinate first so urine doesn't mix with the sample.
3. Pass the stool onto clean plastic wrap or a disposable tray, not straight into the toilet water.
4. Use the little scoop in the lid to take a walnut-sized portion, especially from any mucus or bloody areas.
5. Close it tightly, write your name on it and bring it in as soon as you can; if there will be a delay, keep it bagged in the fridge.

## Is there anything to tell us before the test?

Let the medical team know if you've taken antibiotics, laxatives, antacids or deworming medicine in recent weeks, since they can hide what we're looking for. For women, a period can cause a false positive for occult blood, so it's better to wait until it ends.

## What comes next if a parasite or infection shows up?

We let you know when the result is ready and the medical team prescribes the treatment; with some parasites the people you live with are treated too. If there's hidden blood or the pain keeps going, the workup can continue with [blood tests](/en/services/examenes-sangre) or an [ultrasound](/en/services/ultrasonido), and when needed we guide the referral to a specialist.

You can drop off the container on Hammerly Blvd any day of the week, Sunday afternoons included.`,
  },
  {
    slug: "prueba-strep",
    order: 14,
    category: "laboratorio",
    icon: "TestTube",
    title: "Prueba de Estreptococo (Strep Test)",
    titleEn: "Strep Test",
    shortDescription:
      "Prueba rápida de estreptococo (strep) para el dolor de garganta, con resultado el mismo día.",
    shortDescriptionEn:
      "Rapid strep test for sore throat, with same-day result.",
    description:
      "Prueba de estreptococo (strep test) en Houston, TX. Resultado rápido y tratamiento en español, con precios accesibles.",
    descriptionEn:
      "Strep test in Houston, TX. Fast result and treatment in Spanish, with affordable pricing.",
    keywords: [
      "prueba de estreptococo houston",
      "strep test houston",
      "prueba de garganta houston",
      "dolor de garganta doctor houston",
    ],
    keywordsEn: [
      "strep test houston",
      "rapid strep test houston",
      "sore throat test houston",
      "strep throat doctor houston",
    ],
    features: [
      "Prueba rápida de estreptococo",
      "Resultado el mismo día",
      "Tratamiento si es positivo",
      "Atención sin cita en español",
    ],
    featuresEn: [
      "Rapid strep test",
      "Same-day result",
      "Treatment if positive",
      "Walk-in care in Spanish",
    ],
    longDescription: `La prueba de strep de Clínica Hispana Nueva Salud Hammerly busca con un hisopo la bacteria estreptococo del grupo A en la garganta. Es para niños y adultos con dolor de garganta fuerte y fiebre que necesitan saber si se trata de una infección bacteriana o de un virus, aquí en Spring Branch, Houston.

## ¿Cómo distinguir la garganta con strep de un resfriado?

Con el estreptococo el dolor suele llegar de golpe, cuesta tragar y aparece fiebre, a veces con placas blancas o puntitos rojos en el paladar y ganglios inflamados en el cuello. En los niños también puede venir con dolor de barriga o vómito. Si en cambio predominan la tos, los mocos y la voz ronca, el culpable suele ser un virus y el antibiótico no le hace nada. Como los síntomas se parecen, la prueba es la forma de salir de dudas en vez de adivinar.

## ¿Cómo se hace el hisopado?

1. Abres bien la boca y sacas la lengua; a los niños pequeños los puede sostener un adulto.
2. El personal pasa un hisopo largo por las amígdalas y el fondo de la garganta.
3. La toma dura un instante; puede dar arcada, pero no duele.
4. La muestra va a la prueba rápida y el equipo médico revisa contigo el resultado antes de decidir el tratamiento.

## ¿Qué sigue según el resultado?

- **Positivo:** sales con la receta del equipo médico y el antibiótico en mano desde nuestra [farmacia](/services/farmacia). Hay que terminarlo completo para evitar complicaciones.
- **Negativo con síntomas fuertes:** en niños a veces se confirma con un cultivo, que tarda más; te avisamos cuando esté listo.
- **Negativo y con pinta de virus:** te vas con un plan casero para la fiebre y el ardor de garganta.

## ¿Cómo cuidarte en casa para no contagiar a la familia?

No compartas vasos, cubiertos ni toallas, lávate las manos seguido y cambia el cepillo de dientes después de empezar el antibiótico. Los líquidos tibios o fríos y la comida blanda alivian al tragar. Si la tos o la congestión siguen, revisa nuestro servicio de [enfermedades respiratorias](/services/enfermedades-respiratorias).

¿Tu hijo amaneció con la garganta inflamada? Tráelo a Hammerly Blvd y le hacemos la prueba hoy mismo.`,
    longDescriptionEn: `The strep test at Clínica Hispana Nueva Salud Hammerly uses a swab to look for group A streptococcus bacteria in the throat. It's for children and adults with a bad sore throat and fever who need to know whether it's a bacterial infection or a virus, right here in Spring Branch, Houston.

## How can you tell strep throat from a cold?

Strep tends to hit suddenly: swallowing hurts, a fever shows up, and there may be white patches on the tonsils, tiny red spots on the roof of the mouth and swollen glands in the neck. In kids it can also bring a stomachache or vomiting. Cough, runny nose and hoarseness point more toward a virus, which antibiotics don't cure. Because the symptoms overlap, the test settles the question instead of guessing.

## How is the swab done?

1. You open wide and stick out your tongue; an adult can hold a small child steady.
2. Our staff runs a long swab over the tonsils and the back of the throat.
3. The swab is over quickly; expect a brief gag reflex rather than pain.
4. The sample goes into the rapid test, and the medical team reviews the result with you before deciding on treatment.

## What comes next depending on the result?

- **Positive:** the medical team prescribes an antibiotic, which we hand you at the clinic's [pharmacy](/en/services/farmacia). Finish every dose to prevent complications.
- **Negative with strong symptoms:** in children it's sometimes confirmed with a culture, which takes longer; we'll let you know when it's ready.
- **Negative with cold-like symptoms:** we give you tips to ease the pain and bring the fever down at home.

## How do you keep the rest of the family from catching it?

Don't share cups, utensils or towels, wash your hands often and replace your toothbrush once the antibiotic has started. Warm or cold drinks and soft food make swallowing easier. If a cough or congestion lingers, see our [respiratory illness](/en/services/enfermedades-respiratorias) service.

Did your child wake up with a swollen throat? Bring them to Hammerly Blvd and we'll test them today.`,
  },
  {
    slug: "prueba-tuberculosis",
    order: 15,
    category: "laboratorio",
    icon: "ShieldPlus",
    title: "Examen de Tuberculosis (TB)",
    titleEn: "Tuberculosis (TB) Test",
    shortDescription:
      "Prueba de tuberculosis (PPD) para trabajo, escuela o trámites, con lectura en español.",
    shortDescriptionEn:
      "Tuberculosis (PPD) test for work, school or paperwork, with reading in Spanish.",
    description:
      "Examen de tuberculosis (TB/PPD) en Houston, TX. Para trabajo y escuela, en español, con precios accesibles.",
    descriptionEn:
      "Tuberculosis (TB/PPD) test in Houston, TX. For work and school, in Spanish, with affordable pricing.",
    keywords: [
      "examen de tuberculosis houston",
      "prueba ppd houston",
      "prueba de tb houston",
      "tb test español houston",
    ],
    keywordsEn: [
      "tuberculosis test houston",
      "ppd test houston",
      "tb test houston",
      "tb skin test houston",
    ],
    features: [
      "Prueba cutánea de tuberculosis (PPD)",
      "Lectura del resultado",
      "Útil para trabajo y escuela",
      "Atención en español",
    ],
    featuresEn: [
      "Tuberculosis skin test (PPD)",
      "Result reading",
      "Useful for work and school",
      "Care in Spanish",
    ],
    longDescription: `La prueba de tuberculosis de Clínica Hispana Nueva Salud Hammerly es la prueba cutánea PPD, que muestra si tu cuerpo ha estado en contacto con la bacteria de la TB. La piden empleos, escuelas y programas de voluntariado en Houston, y la hacemos en Spring Branch con lectura incluida y el documento listo para tu trámite.

## ¿Cómo funcionan las dos visitas de la prueba cutánea?

1. **Primera visita:** el personal te aplica una gotita de líquido bajo la piel del antebrazo con una aguja muy fina. Se forma una pequeña ampolla que desaparece sola.
2. **Mientras esperas:** puedes bañarte y trabajar normal, pero no rasques, no tapes con curitas ni pongas cremas en la zona.
3. **Segunda visita:** regresas a los dos o tres días para que midan la reacción. Pasado ese margen la medida ya no vale y toca empezar otra vez desde la inyección.

## ¿Quién suele necesitar esta prueba?

- Personas que trabajan en hospitales, asilos, guarderías o atención a domicilio.
- Estudiantes de enfermería, asistentes médicos y otras carreras de salud.
- Voluntarios en escuelas o refugios, y algunos empleos con trato directo al público.
- Quien convivió con alguien diagnosticado con tuberculosis.

Si la necesitas para tu residencia, el requisito lo fija USCIS y se maneja dentro del [examen de inmigración](/services/examenes-inmigracion).

## ¿Qué significa un resultado positivo?

Un resultado positivo no quiere decir que tengas tuberculosis activa ni que contagies. Indica que en algún momento tu cuerpo conoció la bacteria; también puede reaccionar quien recibió de niño la vacuna BCG, común en Latinoamérica. Por eso el equipo médico te hace preguntas sobre tos, fiebre o pérdida de peso y orienta los estudios siguientes, como una radiografía de tórax, con la referencia que haga falta.

## ¿Qué te llevas al terminar?

Cuando la prueba es negativa, te entregamos un documento con la fecha de aplicación, la fecha de lectura y la medida en milímetros, que es lo que suelen pedir las empresas y escuelas. Si además te piden vacunas o un [examen físico escolar](/services/examen-fisico-escolar), puedes resolverlo en la misma visita.

Para la lectura no hace falta que vuelvas a la misma hora: abrimos hasta las 9 PM entre semana y los sábados.`,
    longDescriptionEn: `The tuberculosis test at Clínica Hispana Nueva Salud Hammerly is the PPD skin test, which shows whether your body has been in contact with the TB bacteria. Employers, schools and volunteer programs in Houston ask for it, and we do it in Spring Branch with the reading included and paperwork ready for your file.

## How do the two skin-test visits work?

1. **First visit:** our staff places a tiny drop of fluid under the skin of your forearm with a very thin needle. It raises a small bump that fades on its own.
2. **While you wait:** you can shower and work as usual, but don't scratch, bandage or put lotion on the spot.
3. **Second visit:** you come back two or three days later to have the reaction measured. Miss that window and the reading no longer counts, so the whole test starts over.

## Who usually needs this test?

- People who work in hospitals, nursing homes, daycares or home care.
- Nursing, medical assistant and other health-career students.
- Volunteers at schools or shelters, and some public-facing jobs.
- Anyone who lived with someone diagnosed with tuberculosis.

If you need it for a green card, the requirement is set by USCIS and handled as part of the [immigration exam](/en/services/examenes-inmigracion).

## What does a positive result mean?

Testing positive is not the same as being sick with TB or able to spread it. It means your body met the bacteria at some point; people who got the BCG vaccine as children, common in Latin America, can react too. That's why the medical team asks about cough, fever or weight loss and lines up the next steps, such as a chest X-ray, with whatever referral is needed.

## What do you take with you at the end?

When the test is negative, you get a document with the date it was placed, the date it was read and the size in millimeters, which is what employers and schools usually want. If they also require shots or a [school physical](/en/services/examen-fisico-escolar), you can take care of it in the same visit.

You don't need to come back at the same hour for the reading: we're open until 9 PM on weekdays and Saturdays.`,
  },
  {
    slug: "enfermedades-transmision-sexual",
    order: 16,
    category: "laboratorio",
    icon: "ShieldCheck",
    title: "Pruebas de Enfermedades de Transmisión Sexual (STD)",
    titleEn: "Sexually Transmitted Disease (STD) Testing",
    shortDescription:
      "Pruebas de enfermedades de transmisión sexual confidenciales y sin juicios, con tratamiento.",
    shortDescriptionEn:
      "Confidential, judgment-free sexually transmitted disease testing, with treatment.",
    description:
      "Pruebas de ETS/STD confidenciales en Houston, TX. Resultados y tratamiento en español, con precios accesibles.",
    descriptionEn:
      "Confidential STD testing in Houston, TX. Results and treatment in Spanish, with affordable pricing.",
    keywords: [
      "prueba std houston",
      "examen de transmision sexual houston",
      "prueba ets confidencial houston",
      "clinica std español houston",
    ],
    keywordsEn: [
      "std testing houston",
      "std test near me houston",
      "confidential std clinic houston",
      "sti testing houston",
    ],
    features: [
      "Pruebas confidenciales y sin juicios",
      "Evaluación de síntomas y riesgo",
      "Tratamiento disponible",
      "Atención en español",
    ],
    featuresEn: [
      "Confidential, judgment-free testing",
      "Symptom and risk assessment",
      "Treatment available",
      "Care in Spanish",
    ],
    longDescription: `Las pruebas de enfermedades de transmisión sexual en Clínica Hispana Nueva Salud Hammerly son para cualquier adulto que quiera revisar su salud sexual, tenga o no molestias. En Spring Branch, Houston, el equipo médico escucha tu situación sin juzgar, elige las pruebas que tienen sentido para ti y te trata si sale algo.

## ¿Cuándo vale la pena hacerte las pruebas?

Conviene revisarte cuando empiezas una relación nueva, después de tener relaciones sin condón o si tu pareja te dice que tiene una infección. También si notas flujo diferente, ardor, llagas, verrugas o comezón en la zona genital. Muchas infecciones no dan síntomas, así que sentirte bien no siempre significa estar sano. Si la exposición fue muy reciente, es posible que el equipo médico te sugiera repetir alguna prueba más adelante, porque ciertas infecciones tardan en aparecer en los análisis.

## ¿Qué muestras se toman?

- **Orina:** útil para detectar varias infecciones comunes sin ninguna molestia.
- **Sangre:** para infecciones que se buscan en el torrente sanguíneo.
- **Revisión de la zona:** si hay llagas o lesiones, el equipo médico las examina para orientar el diagnóstico.

## ¿Cómo se cuida tu privacidad?

Tu consulta y tus resultados son confidenciales: no se comparten con tu familia, tu pareja ni tu empleador. Puedes pedir que te llamen a un número específico o hablar con el equipo médico a solas, sin acompañantes. Las preguntas sobre tu vida sexual son para elegir bien las pruebas, no para juzgarte.

## ¿Qué pasa si un resultado sale positivo?

1. Te avisamos cuando los resultados estén listos y el equipo médico te explica qué encontró.
2. Muchas infecciones se curan con medicamentos que te entregamos en la farmacia de la clínica.
3. Te orientamos sobre cómo avisar a tu pareja, para que también reciba tratamiento y no vuelva a pasarte la infección.
4. Si hace falta un control posterior o atención de [ginecología](/services/ginecologia) o [salud del hombre](/services/salud-hombre), lo organizamos.

Para seguir cuidándote, pregunta también por nuestros [anticonceptivos](/services/anticonceptivos).

Puedes venir en el horario que te dé más privacidad: también atendemos el domingo de 9 AM a 5 PM.`,
    longDescriptionEn: `Sexually transmitted disease testing at Clínica Hispana Nueva Salud Hammerly is for any adult who wants to check on their sexual health, with or without symptoms. In Spring Branch, Houston, the medical team listens to your situation without judgment, chooses the tests that make sense for you and treats you if something turns up.

## When is it worth getting tested?

It's a good idea when you start a new relationship, after sex without a condom or if a partner tells you they have an infection. Also if you notice unusual discharge, burning, sores, warts or itching in the genital area. Many infections cause no symptoms at all, so feeling fine doesn't always mean you're clear. If the exposure was very recent, the medical team may suggest repeating a test later, since some infections take a while to show up on lab work.

## Which samples are taken?

- **Urine:** detects several common infections with no discomfort.
- **Blood:** for infections that are looked for in the bloodstream.
- **Exam of the area:** if there are sores or lesions, the medical team checks them to guide the diagnosis.

## How is your privacy protected?

Your visit and your results are confidential: they aren't shared with your family, your partner or your employer. You can ask us to call a specific number or talk with the medical team alone, without anyone else in the room. The questions about your sex life are there to pick the right tests, not to judge you.

## What happens if a result is positive?

1. Once your results are in, we reach out and the medical team walks you through each finding.
2. Many infections are cured with medication handed to you at the clinic's pharmacy.
3. We guide you on how to tell your partner so they get treated too and don't pass the infection back to you.
4. If you need a follow-up check or [gynecology](/en/services/ginecologia) or [men's health](/en/services/salud-hombre) care, we set it up.

To keep protecting yourself, ask about our [birth control](/en/services/anticonceptivos) options as well.

Come at whatever time gives you the most privacy: we're also open on Sundays from 9 AM to 5 PM.`,
  },
  {
    slug: "examen-alcohol-drogas",
    order: 17,
    category: "examenes",
    icon: "Beaker",
    title: "Exámenes de Alcohol y Drogas",
    titleEn: "Alcohol & Drug Testing",
    shortDescription:
      "Pruebas de alcohol y drogas para trabajo y trámites, rápidas y con documentación.",
    shortDescriptionEn:
      "Alcohol and drug testing for work and paperwork, fast and with documentation.",
    description:
      "Exámenes de alcohol y drogas en Houston, TX. Para empleo y trámites, en español, con precios accesibles.",
    descriptionEn:
      "Alcohol and drug testing in Houston, TX. For employment and paperwork, in Spanish, with affordable pricing.",
    keywords: [
      "examen de drogas houston",
      "prueba de alcohol y drogas houston",
      "drug test houston español",
      "examen de drogas para trabajo houston",
    ],
    keywordsEn: [
      "drug test houston",
      "alcohol and drug test houston",
      "employment drug test houston",
      "drug screening houston",
    ],
    features: [
      "Prueba de drogas para empleo",
      "Prueba de alcohol",
      "Proceso rápido",
      "Documentación del resultado",
    ],
    featuresEn: [
      "Drug test for employment",
      "Alcohol test",
      "Fast process",
      "Result documentation",
    ],
    longDescription: `El examen de alcohol y drogas de Clínica Hispana Nueva Salud Hammerly es para personas que lo necesitan por un empleo nuevo, un requisito de su trabajo actual o un trámite personal. En nuestra clínica de Spring Branch, Houston, tomamos la muestra con discreción y te damos la documentación del resultado para entregarla a quien te la pidió.

## ¿Qué prueba te pidieron exactamente?

Antes de venir, pregunta a tu empleador o a la oficina del trámite qué tipo de prueba necesitan: solo drogas, solo alcohol o ambas, y si tienen un formulario propio o una lista de sustancias. Cada empresa tiene sus reglas, y llegar con esa información evita repetir la prueba. Si se trata de un puesto de manejo comercial, revisa también los requisitos del [examen físico DOT](/services/examen-dot).

## ¿Qué debes llevar el día de la prueba?

- Una identificación oficial con foto vigente.
- El formulario, la orden o el correo de tu empleador, si te dieron uno.
- Los nombres de los medicamentos con receta que tomas, incluidas pastillas para el dolor, para dormir o para la ansiedad.
- Tus lentes si los necesitas para leer y firmar los papeles.

## ¿Cómo transcurre la toma de muestra?

1. El personal confirma tu identidad y revisa contigo los datos del formulario.
2.
3. Recoges la muestra siguiendo las indicaciones que te dan y la entregas cerrada.
4. Se etiqueta delante de ti y firmas los documentos que lo confirman.

## ¿Qué pasa si tomas medicamentos recetados?

Hay medicinas recetadas, por ejemplo algunos calmantes potentes o tranquilizantes, que dejan huella en este tipo de prueba. Por eso conviene que traigas los nombres y, si los tienes, los frascos con tu receta. Avisar no te perjudica: permite que el resultado se interprete correctamente. Si tu tratamiento lo indicó el equipo médico de la clínica, ya consta en tu expediente.

Para esta prueba es mejor no llegar con la vejiga vacía: toma tu agua de siempre y ven a Hammerly Blvd cuando te quede bien.`,
    longDescriptionEn: `The alcohol and drug test at Clínica Hispana Nueva Salud Hammerly is for people who need it for a new job, a requirement at their current workplace or a personal matter. At our Spring Branch clinic in Houston, we collect the sample discreetly and give you documentation of the result to hand to whoever asked for it.

## Which test were you asked to take?

Before you come in, ask your employer or the office handling your paperwork what kind of test they need: drugs only, alcohol only or both, and whether they have their own form or a list of substances. Every company has its own rules, and showing up with that information saves you from repeating the test. If the job involves commercial driving, also review the requirements for the [DOT physical](/en/services/examen-dot).

## What should you bring on test day?

- A current government-issued photo ID.
- The form, order or email from your employer, if you got one.
- The names of any prescription medicines you take, including pain, sleep or anxiety pills.
- Your reading glasses, if you need them to read and sign the paperwork.

## How does the collection go?

1. Our staff confirms your identity and goes over the form with you.
2.
3. You collect the sample following the instructions you're given and hand it over sealed.
4. It's labeled in front of you and you sign the documents confirming it.

## What if you take prescription medication?

Some legal medicines, such as certain strong painkillers or anxiety pills, can show up on the test. That's why it helps to bring their names and, if you have them, the bottles with your prescription label. Speaking up doesn't count against you: it lets the result be read correctly. If the clinic's medical team prescribed your treatment, it's already in your chart.

It's best not to arrive with an empty bladder for this test: drink your usual water and come to Hammerly Blvd whenever it suits you.`,
  },
  {
    slug: "electrocardiograma",
    order: 18,
    category: "laboratorio",
    icon: "HeartPulse",
    title: "Electrocardiograma (EKG)",
    titleEn: "Electrocardiogram (EKG)",
    shortDescription:
      "Electrocardiograma (EKG) rápido y sin dolor para evaluar la salud de tu corazón, en español.",
    shortDescriptionEn:
      "Fast, painless electrocardiogram (EKG) to evaluate your heart health, in Spanish.",
    description:
      "Electrocardiograma EKG en Houston, TX, rápido y sin dolor. Resultados y atención en español, con precios accesibles.",
    descriptionEn:
      "Electrocardiogram EKG in Houston, TX, fast and painless. Results and care in Spanish, with affordable pricing.",
    keywords: [
      "electrocardiograma houston",
      "ekg houston español",
      "examen del corazon houston",
      "ecg houston",
    ],
    keywordsEn: [
      "electrocardiogram houston",
      "ekg houston",
      "heart test houston",
      "ecg houston spanish",
    ],
    features: [
      "Estudio rápido y sin dolor",
      "Evaluación del ritmo cardiaco",
      "Útil para exámenes médicos",
      "Resultados en español",
    ],
    featuresEn: [
      "Fast and painless test",
      "Heart-rhythm evaluation",
      "Useful for medical exams",
      "Results in Spanish",
    ],
    longDescription: `El electrocardiograma (EKG) de Clínica Hispana Nueva Salud Hammerly registra en papel la actividad eléctrica de tu corazón con unos parches pegados a la piel. Lo hacemos en Spring Branch, Houston, a adultos con palpitaciones o presión alta, a quien lo necesita antes de una cirugía y a trabajadores que lo requieren en un examen médico.

## ¿Qué muestra el electrocardiograma de tu corazón?

El trazo enseña cómo late tu corazón: si el ritmo es regular, si va muy rápido o muy lento y si la señal eléctrica recorre el músculo como debe. También puede dar pistas de que una parte del corazón está trabajando con esfuerzo, algo que importa en personas con presión alta o diabetes de muchos años. No mide el colesterol ni ve las arterias por dentro, así que muchas veces se combina con [exámenes de sangre](/services/examenes-sangre).

## ¿Cómo prepararte para que el trazo salga limpio?

- Elige blusa o camisa separada del pantalón: así solo tendrás que descubrir el torso.
- No te pongas crema, aceite ni talco en el pecho, los brazos o las piernas ese día.
- Quítate cadenas y relojes antes de acostarte en la camilla.
- Avisa si tienes marcapasos o si tomas medicinas para el corazón o la presión.
- Evita el café y el cigarro justo antes, porque pueden acelerar el pulso.

## ¿Qué pasa durante el estudio?

Te acuestas boca arriba y el personal coloca unos parches adhesivos en el pecho, las muñecas y los tobillos, conectados con cables al aparato. Solo tienes que quedarte quieto, respirar normal y no hablar mientras se graba. No pasa corriente por tu cuerpo y no se siente nada. Al final se retiran los parches, que a veces jalan un poco el vello.

## ¿Quién lo revisa y qué sigue?

El equipo médico de la clínica revisa el trazo junto con tu presión, tus síntomas y tus antecedentes. Si todo está en orden, queda en tu expediente para comparar en el futuro. Si aparece algo que necesita más estudio, se orienta la referencia al especialista del corazón. Cuando tienes presión alta o colesterol elevado, el resultado se integra a tu control de [condiciones crónicas](/services/condiciones-cronicas).

Si sientes un dolor de pecho fuerte, falta de aire o desmayo en este momento, no vengas manejando: llama al 911. Para un EKG de control, te esperamos en Hammerly Blvd.`,
    longDescriptionEn: `The electrocardiogram (EKG) at Clínica Hispana Nueva Salud Hammerly records your heart's electrical activity through small patches stuck to your skin. We perform it in Spring Branch, Houston, for adults with palpitations or high blood pressure, for people who need it before surgery and for workers whose medical exam requires one.

## What does the EKG show about your heart?

The tracing shows how your heart beats: whether the rhythm is regular, whether it's too fast or too slow and whether the electrical signal travels through the muscle the way it should. It can also hint that part of the heart is working under strain, which matters for people with long-standing high blood pressure or diabetes. It doesn't measure cholesterol or see inside the arteries, so it's often paired with [blood tests](/en/services/examenes-sangre).

## How do you get ready for a clean tracing?

- Wear a two-piece outfit so only your chest needs to be uncovered.
- Skip lotion, oil or powder on your chest, arms and legs that day.
- Take off necklaces and watches before lying on the exam table.
- Tell us if you have a pacemaker or take heart or blood-pressure medicine.
- Avoid coffee and cigarettes right before, since they can speed up your pulse.

## What happens during the test?

You lie on your back while our staff places sticky patches on your chest, wrists and ankles, wired to the machine. All you do is stay still, breathe normally and not talk while it records. No electricity goes into your body and you don't feel a thing. At the end the patches come off, sometimes tugging a little on body hair.

## Who reviews it, and what's next?

The clinic's medical team reads the tracing along with your blood pressure, symptoms and history. If everything looks fine, it stays in your chart for comparison later on. Should the tracing raise a question, we help arrange a referral to a heart specialist. When you have high blood pressure or high cholesterol, the result becomes part of your [chronic conditions](/en/services/condiciones-cronicas) follow-up.

If you have severe chest pain, shortness of breath or fainting right now, don't drive yourself: call 911. For a routine EKG, we'll see you on Hammerly Blvd.`,
  },
  {
    slug: "ultrasonido",
    order: 19,
    category: "laboratorio",
    icon: "ScanLine",
    title: "Ultrasonido y Ecografía",
    titleEn: "Ultrasound & Sonography",
    shortDescription:
      "Ultrasonidos diagnósticos y de embarazo con equipo moderno y atención en español.",
    shortDescriptionEn:
      "Diagnostic and pregnancy ultrasounds with modern equipment and care in Spanish.",
    description:
      "Ultrasonido y ecografía en Houston, TX: abdominal, pélvico y de embarazo. En español, con precios accesibles.",
    descriptionEn:
      "Ultrasound and sonography in Houston, TX: abdominal, pelvic and pregnancy. In Spanish, with affordable pricing.",
    keywords: [
      "ultrasonido houston",
      "ecografia houston español",
      "ultrasonido de embarazo houston",
      "sonograma houston",
    ],
    keywordsEn: [
      "ultrasound houston",
      "sonogram houston",
      "pregnancy ultrasound houston",
      "abdominal ultrasound houston",
    ],
    features: [
      "Ultrasonido abdominal y pélvico",
      "Ultrasonido de embarazo",
      "Equipo moderno",
      "Atención en español",
    ],
    featuresEn: [
      "Abdominal and pelvic ultrasound",
      "Pregnancy ultrasound",
      "Modern equipment",
      "Care in Spanish",
    ],
    longDescription: `El ultrasonido de Clínica Hispana Nueva Salud Hammerly usa ondas de sonido para ver por dentro órganos como el hígado, la vesícula, los riñones, el útero o la tiroides. Lo hacemos en nuestra clínica de Spring Branch, Houston, a adultos con dolor o molestias por estudiar y a mujeres embarazadas que necesitan seguir a su bebé.

## ¿Qué partes del cuerpo se pueden revisar?

- **Abdomen:** hígado, vesícula, páncreas y riñones, por ejemplo cuando duele del lado derecho después de comer grasa.
- **Pelvis:** útero y ovarios en mujeres, o la vejiga, para buscar quistes, miomas o la causa de un sangrado irregular.
- **Embarazo:** para confirmar que el embarazo va bien y seguir el crecimiento del bebé.
- **Cuello y tejidos blandos:** la tiroides o una bolita que apareció debajo de la piel.

## ¿Cómo te preparas según el estudio?

La preparación cambia con la zona. El de abdomen suele pedir ayuno para que la vesícula se vea bien y los gases no estorben. El pélvico muchas veces necesita la vejiga llena, así que te pueden pedir que tomes agua antes y no vayas al baño. Los de tiroides o tejidos blandos casi nunca piden nada. Cuando llames, dinos qué estudio te toca y el personal te explica exactamente cómo llegar.

## ¿Qué sientes durante el ultrasonido?

Te acuestas en la camilla y se pone un gel frío sobre la piel. Después se desliza un pequeño aparato que manda las imágenes a la pantalla; en algunos momentos se presiona un poco para ver mejor, y quizá te pidan aguantar la respiración o cambiar de lado. No usa radiación, no requiere agujas y al terminar solo te limpias el gel.

## ¿Qué pasa después de las imágenes?

El equipo médico de la clínica te explica lo que se ve y cómo encaja con tus síntomas. A veces el ultrasonido confirma una sospecha, como piedras en la vesícula, y otras veces abre la puerta a más pruebas. Si el estudio es por [prueba de embarazo](/services/prueba-embarazo) positiva o por molestias ginecológicas, el seguimiento continúa en [ginecología](/services/ginecologia). Si el hallazgo pide más estudio, se orienta la referencia al especialista.

¿Te pidieron ayuno? Llega temprano a Hammerly Blvd: abrimos a las 9 AM todos los días.`,
    longDescriptionEn: `Ultrasound at Clínica Hispana Nueva Salud Hammerly uses sound waves to look inside organs such as the liver, gallbladder, kidneys, uterus or thyroid. We do it at our Spring Branch clinic in Houston for adults with pain or symptoms that need a closer look and for pregnant women keeping track of their baby.

## Which parts of the body can be checked?

- **Abdomen:** liver, gallbladder, pancreas and kidneys, for instance when your right side hurts after a fatty meal.
- **Pelvis:** uterus and ovaries in women, or the bladder, to look for cysts, fibroids or the cause of irregular bleeding.
- **Pregnancy:** to confirm the pregnancy is on track and follow the baby's growth.
- **Neck and soft tissue:** the thyroid or a lump that has appeared under the skin.

## How do you prepare for each study?

Prep depends on the area. An abdominal scan usually calls for fasting so the gallbladder shows clearly and gas doesn't get in the way. A pelvic scan often needs a full bladder, so you may be asked to drink water beforehand and hold it. Thyroid and soft-tissue scans rarely need anything. When you call, tell us which scan you need and our staff will explain exactly how to come in.

## What does the ultrasound feel like?

You lie on the exam table and a cool gel goes on your skin. Then a small handheld device glides over the area and sends images to the screen; at times it presses a little to get a better view, and you may be asked to hold your breath or roll to one side. There's no radiation and no needles, and when it's over you just wipe off the gel.

## What happens after the images?

The clinic's medical team explains what the images show and how they fit your symptoms. Sometimes the ultrasound confirms a suspicion, like gallstones, and other times it leads to more tests. If the scan follows a positive [pregnancy test](/en/services/prueba-embarazo) or gynecological symptoms, follow-up continues in [gynecology](/en/services/ginecologia). If a finding needs more study, we guide the referral to a specialist.

Told to fast? Get to Hammerly Blvd early: our doors open at 9 AM every day.`,
  },
  {
    slug: "examen-dot",
    order: 20,
    category: "examenes",
    icon: "Truck",
    highlighted: true,
    title: "Examen Físico DOT - Licencia CDL",
    titleEn: "DOT Physical Exam - CDL License",
    metaTitle: "Examen Físico DOT para CDL en Houston",
    metaTitleEn: "DOT Physical Exam for CDL in Houston",
    shortDescription:
      "Examen físico DOT para conductores comerciales (CDL), con certificado el mismo día.",
    shortDescriptionEn:
      "DOT physical exam for commercial drivers (CDL), with same-day certificate.",
    description:
      "Examen físico DOT en Houston, TX para licencia CDL, certificado el mismo día y en español. Con precios accesibles.",
    descriptionEn:
      "DOT physical exam in Houston, TX for CDL license, same-day certificate, in Spanish. With affordable pricing.",
    keywords: [
      "examen dot houston",
      "examen fisico dot houston español",
      "examen cdl houston",
      "dot physical houston español",
    ],
    keywordsEn: [
      "dot physical houston",
      "dot exam houston",
      "cdl physical houston",
      "dot medical exam houston",
    ],
    features: [
      "Certificado DOT el mismo día",
      "Para licencia CDL",
      "Proceso rápido",
      "Atención en español",
    ],
    featuresEn: [
      "Same-day DOT certificate",
      "For CDL license",
      "Fast process",
      "Care in Spanish",
    ],
    longDescription: `El examen físico DOT de Clínica Hispana Nueva Salud Hammerly es la revisión médica que exige el Departamento de Transporte a quienes manejan camiones y otros vehículos comerciales. Si vas a sacar o renovar tu licencia CDL en Houston, lo hacemos en Spring Branch con todo el proceso explicado en español y en inglés.

## ¿Qué revisa el examen físico DOT?

- **Historial de salud:** llenas el cuestionario de la FMCSA sobre enfermedades, cirugías y medicinas, y el equipo médico lo repasa contigo.
- **Vista:** lectura de letras a distancia con y sin lentes, visión de los lados y reconocimiento de colores de semáforo.
- **Oído:** si escuchas una voz baja a cierta distancia, o con tus aparatos si los usas.
- **Presión y pulso:** uno de los puntos que más influye en el certificado.
- **Orina:** una muestra sencilla para revisar azúcar, proteína y sangre, que puede alertar sobre problemas de riñón o diabetes.
- **Exploración física:** corazón, pulmones, abdomen, columna, articulaciones y reflejos.

## ¿Qué conviene llevar para no tener que volver?

Trae tu licencia de manejo y tus lentes o lentes de contacto. Si usas aparatos para oír, llévalos puestos. Anota los nombres y dosis de todas tus medicinas. Si tienes diabetes, presión alta, apnea del sueño o problemas del corazón, trae tus últimos resultados o una carta de tu proveedor con el control de la condición: con eso se evita que la evaluación quede pendiente.

## ¿La diabetes o la presión alta te dejan sin manejar?

Tener una condición crónica no te descalifica por sí sola. Lo que se evalúa es que esté controlada. Según tus cifras, el certificado puede emitirse por un periodo más corto para que te revises más seguido. Si tu presión anda alta ese día, el equipo médico te explica qué opciones hay; muchas personas mejoran su control en la consulta de [condiciones crónicas](/services/condiciones-cronicas) antes de su siguiente renovación.

## ¿Cómo es la visita paso a paso?

1. Presentas tu licencia y llenas tu parte del formulario.
2. El personal mide vista, oído, presión y toma la muestra de orina.
3. El equipo médico hace la exploración y revisa tus documentos.
4. Si cumples los requisitos, recibes tu certificado médico para entregarlo en tu trámite.

Si tu empresa también te pide una [prueba de drogas](/services/examen-alcohol-drogas), pregunta si puedes hacerla en la misma visita.

Abrimos hasta las 9 PM de lunes a sábado, así que puedes venir al terminar tu ruta.`,
    longDescriptionEn: `The DOT physical at Clínica Hispana Nueva Salud Hammerly is the medical exam the Department of Transportation requires for people who drive trucks and other commercial vehicles. If you're getting or renewing your CDL in Houston, we handle it in Spring Branch with every step explained in Spanish and English.

## What does the DOT physical check?

- **Health history:** you fill out the FMCSA questionnaire on illnesses, surgeries and medications, and the medical team reviews it with you.
- **Vision:** reading letters at a distance with and without glasses, side vision and telling traffic-light colors apart.
- **Hearing:** whether you can hear a soft voice from a set distance, or with your hearing aids if you use them.
- **Blood pressure and pulse:** one of the factors that weighs most on your certificate.
- **Urine:** a simple sample checked for sugar, protein and blood, which can flag kidney problems or diabetes.
- **Physical exam:** heart, lungs, abdomen, spine, joints and reflexes.

## What should you bring so you don't have to come back?

Bring your driver's license and your glasses or contacts. If you use hearing aids, wear them. Write down the names and doses of all your medications. If you have diabetes, high blood pressure, sleep apnea or a heart condition, bring your latest results or a letter from your provider showing it's under control: that keeps your evaluation from being left on hold.

## Does diabetes or high blood pressure keep you off the road?

A chronic condition doesn't disqualify you on its own. What's evaluated is whether it's under control. When your readings are borderline, the certificate can be written for less time, which simply means an earlier recheck. If your blood pressure runs high that day, the medical team explains your options; many drivers tighten their control through our [chronic conditions](/en/services/condiciones-cronicas) visits before the next renewal.

## In what order does the DOT exam happen?

1. You show your license and complete your part of the form.
2. Our staff checks vision, hearing and blood pressure and collects the urine sample.
3. The medical team does the physical exam and reviews your documents.
4. If you meet the requirements, you receive your medical certificate to turn in with your paperwork.

If your company also requires a [drug test](/en/services/examen-alcohol-drogas), ask whether you can do it during the same visit.

We're open until 9 PM Monday through Saturday, so you can come by after your route.`,
  },
  {
    slug: "examenes-inmigracion",
    order: 21,
    category: "examenes",
    icon: "ClipboardCheck",
    title: "Examen Médico de Inmigración I-693",
    titleEn: "Immigration Medical Exam I-693",
    metaTitle: "Examen Médico de Inmigración I-693 en Houston",
    metaTitleEn: "Immigration Medical Exam I-693 in Houston",
    shortDescription:
      "Examen médico de inmigración con médico autorizado por USCIS y el Formulario I-693 sellado.",
    shortDescriptionEn:
      "Immigration medical exam with a USCIS-authorized physician and the sealed Form I-693.",
    description:
      "Examen médico de inmigración I-693 en Houston, TX con médico autorizado por USCIS. Vacunas y formulario sellado.",
    descriptionEn:
      "I-693 immigration medical exam in Houston, TX with a USCIS-authorized physician. Vaccines and sealed form.",
    keywords: [
      "examen de inmigracion houston",
      "examen medico i-693 houston",
      "civil surgeon houston español",
      "medico autorizado uscis houston",
    ],
    keywordsEn: [
      "immigration medical exam houston",
      "i-693 exam houston",
      "civil surgeon houston",
      "uscis authorized doctor houston",
    ],
    features: [
      "Médico autorizado (civil surgeon)",
      "Formulario I-693 sellado",
      "Vacunas requeridas disponibles",
      "Proceso explicado en español",
    ],
    featuresEn: [
      "Authorized civil surgeon",
      "Sealed Form I-693",
      "Required vaccines available",
      "Process explained in Spanish",
    ],
    longDescription: `El examen médico de inmigración I-693 es el paso de salud que USCIS pide a quien solicita el ajuste de estatus. En Clínica Hispana Nueva Salud Hammerly, en Spring Branch (Houston), lo realiza un Civil Surgeon autorizado por USCIS, y al final recibes el formulario sellado dentro de un sobre cerrado.

## ¿Cómo transcurre la visita para el I-693?

1. Llegas a 8538 Hammerly Blvd Suite B sin cita y das tus datos en recepción.
2. El Civil Surgeon repasa tu historial de salud y el registro de vacunas que traigas.
3. Se hace la revisión física que exige el formulario.
4. Se toman las muestras de laboratorio que USCIS pide según tu edad, entre ellas la de [tuberculosis](/services/prueba-tuberculosis).
5. Si te falta alguna vacuna obligatoria, te dicen cuál; las de influenza y tétanos se ponen aquí mismo en el área de [vacunas](/services/vacunas).
6. Cuando están los resultados, te avisamos para que pases por el sobre.

## ¿Qué papeles conviene llevar ese día?

- Pasaporte u otra identificación oficial con foto.
- Cartilla o registro de vacunas, del país que sea, aunque esté incompleto.
- Lista de los medicamentos que tomas y de tus diagnósticos anteriores.
- Si ya te trataron por tuberculosis, el comprobante del tratamiento.
- El formulario I-693 descargado de la página de USCIS, sin firmar: la firma se pone frente al Civil Surgeon.

## ¿Qué hago con el sobre sellado?

El sobre va cerrado y así debe quedarse. USCIS no acepta un I-693 cuyo sobre llegue abierto o alterado, de modo que lo guardas tal cual y lo entregas con tu solicitud o cuando te lo pidan. Te damos además una copia para tu archivo personal.

## ¿Y si algún resultado sale alterado?

Un resultado fuera de rango no significa que el trámite se detenga. El equipo médico de la clínica te explica qué encontró, qué pasos siguen y, si hace falta, cómo se completa el formulario después de la evaluación adicional.

Para iniciar tu examen médico de inmigración, ven a Hammerly Blvd cualquier día de la semana o llámanos y pregunta el precio del I-693 antes de venir.`,
    longDescriptionEn: `The I-693 immigration medical exam is the health step USCIS requires from anyone applying for adjustment of status. At Clínica Hispana Nueva Salud Hammerly in Spring Branch, Houston, a USCIS-authorized Civil Surgeon performs it, and you leave with the form sealed inside a closed envelope once everything is complete.

## What happens during the I-693 visit?

1. You walk in to 8538 Hammerly Blvd Suite B and check in at the front desk.
2. The Civil Surgeon goes over your health history and whatever vaccine record you bring.
3. You get the physical review the form calls for.
4. Lab samples USCIS requires for your age are collected, including the [tuberculosis screening](/en/services/prueba-tuberculosis).
5. If a required vaccine is missing, you're told which one; flu and tetanus shots are given right here through our [vaccine service](/en/services/vacunas).
6. When the results are in, we let you know so you can pick up the envelope.

## Which papers should you bring?

- A passport or another official photo ID.
- Your vaccine card or record from any country, even if it has gaps.
- A list of the medicines you take and any past diagnoses.
- Proof of treatment if you were ever treated for tuberculosis.
- The I-693 printed from the USCIS website, unsigned, because you sign it in front of the Civil Surgeon.

## What do you do with the sealed envelope?

Keep it closed. USCIS rejects an I-693 whose envelope arrives opened or tampered with, so you store it as it is and submit it with your application or when USCIS asks for it. You also get a copy for your personal records.

## What if a result comes back abnormal?

An out-of-range result doesn't automatically stall your case. The clinic's medical team walks you through what was found, what the next step is and, when needed, how the form gets finished after the extra evaluation.

To start your immigration medical exam, stop by Hammerly Blvd any day of the week or call and ask about the I-693 price before you come.`,
  },
  {
    slug: "vacunas",
    order: 22,
    category: "tratamientos",
    icon: "Syringe",
    title: "Vacunas contra la Influenza y Toxoide Tetánico",
    titleEn: "Flu and Tetanus (Tdap) Vaccines",
    shortDescription:
      "Vacuna contra la influenza (flu) y toxoide tetánico, aplicadas por personal médico, en español.",
    shortDescriptionEn:
      "Influenza (flu) vaccine and tetanus toxoid, administered by medical staff, in Spanish.",
    description:
      "Vacunas de flu y toxoide tetánico en Houston, TX. Aplicación por personal médico en español, con precios accesibles.",
    descriptionEn:
      "Flu and tetanus vaccines in Houston, TX. Administered by medical staff in Spanish, with affordable pricing.",
    keywords: [
      "vacuna de la flu houston",
      "vacuna contra la influenza houston",
      "toxoide tetanico houston",
      "vacuna del tetano houston",
    ],
    keywordsEn: [
      "flu shot houston",
      "flu vaccine houston",
      "tetanus shot houston",
      "tdap vaccine houston",
    ],
    features: [
      "Vacuna contra la influenza (flu)",
      "Toxoide tetánico",
      "Aplicación por personal médico",
      "Atención en español",
    ],
    featuresEn: [
      "Influenza (flu) vaccine",
      "Tetanus toxoid",
      "Administered by medical staff",
      "Care in Spanish",
    ],
    longDescription: `En Clínica Hispana Nueva Salud Hammerly, en Spring Branch, aplicamos dos vacunas para adultos: la de la influenza, que conviene ponerse cada temporada de gripe, y el toxoide tetánico, el refuerzo que protege contra el tétanos. Puedes venir sin cita a Hammerly Blvd y el personal médico te la pone en la misma visita.

## ¿Cuál de las dos me toca?

**Influenza (flu):** el virus cambia de un año a otro, por eso la vacuna se renueva cada temporada. Es especialmente importante si tienes diabetes, asma, presión alta, más de 65 años o convives con bebés o adultos mayores.

**Toxoide tetánico:** el tétanos entra por cortes, pinchazos con clavos o heridas sucias. Si no recuerdas cuándo fue tu último refuerzo, o te lastimaste con algo oxidado, coméntalo al llegar.

Si te hiciste una herida que necesita puntos, puedes recibir el refuerzo durante la atención de [suturas](/services/suturas-heridas).

## ¿Qué hacer antes de vacunarte?

- Avisa si alguna vez tuviste una reacción fuerte a una vacuna.
- Menciona si tienes fiebre alta ese día; con un resfriado leve normalmente sí se puede.
- Usa ropa que deje el hombro fácil de descubrir.
- Trae tu registro de vacunas para anotar la nueva dosis.

## ¿Qué es normal sentir después?

El brazo puede quedar adolorido, un poco rojo o hinchado donde entró la aguja. Con la vacuna de la influenza algunas personas sienten cansancio o algo de malestar general, que pasa solo. La vacuna inyectable no contiene virus vivo, así que no te contagia la gripe. Si notas dificultad para respirar o hinchazón en la cara, busca atención de inmediato.

## ¿Sirve para el trámite de inmigración?

Durante el [examen I-693](/services/examenes-inmigracion), el Civil Surgeon revisa qué vacunas te faltan; si entre ellas están la de la influenza o la del tétanos, se aplican aquí y quedan registradas.

Puedes pasar a vacunarte de lunes a sábado hasta las 9 PM, y los domingos hasta las 5 PM; pregunta el precio en recepción.`,
    longDescriptionEn: `At Clínica Hispana Nueva Salud Hammerly in Spring Branch, we give two adult vaccines: the flu shot, which is worth getting every flu season, and tetanus toxoid, the booster that protects against tetanus. You can walk in to Hammerly Blvd and the medical staff will give it to you during that visit.

## Which one do you need?

**Influenza (flu):** the virus changes from year to year, so the shot is updated each season. It matters most if you have diabetes, asthma or high blood pressure, are over 65, or live with babies or older adults.

**Tetanus toxoid:** tetanus gets in through cuts, nail punctures or dirty wounds. If you can't remember your last booster, or you got hurt on something rusty, mention it when you check in.

If your wound needs stitches, you can get the booster while it's being closed through our [suturing service](/en/services/suturas-heridas).

## How should you prepare?

- Tell the staff if you ever had a strong reaction to a vaccine.
- Mention a high fever that day; a mild cold usually isn't a problem.
- Wear a top that lets you uncover your shoulder easily.
- Bring your vaccine record so the new dose can be written down.

## What's normal afterward?

Your arm may feel sore, a bit red or swollen where the needle went in. After the flu shot some people feel tired or slightly achy, and it fades on its own. The injected flu vaccine has no live virus, so it can't give you the flu. If you notice trouble breathing or facial swelling, get care right away.

## Does it count for the immigration exam?

During the [I-693 exam](/en/services/examenes-inmigracion), the Civil Surgeon checks which vaccines you're missing; if flu or tetanus is on that list, it's given here and recorded.

Drop in for your shot Monday through Saturday until 9 PM, or Sunday until 5 PM, and ask the front desk about the price.`,
  },
  {
    slug: "sueros-vitaminados",
    order: 23,
    category: "tratamientos",
    icon: "Droplets",
    title: "Sueros Vitaminados (Terapia IV)",
    titleEn: "Vitamin IV Therapy",
    metaTitle: "Sueros Vitaminados (Terapia IV) en Houston",
    metaTitleEn: "Vitamin IV Therapy in Houston",
    shortDescription:
      "Sueros vitaminados intravenosos para hidratación y energía, aplicados por personal médico.",
    shortDescriptionEn:
      "Intravenous vitamin drips for hydration and energy, administered by medical staff.",
    description:
      "Sueros vitaminados (terapia IV) en Houston, TX. Hidratación y vitaminas en español, con precios accesibles.",
    descriptionEn:
      "Vitamin IV therapy in Houston, TX. Hydration and vitamins in Spanish, with affordable pricing.",
    keywords: [
      "sueros vitaminados houston",
      "terapia iv houston",
      "suero de vitaminas houston",
      "hidratacion intravenosa houston",
    ],
    keywordsEn: [
      "vitamin iv therapy houston",
      "iv drip houston",
      "iv hydration houston",
      "vitamin drip houston",
    ],
    features: [
      "Hidratación intravenosa",
      "Vitaminas y minerales",
      "Aplicación por personal médico",
      "Atención en español",
    ],
    featuresEn: [
      "Intravenous hydration",
      "Vitamins and minerals",
      "Administered by medical staff",
      "Care in Spanish",
    ],
    longDescription: `Los sueros vitaminados son una aplicación por vía intravenosa que se hace en Clínica Hispana Nueva Salud Hammerly, en Spring Branch (Houston). Antes de ponerte cualquier suero, el equipo médico de la clínica revisa tu estado de salud y te explica qué contiene la mezcla, para que decidas con información y no a ciegas.

## ¿Qué pasa desde que llegas hasta que te vas?

Primero respondes unas preguntas sobre tu salud, los medicamentos que tomas y tus alergias. El personal médico toma tus signos vitales, como la presión y el pulso. Con esa información se define si el suero es adecuado para ti y se te explica, en la consulta, cuál es su contenido.

Después te sientas en un sillón, se limpia la piel del brazo y se coloca una aguja fina en la vena conectada a la bolsa del suero. El líquido entra gota a gota. Durante la aplicación el personal está pendiente de ti, y al terminar retira la aguja y cubre el punto con una gasa.

## ¿Quién no debería ponerse un suero vitaminado?

Hay casos en que el equipo médico puede decirte que no, o pedirte otra evaluación primero:

- Embarazo o lactancia.
- Enfermedad del riñón o del corazón.
- Presión muy alta sin control.
- Alergia conocida a alguno de los componentes que te expliquen.
- Tratamientos con varios medicamentos a la vez.

Si tienes alguna [condición crónica](/services/condiciones-cronicas), menciónala desde el principio.

## ¿Cómo prepararte y qué cuidar después?

- Come algo ligero antes de venir.
- Lleva una prenda de manga corta o fácil de subir.
- Durante la aplicación, avisa si sientes ardor, mareo o hinchazón en el brazo.
- Al terminar, presiona la gasa unos minutos.
- Si la zona del pinchazo se pone roja, caliente o dolorosa en los días siguientes, vuelve para que la revisen.

Si quieres probar los sueros vitaminados, ven a 8538 Hammerly Blvd Suite B sin cita, o llámanos y pregunta el precio antes de tu visita.`,
    longDescriptionEn: `Vitamin IV drips are an intravenous application offered at Clínica Hispana Nueva Salud Hammerly in Spring Branch, Houston. Before any drip, the clinic's medical team reviews your health and explains what the mix contains, so you decide with full information instead of guessing.

## What happens from check-in to checkout?

First you answer some questions about your health, the medicines you take and any allergies. The medical staff checks your vital signs, such as blood pressure and pulse. With that, they decide whether the drip suits you and walk you through its contents during the visit.

Then you settle into a chair, the skin on your arm is cleaned and a thin needle is placed in a vein, connected to the IV bag. The fluid goes in drop by drop. The staff keeps an eye on you the whole time, and when it's done they remove the needle and cover the spot with gauze.

## Who should not get a vitamin IV?

In some cases the medical team may say no, or ask for another evaluation first:

- Pregnancy or breastfeeding.
- Kidney or heart disease.
- Very high blood pressure that isn't controlled.
- A known allergy to any ingredient they describe to you.
- Taking several medications at once.

If you live with a [chronic condition](/en/services/condiciones-cronicas), bring it up from the start.

## How do you prepare, and what care comes after?

- Eat a light meal before you come.
- Wear short sleeves or something easy to roll up.
- Speak up during the drip if you feel burning, dizziness or swelling in your arm.
- Press on the gauze for a few minutes afterward.
- If the needle site turns red, warm or painful over the following days, come back so it can be checked.

If you'd like to try a vitamin IV drip, walk in to 8538 Hammerly Blvd Suite B, or call and ask about the price before your visit.`,
  },
  {
    slug: "suturas-heridas",
    order: 24,
    category: "tratamientos",
    icon: "Scissors",
    title: "Suturas de Heridas",
    titleEn: "Wound Suturing",
    shortDescription:
      "Suturas (puntos) para cerrar heridas de forma segura, sin cita previa y en español.",
    shortDescriptionEn:
      "Sutures (stitches) to close wounds safely, walk-ins welcome and in Spanish.",
    description:
      "Suturas de heridas en Houston, TX. Cierre de cortes y heridas en español, con precios accesibles.",
    descriptionEn:
      "Wound suturing in Houston, TX. Closing cuts and wounds in Spanish, with affordable pricing.",
    keywords: [
      "suturas houston",
      "puntos para herida houston",
      "cerrar herida houston",
      "doctor para cortadas houston",
    ],
    keywordsEn: [
      "wound suturing houston",
      "stitches houston",
      "laceration repair houston",
      "cut treatment houston",
    ],
    features: [
      "Cierre de heridas con suturas",
      "Limpieza y desinfección",
      "Atención sin cita previa",
      "Indicaciones de cuidado posterior",
    ],
    featuresEn: [
      "Wound closure with sutures",
      "Cleaning and disinfection",
      "Walk-ins welcome",
      "After-care instructions",
    ],
    longDescription: `Si te cortaste y la herida queda abierta o no deja de sangrar, en Clínica Hispana Nueva Salud Hammerly, en Spring Branch, la cerramos con puntos (suturas). Llegas sin cita a Hammerly Blvd y el procedimiento se hace en la misma consulta, con anestesia local y atención en español o en inglés.

## ¿Cuándo una cortada necesita puntos?

- La cortada se abre cada vez que doblas o estiras esa parte del cuerpo.
- Se ve grasa, músculo o una capa blanca en el fondo.
- Sigue sangrando después de presionar con un trapo limpio por varios minutos.
- Es larga o está en la cara, una mano o una articulación.
- Fue con un objeto sucio, un vidrio o una mordida.

Mientras llegas, presiona con una tela limpia y mantén la zona elevada. No pongas polvos, café ni remedios caseros dentro de la herida.

## ¿Cómo se cierra la herida paso a paso?

1. Se revisa la profundidad y si hay vidrio, tierra u otro cuerpo extraño.
2. Se aplica anestesia local alrededor para que no sientas el procedimiento.
3. Se lava la herida a fondo con solución estéril.
4. Se colocan los puntos necesarios para unir los bordes.
5. Se cubre con un apósito y te dan las indicaciones de cuidado.

Si no recuerdas tu último refuerzo contra el tétanos, puedes recibir la [vacuna](/services/vacunas) en la misma visita.

## ¿Cómo cuidar los puntos en casa?

Mantén el vendaje seco el tiempo que te indiquen y después lava con agua y jabón suave, sin tallar. Seca con toques. Evita albercas y tinas hasta que te retiren los puntos. Regresa antes si aparece pus, enrojecimiento que se extiende, mal olor o fiebre.

## ¿Quién quita los puntos?

Los retiramos aquí mismo cuando el equipo médico lo indique, según la zona del cuerpo. Si la herida necesita revisiones o cambios de vendaje, seguimos con el servicio de [curación de heridas](/services/curacion-heridas).

Para una cortada que no cierra, ven directo a 8538 Hammerly Blvd Suite B; abrimos los siete días.`,
    longDescriptionEn: `If you cut yourself and the wound stays open or won't stop bleeding, Clínica Hispana Nueva Salud Hammerly in Spring Branch closes it with stitches (sutures). You walk in to Hammerly Blvd with no appointment, and the procedure is done during that same visit, with local anesthesia and care in Spanish or English.

## When does a cut need stitches?

- The sides of the cut gape open whenever you bend or stretch that spot.
- You can see fat, muscle or a white layer at the bottom.
- It keeps bleeding after several minutes of pressure with a clean cloth.
- It's long, or it's on your face, a hand or a joint.
- It was caused by something dirty, glass or a bite.

On the way in, press a clean cloth on it and keep it raised. Don't put powders, coffee grounds or home remedies inside the wound.

## How is the wound closed, step by step?

1. The depth is checked, along with any glass, dirt or other debris.
2. Local anesthetic is injected around it so you don't feel the procedure.
3. The wound is washed thoroughly with sterile solution.
4. The needed stitches are placed to bring the edges together.
5. It's covered with a dressing and you get care instructions.

If you can't remember your last tetanus booster, you can get the [shot](/en/services/vacunas) during that visit too.

## How do you look after stitches at home?

Keep the bandage dry for as long as you're told, then wash gently with mild soap and water without scrubbing. Pat it dry. Pools, hot tubs and baths have to wait until the stitches are removed. Come back sooner if you see pus, spreading redness, a bad smell or a fever.

## Who takes the stitches out?

We remove them here whenever the medical team indicates, which depends on where the cut is. If the wound needs checks or dressing changes, that continues through our [wound care service](/en/services/curacion-heridas).

For a cut that won't close, head straight to 8538 Hammerly Blvd Suite B; we're open seven days a week.`,
  },
  {
    slug: "curacion-heridas",
    order: 25,
    category: "tratamientos",
    icon: "Bandage",
    title: "Cura y Curación de Heridas",
    titleEn: "Wound Care",
    shortDescription:
      "Limpieza, curación y cambio de vendajes de heridas para una buena cicatrización, en español.",
    shortDescriptionEn:
      "Cleaning, wound care and dressing changes for proper healing, in Spanish.",
    description:
      "Cura y curación de heridas en Houston, TX. Limpieza y vendajes en español, con precios accesibles.",
    descriptionEn:
      "Wound care in Houston, TX. Cleaning and dressings in Spanish, with affordable pricing.",
    keywords: [
      "curacion de heridas houston",
      "cura de heridas houston",
      "cambio de vendaje houston",
      "limpieza de herida houston",
    ],
    keywordsEn: [
      "wound care houston",
      "wound dressing houston",
      "dressing change houston",
      "wound cleaning houston",
    ],
    features: [
      "Limpieza y desinfección",
      "Cambio de vendajes",
      "Seguimiento de la cicatrización",
      "Atención en español",
    ],
    featuresEn: [
      "Cleaning and disinfection",
      "Dressing changes",
      "Healing follow-up",
      "Care in Spanish",
    ],
    longDescription: `La curación de heridas es el seguimiento que necesita una lesión para cerrar sin infectarse: limpieza, revisión y cambio de vendajes. En Clínica Hispana Nueva Salud Hammerly, en Spring Branch (Houston), atendemos heridas de cirugías, raspones grandes, quemaduras leves y llagas que tardan en sanar, sin necesidad de cita.

## ¿Qué heridas conviene curar en la clínica?

Una herida pequeña y limpia suele sanar en casa. Vale la pena venir cuando:

- Es amplia, profunda o tiene tierra pegada.
- Ya te pusieron puntos y toca revisarlos.
- Es una quemadura con ampollas.
- Tienes diabetes o mala circulación y la herida está en el pie o la pierna.
- Lleva tiempo abierta sin mejorar.

Si vives con diabetes, revisa tus pies todos los días; el control de la glucosa forma parte del manejo de [condiciones crónicas](/services/condiciones-cronicas) que ofrecemos.

## ¿Qué se hace en cada curación?

En cada visita el personal médico retira el vendaje anterior y observa el color, el olor y la cantidad de líquido de la herida. Después la lava con solución estéril, retira restos o tejido que impiden cicatrizar y coloca un apósito nuevo, elegido según si la herida está seca o húmeda. Al final te dicen cuándo volver y cómo cuidarla mientras tanto.

## ¿Qué señales indican que la herida se está infectando?

- Enrojecimiento que se extiende alrededor.
- Calor o hinchazón que aumentan.
- Pus o mal olor.
- Dolor más fuerte que al principio.
- Fiebre o escalofríos.

Ante cualquiera de estas señales, no esperes a la siguiente curación programada: ven hoy mismo. Si la herida se abre o necesita cerrarse de nuevo, te atendemos en [suturas](/services/suturas-heridas).

## ¿Cómo cuidarla entre una visita y otra?

Cada vez que vayas a tocarla, primero manos limpias; el vendaje debe seguir seco y se cambia solo con la frecuencia que te marcó el personal. No apliques remedios caseros, pasta de dientes ni alcohol directo. Si el apósito se moja o se despega, cámbialo o pasa a la clínica.

Para tu próxima curación, ven a 8538 Hammerly Blvd Suite B; el domingo atendemos hasta las 5 PM.`,
    longDescriptionEn: `Wound care is the follow-up an injury needs to close without getting infected: cleaning, checking and changing the dressing. At Clínica Hispana Nueva Salud Hammerly in Spring Branch, Houston, we look after surgical wounds, large scrapes, minor burns and sores that are slow to heal, with no appointment needed.

## Which wounds are worth bringing in?

A small, clean wound usually heals at home. Come in when:

- It's wide or deep, or has dirt stuck in it.
- You already have stitches that need a check.
- It's a burn with blisters.
- You have diabetes or poor circulation and the wound is on your foot or leg.
- It's been open a while without improving.

If you live with diabetes, check your feet every day; blood sugar control is part of the [chronic condition care](/en/services/condiciones-cronicas) we provide.

## What happens at each dressing visit?

Each time, the medical staff removes the old dressing and looks at the wound's color, smell and drainage. They then rinse it with sterile solution, clear away debris or tissue that keeps it from healing, and apply a fresh dressing chosen for whether the wound is dry or moist. Finally, you're told when to return and how to care for it until then.

## Which signs point to an infection?

- Redness spreading around it.
- Growing warmth or swelling.
- Pus or a bad smell.
- Pain that's worse than at first.
- Fever or chills.

If you notice any of these, don't wait for your next scheduled visit: come in today. If the wound opens up or needs closing again, we handle it through [suturing](/en/services/suturas-heridas).

## How do you care for it between visits?

Clean hands first, every time you touch it; the dressing should stay dry and get swapped only on the schedule the staff gave you. Skip home remedies, toothpaste or straight rubbing alcohol. If the dressing gets wet or comes loose, replace it or stop by the clinic.

For your next dressing change, come to 8538 Hammerly Blvd Suite B; on Sundays we see patients until 5 PM.`,
  },
  {
    slug: "cirugias-menores",
    order: 26,
    category: "tratamientos",
    icon: "Stethoscope",
    title: "Cirugías Menores",
    titleEn: "Minor Surgery",
    shortDescription:
      "Procedimientos de cirugía menor ambulatoria (lunares, quistes, lipomas) con anestesia local.",
    shortDescriptionEn:
      "Minor outpatient surgical procedures (moles, cysts, lipomas) with local anesthesia.",
    description:
      "Cirugías menores en Houston, TX: lunares, quistes y lipomas. Procedimiento ambulatorio en español, con precios accesibles.",
    descriptionEn:
      "Minor surgery in Houston, TX: moles, cysts and lipomas. Outpatient procedure in Spanish, with affordable pricing.",
    keywords: [
      "cirugia menor houston",
      "quitar lunar houston",
      "extraccion de quiste houston",
      "cirugia ambulatoria houston",
    ],
    keywordsEn: [
      "minor surgery houston",
      "mole removal houston",
      "cyst removal houston",
      "lipoma removal houston",
    ],
    features: [
      "Procedimientos ambulatorios",
      "Anestesia local",
      "Extracción de lunares, quistes y lipomas",
      "Cuidado posterior explicado",
    ],
    featuresEn: [
      "Outpatient procedures",
      "Local anesthesia",
      "Removal of moles, cysts and lipomas",
      "After-care explained",
    ],
    longDescription: `Las cirugías menores son procedimientos cortos en la piel o justo debajo de ella, como quitar un lunar, un quiste o un lipoma, que se hacen con anestesia local y te vas caminando. En Clínica Hispana Nueva Salud Hammerly, en Spring Branch (Houston), los realizamos en la misma consulta, sin cita y sin hospitalización.

## ¿Qué bultos y lesiones se pueden retirar?

- **Lunar:** mancha café o negra, plana o abultada.
- **Quiste sebáceo:** bolita bajo la piel, a veces con un punto negro en medio.
- **Lipoma:** bulto blando de grasa que se desliza al tocarlo.

Un lunar que cambia de color, de forma o de tamaño, o que sangra sin golpearlo, debe revisarse cuanto antes.

## ¿Cómo es el procedimiento en la clínica?

Primero el equipo médico examina la lesión y te explica si conviene retirarla. Si decides seguir, se limpia la zona, se aplica anestesia local con una aguja fina y, cuando la piel está dormida, se hace un corte pequeño para sacar la lesión completa. Para terminar, unos cuantos [puntos](/services/suturas-heridas) unen la piel y encima va una gasa protectora. La mayoría de estos procedimientos se terminan en poco tiempo.

## ¿Qué conviene avisar antes?

- Si tomas aspirina o algún medicamento que adelgace la sangre.
- Si tienes diabetes, porque la cicatrización puede ir más lenta.
- Si alguna vez reaccionaste mal a la anestesia del dentista.
- Si el bulto está rojo, caliente y con pus: puede ser un absceso y se trata con [drenaje](/services/drenaje-abscesos) antes de pensar en retirarlo.

## ¿Cómo será la recuperación?

Puedes volver a tus actividades ligeras enseguida. Durante unos días evita esfuerzos que estiren la zona, mantén el vendaje limpio y seco, y regresa para el retiro de puntos cuando te indiquen. Es normal un poco de dolor que mejora con medicamento de venta libre.

Si tienes un bulto que te molesta, pásate a 8538 Hammerly Blvd Suite B para que lo revisemos y pregunta el precio del procedimiento.`,
    longDescriptionEn: `Minor surgery covers short procedures on or just under the skin, such as removing a mole, a cyst or a lipoma, done with local anesthesia so you walk out on your own. At Clínica Hispana Nueva Salud Hammerly in Spring Branch, Houston, we perform them during the visit itself, with no appointment and no hospital stay.

## Which lumps and lesions can be removed?

- **Mole:** a brown or black spot, flat or raised.
- **Sebaceous cyst:** a small ball under the skin, sometimes with a black dot in the middle.
- **Lipoma:** a soft fatty lump that slides when you press it.

A mole that changes color, shape or size, or bleeds without being bumped, should be checked soon.

## How does the procedure go at the clinic?

First the medical team examines the lesion and explains whether removing it makes sense. If you decide to go ahead, the area is cleaned, local anesthetic goes in through a thin needle and, once the skin is numb, a small incision lets them take the whole lesion out. The opening is closed with [stitches](/en/services/suturas-heridas) and covered with a dressing. Most of these procedures are over quickly.

## What should you mention beforehand?

- Whether you take aspirin or any blood thinner.
- Whether you have diabetes, since healing can be slower.
- Whether you ever reacted badly to numbing shots at the dentist.
- Whether the lump is red, hot and full of pus: it may be an abscess, which is handled with [drainage](/en/services/drenaje-abscesos) before any removal is considered.

## What will recovery look like?

You can go back to light activity right away. For a few days avoid effort that stretches the area, keep the dressing clean and dry, and return for stitch removal when you're told. Some soreness is normal and eases with an over-the-counter pain reliever.

If a lump is bothering you, stop by 8538 Hammerly Blvd Suite B so we can take a look, and ask about the price of the procedure.`,
  },
  {
    slug: "drenaje-abscesos",
    order: 27,
    category: "tratamientos",
    icon: "Droplet",
    title: "Drenaje de Abscesos",
    titleEn: "Abscess Drainage",
    shortDescription:
      "Drenaje de abscesos e infecciones de piel para aliviar el dolor y favorecer la curación.",
    shortDescriptionEn:
      "Drainage of abscesses and skin infections to relieve pain and promote healing.",
    description:
      "Drenaje de abscesos en Houston, TX. Tratamiento de infecciones de piel en español, con precios accesibles.",
    descriptionEn:
      "Abscess drainage in Houston, TX. Treatment of skin infections in Spanish, with affordable pricing.",
    keywords: [
      "drenaje de absceso houston",
      "drenar absceso houston",
      "infeccion de piel houston",
      "tratamiento de absceso houston",
    ],
    keywordsEn: [
      "abscess drainage houston",
      "drain abscess houston",
      "skin infection houston",
      "boil treatment houston",
    ],
    features: [
      "Drenaje del absceso",
      "Limpieza y desinfección",
      "Anestesia local",
      "Indicaciones de cuidado posterior",
    ],
    featuresEn: [
      "Abscess drainage",
      "Cleaning and disinfection",
      "Local anesthesia",
      "After-care instructions",
    ],
    longDescription: `Cuando una infección deja pus encerrado bajo la piel se forma un absceso: un bulto rojo, caliente y doloroso. En Clínica Hispana Nueva Salud Hammerly, en Spring Branch, lo abrimos y vaciamos con anestesia local en la misma consulta, sin cita, para que la infección salga y el dolor baje.

## ¿Cómo reconocer un absceso?

Suele empezar como un granito o un pelo enterrado y crece en pocos días. Se nota tenso, late y duele al rozarlo. A veces aparece un punto blanco o amarillo en el centro. Son frecuentes en axilas, ingles, glúteos, espalda y en la zona de la barba.

Busca atención hoy mismo si además tienes fiebre, si la piel roja se extiende como una mancha o si el bulto está en la cara.

## ¿Qué pasa durante el drenaje?

1. El equipo médico revisa el tamaño y la profundidad del absceso.
2. Con la piel ya desinfectada, se inyecta anestesia local en el borde del bulto.
3. Se hace una pequeña abertura para que salga el pus.
4. Se lava el interior de la cavidad.
5. En un absceso amplio puede quedar una tira de gasa adentro que ayuda a vaciarlo los días siguientes.
6. Se cubre y se decide si necesitas antibiótico.

Los medicamentos indicados en la consulta los puedes recoger en nuestra [farmacia](/services/farmacia) antes de irte.

## ¿Por qué no conviene exprimirlo en casa?

Apretarlo puede empujar la infección más adentro o a la sangre, y casi nunca vacía toda la bolsa, así que vuelve a llenarse. Tampoco lo pinches con agujas ni navajas. Lo que sí puedes hacer es poner compresas tibias mientras llegas.

## ¿Qué cuidados siguen después?

- Mantén la herida cubierta y cambia la gasa cuando te indiquen.
- Si te dejaron una gasa dentro, regresa para retirarla o cambiarla en las [curaciones](/services/curacion-heridas).
- Toma el antibiótico completo si te lo indicaron.
- Lava toallas y ropa por separado.
- Vuelve si sube la fiebre o el enrojecimiento crece.

Si un bulto doloroso no te deja sentarte o mover el brazo, ven a 8538 Hammerly Blvd Suite B; entre semana y el sábado atendemos hasta las 9 PM.`,
    longDescriptionEn: `An abscess is a pocket of pus under the skin caused by an infection, and it turns into a red, hot, painful lump. At Clínica Hispana Nueva Salud Hammerly in Spring Branch, we open and empty it under local anesthesia during the visit itself, no appointment needed, so the infection can drain and the pain eases.

## How can you tell it's an abscess?

It often starts as a pimple or an ingrown hair and grows over a few days. It feels tight, throbs and hurts when anything brushes it. Sometimes a white or yellow dot appears in the middle. Armpits, groin, buttocks, back and the beard area are common spots.

Get seen today if you also have a fever, if the redness is spreading like a stain, or if the lump is on your face.

## What happens during drainage?

1. The medical team checks the abscess's size and depth.
2. The skin is disinfected and local anesthetic is injected around it.
3. A small opening is made so the pus can come out.
4. The inside of the pocket is rinsed.
5. If it's large, gauze is left inside so it keeps draining.
6. It's covered, and the team decides whether you need an antibiotic.

Any medicine ordered during the visit can be picked up at our [pharmacy](/en/services/farmacia) before you leave.

## Is it safe to pop it yourself?

Squeezing can push the infection deeper or into your bloodstream, and it rarely empties the whole pocket, so it fills up again. Don't poke it with needles or blades either. What you can do on the way in is apply warm compresses.

## What care comes afterward?

- Keep the wound covered and change the gauze when you're told.
- If gauze was left inside, return to have it removed or replaced through [wound care](/en/services/curacion-heridas).
- Finish the antibiotic if one was ordered.
- Wash towels and clothing separately.
- Come back if the fever rises or the redness grows.

If a painful lump keeps you from sitting or moving your arm, come to 8538 Hammerly Blvd Suite B; Monday through Saturday we're open until 9 PM.`,
  },
  {
    slug: "unas-encarnadas",
    order: 28,
    category: "tratamientos",
    icon: "Footprints",
    title: "Extracción de Uñas Encarnadas",
    titleEn: "Ingrown Toenail Removal",
    shortDescription:
      "Tratamiento de uñas encarnadas para aliviar el dolor y prevenir infecciones, en español.",
    shortDescriptionEn:
      "Ingrown toenail treatment to relieve pain and prevent infection, in Spanish.",
    description:
      "Extracción de uñas encarnadas en Houston, TX. Procedimiento con anestesia local en español, con precios accesibles.",
    descriptionEn:
      "Ingrown toenail removal in Houston, TX. Procedure with local anesthesia in Spanish, with affordable pricing.",
    keywords: [
      "uña encarnada houston",
      "extraccion de uña encarnada houston",
      "tratamiento uña encarnada houston",
      "doctor para uña encarnada houston",
    ],
    keywordsEn: [
      "ingrown toenail houston",
      "ingrown toenail removal houston",
      "ingrown nail treatment houston",
      "toenail doctor houston",
    ],
    features: [
      "Tratamiento de la uña encarnada",
      "Anestesia local",
      "Alivio del dolor",
      "Indicaciones de cuidado posterior",
    ],
    featuresEn: [
      "Ingrown toenail treatment",
      "Local anesthesia",
      "Pain relief",
      "After-care instructions",
    ],
    longDescription: `Una uña encarnada es la que crece clavándose en la piel del costado del dedo, casi siempre en el dedo gordo del pie, y provoca dolor, hinchazón y a veces pus. En Clínica Hispana Nueva Salud Hammerly, en Spring Branch (Houston), retiramos la parte encarnada con anestesia local en la misma consulta, sin necesidad de cita.

## ¿Por qué se entierra la uña?

- Cortarla en curva o demasiado corta en las esquinas.
- Zapatos apretados o de punta estrecha, incluidas botas de trabajo.
- Un golpe en el dedo o que te pisaron.
- Uñas curvas por naturaleza, que pueden venir de familia.
- Sudor constante en los pies.

## ¿Qué se hace en el procedimiento?

Primero se revisa el dedo para ver cuánto se ha enterrado la uña y si hay infección. Después se aplica anestesia local en la base del dedo; tarda unos minutos en dormirlo por completo. Con el dedo insensible, se corta y retira solo la franja lateral de uña que se mete en la piel, dejando el resto. Se limpia el surco, se coloca un vendaje y, si había infección, el equipo médico decide si necesitas antibiótico, que puedes recoger en la [farmacia](/services/farmacia) de la clínica.

## ¿Cómo cuidar el dedo los días siguientes?

Al llegar a casa mantén el pie en alto un rato. Al día siguiente puedes lavar el dedo con agua tibia y jabón, secarlo bien y poner un vendaje limpio. Usa zapato abierto o amplio mientras sana. Regresa si el dolor aumenta en lugar de bajar, si sale pus o si el enrojecimiento sube por el pie; también podemos seguir con [curaciones](/services/curacion-heridas).

## ¿Cómo evitar que vuelva a pasar?

Al recortar las uñas de los pies, hazlo en línea recta, deja las esquinas en ángulo y un poco de largo sobre la piel. Usa calcetines que absorban el sudor y zapatos con espacio para los dedos. Si tienes diabetes, no intentes cortar una uña encarnada tú mismo: ven a que la revisen.

Si caminar ya te duele por una uña enterrada, ven a 8538 Hammerly Blvd Suite B y pregunta el precio en recepción.`,
    longDescriptionEn: `An ingrown toenail grows into the skin along the side of the toe, nearly always the big toe, causing pain, swelling and sometimes pus. At Clínica Hispana Nueva Salud Hammerly in Spring Branch, Houston, we remove the ingrown part under local anesthesia during the visit itself, with no appointment needed.

## Why does a nail grow in?

- Trimming it in a curve or too short at the corners.
- Tight or narrow-toed shoes, work boots included.
- A stubbed toe or someone stepping on it.
- Naturally curved nails, which can run in families.
- Feet that sweat all the time.

## What's done during the procedure?

First the toe is examined to see how deep the nail has gone and whether it's infected. Then local anesthetic is injected at the base of the toe; it takes a few minutes to go fully numb. Once you can't feel it, only the side strip of nail digging into the skin is trimmed away and removed, and the rest stays. The groove is cleaned, a bandage goes on and, if there was infection, the medical team decides whether you need an antibiotic, which you can pick up at the clinic's [pharmacy](/en/services/farmacia).

## What does toe care look like once you're home?

Once home, keep your foot raised for a while. The next day you can wash the toe with warm water and soap, dry it well and put on a clean bandage. Wear open or roomy shoes while it heals. Come back if the pain gets worse instead of better, if pus appears or if redness creeps up your foot; we can also continue with [wound care](/en/services/curacion-heridas).

## Which habits stop a repeat ingrown nail?

Trim toenails in a straight line, leaving the corners square and a little length past the skin. Wear socks that absorb sweat and shoes with room for your toes. If you have diabetes, don't try to cut an ingrown nail yourself: come in and have it checked.

If walking already hurts because of an ingrown nail, come to 8538 Hammerly Blvd Suite B and ask the front desk about the price.`,
  },
  {
    slug: "farmacia",
    order: 29,
    category: "tratamientos",
    icon: "Pill",
    title: "Farmacia",
    titleEn: "Pharmacy",
    shortDescription:
      "Recoge tus medicamentos al terminar la consulta, sin ir a otra farmacia.",
    shortDescriptionEn:
      "Pick up your medications right after your visit — no second stop.",
    description:
      "Farmacia dentro de la clínica en Houston, TX: recoge los medicamentos indicados en tu consulta y productos de venta libre, en español.",
    descriptionEn:
      "In-clinic pharmacy in Houston, TX: pick up the medications prescribed at your visit and over-the-counter products, in Spanish.",
    keywords: [
      "farmacia en houston",
      "farmacia hispana houston",
      "farmacia cerca de mí houston",
      "medicamentos en la clinica houston",
    ],
    keywordsEn: [
      "pharmacy houston",
      "hispanic pharmacy houston",
      "pharmacy near me houston",
      "medications at the clinic houston",
    ],
    features: [
      "Medicamentos indicados en tu consulta",
      "Medicamentos de marca y genéricos",
      "Medicamentos de venta libre (OTC)",
      "Asesoría sobre tus medicamentos en español",
    ],
    featuresEn: [
      "Medications prescribed at your visit",
      "Brand-name and generic medications",
      "Over-the-counter (OTC) medications",
      "Guidance about your medications in Spanish",
    ],
    longDescription: `La farmacia de Clínica Hispana Nueva Salud Hammerly, en Spring Branch, sirve para una cosa concreta: entregarte los medicamentos indicados en tu consulta y ofrecer productos de venta libre (OTC). Así sales de 8538 Hammerly Blvd con el tratamiento en la mano, sin tener que buscar otra tienda en Houston.

## ¿Qué encuentras en la farmacia?

**Medicamentos indicados en la consulta.** Cuando el equipo médico de la clínica te indica un tratamiento, por ejemplo después de una revisión por [infección urinaria](/services/infecciones-urinarias) o de un [drenaje de absceso](/services/drenaje-abscesos), te lo entregamos antes de que te vayas.

**Productos de venta libre (OTC).** Artículos que no necesitan indicación médica, como analgésicos comunes, remedios para la gripe o las alergias, y material básico de curación.

## ¿Cómo funciona al terminar tu visita?

1. Terminas la consulta y el equipo médico define tu tratamiento.
2. Pasas a la farmacia, que está en el mismo local.
3. Te entregan los medicamentos indicados.
4. Te repasan cómo y cuándo tomarlos, y qué hacer si olvidas una dosis.
5. Si quieres algún producto de venta libre, lo pides ahí mismo.

## ¿Qué conviene decir antes de llevarte un medicamento?

- Todos los medicamentos, vitaminas o remedios naturales que ya tomas.
- Si estás embarazada o amamantando.
- Alergias a medicamentos, aunque hayan sido hace años.
- Si tienes enfermedad del riñón, del hígado o presión alta.

Con esta información se evitan mezclas que no convienen.

## ¿Cómo guardar los medicamentos en casa?

Mantenlos en su empaque original, lejos del calor del baño y del alcance de los niños. Algunos jarabes y suspensiones se guardan en el refrigerador una vez preparados; la etiqueta te lo dice. Termina el antibiótico completo aunque te sientas mejor y no compartas tu tratamiento con otra persona.

Si estás en consulta con nosotros, recuerda pasar por la farmacia antes de salir; pregunta el precio de cada producto en el mostrador.`,
    longDescriptionEn: `The pharmacy at Clínica Hispana Nueva Salud Hammerly in Spring Branch has a specific purpose: handing you the medications ordered during your visit and offering over-the-counter (OTC) products. That way you leave 8538 Hammerly Blvd with your treatment in hand, without hunting for another store in Houston.

## What does the pharmacy carry?

**Medications ordered during your visit.** When the clinic's medical team sets a treatment, for example after a [urinary tract infection](/en/services/infecciones-urinarias) check or an [abscess drainage](/en/services/drenaje-abscesos), we hand it to you before you go.

**Over-the-counter (OTC) products.** Items that don't need a medical order, such as common pain relievers, cold and allergy remedies, and basic first-aid supplies.

## How does it work after your visit?

1. Your visit ends and the medical team settles on your treatment.
2. You step over to the pharmacy, inside the same building.
3. You receive the medications that were ordered.
4. Staff go over how and when to take them, and what to do if you miss a dose.
5. If you want an OTC product, you can ask for it right there.

## What should you mention before taking a medicine home?

- Every medicine, vitamin or herbal remedy you already take.
- Whether you're pregnant or breastfeeding.
- Any drug allergy, even one from years ago.
- Kidney or liver disease, or high blood pressure.

That information helps avoid combinations that don't mix well.

## How should you store medicines at home?

Keep them in their original packaging, away from bathroom heat and out of children's reach. Some syrups and suspensions go in the fridge once mixed; the label will say so. Finish the full antibiotic course even if you feel better, and don't share your treatment with anyone else.

If you're being seen with us, remember to stop at the pharmacy before heading out, and ask at the counter about each item's price.`,
  },
];
