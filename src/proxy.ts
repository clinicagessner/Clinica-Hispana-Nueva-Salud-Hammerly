import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "@/i18n/routing";

// Next 16 renombró middleware.ts → proxy.ts. next-intl maneja la
// negociación de locale y los prefijos de ruta (as-needed).
const intl = createMiddleware(routing);

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // Todas las rutas del sitio van en minúsculas: /Services/x servía la misma
  // página con 200 (contenido duplicado). 308 a la versión en minúsculas.
  if (pathname !== pathname.toLowerCase()) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.toLowerCase();
    return NextResponse.redirect(url, 308);
  }
  return intl(request);
}

export const config = {
  // Excluye api, archivos internos de Next/Vercel y rutas con extensión.
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
