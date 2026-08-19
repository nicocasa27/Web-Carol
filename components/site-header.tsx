import Link from 'next/link';
import { brand, homeNav } from '@/content/brand';
import { BookingLink } from '@/components/booking-link';

/**
 * La barra del diseño: fija, marfil translúcido con desenfoque, hairline
 * abajo. La navegación son anclas de la propia portada — el diseño es de
 * una sola página, y las lecturas profundas se enlazan desde dentro de la
 * sección que las resume, no desde aquí.
 *
 * En un teléfono los cuatro elementos no caben en una fila de 64 px. El
 * diseño no lo resuelve porque está dibujado a un solo ancho; aquí los
 * enlaces bajan a una segunda fila en vez de esconderse, que es lo que
 * haría desaparecer la navegación justo donde más se usa.
 */
export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/6 bg-ground/78 backdrop-blur-[18px] backdrop-saturate-[160%]">
      <div className="flex min-h-nav flex-wrap items-center gap-x-i2 gap-y-i1 px-gutter py-i1 sm:flex-nowrap sm:py-0">
        <Link
          href="/#inicio"
          className="type-display mr-auto text-[21px] font-medium tracking-[4px] transition-[color] duration-160 ease-settle hover:text-accent-ink active:text-ink"
        >
          {brand.name}
        </Link>

        <div className="order-1 sm:order-3">
          <BookingLink tone="outline" />
        </div>

        <nav aria-label="Principal" className="order-2 w-full sm:order-2 sm:mr-i2 sm:w-auto">
          <ul className="flex flex-wrap items-center gap-x-i3 gap-y-1 text-small">
            {homeNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-quiet">
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
