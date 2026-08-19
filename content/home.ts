/**
 * La portada, tal como está diseñada en `SYNAPTICA Home.dc.html`.
 *
 * El copy es el del diseño, que a su vez sale de la toma de requerimientos
 * (el número de sección va entre paréntesis). Sin promesas de resultado y
 * sin urgencia: son dos de las tres restricciones del proyecto.
 */

/* ── Apertura ─────────────────────────────────────────── (§18) ── */
export const opening = {
  eyebrow: 'Terapia de reconfiguración profunda',
  headline: ['Tal vez nunca hubo', 'nada roto en ti.'],
  sub: [
    'Tal vez has vivido guiado por una historia que aprendiste a creer.',
    'SYNAPTICA existe para ayudarte a reescribirla desde su origen.',
  ],
  scrollHint: 'Desliza para continuar la conversación',
} as const;

/* ── El reconocimiento ───────────────────────────── (§4, §5) ── */
export const recognition = {
  quote: ['«Sé exactamente por qué hago esto…', 'pero no puedo dejar de hacerlo.»'],
  body: 'Si esa frase te resulta familiar, ya sabes que comprender un problema no es lo mismo que transformarlo. Has leído, tomado cursos, probado terapias. Y aun así, el patrón regresa. No es falta de voluntad. Es una historia instalada mucho antes de que pudieras elegirla.',
} as const;

/* ── La idea ──────────────────────────────────── (§2, §5, §8) ── */
export const idea = {
  eyebrow: 'La idea',
  title: ['El síntoma no es una falla.', 'Es un mensaje.'],
  body: [
    'Nadie nace sintiéndose insuficiente, culpable o incapaz. Esas percepciones se aprenden — casi siempre temprano, casi siempre sin darnos cuenta — y desde el subconsciente gobiernan decisiones, relaciones y la manera en que te percibes.',
    'Por eso el trabajo no empieza en el síntoma. Empieza en el origen: la creencia que lo sostiene. Cuando esa creencia pierde fuerza, el cambio deja de depender de la fuerza de voluntad.',
  ],
  pullQuote:
    'No se trata de convertirte en alguien diferente. Se trata de dejar de vivir desde creencias que nunca te pertenecieron.',
} as const;

/* ── El método ────────────────────────────────────────── (§11) ── */
export const method = {
  eyebrow: 'El método',
  title: ['Cinco movimientos.', 'Una reconfiguración.'],
  intro:
    'SYNAPTICA integra hipnoterapia RTT, neurociencia, psicología y coaching transformacional en una secuencia diseñada para comprender el origen — y reescribirlo.',
  steps: [
    {
      numeral: 'I',
      title: 'Investigación',
      body: 'Tu historia, tus patrones y las creencias que probablemente sostienen el problema.',
    },
    {
      numeral: 'II',
      title: 'Interpretación',
      body: 'En hipnosis accedemos al origen y comprendemos la función que ese patrón cumplía.',
    },
    {
      numeral: 'III',
      title: 'Interrupción',
      body: 'La creencia limitante se resignifica: deja de ser una verdad y vuelve a ser un aprendizaje.',
    },
    {
      numeral: 'IV',
      title: 'Integración',
      body: 'Un audio personalizado acompaña a tu cerebro a consolidar la nueva narrativa.',
    },
    {
      numeral: 'V',
      title: 'Instalación',
      body: 'Seguimiento para evaluar cambios, ajustar y fortalecer lo alcanzado.',
    },
  ],
} as const;

/* ── Los 21 días ──────────────────────────────────────── (§10) ── */
export const nights = {
  numeral: '21',
  eyebrow: 'Después de la sesión',
  title: ['La sesión inicia el cambio.', 'Los 21 días lo consolidan.'],
  body: [
    'Al terminar recibes un audio creado específicamente para tu historia y las creencias que queremos fortalecer. Durante 21 días, ese audio entrena a tu cerebro: la neuroplasticidad necesita repetición emocionalmente significativa para que lo nuevo se vuelva familiar.',
    'No es un complemento opcional. Es la mitad del proceso.',
  ],
} as const;

/* ── Quién acompaña ──────────────────────────── (§1, §3, §12) ── */
export const who = {
  eyebrow: 'Quién acompaña',
  title: 'Veinte años estudiando una sola pregunta.',
  body: [
    '¿Por qué las personas, aun deseando profundamente cambiar, repiten los patrones que las hacen sufrir? Esa pregunta atravesó mi camino por la educación, la psicología, el coaching, la hipnosis terapéutica y la neurociencia.',
    'La respuesta no llegó de un libro, sino de mi propia historia. Formada en Rapid Transformational Therapy directamente con su fundadora, Marisa Peer, integré ese método con años de estudio interdisciplinario hasta convertirlo en algo propio: SYNAPTICA.',
  ],
  stats: [
    { value: '+20 años', label: 'de trayectoria' },
    { value: 'RTT', label: 'formación con Marisa Peer' },
    { value: 'ES · EN', label: 'sesiones online' },
  ],
} as const;

/* ── Historias ────────────────────────────────────────── (§13) ── */
export const stories = {
  eyebrow: 'Una historia',
  title: '«He sido un mal padre.»',
  intro:
    'Llegó con duelo, ansiedad crónica y años de distancia con sus hijos. Cargaba una certeza: que era tan malo como sus propios padres.',
  /**
   * Se narra como un relato, no como una comparación en dos tarjetas: es
   * una historia con antes y después, y el orden de lectura importa.
   */
  passages: [
    {
      label: 'Lo que descubrió',
      body: 'La distancia con sus hijos no era abandono: era un intento de ponerlos a salvo de repetir su propia infancia. Un acto enorme de amor, leído durante años como una condena.',
    },
    {
      label: 'Lo que cambió',
      body: 'Recuperó la tranquilidad frente a lo que antes lo desbordaba. Puso límites sin culpa, retomó proyectos pospuestos por años y su familia notó la transformación.',
    },
  ],
  closing: [
    '«Hoy ya no vive intentando demostrar su valor.',
    'Vive convencido de que ya lo posee.»',
  ],
} as const;

/* ── La invitación ────────────────────────────── (§14, §26) ── */
export const invitation = {
  eyebrow: 'Antes de decidir',
  title: 'Es normal llegar con dudas.',
  objections: [
    {
      title: '«Ya intenté de todo.»',
      body: 'La decepción acumulada es la resistencia más real. Por eso aquí no encontrarás promesas: encontrarás el proceso explicado con claridad, paso a paso.',
    },
    {
      title: '«¿Perderé el control?»',
      body: 'No. La hipnosis es un estado natural de relajación profunda. Permaneces consciente, presente y en control durante toda la sesión.',
    },
    {
      title: '«Me da miedo mirar ahí.»',
      body: 'Miraremos con respeto y sin dramatismo. Todo síntoma tiene una lógica; comprenderla es más amable de lo que imaginas.',
    },
  ],
  note: 'Sin urgencia. Sin compromiso. Una conversación para saber si este es tu camino.',
} as const;
