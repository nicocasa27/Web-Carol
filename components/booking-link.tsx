import { booking, isBookingLive, isEmailLive } from '@/content/brand';

/**
 * El llamado a agendar, en los dos tonos del diseño: el contorno de la
 * barra y la píldora salmón del cierre.
 *
 * El enlace de agenda todavía no existe. Sin él, esto NO renderiza un
 * `href="#"`: dice que la agenda está en preparación y ofrece el correo
 * si lo hay. Un destino muerto desperdicia justo a quien ya decidió.
 */
export function BookingLink({
  tone = 'solid',
  long = false,
}: {
  tone?: 'solid' | 'outline';
  long?: boolean;
}) {
  const className = `control ${tone === 'solid' ? 'control-solid' : 'control-outline'}`;
  const label = long ? booking.labelLong : booking.label;

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
        Escribir para agendar
      </a>
    );
  }

  // Sin URL y sin correo no hay a dónde ir. En vez de un botón muerto,
  // la etiqueta dice el estado: «en preparación» es la razón, no un
  // adorno, y no finge ser un control desactivado.
  return (
    <span className={`${className} border-edge text-ink-2`}>{booking.pending}</span>
  );
}
