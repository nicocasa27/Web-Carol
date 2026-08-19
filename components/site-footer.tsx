import Link from 'next/link';
import { brand, homeNav, booking, isEmailLive } from '@/content/brand';

/** El pie del diseño: hueso, hairline arriba, tres anclas y la línea legal. */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule bg-band px-gutter py-stack">
      <div className="mx-auto flex max-w-wide flex-col gap-i2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <span className="type-display text-[18px] tracking-[4px]">{brand.name}</span>

        <nav aria-label="Pie de página">
          <ul className="flex flex-wrap gap-x-i2 text-small">
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

        <p className="text-micro text-ink-2">
          © {year} {brand.name} · {brand.tagline} · Español e inglés, online
        </p>
      </div>

      <p className="mx-auto mt-i2 max-w-wide text-micro text-ink-2">
        Este trabajo acompaña procesos de transformación personal y no sustituye
        atención médica ni psiquiátrica.
      </p>
    </footer>
  );
}
