import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Marca de Clínica Hispana Nueva Salud Hammerly: solo la insignia circular
 * (el nombre ya viene dentro del propio logo, sin wordmark al lado).
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src="/logo-nueva-salud.webp"
        alt="Logo de Clínica Hispana Nueva Salud Hammerly"
        width={512}
        height={512}
        className="h-14 w-14 shrink-0 object-contain"
      />
    </span>
  );
}
