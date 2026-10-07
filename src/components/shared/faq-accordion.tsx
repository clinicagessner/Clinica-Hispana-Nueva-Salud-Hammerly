"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { LocalizedFaq } from "@/types";

export function FaqAccordion({ items }: { items: LocalizedFaq[] }) {
  return (
    // hiddenUntilFound: las respuestas cerradas van en el HTML del servidor
    // (hidden="until-found") para Google y bots de IA, y Ctrl+F las abre.
    <Accordion hiddenUntilFound className="w-full">
      {items.map((faq, i) => (
        <AccordionItem
          key={i}
          value={String(i)}
          className="border-blue-light"
        >
          <AccordionTrigger className="py-4 font-heading text-base font-semibold text-slate-dark hover:no-underline">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-[0.95rem] leading-relaxed text-slate-primary">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
