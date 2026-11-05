import Link from 'next/link';
import { brand, homeNav, legalPages, booking, isEmailLive } from '@/content/brand';

/**
 * El pie, en gris piedra desde el 5 de noviembre (antes petróleo).
 * Carol lo quería más intenso que el gris anterior y sin verde.
 *
 * Nota histórica del 3 de noviembre, cuando era petróleo:
 *
 * Carol lo quería más oscuro, «negro o burgundy». Va en el petróleo que
 * ya tiene la página —el mismo de la banda del método— y no en un negro
 * nuevo: de la paleta que mandó, «Dark Night» es prácticamente este
 * color, y añadir un cuarto oscuro sólo para el pie partiría la gama. El
 * vino queda reservado para el llamado principal, que es lo que lo hace
 * destacar.
 *
 * `on-deep` es lo que cambia enlaces, selección y anillo de foco al juego
 * claro; los pares de contraste ya están verificados en scripts/contrast.mjs.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-stone border-t border-stone-rule bg-stone px-gutter py-stack text-stone-ink">
      <div className="mx-auto flex max-w-wide flex-col gap-i2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <span className="type-wordmark text-[18px] tracking-[4px]">{brand.name}</span>

        <nav aria-label="Pie de página">
          <ul className="flex flex-wrap gap-x-i2 gap-y-1 text-small">
            {homeNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-quiet inline-block py-1.5">
                  {item.label}
                </Link>
              </li>
            ))}
            {isEmailLive ? (
              <li>
                <a href={`mailto:${booking.email}`} className="link-quiet inline-block py-1.5">
                  {booking.email}
                </a>
              </li>
            ) : null}
          </ul>
        </nav>

        <p className="type-utility text-micro text-stone-ink-2">
          © {year} {brand.name} · {brand.tagline} · Español e inglés, online
        </p>
      </div>

      {/* Los legales viven en subpágina y se enlazan desde aquí, para no
          saturar la interfaz principal. Acordado en la junta. */}
      <div className="mx-auto mt-i2 flex max-w-wide flex-wrap gap-x-i2 border-t border-stone-rule pt-i2">
        <ul className="flex flex-wrap gap-x-i2 gap-y-1 text-micro">
          {legalPages.map((page) => (
            <li key={page.href}>
              <Link href={page.href} className="link-quiet inline-block py-1.5">
                {page.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <p className="mx-auto mt-i2 max-w-wide text-micro text-stone-ink-2">
        Este trabajo acompaña procesos de transformación personal y no sustituye
        atención médica ni psiquiátrica.
      </p>
    </footer>
  );
}
