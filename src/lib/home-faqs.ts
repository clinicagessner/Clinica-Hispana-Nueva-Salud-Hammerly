import type { ServiceFaq } from "@/types";

// FAQs generales del home (bilingüe). También alimentan el FAQPage JSON-LD.
export const HOME_FAQS: ServiceFaq[] = [
  {
    question: "¿Puedo llegar a la clínica sin haber llamado antes?",
    answer: "Sí, aquí se atiende por orden de llegada, sin cita previa. Las puertas abren a las 9 AM los siete días; de lunes a sábado cerramos a las 9 PM y el domingo a las 5 PM.",
    questionEn: "Can I show up at the clinic without calling first?",
    answerEn: "Yes, patients are seen in order of arrival, with no appointment. Doors open at 9 AM all seven days; Monday through Saturday we close at 9 PM, and on Sunday at 5 PM.",
  },
  {
    question: "Si no tengo aseguranza, ¿cómo pago la consulta?",
    answer: "No necesitas seguro médico para atenderte en Clínica Hispana Nueva Salud Hammerly. Pagas en el momento con efectivo o con tarjeta de débito o crédito, y antes de cualquier servicio puedes preguntar el precio en recepción.",
    questionEn: "If I don't have insurance, how do I pay for my visit?",
    answerEn: "You don't need health insurance to be seen at Clínica Hispana Nueva Salud Hammerly. You pay at the visit with cash or a debit or credit card, and you can ask the front desk about the price before any service.",
  },
  {
    question: "¿En qué idiomas me pueden atender?",
    answer: "En español y en inglés. Puedes explicar tus síntomas, hacer preguntas y recibir las indicaciones del equipo médico en el idioma con el que te sientas más cómodo, y si vienes con familiares que prefieren otro de los dos, también se les atiende.",
    questionEn: "Which languages can I be seen in?",
    answerEn: "Spanish and English. You can describe your symptoms, ask questions and get the medical team's instructions in whichever language feels most comfortable, and relatives who prefer the other one are welcome too.",
  },
  {
    question: "¿Qué puedo resolver en una sola visita a la clínica?",
    answer: "Consultas generales, control de diabetes y presión, laboratorio en el lugar, ultrasonido, electrocardiograma, examen DOT, examen de inmigración I-693, vacunas, suturas y cirugías menores. Y antes de salir recoges en la farmacia del local lo que el equipo médico te indicó.",
    questionEn: "What can I take care of in a single visit?",
    answerEn: "General visits, diabetes and blood pressure care, on-site lab work, ultrasound, EKG, DOT exams, the I-693 immigration exam, vaccines, stitches and minor surgery. Medications ordered during the visit are handed out at our pharmacy as well.",
  },
  {
    question: "¿Cuál es la dirección exacta y hay dónde estacionarse?",
    answer: "Estamos en 8538 Hammerly Blvd Suite B, Houston, TX 77055, en la zona de Spring Branch. Hay estacionamiento gratuito frente al local, y tanto la entrada como el estacionamiento y los baños son accesibles en silla de ruedas.",
    questionEn: "What's the exact address, and is there parking?",
    answerEn: "We're at 8538 Hammerly Blvd Suite B, Houston, TX 77055, in the Spring Branch area. Free parking is available on site, and the entrance, parking and restrooms are all wheelchair accessible.",
  },
  {
    question: "¿Hacen análisis de sangre y orina dentro de la clínica?",
    answer: "Sí. Contamos con laboratorio propio para tomar muestras de sangre, orina y heces sin mandarte a otro sitio, y también con ultrasonido y electrocardiograma. Cuando tus resultados estén listos, te avisamos para revisarlos contigo.",
    questionEn: "Do you run blood and urine tests inside the clinic?",
    answerEn: "Yes. We have our own lab to collect blood, urine and stool samples without sending you elsewhere, plus ultrasound and EKG. Once your results are ready, we let you know and go over them with you.",
  },
  {
    question: "¿Quién firma el examen médico para inmigración?",
    answer: "El examen I-693 lo realiza y firma un Civil Surgeon autorizado por USCIS. Al terminar el proceso recibes el formulario sellado en sobre cerrado, que debes entregar sin abrir. Te avisamos en cuanto esté listo para recogerlo.",
    questionEn: "Who signs the immigration medical exam?",
    answerEn: "Your I-693 is completed and signed by a Civil Surgeon whom USCIS has authorized. When the process is complete you receive the form sealed in a closed envelope, which must be submitted unopened. We'll let you know as soon as it's ready to pick up.",
  },
];
