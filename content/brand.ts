/**
 * Identidad, navegación y datos operativos.
 *
 * Nada de aquí está inventado: sale de la toma de requerimientos y del
 * diseño. Lo que todavía no existe queda declarado como pendiente y se
 * muestra en la interfaz como pendiente, nunca disfrazado de dato real.
 */

export const brand = {
  name: 'SYNAPTICA',
  /**
   * PENDIENTE DE CONFIRMAR: ni la toma de requerimientos ni el diseño dan
   * el nombre profesional completo ni el título con el que quiere firmar.
   * Ver README, «Pendientes».
   */
  therapist: 'Carol',
  tagline: 'Terapia de reconfiguración profunda',
  description:
    'SYNAPTICA integra hipnoterapia RTT, neurociencia, psicología y coaching transformacional para trabajar en el origen de las creencias que sostienen un patrón, no en su síntoma. Sesiones en línea, en español e inglés.',
  locale: 'es-MX',
} as const;

/**
 * La navegación del diseño: anclas de la portada. La barra y el pie usan
 * la misma lista, como en el diseño.
 */
export const homeNav = [
  { href: '/#metodo', label: 'El método' },
  { href: '/#quien', label: 'Quién acompaña' },
  { href: '/#historias', label: 'Historias' },
] as const;

/**
 * Las lecturas profundas. No están en la barra —el diseño es de una sola
 * página— sino enlazadas desde la sección de la portada que las resume.
 */
export const deepReads = [
  { href: '/metodo', label: 'El método en detalle' },
  { href: '/sesiones', label: 'Cómo trabajamos juntos' },
  { href: '/sobre-mi', label: 'La historia completa' },
  { href: '/historias', label: 'El caso, narrado entero' },
] as const;

/**
 * El enlace de agenda todavía no existe (§08 de la propuesta). Sin la
 * variable, el llamado renderiza un estado honesto en vez de un `href="#"`
 * muerto: una página con acabado completo y ningún destino real es una
 * firma reconocible de que nadie la operó nunca, y además desperdicia a
 * quien sí quería escribir.
 */
export const booking = {
  url: process.env.NEXT_PUBLIC_BOOKING_URL ?? '',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? '',
  label: 'Agenda una llamada',
  /** En la barra de un teléfono no cabe la etiqueta larga. */
  labelShort: 'Agenda',
  labelLong: 'Agenda una llamada de valoración',
  pending: 'Agenda en preparación',
  pendingShort: 'En preparación',
  pendingLong: 'La agenda en línea se abre en los próximos días.',
} as const;

export const isBookingLive = booking.url.length > 0;
export const isEmailLive = booking.email.length > 0;
