import Link from 'next/link';
import { booking, isBookingLive, isEmailLive } from '@/content/brand';

/**
 * El llamado a agendar.
 *
 * Tiene tres destinos posibles, en este orden: la agenda en línea cuando
 * exista, el correo cuando lo haya, y —mientras no exista ninguno de los
 * dos— la sección de la portada donde se explica la llamada de valoración.
 *
 * Ese tercer caso es lo que permite que el botón viva siempre en la barra:
 * no es un `href="#"` muerto ni una etiqueta gris que finge ser un control
 * desactivado, sino un enlace que lleva a algo real. La etiqueta dice
 * «Agenda» y el destino explica cómo; en cuanto llegue la URL de Calendly,
 * el mismo botón apunta ahí sin tocar nada más.
 *
 * Tres formas, según dónde viva:
 *
 * - `solid` — la píldora salmón del cierre de la portada. Es la acción
 *   terminal, cuando la persona ya leyó y tiene con qué decidir.
 * - `outline` — la misma píldora, en contorno, para dentro del contenido.
 * - `text` — sólo tipografía, para la barra. Ver la nota de `.link-action`
 *   en globals.css: la barra no tiene ninguna caja, y meter una píldora
 *   ahí era el único cuerpo extraño de la página.
 */
export function BookingLink({
  tone = 'solid',
  compact = false,
  fullWidth = false,
}: {
  tone?: 'solid' | 'outline' | 'text';
  /** La versión reducida: más baja y más estrecha. */
  compact?: boolean;
  /** Ocupa el ancho disponible. */
  fullWidth?: boolean;
}) {
  const className =
    tone === 'text'
      ? 'link-action inline-block py-2'
      : [
          'control',
          compact ? 'control-sm' : 'control-lg',
          tone === 'solid' ? 'control-solid' : 'control-outline',
          fullWidth ? 'w-full' : '',
        ]
          .filter(Boolean)
          .join(' ');

  /**
   * En un teléfono la etiqueta larga desborda la fila. Se renderizan las
   * dos y decide el ancho, en vez de recortar el texto con puntos
   * suspensivos: «Agenda» dice lo mismo en la mitad del espacio.
   */
  const short = compact || tone === 'text';
  const label = short ? (
    <>
      <span className="sm:hidden">{booking.labelShort}</span>
      <span className="hidden sm:inline">{booking.label}</span>
    </>
  ) : (
    booking.label
  );

  if (isBookingLive) {
    return (
      <a className={className} href={booking.url} target="_blank" rel="noreferrer">
        {label}
      </a>
    );
  }

  if (isEmailLive) {
    return (
      <a className={className} href={`mailto:${booking.email}`}>
        {short ? label : 'Escribir para agendar'}
      </a>
    );
  }

  return (
    <Link className={className} href="/#la-invitacion">
      {label}
    </Link>
  );
}
