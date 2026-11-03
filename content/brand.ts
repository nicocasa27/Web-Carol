/**
 * Identidad, navegación y datos operativos.
 *
 * El eje del sitio es la marca personal, no el método: se acordó en la
 * junta del 29 de agosto de 2026. La persona primero, y el método como
 * algo que ella creó — no al revés.
 *
 * Nada de aquí está inventado. Lo que todavía no existe queda declarado
 * como pendiente y se muestra en la interfaz como pendiente, nunca
 * disfrazado de dato real.
 */

export const brand = {
  name: 'Carol Leyva',
  /** Cómo firma. En el mundo terapéutico y en inglés la llaman Carol. */
  shortName: 'Carol',
  /**
   * NO usar «Dra.»: en la junta dijo explícitamente que todavía no tiene
   * doctorado, aunque algunos pacientes la llamen así.
   */
  /**
   * Va en inglés, debajo de su nombre, en letra discreta: lo pidió así en
   * la revisión de la sección 1.
   */
  role: 'Founder • Clinical Hypnotherapist • RTT',
  tagline: 'Terapia de reconfiguración profunda',
  description:
    'Carol Leyva integra hipnoterapia RTT, neurociencia, psicología y coaching transformacional para trabajar en el origen de las creencias que sostienen un patrón, no en su síntoma. Sesiones en línea, en español e inglés.',
  locale: 'es-MX',
} as const;

/**
 * El método todavía no tiene nombre.
 *
 * «Sináptica» se descartó en la junta: hay una clínica en Barcelona con
 * ese nombre, mismo sector y misma búsqueda. La alternativa que propuso
 * ChatGPT —NADS— también se descartó, porque las siglas en inglés tienen
 * una lectura desafortunada.
 *
 * Hasta que ella lo nombre, el copy dice «el método» y «mi método». Ese
 * día se pone aquí y el sitio entero lo recoge.
 *
 * Criterio de Carol (revisión de la sección 1): el nombre del método o su
 * slogan va **siempre en inglés**. El concepto con el que está trabajando
 * es «Neural Recalibration Therapy», todavía sin confirmar.
 */
export const methodName: string | null = null;

/**
 * Mientras no haya nombre, cómo se describe el trabajo. No es una marca:
 * es una categoría, y por eso se escribe en la etiqueta de la apertura y
 * no como si fuera un método registrado.
 *
 * Lo eligió Carol el 28 de septiembre, a propósito discreto: sustituye a
 * «Terapia de reconfiguración profunda» en el mismo sitio. En cuanto
 * exista `methodName`, esta línea cede su lugar.
 */
export const methodDescriptor = 'Advanced Neuro-Subconscious Therapeutics';

/**
 * La navegación. La portada es de una sola página y sus anclas conviven
 * con `/escuelas`, que sí es una página aparte: se dirige a direcciones
 * escolares, no a pacientes, y mezclarla en la portada le quitaría foco a
 * la llamada de valoración.
 *
 * **Todo en inglés desde el 30 de septiembre.** Antes decía «El método /
 * Schools / Historias» y esa mezcla era lo que molestaba a Carol. Dos
 * formas de deshacerla: todo en español —pero «Escuelas» ya lo había
 * descartado— o todo en inglés, que es lo que eligió y encaja con su
 * regla de nombrar los programas en inglés.
 *
 * Queda una pregunta abierta para cuando entre el selector ES | EN: si el
 * menú sigue al idioma de la página —«Sobre mí · Método · Schools ·
 * Historias» en español— o se queda siempre en inglés como una decisión
 * de marca. Hoy la página es sólo en español, así que el menú en inglés
 * es una elección de estilo, no una traducción.
 *
 * «About» abre la sección de la portada donde ella se presenta, y desde
 * ahí se enlaza la historia completa. Va primero porque el eje del sitio
 * es la marca personal: lo primero que alguien quiere saber es quién es.
 */
export const homeNav = [
  { href: '/#quien', label: 'About' },
  { href: '/#metodo', label: 'Method' },
  /* «Mettle Youngs» es el nombre del programa dentro de la página, no
     del menú: quien no lo conoce no sabría qué hay detrás. */
  { href: '/escuelas', label: 'Schools' },
  { href: '/#historias', label: 'Stories' },
] as const;

/**
 * Las lecturas profundas. No están en la barra —la portada las resume—
 * sino enlazadas desde la sección que corresponde a cada una.
 */
export const deepReads = [
  { href: '/sobre-mi', label: 'La historia completa' },
  { href: '/metodo', label: 'El método en detalle' },
  { href: '/sesiones', label: 'Cómo trabajamos juntos' },
  { href: '/historias', label: 'El caso, narrado entero' },
  { href: '/escuelas', label: 'El protocolo para escuelas' },
] as const;

/** Documentos legales. Viven en subpágina y se enlazan desde el pie. */
export const legalPages = [
  { href: '/aviso-de-privacidad', label: 'Aviso de privacidad' },
  { href: '/terminos', label: 'Términos y condiciones' },
  { href: '/consentimiento', label: 'Consentimiento' },
  { href: '/testimonios', label: 'Uso de testimonios' },
] as const;

/**
 * El enlace de agenda todavía no existe. Sin la variable, el llamado
 * renderiza un estado honesto en vez de un `href="#"` muerto: una página
 * con acabado completo y ningún destino real es una firma reconocible de
 * que nadie la operó nunca, y además desperdicia a quien sí quería
 * escribir.
 */
export const booking = {
  url: process.env.NEXT_PUBLIC_BOOKING_URL ?? '',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? '',
  /**
   * En inglés desde el 3 de noviembre, como el menú y como los nombres de
   * los programas. Es la regla de Carol: lo que nombra algo suyo va en
   * inglés, aunque el cuerpo de la página esté en español.
   */
  label: 'Book Discovery Call',
  /** En la barra de un teléfono no cabe la etiqueta larga. */
  labelShort: 'Book a Call',
  pending: 'Agenda en preparación',
  pendingShort: 'En preparación',
  pendingLong: 'La agenda en línea se abre en los próximos días.',
} as const;

export const isBookingLive = booking.url.length > 0;
export const isEmailLive = booking.email.length > 0;
