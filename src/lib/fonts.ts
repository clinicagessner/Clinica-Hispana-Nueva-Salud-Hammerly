import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";

// Bricolage Grotesque → titulares (variable --font-heading). Grotesca display
// con carácter (ink traps, contraste): moderna y atrevida sin perder calidez.
export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
  // Fuente variable: omitimos `weight` para cubrir todo el rango (200–800)
  // y habilitamos los ejes óptico y de anchura para titulares con presencia.
  axes: ["opsz", "wdth"],
});

// Plus Jakarta Sans → cuerpo (variable --font-sans). Humanista moderna,
// muy legible y amable para una clínica.
export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

// Clase combinada para aplicar en <html>
export const fontVariables = `${bricolage.variable} ${jakarta.variable}`;
