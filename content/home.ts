/**
 * La portada.
 *
 * El copy sale de la toma de requerimientos (el número de sección va
 * entre paréntesis) y del diseño `SYNAPTICA Home.dc.html`, reencuadrado
 * tras la junta del 29 de agosto: el eje ya no es el método sino ella.
 *
 * El método no se nombra en ningún lado. «Sináptica» se descartó y no hay
 * sustituto todavía; ver `methodName` en content/brand.ts.
 *
 * Sin promesas de resultado y sin urgencia: dos de las tres restricciones
 * del proyecto.
 *
 * La palabra en itálica por titular —idea tomada de la referencia
 * Maren & Co.— se retiró el 3 de noviembre. Carol la quitó de la
 * apertura («se ve más pacífico»), después de la banda del método y
 * después de «Quién acompaña», y reescribió «El origen» sin ella. Tenerla
 * en la mitad de los títulos y no en la otra mitad se leía como descuido.
 * `components/section.tsx` sigue entendiendo `*palabra*` por si se
 * quisiera recuperar en algún título suelto.
 */

/* ── Apertura ─────────────────────────────────────────── (§18) ── */
/**
 * Carol prefirió la frase original a la pregunta que la sustituyó tras la
 * junta: «la percibo más emocional y directa». Su nombre ya no está aquí:
 * vive arriba a la izquierda, en la barra.
 *
 * Es el único titular sin palabra en itálica. Lo pidió Carol el 28 de
 * septiembre —«se ve más pacífico»— y tiene razón: la cursiva es un dedo
 * que señala, y la frase que abre la página no necesita que nadie le
 * señale dónde mirar.
 */
export const opening = {
  /* La etiqueta la da `methodDescriptor`: ver content/brand.ts. */
  /* Sin punto final: lo pidió Carol el 3 de noviembre. En un titular de
     display el punto cierra la frase y la vuelve declaración; sin él
     queda abierta, que es lo que la frase hace. */
  headline: ['Tal vez nunca hubo', 'nada roto en ti'],
  /* Texto de Carol, literal. El corte cae en los puntos suspensivos. */
  sub: [
    'La historia que te guía tal vez no inició contigo…',
    'el poder para reescribirla desde su origen, comienza aquí.',
  ],
  scrollHint: 'Desliza para continuar la conversación',
} as const;

/* ── El reconocimiento ───────────────────────────── (§4, §5) ── */
/**
 * Texto reescrito por Carol el 3 de noviembre. Antes era un solo párrafo
 * corrido; ahora son cuatro frases cortas, que es como se lee algo que
 * reconoces: una cosa cada vez. «No es falta de voluntad» queda sola a
 * propósito — es la frase que desarma la culpa.
 *
 * Dos correcciones de ortografía sobre el original: «Sé» con acento, que
 * es el verbo saber, y «por qué» separado al ser pregunta indirecta.
 */
export const recognition = {
  quote: ['«Sé exactamente por qué hago esto…', 'pero no puedo dejar de hacerlo.»'],
  /**
   * El mismo texto corto del 5 de noviembre, repartido en dos párrafos
   * (7 de noviembre): punto y coma dentro del primero y punto y aparte
   * antes de «No es falta de voluntad». Va justificado, con la pregunta
   * centrada encima.
   *
   * Minúscula tras el punto y coma, que es como se escribe en español.
   */
  body: [
    'Si esa frase te resulta familiar, ya sabes que comprender un problema no es lo mismo que transformarlo. Has leído, tomado cursos, probado terapias; y aun así, el patrón regresa.',
    'No es falta de voluntad. Es una historia instalada mucho antes de que pudieras elegirla.',
  ],
} as const;

/* ── El origen ────────────────────────────────── (§2, §5, §8) ── */
/**
 * Reescrita por Carol el 3 de noviembre. La sección se llamaba «La idea»
 * y ahora se llama «El origen», que es además el término que el propio
 * texto usa para nombrar el lugar donde empieza el trabajo.
 *
 * El primer párrafo queda solo, de una línea: es la premisa de la que
 * cuelga todo lo demás.
 *
 * Sobre el original se corrigió «ese huella» por «esa huella» —huella es
 * femenina— y se quitaron los espacios delante de las comas, que en
 * español no llevan.
 *
 * El titular lleva punto tras «falla.» y ninguno tras «mensaje», tal como
 * lo escribió: el mismo criterio que en la apertura.
 */
export const idea = {
  eyebrow: 'El origen',
  title: ['El síntoma no es una falla.', 'Es un mensaje'],
  body: [
    'Nadie nace sintiéndose insuficiente, culpable o incapaz.',
    'Esas percepciones se aprenden durante nuestra experiencia de vida — casi siempre ocurre temprano… casi sin darnos cuenta — y desde el subconsciente gobiernan los pensamientos, reacciones, decisiones, relaciones, la manera en que te percibes.',
    'Por eso el proceso no comienza en el síntoma; es en El Origen, en la creencia que lo sostiene. Cuando esa huella pierde fuerza, el cambio deja de depender de la fuerza de voluntad.',
  ],
  pullQuote:
    'No se trata de convertirte en alguien diferente. Se trata de dejar de vivir desde creencias que nunca te pertenecieron.',
} as const;

/* ── El ritmo del proceso ──────────────────────── (§10, §11) ── */
/**
 * El método y los 21 días van juntos en una sola banda oscura, contados
 * como un ritmo — la idea de «The rhythm of a practice well kept» de la
 * referencia Maren & Co. que señaló Carol. Antes eran dos secciones.
 */
export const method = {
  eyebrow: 'El método',
  /**
   * Sin palabra en itálica y todo en el mismo claro: lo pidió Carol el 3
   * de noviembre. Sobre el petróleo, el salmón en cursiva era el acento
   * más fuerte de la página entera.
   */
  title: ['Cinco movimientos.', 'Una reconfiguración.'],
  intro:
    'Protocolo secuencial de acceso neuro-subconsciente que integra Hipnoterapia RTT, Neuroplasticidad dirigida, Psicología, PNL, TCC.',
  /** La línea entre guiones, tal como la escribió. */
  purpose:
    'Diseñado para comprender el origen identitario y recuperar el control para reconsolidarlo desde la raíz',
  /**
   * Carol cambió el orden de IV y V el 3 de noviembre: antes Integración
   * era el audio y Instalación el seguimiento. Ahora el audio instala lo
   * nuevo y la integración es la continuidad posterior, que es el orden
   * en que ocurre.
   */
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
      body: 'El patrón limitante se resignifica: deja de ser una verdad, y se transforma en información o aprendizaje neutral.',
    },
    {
      numeral: 'IV',
      title: 'Instalación',
      body: 'Una experiencia de audio personalizada para consolidar los nuevos aprendizajes y creencias trabajados en sesión.',
    },
    {
      numeral: 'V',
      title: 'Integración',
      body: 'Continuidad personalizada profunda mediante protocolos complementarios de integración, según las necesidades individuales.',
    },
  ],
} as const;

/* ── Los 21 días ──────────────────────────────────────── (§10) ── */
/** En la portada cierran la banda del método; /metodo los cuenta completos. */
export const nights = {
  numeral: '21',
  eyebrow: 'Después de la sesión',
  /**
   * «Veintiuna», no «veintiún»: noche es femenina y el numeral sólo se
   * apocopa delante de masculino.
   */
  title: ['Veintiuna noches de escucha', 'para que lo nuevo se vuelva familiar'],
  body: [
    'El proceso no termina al concluir la sesión, continúa mediante una práctica personalizada que acompaña el trabajo de integración entre encuentros.',
    'El recurso de audio no es un complemento adicional ni un simple recurso de relajación; es la extensión individualizada y una parte esencial del proceso terapéutico que lo completa.',
  ],
  /** La versión breve que cierra la banda del método en la portada. */
  short:
    'El proceso no termina al concluir la sesión: continúa con una práctica personalizada entre encuentros. El audio no es un complemento ni un recurso de relajación — es la parte del proceso que lo completa.',
} as const;

/* ── Quién acompaña ─────────────────── (§1, §3, §4, §12, §14) ── */
/**
 * Abre con la pregunta que Carol se hace desde hace veinte años y dice a
 * quién acompaña: a quien esa pregunta le hace sentido.
 *
 * Tuvo una versión con seis puntos de perfil y dos frases de filtro. Se
 * recortó porque Carol prefiere la primera versión, «con menos info, menos
 * saturada». El perfil completo sigue en el documento «Info para Landing
 * Page» si se quiere recuperar en /sobre-mi.
 */
export const who = {
  eyebrow: 'Quién acompaña',
  /**
   * Reescrita por Carol el 3 de noviembre, entrecomillada y sin palabra
   * en itálica. Una sola línea, sin corte escrito a mano: se reparte sola
   * con `text-balance`.
   */
  question: '«¿Por qué, aun comprendiendo lo que nos ocurre, repetimos lo que tanto deseamos cambiar?»',
  lead: 'Es la pregunta que me hago desde hace más de veinte años. Y acompaño a quien, al leerla, siente que también es suya.',
  body: [
    'Esa pregunta atravesó mi camino por la educación, la psicología, el coaching, la hipnosis terapéutica y la neurociencia. La respuesta no llegó de un libro, sino de mi propia historia. Formada en Rapid Transformational Therapy directamente con su fundadora, Marisa Peer, integré ese método con años de estudio interdisciplinario hasta convertirlo en algo propio.',
  ],
  stats: [
    { value: '+20 años', label: 'de trayectoria' },
    { value: 'RTT', label: 'formación con Marisa Peer' },
    { value: 'ES · EN', label: 'sesiones online' },
  ],
} as const;

/* ── Historias ────────────────────────────────────────── (§13) ── */
/**
 * En la portada, una sola cita grande con una línea de contexto — como el
 * testimonio único de la referencia Maren & Co. El relato completo vive en
 * /historias.
 */
export const stories = {
  eyebrow: 'Una historia',
  title: '«He sido un mal padre.»',
  intro:
    'Llegó con duelo, ansiedad crónica y años de distancia con sus hijos. Cargaba una certeza: que era tan malo como sus propios padres.',
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
  note: 'Una conversación sin urgencia, sin presión; para saber si este es tu camino.',
  noteSecondary: 'Descubre si este proceso responde a lo que hoy necesitas.',
} as const;

/* ── Las puertas ─────────────────────── (referencia Marisa Peer) ── */
/**
 * Las maneras de trabajar con Carol, una junto a otra: la arquitectura de
 * «puertas» del sitio de Marisa Peer, sin sus tácticas de venta. Hoy son
 * dos; cuando exista formación para terapeutas, será la tercera.
 *
 * Sustituye a la banda de escuelas que iba en petróleo: así la portada
 * queda con una sola banda oscura, más ancha, en el método.
 */
export const doors = {
  eyebrow: 'Cómo trabajar conmigo',
  title: 'Dos maneras de empezar.',
  items: [
    {
      label: 'Sesiones privadas',
      title: 'Experiencia personalizada de 90 días, en línea.',
      body: 'Sesiones individuales, cada una acompañada de su propio Neuroplastic Reinforcement Track, diseñado para escuchar durante 21 noches. Acompañamiento y seguimiento terapéutico en español o inglés, desde cualquier lugar.',
      href: '/sesiones',
      linkLabel: 'Cómo es el proceso',
    },
    {
      /**
       * Nombre provisional «RTT School Programs» (5 de noviembre), hasta que
       * Carol encuentre uno mejor. «Young Minds» choca con un programa
       * conocido del Reino Unido.
       *
       * Carol lo escribió «5 weeks Protocol»; en inglés el modificador va
       * en singular y con guion, así que aquí dice «5-Week Protocol».
       */
      label: 'RTT School Programs',
      title: 'The Neuroconfidence Curriculum · 5-Week Protocol',
      body: 'Una metodología para desarrollar autoconfianza, identidad y fortaleza interior durante la infancia y la adolescencia, a través de un diseño de cinco semanas.',
      href: '/escuelas',
      linkLabel: 'Cómo funciona en tu escuela',
    },
  ],
} as const;
