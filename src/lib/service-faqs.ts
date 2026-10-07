import type { ServiceFaq } from "@/types";

/**
 * FAQs por servicio (clave = slug). Bilingüe. Se usan en la página de
 * detalle del servicio y para el JSON-LD FAQPage.
 */
export const SERVICE_FAQS: Record<string, ServiceFaq[]> = {
  "condiciones-cronicas": [
    {
      question: "¿Sirven las lecturas de mi glucómetro o de mi monitor de presión de casa?",
      answer: "Sí, y mucho. Apunta cada lectura con la hora y si fue antes o después de comer. El equipo médico las compara con lo que medimos en la clínica para ver si tu tratamiento se sostiene en tu rutina diaria y no solo el rato de la consulta.",
      questionEn: "Are the readings from my home glucose meter or blood pressure cuff useful?",
      answerEn: "Very much so. Write down each reading with the time and whether it was before or after a meal. The medical team compares them with what we measure at the clinic to see whether your treatment holds up in daily life, not only during the visit.",
    },
    {
      question: "Se me terminaron las pastillas de la diabetes o de la presión, ¿qué hago?",
      answer: "No las dejes por tu cuenta ni esperes a tu próximo control. Ven a la clínica: el equipo médico mide tu glucosa o tu presión en ese momento, decide si el tratamiento sigue igual y la farmacia te entrega lo indicado en la consulta.",
      questionEn: "I ran out of my diabetes or blood pressure pills. What should I do?",
      answerEn: "Don't just stop them or wait for your next check-up. Come in and the medical team will measure your glucose or blood pressure on the spot, decide whether the treatment stays the same, and the pharmacy will hand you what was prescribed.",
    },
    {
      question: "Soy delgado, ¿también tengo que revisarme el colesterol?",
      answer: "Sí. El colesterol alto no depende solo del peso: pesan la herencia familiar, lo que comes y otras condiciones. Un perfil de lípidos en el laboratorio de la clínica te dice dónde estás aunque no tengas sobrepeso ni ninguna molestia.",
      questionEn: "I'm thin. Do I still need my cholesterol checked?",
      answerEn: "Yes. High cholesterol isn't only about weight; family history, diet and other conditions play a part. A lipid panel in the clinic lab tells you where you stand even if you're slim and have no complaints.",
    },
  ],
  "tiroides": [
    {
      question: "¿Puedo tomar mi pastilla de tiroides antes de que me saquen sangre?",
      answer: "Pregúntalo al llegar, antes de la extracción. El equipo médico te dirá si conviene tomarla después de la muestra para que el valor refleje bien cómo estás. Mientras tanto, no cambies ni suspendas el tratamiento por tu cuenta.",
      questionEn: "Can I take my thyroid pill before my blood draw?",
      answerEn: "Ask when you arrive, before the sample is taken. The medical team will tell you whether it's better to take it afterward so the result reflects how you're really doing. In the meantime, don't change or stop your medication on your own.",
    },
    {
      question: "¿Una tiroides lenta explica que suba de peso aunque coma igual?",
      answer: "Puede ser una de las razones, aunque rara vez la única. Cuando la tiroides funciona poco, el cuerpo gasta menos energía. La TSH aclara si está influyendo; si sale normal, el equipo médico busca contigo otras explicaciones.",
      questionEn: "Can a slow thyroid explain gaining weight while eating the same?",
      answerEn: "It can be one reason, though rarely the only one. An underactive thyroid lowers how much energy your body burns. TSH shows whether it's playing a role; if it comes back normal, the medical team looks for other explanations with you.",
    },
    {
      question: "Si ya tengo receta de tiroides de otro país, ¿pueden continuarla?",
      answer: "Trae la caja o la receta con el nombre del medicamento. El equipo médico revisa tus síntomas, pide un análisis de TSH para confirmar que la cantidad sigue siendo la adecuada y decide cómo continuar el tratamiento aquí en Houston.",
      questionEn: "I have a thyroid prescription from another country. Can you continue it?",
      answerEn: "Bring the box or prescription showing the medication name. The medical team reviews your symptoms, orders a TSH test to confirm the amount is still right for you, and decides how to continue your treatment here in Houston.",
    },
  ],
  "alergias": [
    {
      question: "¿Puedo seguir con el antialérgico que compré en la tienda?",
      answer: "Tráelo a la consulta o toma una foto de la caja. El equipo médico revisa si es adecuado para tus síntomas, si conviene combinarlo con otro producto o cambiarlo, sobre todo cuando te da mucho sueño o ya no te hace efecto.",
      questionEn: "Can I keep using the allergy medicine I bought at the store?",
      answerEn: "Bring it with you or snap a photo of the box. The medical team checks whether it suits your symptoms and whether to pair it with something else or switch, especially if it makes you very drowsy or has stopped working.",
    },
    {
      question: "Me salieron ronchas después de comer algo, ¿me pueden revisar?",
      answer: "Sí, ven para que revisemos la reacción y lo que comiste. Anota el alimento y cuánto tardaron en aparecer las ronchas. Si además se hinchan los labios o la lengua, o te falta el aire, llama al 911 sin esperar.",
      questionEn: "I broke out in hives after eating something. Can you check me?",
      answerEn: "Yes, come in so we can look at the reaction and what you ate. Note the food and how long it took for the hives to appear. If your lips or tongue swell or you're short of breath, call 911 right away.",
    },
    {
      question: "¿Atienden alergias en niños pequeños?",
      answer: "Sí. El equipo médico revisa a niños con nariz tapada, ojos irritados o ronchas y ajusta el tratamiento a su edad y su peso. Trae los nombres de los jarabes o cremas que ya le hayas dado en casa.",
      questionEn: "Do you treat allergies in young children?",
      answerEn: "Yes. The medical team sees kids with a stuffy nose, irritated eyes or hives and fits the treatment to their age and weight. Bring the names of any syrups or creams you've already tried at home.",
    },
  ],
  "enfermedades-respiratorias": [
    {
      question: "¿Me hago la prueba de flu o COVID aunque no tenga fiebre?",
      answer: "Sí. Ambos virus pueden empezar solo con tos, dolor de garganta, cansancio o dolor de cuerpo, sin temperatura alta. Si convives con alguien mayor, embarazada o con una enfermedad crónica, saberlo pronto ayuda a protegerlo.",
      questionEn: "Should I get a flu or COVID test even without a fever?",
      answerEn: "Yes. Both viruses can start with just a cough, sore throat, tiredness or body aches and no high temperature. If you live with someone older, pregnant or chronically ill, finding out early helps you protect them.",
    },
    {
      question: "¿Por qué no siempre me dan antibiótico para la gripe?",
      answer: "Porque la gripe y el COVID los causan virus, y los antibióticos no actúan contra ellos. Tomarlos sin necesidad trae efectos secundarios y crea resistencias. El equipo médico los indica solo si encuentra una infección bacteriana añadida.",
      questionEn: "Why don't I always get antibiotics for the flu?",
      answerEn: "Antibiotics kill bacteria, and both flu and COVID are viral illnesses, so the pills simply have no target. Taking them for no reason brings side effects and builds resistance. The medical team prescribes them only when it finds a bacterial infection on top.",
    },
    {
      question: "¿Cuándo puede mi hijo volver a la escuela después de la gripe?",
      answer: "Depende del virus y de cómo evoluciona. El equipo médico te explica las recomendaciones de salud pública vigentes; en general, el niño debe estar sin fiebre sin tomar medicina para bajarla y con los síntomas mejorando antes de regresar.",
      questionEn: "When can my child go back to school after the flu?",
      answerEn: "It depends on the virus and how they're recovering. The medical team explains the current public health guidance; in general, your child should be fever-free without fever-reducing medicine and clearly improving before heading back.",
    },
  ],
  "examen-fisico-escolar": [
    {
      question: "¿Mi hijo tiene que venir en ayunas al examen escolar?",
      answer: "No. Es una revisión física, no un análisis de sangre, así que puede desayunar normal. Lo que sí ayuda es que venga con ropa cómoda y tenis, porque el equipo médico le pedirá agacharse, estirarse y mover las articulaciones.",
      questionEn: "Does my child need to fast before the school physical?",
      answerEn: "No. It's a physical exam, not a blood draw, so a normal breakfast is fine. What does help is coming in comfortable clothes and sneakers, since the medical team will ask them to squat, stretch and move their joints.",
    },
    {
      question: "¿Puedo traer el formulario de la escuela y el del equipo en una sola visita?",
      answer: "Sí, trae ambos. El equipo médico hace una sola revisión y completa los dos documentos con los mismos datos, así tu hijo no repite el examen ni tú pierdes otra tarde.",
      questionEn: "Can I bring both the school form and the team form to one visit?",
      answerEn: "Yes, bring both. The medical team does a single exam and completes both documents with the same information, so your child doesn't repeat the physical and you don't lose another afternoon.",
    },
    {
      question: "¿Puede venir mi hijo adolescente solo al chequeo deportivo?",
      answer: "Si es menor de edad, necesita a su madre, padre o tutor legal para autorizar la revisión y responder las preguntas sobre la salud de la familia que traen la mayoría de los formularios deportivos.",
      questionEn: "Can my teenager come to the sports physical alone?",
      answerEn: "If they're under 18, a parent or legal guardian needs to come to authorize the exam and answer the family health questions that most sports forms include.",
    },
  ],
  "ginecologia": [
    {
      question: "¿Me puedo hacer el papanicolaou si estoy con la regla?",
      answer: "Es mejor esperar a que termine. La sangre puede tapar las células que el laboratorio necesita ver y el resultado podría salir poco claro. Si tienes una molestia urgente durante la regla, ven igual: el equipo médico te revisa y deja el papanicolaou para otra visita.",
      questionEn: "Can I get a Pap smear while on my period?",
      answerEn: "It's better to wait until it's over. Blood can cover the cells the lab needs to see, and the result might come back unclear. If something is bothering you urgently during your period, come in anyway; the team will check you and schedule the Pap for another visit.",
    },
    {
      question: "¿Cada cuánto me toca repetir el papanicolaou?",
      answer: "Depende de tu edad, de tus resultados anteriores y de si también se busca el virus del papiloma humano. El equipo médico revisa tu historia y te indica cuándo repetirlo según las guías vigentes, sin hacerte pruebas de más.",
      questionEn: "How often should I repeat my Pap smear?",
      answerEn: "It depends on your age, your past results and whether HPV testing is included. The medical team reviews your history and tells you when to repeat it based on current guidelines, without extra testing you don't need.",
    },
    {
      question: "¿Para qué sirve un cultivo vaginal?",
      answer: "Identifica qué microorganismo causa el flujo, el mal olor o la comezón. Así el tratamiento apunta a la causa real y no se repiten cremas que no funcionan. La muestra se toma con un hisopo durante la revisión y es rápida.",
      questionEn: "What is a vaginal culture for?",
      answerEn: "It identifies which organism is causing the discharge, odor or itching. That way treatment targets the real cause instead of cycling through creams that don't work. The sample is taken with a swab during the exam and it's quick.",
    },
  ],
  "prueba-embarazo": [
    {
      question: "¿Tengo que traer la primera orina de la mañana?",
      answer: "No es obligatorio, pero ayuda: la primera orina del día está más concentrada y facilita detectar la hormona cuando el embarazo es muy reciente. Si vienes por la tarde, intenta no tomar mucha agua en las horas anteriores a la prueba.",
      questionEn: "Do I need to bring my first morning urine?",
      answerEn: "It's not required, but it helps. The first urine of the day is more concentrated, which makes the hormone easier to detect in a very early pregnancy. If you come in later in the day, try not to drink a lot of water beforehand.",
    },
    {
      question: "Mi prueba casera salió con una línea muy débil, ¿qué significa?",
      answer: "Una línea tenue suele indicar que hay algo de hormona, pero en poca cantidad, ya sea por un embarazo muy reciente o por otras razones. Una prueba de sangre en la clínica puede medir la hormona y aclarar la duda.",
      questionEn: "Why did my home test show only a faint second line?",
      answerEn: "A faint line usually means some hormone is present, but not much, whether from a very early pregnancy or for other reasons. A blood test at the clinic can measure the hormone and clear things up.",
    },
    {
      question: "¿Puedo seguir con mis medicamentos mientras confirmo el embarazo?",
      answer: "No los suspendas por tu cuenta, porque algunos no se deben dejar de golpe. Trae la lista o las cajas a la consulta: el equipo médico revisa cada uno y te dice cuál seguir, cuál cambiar y cuál consultar con más detalle.",
      questionEn: "Can I keep taking my medications while confirming the pregnancy?",
      answerEn: "Don't stop them on your own, since some shouldn't be stopped suddenly. Bring the list or the boxes to your visit and the medical team will go through each one and tell you which to keep, which to change and which needs a closer look.",
    },
  ],
  "anticonceptivos": [
    {
      question: "Se me olvidó una pastilla anticonceptiva, ¿qué hago?",
      answer: "Depende de cuántas olvidaste y de en qué parte del paquete ibas. Revisa el instructivo de tu marca y, si tienes dudas o tuviste relaciones, ven a la clínica: el equipo médico te dice si necesitas protección adicional o una prueba de embarazo.",
      questionEn: "I missed a birth control pill. What should I do?",
      answerEn: "It depends on how many you missed and where you were in the pack. Check your brand's leaflet, and if you're unsure or had sex, come in: the medical team will tell you whether you need backup protection or a pregnancy test.",
    },
    {
      question: "¿La inyección anticonceptiva me protege de infecciones de transmisión sexual?",
      answer: "No. La inyección, la pastilla y el implante solo previenen el embarazo. Para reducir el riesgo de infecciones de transmisión sexual hace falta el condón, y si tienes dudas sobre un posible contagio, puedes hacerte pruebas en la clínica.",
      questionEn: "Does the birth control shot protect me from STIs?",
      answerEn: "No. The shot, the pill and the implant only prevent pregnancy. Condoms are what lower the risk of sexually transmitted infections, and if you're worried about a possible exposure, you can get tested at the clinic.",
    },
    {
      question: "¿Puedo usar anticonceptivos mientras doy pecho?",
      answer: "Sí, existen opciones compatibles con la lactancia. Cuéntale al equipo médico que estás amamantando y cuánto tiempo tiene tu bebé; con eso te recomienda un método que no afecte la producción de leche.",
      questionEn: "Can I use birth control while breastfeeding?",
      answerEn: "Yes, there are options that work alongside breastfeeding. Let the medical team know you're nursing and how old your baby is, and they'll suggest a method that won't affect your milk supply.",
    },
  ],
  "extraccion-implantes": [
    {
      question: "¿Qué debo traer cuando vaya a quitarme el implante?",
      answer: "Una identificación y, si lo conservas, el papel o la tarjeta que te dieron cuando te lo colocaron, porque ahí aparece el tipo de implante. Ponte una blusa de manga corta o fácil de subir para dejar libre el brazo.",
      questionEn: "What should I bring to have my implant removed?",
      answerEn: "An ID and, if you still have it, the card or paper you got when it was placed, since it lists the type of implant. Wear a short-sleeved or loose top so your arm is easy to reach.",
    },
    {
      question: "¿Me va a quedar cicatriz en el brazo?",
      answer: "Normalmente queda una marca pequeña donde se hizo la incisión, que con el tiempo se aclara. Seguir las indicaciones de cuidado, mantener la cinta en su lugar y no rascar la zona ayuda a que cicatrice mejor.",
      questionEn: "Will I have a scar on my arm?",
      answerEn: "There's usually a small mark where the incision was made, and it tends to fade over time. Following the care instructions, leaving the strips in place and not scratching the area all help it heal better.",
    },
    {
      question: "¿Puedo quedar embarazada justo después de quitarme el implante?",
      answer: "Sí. La fertilidad suele volver pronto porque el implante deja de liberar hormona en cuanto sale. Si no buscas embarazo, empieza otro método enseguida; el equipo médico te ayuda a elegirlo en la misma visita.",
      questionEn: "Can I get pregnant right after the implant comes out?",
      answerEn: "Yes. Fertility usually returns quickly because the implant stops releasing hormone once it's out. If you're not trying to conceive, start another method right away; the medical team can help you pick one during the same visit.",
    },
  ],
  "salud-hombre": [
    {
      question: "¿Levantarme varias veces de noche a orinar tiene que ver con la próstata?",
      answer: "Puede ser. El crecimiento benigno de la próstata es una causa común, pero también influyen la diabetes, tomar líquidos de noche o una infección urinaria. El equipo médico revisa tus síntomas y decide qué análisis aclaran el origen.",
      questionEn: "Could getting up several times a night to urinate be my prostate?",
      answerEn: "It could be. Benign prostate enlargement is a common cause, but diabetes, drinking fluids late or a urinary infection can also play a part. The medical team reviews your symptoms and decides which tests will pin down the cause.",
    },
    {
      question: "¿El PSA se hace con sangre o con examen físico?",
      answer: "El PSA es un análisis de sangre que se procesa en el laboratorio de la clínica. Si el equipo médico considera útil algún otro tipo de revisión, te lo explica antes y tú decides con calma.",
      questionEn: "Is PSA a blood test or a physical exam?",
      answerEn: "PSA is a blood test processed in the clinic's lab. If the medical team thinks another kind of exam would help, they explain it first and you decide at your own pace.",
    },
    {
      question: "¿Por qué me preguntan si tomo pastillas para la caída del cabello?",
      answer: "Porque algunos de esos medicamentos, como la finasterida, reducen el valor del PSA y podrían ocultar un aumento. Saberlo permite al equipo médico interpretar tu resultado correctamente.",
      questionEn: "Why am I asked whether I take hair loss pills?",
      answerEn: "Because some of those medications, such as finasteride, lower PSA levels and could hide a rise. Knowing about them lets the medical team read your result correctly.",
    },
  ],
  "examenes-sangre": [
    {
      question: "¿Puedo tomar café antes de un análisis de glucosa o colesterol?",
      answer: "Mejor no. El café, aunque sea sin azúcar, puede alterar algunos valores cuando el examen pide ayuno. Toma solo agua natural desde la noche anterior y deja el café y el desayuno para después de la extracción.",
      questionEn: "Can I drink coffee before a glucose or cholesterol test?",
      answerEn: "It's better not to. Coffee, even black, can throw off some values when the test calls for fasting. Stick to plain water from the night before and save your coffee and breakfast for after the draw.",
    },
    {
      question: "¿Necesito una orden de otro proveedor para hacerme análisis aquí?",
      answer: "No hace falta. Si ya traes una orden, la usamos. Si no, el equipo médico de la clínica te pregunta por tus molestias y antecedentes y decide qué análisis tienen sentido para ti.",
      questionEn: "Do I need an order from another provider to get lab work here?",
      answerEn: "No. If you already have an order, bring it and we'll use it. If not, the clinic's medical team asks about your symptoms and history and decides which tests make sense for you.",
    },
    {
      question: "¿Cada cuánto conviene repetir los exámenes de sangre?",
      answer: "Depende de tu salud. Una persona sin problemas conocidos suele revisarse en su chequeo de rutina, mientras que quien controla diabetes, colesterol o tiroides necesita análisis más seguidos. El equipo médico te indica la frecuencia en tu caso.",
      questionEn: "How often should I repeat my blood work?",
      answerEn: "It depends on your health. Someone with no known conditions usually checks during a routine physical, while people managing diabetes, cholesterol or thyroid problems need labs more often. The medical team tells you the right interval for you.",
    },
  ],
  "infecciones-urinarias": [
    {
      question: "¿El urocultivo y el examen de orina son lo mismo?",
      answer: "No. El examen general de orina se procesa en nuestro laboratorio y orienta el tratamiento. El urocultivo hace crecer la bacteria para saber cuál es y qué antibiótico la elimina; tarda varios días y te avisamos cuando esté listo.",
      questionEn: "Is a urine culture the same as a urinalysis?",
      answerEn: "No. The urinalysis is processed in our lab and guides your treatment. A urine culture grows the bacteria to learn which one it is and which antibiotic kills it; it takes several days and we call you once it's ready.",
    },
    {
      question: "¿Conviene tomar mucha agua para poder orinar en el vaso?",
      answer: "Un vaso de agua ayuda si no tienes ganas de orinar, pero no tomes litros justo antes, porque una orina muy diluida puede hacer menos clara la lectura. Si puedes, aguanta un rato sin ir al baño antes de llegar.",
      questionEn: "Should I drink lots of water so I can fill the cup?",
      answerEn: "A glass of water helps if you don't feel the urge, but don't drink a lot right before, since very diluted urine can make the reading less clear. If you can, hold off on using the bathroom for a while before you arrive.",
    },
    {
      question: "¿Por qué me vuelven las infecciones urinarias?",
      answer: "Pueden influir tomar poca agua, aguantar las ganas de orinar, las relaciones sexuales, los cambios de la menopausia o en hombres la próstata. Si te pasa seguido, el equipo médico busca la causa y te da medidas concretas para prevenirlas.",
      questionEn: "What makes a bladder infection return again and again?",
      answerEn: "Low water intake, holding your urine, sex, menopause changes or, in men, the prostate can all play a part. If it happens often, the medical team looks for the cause and gives you specific steps to prevent the next one.",
    },
  ],
  "examen-heces": [
    {
      question: "¿Puedo traer la muestra de heces de un día para otro?",
      answer: "Lo ideal es entregarla pronto después de recogerla. Si no puedes venir enseguida, ciérrala bien, métela en una bolsa y guárdala en el refrigerador, nunca en el congelador. Al entregarla, dinos a qué hora la tomaste.",
      questionEn: "Can I bring in a stool sample the next day?",
      answerEn: "It's best to hand it in soon after collecting it. If you can't come right away, seal it, put it in a bag and keep it in the fridge, never the freezer. When you drop it off, tell us what time you collected it.",
    },
    {
      question: "¿Cómo se toma la muestra de heces a un niño que usa pañal?",
      answer: "Pon el pañal al revés, con la parte de plástico hacia adentro, para que la evacuación no se absorba. Luego pasa una porción al frasco con la paletita y tráelo a la clínica con el nombre del niño escrito.",
      questionEn: "How do you collect a stool sample from a child in diapers?",
      answerEn: "Put the diaper on inside out, plastic side facing in, so the stool isn't absorbed. Then move a portion into the container with the scoop and bring it in with the child's name written on it.",
    },
    {
      question: "¿Por qué a veces piden más de una muestra de heces?",
      answer: "Algunos parásitos no salen en todas las evacuaciones, así que una sola muestra puede salir limpia aunque estén ahí. Por eso el equipo médico a veces pide muestras de días distintos para aumentar la posibilidad de encontrarlos.",
      questionEn: "Why do they sometimes ask for more than one stool sample?",
      answerEn: "Some parasites don't show up in every bowel movement, so a single sample can come back clean even when they're there. That's why the medical team sometimes asks for samples from different days to improve the odds of finding them.",
    },
  ],
  "prueba-strep": [
    {
      question: "¿Mi hijo puede ir a la escuela si tiene strep?",
      answer: "No debería ir mientras tenga fiebre y antes de empezar el antibiótico, porque contagia con facilidad. El equipo médico te dice cuándo puede volver a clases.",
      questionEn: "When is a child with strep ready to return to class?",
      answerEn: "Keep them home while the fever lasts and until the antibiotic has started, because strep spreads easily. The medical team tells you when they can go back to class.",
    },
    {
      question: "¿Debo dejar de tomar algo antes de la prueba de strep?",
      answer: "Si ya empezaste un antibiótico por tu cuenta, dínoslo, porque puede hacer que la prueba salga negativa aunque haya infección. También conviene no hacer gárgaras con enjuague bucal justo antes del hisopado.",
      questionEn: "Should I stop taking anything before a strep test?",
      answerEn: "If you've already started an antibiotic on your own, tell us, because it can make the test come out negative even when there's an infection. It also helps to skip mouthwash gargles right before the swab.",
    },
    {
      question: "¿Los adultos también pueden tener faringitis por estreptococo?",
      answer: "Sí. Los escolares la pescan más, pero mamás, papás, maestras y cuidadoras la contraen a menudo por el contacto diario con ellos. La prueba y el tratamiento son iguales a cualquier edad.",
      questionEn: "Can adults get strep throat too?",
      answerEn: "Yes. It's most common in school-age kids, but adults catch it as well, especially parents and people who work with children. The test and the treatment are the same at any age.",
    },
  ],
  "prueba-tuberculosis": [
    {
      question: "¿Qué pasa si no puedo regresar a la lectura de la prueba PPD?",
      answer: "Si se pasa el tiempo de lectura, la reacción ya no se puede medir con seguridad y la prueba debe repetirse desde el principio. Antes de la primera visita, revisa tu calendario para asegurarte de que puedes volver.",
      questionEn: "What if I can't come back for my PPD reading?",
      answerEn: "Once the reading window passes, the reaction can't be measured reliably and the test has to start over. Before the first visit, check your schedule to make sure you can make it back.",
    },
    {
      question: "¿Puedo hacerme la prueba de tuberculosis si me vacunaron con BCG?",
      answer: "Sí, la vacuna BCG no impide hacerte la prueba cutánea. Solo debes avisarlo, porque puede causar una reacción positiva. El equipo médico lo toma en cuenta al interpretar el resultado.",
      questionEn: "Can I take the TB skin test if I had the BCG vaccine?",
      answerEn: "Yes, the BCG vaccine doesn't stop you from taking the skin test. Just mention it, because it can cause a positive reaction. The medical team takes that into account when reading the result.",
    },
    {
      question: "¿Me puedo bañar o nadar con la prueba de TB en el brazo?",
      answer: "Sí, el agua no afecta la prueba. Seca la zona con suavidad, sin frotar, y evita rascar, poner curitas o cremas hasta que te hagan la lectura.",
      questionEn: "Can I shower or swim with the TB test on my arm?",
      answerEn: "Yes, water doesn't affect the test. Pat the area dry without rubbing, and avoid scratching it, covering it with a bandage or applying lotion until your reading is done.",
    },
  ],
  "enfermedades-transmision-sexual": [
    {
      question: "¿Las pruebas de ETS sirven si no tengo ningún síntoma?",
      answer: "Sí, y son justo para eso. Varias infecciones de transmisión sexual pasan sin molestias durante mucho tiempo y aun así pueden contagiarse o causar problemas de fertilidad. Revisarte es la única forma de saberlo.",
      questionEn: "Is STD testing useful if I have no symptoms?",
      answerEn: "Yes, that's exactly what it's for. Several sexually transmitted infections go unnoticed for a long time and can still spread or cause fertility problems. A test is how you find out for sure.",
    },
    {
      question: "¿Puedo hacerme las pruebas de ETS si estoy menstruando?",
      answer: "Las pruebas de orina y de sangre se pueden hacer sin problema. Si además necesitas una revisión de la zona genital o una toma de muestra vaginal, a veces conviene esperar a que termine el periodo; el equipo médico te orienta.",
      questionEn: "Can I get STD testing during my period?",
      answerEn: "Urine and blood tests can be done without any problem. If you also need a genital exam or a vaginal swab, it's sometimes better to wait until your period ends; the medical team will advise you.",
    },
    {
      question: "¿Mi pareja tiene que venir conmigo?",
      answer: "No es obligatorio, puedes venir sola o solo. Pero si una de tus pruebas sale positiva, tu pareja también necesita revisarse y tratarse; si no, la infección puede ir y volver de uno a otro.",
      questionEn: "Does my partner have to come with me?",
      answerEn: "No, you can come on your own. But if one of your tests is positive, your partner needs to be checked and treated as well; otherwise the infection can keep passing back and forth between you.",
    },
  ],
  "examen-alcohol-drogas": [
    {
      question: "¿Puede salir positivo el examen de drogas por un medicamento con receta?",
      answer: "Puede pasar con algunos analgésicos fuertes, pastillas para dormir o para la ansiedad. Por eso te pedimos los nombres de lo que tomas antes de la prueba; con esa información el resultado se interpreta correctamente.",
      questionEn: "Can a prescription medicine make my drug test come out positive?",
      answerEn: "It can happen with some strong painkillers, sleeping pills or anxiety medication. That's why we ask for the names of what you take before the test; with that information the result is interpreted correctly.",
    },
    {
      question: "¿Mi empleador recibe el resultado o me lo dan a mí?",
      answer: "Depende de lo que pida la empresa. Si tu empleador tiene un formulario o una forma de envío, lo seguimos; si no, te entregamos la documentación del resultado para que tú la lleves. Pregúntalo antes en tu trabajo.",
      questionEn: "Does my employer get the result, or do I?",
      answerEn: "It depends on what the company asks for. If your employer has a form or a way they want it sent, we follow it; if not, we give you the result documentation to deliver yourself. Check with your job beforehand.",
    },
    {
      question: "¿Puedo hacerme la prueba de drogas solo por mi cuenta, sin que la pida un trabajo?",
      answer: "Sí. Algunas personas la piden por un trámite familiar, legal o simplemente para tener constancia. Explícanos para qué la necesitas y el personal te indica qué tipo de prueba te conviene.",
      questionEn: "Can I take a drug test on my own, without a job requiring it?",
      answerEn: "Yes. Some people need it for a family or legal matter, or simply want a record. Tell us what it's for and our staff will point you to the right type of test.",
    },
  ],
  "electrocardiograma": [
    {
      question: "¿Tengo que rasurarme el pecho para el electrocardiograma?",
      answer: "Normalmente no. Si tienes mucho vello y los parches no se pegan bien, el personal puede recortar una zona pequeña para que el aparato capte la señal. Lo importante es llegar con la piel limpia y sin cremas.",
      questionEn: "Do I have to shave my chest for an EKG?",
      answerEn: "Usually not. If you have a lot of hair and the patches won't stick, our staff may trim a small area so the machine picks up the signal. What matters most is clean skin with no lotion.",
    },
    {
      question: "¿Un electrocardiograma normal significa que mi corazón está perfecto?",
      answer: "No siempre. El EKG muestra cómo late tu corazón en ese momento, pero no ve las arterias ni detecta todos los problemas. Ese trazo cobra sentido cuando el equipo médico lo cruza con lo que sientes, tu presión y tus análisis.",
      questionEn: "If my EKG comes back normal, is my heart fully in the clear?",
      answerEn: "Not always. An EKG shows how your heart beats at that moment, but it doesn't see the arteries or catch every problem. The tracing makes sense once the medical team weighs it against how you feel, your pressure readings and your labs.",
    },
    {
      question: "¿Me piden un electrocardiograma antes de una cirugía, lo pueden hacer aquí?",
      answer: "Sí. Trae la orden o los requisitos que te dio el lugar donde te van a operar. Hacemos el EKG y te entregamos el trazo para que lo lleves a tu cita prequirúrgica.",
      questionEn: "My surgery requires a pre-op EKG. Can you do it here?",
      answerEn: "Yes. Bring the order or checklist from the place where you're having surgery. We perform the EKG and give you the tracing to take to your pre-op appointment.",
    },
  ],
  "ultrasonido": [
    {
      question: "¿Por qué tengo que llegar con la vejiga llena al ultrasonido pélvico?",
      answer: "La vejiga llena empuja los intestinos hacia un lado y funciona como una ventana que deja ver mejor el útero, los ovarios y la propia vejiga. Si llegas con ella vacía, quizá tengas que tomar agua y esperar antes del estudio.",
      questionEn: "What does a full bladder do for a pelvic scan?",
      answerEn: "A full bladder pushes the intestines aside and acts like a window that gives a clearer view of the uterus, ovaries and the bladder itself. Show up with it empty and we may hand you water and have you sit tight a while before starting.",
    },
    {
      question: "¿El ultrasonido puede ver piedras en la vesícula o en los riñones?",
      answer: "Sí, es uno de los estudios más usados para eso. Muestra piedras en la vesícula con mucha claridad y también puede detectar piedras o inflamación en los riñones. El equipo médico relaciona lo que se ve con tu dolor.",
      questionEn: "Can an ultrasound see gallstones or kidney stones?",
      answerEn: "Yes, it's one of the go-to tests for that. It shows gallstones very clearly and can also pick up stones or swelling in the kidneys. The medical team connects what it sees with your pain.",
    },
    {
      question: "¿Puedo ir acompañada al ultrasonido de embarazo?",
      answer: "Sí, puedes venir con tu pareja o un familiar para que vean juntos al bebé en la pantalla. Si el espacio es reducido, quizá pidamos que entre solo una persona contigo.",
      questionEn: "Can someone come with me to my pregnancy ultrasound?",
      answerEn: "Yes, you can bring your partner or a family member so you can see the baby on the screen together. If the room is small, we may ask that just one person come in with you.",
    },
  ],
  "examen-dot": [
    {
      question: "¿Los lentes o los audífonos médicos cuentan en contra en el DOT?",
      answer: "No. Lo que se mide es que veas y escuches lo suficiente con la ayuda que usas a diario. Tráelos puestos al examen; si los necesitas para manejar, tu certificado lo indicará.",
      questionEn: "Do glasses or hearing aids count against me on the DOT exam?",
      answerEn: "No. What's measured is whether you see and hear well enough with the aids you use every day. Wear them to the exam; if you need them to drive, your certificate will say so.",
    },
    {
      question: "¿Me puedo hacer el examen DOT si me tomo pastillas para la presión?",
      answer: "Sí. Tomar medicina para la presión no te impide certificarte; lo importante es que tus cifras estén controladas el día del examen. Tómatela como siempre esa mañana y trae el nombre y la dosis.",
      questionEn: "Can I take the DOT physical if I'm on blood-pressure pills?",
      answerEn: "Yes. Taking blood-pressure medication doesn't keep you from getting certified; what counts is that your readings are under control on exam day. Take it as usual that morning and bring the name and dose.",
    },
    {
      question: "¿Qué pasa si tengo apnea del sueño y uso CPAP?",
      answer: "Puedes certificarte si el tratamiento funciona. Trae el reporte de uso de tu máquina CPAP o una carta de quien te trata la apnea; el equipo médico lo revisa como parte de la evaluación.",
      questionEn: "What if I have sleep apnea and use a CPAP?",
      answerEn: "You can get certified if the treatment is working. Bring your CPAP usage report or a letter from whoever treats your sleep apnea; the medical team reviews it as part of the evaluation.",
    },
  ],
  "examenes-inmigracion": [
    {
      question: "¿Quién firma mi I-693 en esta clínica?",
      answer: "Lo firma un Civil Surgeon autorizado por USCIS que atiende en nuestra sede de Hammerly Blvd. Tú también firmas tu parte del formulario, pero en su presencia, así que no lo firmes en casa antes de llegar.",
      questionEn: "Who signs my I-693 at this clinic?",
      answerEn: "A USCIS-authorized Civil Surgeon who sees patients at our Hammerly Blvd location signs it. You sign your own section too, but in that person's presence, so leave it blank until you arrive.",
    },
    {
      question: "¿Puedo abrir el sobre para revisar mis resultados?",
      answer: "No lo abras. USCIS rechaza el formulario si el sobre llega roto o despegado. Para revisar tus datos, usa la copia aparte que te entregamos junto con el sobre sellado.",
      questionEn: "Can I open the envelope to check my results?",
      answerEn: "Please don't. USCIS turns the form away if the envelope shows up torn or unsealed. To review your information, use the separate copy we hand you along with the sealed envelope.",
    },
    {
      question: "Perdí mi cartilla de vacunas, ¿igual puedo hacer el examen?",
      answer: "Sí. Sin registro, el Civil Surgeon revisa contigo qué vacunas exige USCIS y cómo comprobar o completar las que faltan. Si encuentras la cartilla más tarde, tráela antes de que se cierre el formulario.",
      questionEn: "I lost my vaccine card. Can I still take the exam?",
      answerEn: "Yes. Without a record, the Civil Surgeon reviews with you which vaccines USCIS requires and how to prove or complete the missing ones. If the card turns up later, bring it before the form is closed.",
    },
  ],
  "vacunas": [
    {
      question: "Me corté con un metal oxidado, ¿necesito la antitetánica?",
      answer: "Si tu último refuerzo fue hace mucho o no lo recuerdas, es probable que sí. Ven hoy mismo: el personal médico revisa la herida, la limpia y te aplica el toxoide tetánico si te corresponde.",
      questionEn: "I cut myself on rusty metal. Do I need a tetanus shot?",
      answerEn: "If your last booster was long ago or you can't recall it, you likely do. Come in today: the medical staff checks and cleans the wound and gives you the tetanus toxoid if it's due.",
    },
    {
      question: "¿Puedo ponerme la vacuna de la influenza si estoy resfriado?",
      answer: "Con un resfriado leve, sin fiebre, normalmente sí. Con fiebre alta o un malestar fuerte, lo prudente suele ser aplazar la dosis y regresar ya recuperado; el equipo médico lo decide al verte.",
      questionEn: "Can I get the flu shot while I have a cold?",
      answerEn: "With a mild cold and no fever, usually yes. With a high fever or feeling really unwell, the shot is usually postponed until you've recovered; the medical team makes that call when they see you.",
    },
    {
      question: "¿Me dan un comprobante de la vacuna?",
      answer: "Sí. Anotamos la vacuna aplicada en tu registro y, si traes tu cartilla, también la dejamos escrita ahí. Conserva ese papel, porque empleadores, escuelas y el trámite del I-693 suelen pedirlo.",
      questionEn: "Will I get proof of the vaccine?",
      answerEn: "Yes. We note the shot in your clinic record and, if you bring your vaccine card, we write it there as well. Keep it handy for work, school or your immigration exam.",
    },
  ],
  "sueros-vitaminados": [
    {
      question: "¿Me explican qué lleva el suero antes de ponérmelo?",
      answer: "Sí. En la consulta previa el equipo médico te dice qué contiene la mezcla y resuelve tus dudas. Solo después, y si estás de acuerdo, se coloca la vía en el brazo.",
      questionEn: "Do you explain what's in the drip before I get it?",
      answerEn: "Yes. In the visit beforehand the medical team tells you what the mix contains and answers your questions. Only then, and only if you agree, is the IV line placed in your arm.",
    },
    {
      question: "¿Puedo ponerme un suero si estoy embarazada?",
      answer: "Coméntalo antes de empezar. El embarazo y la lactancia son situaciones en las que el equipo médico de la clínica suele no aplicar el suero o pedir una evaluación más completa primero.",
      questionEn: "Can I get an IV drip if I'm pregnant?",
      answerEn: "Mention it before anything starts. Pregnancy and breastfeeding are situations where the clinic's medical team usually holds off on the drip or asks for a fuller evaluation first.",
    },
    {
      question: "¿Qué hago si me sale un moretón donde entró la aguja?",
      answer: "Un pequeño moretón en el pliegue del brazo es común y desaparece solo. Si la zona se calienta, se enrojece cada vez más o duele al moverla, regresa a la clínica para que la revisen.",
      questionEn: "What if I get a bruise where the needle went in?",
      answerEn: "A small bruise inside the elbow is common and clears up by itself. If the area gets warm, keeps turning redder or hurts when you move it, come back to the clinic to have it looked at.",
    },
  ],
  "suturas-heridas": [
    {
      question: "¿Cuánto tiempo después de cortarme todavía me pueden coser?",
      answer: "Mientras antes llegues, mejor: una herida que lleva muchas horas abierta tiene más riesgo de infectarse y a veces ya no conviene cerrarla con puntos. No esperes a mañana; ven en cuanto puedas.",
      questionEn: "How long after a cut can it still be stitched?",
      answerEn: "The sooner you arrive, the better. A wound left open for many hours is more likely to get infected, and sometimes stitching it is no longer a good idea. Don't wait until tomorrow; come in as soon as you can.",
    },
    {
      question: "¿Duele cuando ponen los puntos?",
      answer: "Sientes el piquete de la anestesia local, que arde unos segundos. Después la zona se duerme y durante la costura solo notas presión o jalones leves, no dolor.",
      questionEn: "Does getting stitches hurt?",
      answerEn: "You feel the local anesthetic go in, which stings for a few seconds. After that the area goes numb, and while the stitches are placed you only notice light pressure or tugging, not pain.",
    },
    {
      question: "¿Puedo mojar la herida suturada al bañarme?",
      answer: "Al principio mantenla seca, como te indique el personal médico. Después puedes ducharte dejando correr el agua y jabón suave sobre ella, pero sin sumergirla en tina, alberca ni mar hasta que retiren los puntos.",
      questionEn: "Can I get my stitched wound wet in the shower?",
      answerEn: "Keep it dry at first, as the medical staff tells you. Later you can shower and let water and mild soap run over it, but don't soak it in a tub, pool or the ocean until the stitches are out.",
    },
  ],
  "curacion-heridas": [
    {
      question: "Me operaron en otro lugar, ¿pueden hacerme las curaciones aquí?",
      answer: "Sí. Ven con la hoja de alta del lugar donde te operaron y con los medicamentos que usas ahora. El personal médico revisa la herida, la limpia y te cambia el vendaje según esas instrucciones.",
      questionEn: "I had surgery elsewhere. Can you do my dressing changes here?",
      answerEn: "Yes. Bring the discharge instructions you were given and any medicine you're using. The medical staff checks the wound, cleans it and changes the dressing following those instructions.",
    },
    {
      question: "¿Es mejor dejar la herida al aire o tapada?",
      answer: "Casi siempre sana mejor cubierta con un apósito limpio, que la protege de la suciedad y mantiene la humedad adecuada. Dejarla al aire forma costra gruesa y puede retrasar el cierre.",
      questionEn: "Should a wound be left open to the air or covered?",
      answerEn: "It usually heals better under a clean dressing, which keeps dirt out and holds the right amount of moisture. Left open to the air, it forms a thick scab that can slow healing.",
    },
    {
      question: "Por mi azúcar alta, una llaga del talón lleva semanas abierta: ¿qué me recomiendan?",
      answer: "No la trates por tu cuenta en casa. En personas con diabetes una herida del pie puede complicarse rápido. Ven a la clínica para que el equipo médico la limpie, revise la circulación y te indique cada cuánto volver.",
      questionEn: "High blood sugar has kept a sore on my heel open for weeks. What do you suggest?",
      answerEn: "Don't manage it alone at home. With diabetes, a foot wound can get worse quickly. Come to the clinic so the medical team can clean it, check your circulation and tell you how often to return.",
    },
  ],
  "cirugias-menores": [
    {
      question: "¿Me quedará cicatriz después de quitar un lunar?",
      answer: "Toda incisión deja una marca, pero suele ser una línea fina que se aclara con los meses. Protegerla del sol y no rascar las costras ayuda a que se note menos.",
      questionEn: "Will removing a mole leave a scar?",
      answerEn: "Any incision leaves a mark, but it's usually a thin line that fades over the months. Keeping it out of the sun and not picking at scabs helps it show less.",
    },
    {
      question: "¿Puedo manejar después de que me quiten un quiste?",
      answer: "Por lo general sí, porque solo se usa anestesia local y no te duerme. Si el procedimiento fue en una mano o un pie, pregunta al equipo médico si conviene que alguien te lleve a casa.",
      questionEn: "Can I drive after a cyst is removed?",
      answerEn: "Usually yes, because only local anesthesia is used and it doesn't put you to sleep. If the procedure was on a hand or foot, ask the medical team whether someone should drive you home.",
    },
    {
      question: "¿Un lipoma vuelve a salir después de retirarlo?",
      answer: "Cuando se saca completo, es poco común que vuelva en el mismo lugar. Algunas personas tienden a formar lipomas nuevos en otras zonas; si aparece otro, vuelve para que lo revisen.",
      questionEn: "Does a lipoma come back after removal?",
      answerEn: "When it's removed whole, it rarely returns in the same spot. Some people tend to develop new lipomas elsewhere; if another one shows up, come back to have it checked.",
    },
  ],
  "drenaje-abscesos": [
    {
      question: "¿Todos los abscesos se tienen que abrir?",
      answer: "No siempre. Uno pequeño y sin pus acumulado a veces mejora con compresas tibias y, si hace falta, antibiótico. Cuando el bulto está blando y lleno de pus, drenarlo suele ser la manera de que sane.",
      questionEn: "Does every abscess have to be opened?",
      answerEn: "Not always. A small one without much pus may settle with warm compresses and, if needed, an antibiotic. Once the lump turns soft and fills with pus, draining it is usually what lets it heal.",
    },
    {
      question: "Me salen forúnculos seguido, ¿por qué?",
      answer: "Pueden repetirse por bacterias que viven en la piel, roce de la ropa, sudor o azúcar alta en la sangre. El equipo médico puede pedir análisis de sangre para buscar la causa.",
      questionEn: "Why do I keep getting boils?",
      answerEn: "They can recur because of bacteria living on the skin, friction from clothing, sweat or high blood sugar. The medical team may order blood work to look for the cause.",
    },
    {
      question: "¿Puedo ir a trabajar después del drenaje?",
      answer: "En la mayoría de los casos sí, siempre que mantengas la herida cubierta y limpia. Si tu trabajo es con polvo, tierra o mucho sudor, pregunta cómo proteger la zona durante la jornada.",
      questionEn: "Can I go to work after the drainage?",
      answerEn: "In most cases yes, as long as the wound stays covered and clean. If your job involves dust, soil or heavy sweating, ask how to protect the area during your shift.",
    },
  ],
  "unas-encarnadas": [
    {
      question: "¿Me van a quitar la uña completa?",
      answer: "Normalmente no. Solo se retira la franja del borde que está enterrada en la piel. El resto de la uña se queda en su lugar y sigue creciendo de forma normal.",
      questionEn: "Will my whole toenail be removed?",
      answerEn: "Usually not. Only the edge strip buried in the skin is taken out. The rest of the nail stays in place and keeps growing normally.",
    },
    {
      question: "¿Sirve meter algodón debajo de la uña para que no se entierre?",
      answer: "En casos muy leves a veces ayuda, pero si ya hay pus, hinchazón o mucho dolor, el algodón puede guardar humedad y empeorar la infección. En ese punto conviene que la revisen.",
      questionEn: "Does tucking cotton under the nail stop it from growing in?",
      answerEn: "In very mild cases it sometimes helps, but once there's pus, swelling or a lot of pain, cotton can trap moisture and make the infection worse. At that stage it's best to have it examined.",
    },
    {
      question: "¿Atienden uñas encarnadas en niños?",
      answer: "Sí, también en niños y adolescentes, sobre todo los que hacen deporte y usan tenis apretados. Un adulto responsable debe acompañarlos durante la visita y quedarse con ellos mientras se aplica la anestesia.",
      questionEn: "Do you treat ingrown toenails in children?",
      answerEn: "Yes, children and teens too, especially young athletes in tight sneakers. A responsible adult needs to come with them and stay by their side while the numbing shot is given.",
    },
  ],
  "farmacia": [
    {
      question: "¿Qué tipo de productos hay en la farmacia de la clínica?",
      answer: "Dos cosas: los medicamentos que el equipo médico te indica durante tu consulta en la clínica y productos de venta libre, como analgésicos comunes, remedios para la gripe y material de curación.",
      questionEn: "What kind of products does the clinic pharmacy have?",
      answerEn: "Two things: the medicines the medical team orders during your visit at the clinic, and over-the-counter products such as common pain relievers, cold remedies and first-aid supplies.",
    },
    {
      question: "¿Puedo comprar algo para el dolor sin pasar a consulta?",
      answer: "Los productos de venta libre se pueden pedir directamente en el mostrador. Si el dolor es fuerte, dura varios días o viene con fiebre, es mejor que el equipo médico te revise antes.",
      questionEn: "Can I buy something for pain without being seen?",
      answerEn: "Over-the-counter items can be requested right at the counter. If the pain is severe, lasts several days or comes with a fever, it's better to let the medical team examine you first.",
    },
    {
      question: "¿Quién me dice la dosis y el horario de lo que me entregan?",
      answer: "Sí. Al entregarlo te dicen la dosis, cada cuánto tomarlo, si va con comida y qué efectos vigilar. Si en casa te surge una duda, llama a la clínica y pregunta.",
      questionEn: "Who tells me the dose and timing of what I'm handed?",
      answerEn: "Yes. When it's handed to you, you'll hear the dose, how often to take it, whether it goes with food and which side effects to watch for. If a question comes up at home, call the clinic.",
    },
  ],
};

/** FAQs de un servicio por slug (vacío si no tiene). */
export function getServiceFaqs(slug: string): ServiceFaq[] {
  return SERVICE_FAQS[slug] ?? [];
}
