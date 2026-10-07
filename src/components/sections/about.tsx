import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/animations/reveal";
import { CONTACT_INFO, SERVICES } from "@/lib/constants";
import { whatsappHref } from "@/lib/utils";

const linkClass =
  "font-semibold text-blue-dark underline decoration-red-accent/40 decoration-2 underline-offset-4 hover:text-red-accent";

/**
 * Definición de entidad para buscadores y motores de IA: qué es la clínica,
 * dónde está, cuándo abre y qué hace, en hechos verificables y sin publicidad.
 * El mismo texto, recortado a 750 caracteres, sirve de descripción de la ficha
 * de Google. El diseño puede cambiar; el texto no sin revisar la ficha.
 */
export function About() {
  const t = useTranslations("About");
  const tc = useTranslations("Common");
  const svc = (slug: string) => {
    function ServiceLink(chunks: React.ReactNode) {
      return (
        <Link href={`/services/${slug}`} className={linkClass}>
          {chunks}
        </Link>
      );
    }
    return ServiceLink;
  };

  return (
    <section id="que-es" className="scroll-mt-24 bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-heading text-3xl font-black leading-tight tracking-tight text-ink sm:text-4xl">
            {t("title")}
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate-muted">
            <p>
              {t.rich("p1", {
                address: () => (
                  <a
                    href={CONTACT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {CONTACT_INFO.address}, {CONTACT_INFO.city}, {CONTACT_INFO.state}{" "}
                    {CONTACT_INFO.zip}
                  </a>
                ),
              })}
            </p>
            <p>
              {t.rich("p2", {
                count: SERVICES.length,
                services: (chunks) => (
                  <Link href="/services" className={linkClass}>
                    {chunks}
                  </Link>
                ),
                chronic: svc("condiciones-cronicas"),
                gyn: svc("ginecologia"),
                uti: svc("infecciones-urinarias"),
                lab: svc("examenes-sangre"),
                immigration: svc("examenes-inmigracion"),
                dot: svc("examen-dot"),
                iv: svc("sueros-vitaminados"),
              })}
            </p>
            <p>
              {t.rich("p3", {
                phone: () => (
                  <a href={`tel:${CONTACT_INFO.phone}`} className={linkClass}>
                    {CONTACT_INFO.phoneDisplay}
                  </a>
                ),
                whatsapp: (chunks) => (
                  <a
                    href={whatsappHref(tc("whatsappMessage"))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {chunks}
                  </a>
                ),
              })}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
