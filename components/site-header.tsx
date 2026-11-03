import Link from 'next/link';
import { brand, homeNav } from '@/content/brand';
import { BookingLink } from '@/components/booking-link';

/**
 * La barra: dos filas centradas, hecha sólo de tipografía. Fija, marfil
 * translúcido con desenfoque y hairline abajo.
 *
 * Arriba el nombre, solo y centrado. Abajo el menú, y «Agenda» como su
 * último elemento, en salmón oscuro.
 *
 * Por qué así (revisión del 30 de septiembre):
 *
 * - **Sin ninguna caja.** La píldora que vivía aquí era el único elemento
 *   con contorno de toda la barra, en una página hecha de hairlines y
 *   tipografía: se leía como un cuerpo extraño. La píldora de verdad vive
 *   al cierre de la portada, que es donde la acción toca — repetirla
 *   arriba la gastaba. Al quitarla, además, se resuelve el desequilibrio
 *   del teléfono: ya no cuelga nada de un lado, es una línea centrada.
 * - **Sin «rayitas».** Un desplegable es el precio que se paga cuando los
 *   enlaces no caben. Estos cuatro caben en una línea hasta en 320 px, y
 *   en una portada de una sola página el menú *es* la presentación: dice
 *   en un segundo que hay un método, trabajo con escuelas y casos reales.
 *   Escondido, quien llega sólo ve un nombre.
 * - **La acción se distingue por color y por posición**, no por un marco:
 *   va la última y es lo único en salmón oscuro (5.08:1 sobre marfil).
 * - **A la derecha del nombre está reservado ES | EN.** No se dibuja
 *   todavía porque no existe la versión en inglés, y un selector que no
 *   cambia el idioma es un control muerto — el mismo criterio que con el
 *   botón de reproducir y con la agenda.
 *
 * El fondo va al 92 % y no al 78 % del diseño: con 78 %, al pasar sobre
 * las secciones en petróleo, los enlaces caían a 3.54:1.
 */
export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/6 bg-ground/92 backdrop-blur-[18px] backdrop-saturate-[160%]">
      {/* `min-h` y no `h`: por debajo de unos 360 px el menú se reparte en
          dos líneas centradas y la barra tiene que poder crecer con él. */}
      <div className="mx-auto flex min-h-nav max-w-wide flex-col justify-center gap-i2 px-gutter py-i2 sm:gap-i3">
        <Link
          href="/#inicio"
          className="type-wordmark self-center text-[16px] tracking-[3.5px] whitespace-nowrap transition-[color] duration-160 ease-settle hover:text-accent-ink active:text-ink sm:text-[20px] sm:tracking-[4px]"
        >
          {brand.name}
        </Link>

        <nav aria-label="Principal">
          <ul className="flex flex-wrap items-center justify-center gap-x-i2 gap-y-1 text-small sm:gap-x-i3">
            {homeNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-quiet inline-block py-2">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <BookingLink tone="text" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
