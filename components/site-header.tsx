import Link from 'next/link';
import { brand, homeNav } from '@/content/brand';
import { BookingLink } from '@/components/booking-link';

/**
 * La barra del diseño: fija, marfil translúcido con desenfoque, hairline
 * abajo. La navegación son anclas de la propia portada — el diseño es de
 * una sola página, y las lecturas profundas se enlazan desde dentro de la
 * sección que las resume, no desde aquí.
 *
 * En un teléfono los cuatro elementos no caben en una fila de 64 px: el
 * logotipo y la píldora suman 344 px y sólo hay 342 px, así que la píldora
 * saltaba a una tercera fila y la barra se comía 160 px de pantalla. Ahora
 * son dos filas explícitas —logotipo y llamado arriba, anclas abajo— y
 * desde `sm` el envoltorio se disuelve con `display: contents` para que
 * los tres vuelvan a la fila única del diseño.
 */
export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/6 bg-ground/78 backdrop-blur-[18px] backdrop-saturate-[160%]">
      <div className="mx-auto flex min-h-nav max-w-wide flex-col justify-center gap-2 px-gutter py-2 sm:flex-row sm:items-center sm:gap-i2 sm:py-0">
        <div className="flex items-center justify-between gap-i2 sm:contents">
          <Link
            href="/#inicio"
            className="type-display text-[19px] font-medium tracking-[4px] transition-[color] duration-160 ease-settle hover:text-accent-ink active:text-ink sm:mr-auto sm:text-[21px]"
          >
            {brand.name}
          </Link>
          <div className="sm:order-3">
            <BookingLink tone="outline" />
          </div>
        </div>

        <nav aria-label="Principal" className="sm:order-2 sm:mr-i2">
          <ul className="flex flex-wrap items-center gap-x-i3 text-small">
            {homeNav.map((item) => (
              <li key={item.href}>
                {/* Los 6 px verticales llevan el área táctil a 34 px:
                    el mínimo de destino apuntable son 24 px, y un enlace
                    de 13.5 px sin relleno se queda en 22. */}
                <Link href={item.href} className="link-quiet inline-block py-1.5">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
