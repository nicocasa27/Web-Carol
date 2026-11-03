import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { brand } from '@/content/brand';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { siteUrl, isIndexable } from '@/content/site';

/**
 * Dos tipografías, dos trabajos. Lo eligió Carol el 28 de septiembre,
 * después de Cormorant, Petrona, Noto Serif Display y el trío
 * Newsreader / Montserrat / Lora:
 *
 *   Didot  — el nombre y los titulares. Es una didona: trazos gruesos
 *            contra hairlines casi invisibles. Ese contraste sólo se
 *            sostiene en cuerpos grandes, así que aquí no toca nada por
 *            debajo de un titular. El nombre va en el corte Bold: a
 *            20 px con las letras separadas, el corte de texto pierde
 *            los trazos finos y la marca se ve descolorida. El corte
 *            «Didot Title» se descartó: a tamaño de titular es
 *            indistinguible del regular.
 *   Proxima Nova — todo lo demás: texto corrido, menú, etiquetas,
 *            botones y cifras. Sans geométrica-humanista, neutra a
 *            propósito: el carácter lo pone la didona.
 *
 * Didot se sirve desde el propio dominio (app/fonts, subconjunto latino,
 * ~19 kB por corte). Proxima Nova viene del kit de Adobe Fonts; ver el
 * <link> de abajo y la nota de licencia en DECISIONS.md.
 */
const display = localFont({
  src: [
    { path: './fonts/didot-regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/didot-italic.woff2', weight: '400', style: 'italic' },
  ],
  display: 'swap',
  variable: '--font-didot',
  /* Sin esto, mientras Didot carga el navegador mide con Georgia y el
     titular salta de tamaño al cambiar.
     Ojo con los nombres: next/font los escribe sin comillas, y una
     familia sin comillas no puede llevar un token que empiece por
     dígito. «Bodoni 72» invalidaba la declaración entera y los titulares
     salían en la sans. */
  fallback: ['Didot', 'Times New Roman', 'serif'],
});

/** El nombre, en versalitas espaciadas: el corte Bold. */
const wordmark = localFont({
  src: './fonts/didot-bold.woff2',
  weight: '400',
  style: 'normal',
  display: 'swap',
  variable: '--font-didot-title',
  fallback: ['Didot', 'Times New Roman', 'serif'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand.name} · ${brand.tagline}`,
    template: `%s · ${brand.name}`,
  },
  description: brand.description,
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    siteName: brand.name,
    title: brand.name,
    description: brand.description,
  },
  robots: { index: isIndexable, follow: isIndexable },
};

/**
 * Tiñe la barra del navegador en móvil del mismo marfil de la página. Sin
 * esto, Safari y Chrome pintan su propio gris encima del diseño y el
 * borde superior de la pantalla se ve como una costura.
 */
export const viewport: Viewport = {
  themeColor: '#fbf9f5',
  colorScheme: 'light',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="es-MX" className={`${display.variable} ${wordmark.variable}`}>
      <head>
        {/* Proxima Nova vive en Adobe Fonts, no se puede alojar aquí. El
            preconnect abre la conexión antes de que el CSS la pida: sin
            él son tres viajes en serie (CSS, luego el woff2). */}
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="" />
        <link rel="preconnect" href="https://p.typekit.net" crossOrigin="" />
        <link rel="stylesheet" href="https://use.typekit.net/pmj6hcv.css" />
      </head>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#inicio"
          className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:top-i1 focus-visible:left-i1 focus-visible:z-60 focus-visible:rounded-card focus-visible:bg-ink focus-visible:px-i2 focus-visible:py-i1 focus-visible:text-small focus-visible:text-ground"
        >
          Saltar al contenido
        </a>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
