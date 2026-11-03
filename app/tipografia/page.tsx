import type { Metadata } from 'next';
import {
  Newsreader,
  Montserrat,
  Lora,
  Neuton,
  Libre_Caslon_Display,
  Libre_Caslon_Text,
  Bodoni_Moda,
  DM_Serif_Display,
} from 'next/font/google';
import type { CSSProperties } from 'react';

/**
 * Página de trabajo, no del sitio: la portada con cada combinación
 * tipográfica, para que Carol elija con la página real delante. No está
 * enlazada ni se indexa.
 *
 * Ahora compara *combinaciones* de tres tipografías, no fuentes sueltas:
 * el problema que señaló Carol no era la serif, sino que una sola serif
 * fina hacía de nombre, titular, etiqueta y texto a la vez. Sin contraste
 * entre roles, la página se veía «demasiado femenina».
 *
 * Las fuentes se cargan sólo aquí; el resto del sitio no las descarga.
 */

export const metadata: Metadata = {
  title: 'Tipografía — combinaciones',
  robots: { index: false, follow: false },
};

const newsreader = Newsreader({ subsets: ['latin', 'latin-ext'], style: ['normal', 'italic'], axes: ['opsz'], display: 'swap' });
const montserrat = Montserrat({ subsets: ['latin', 'latin-ext'], display: 'swap' });
const lora = Lora({ subsets: ['latin', 'latin-ext'], style: ['normal', 'italic'], display: 'swap' });
const neuton = Neuton({ subsets: ['latin', 'latin-ext'], weight: ['300', '400'], style: ['normal', 'italic'], display: 'swap' });
const caslon = Libre_Caslon_Display({ subsets: ['latin', 'latin-ext'], weight: '400', display: 'swap' });
/**
 * Libre Caslon Display sólo existe en un peso. Para el nombre en negrita
 * que pidió Carol, la familia hermana —Libre Caslon Text— sí tiene 700, y
 * está dibujada para acompañarla.
 */
const caslonText = Libre_Caslon_Text({ subsets: ['latin', 'latin-ext'], weight: ['400', '700'], style: ['normal', 'italic'], display: 'swap' });
const bodoni = Bodoni_Moda({ subsets: ['latin', 'latin-ext'], style: ['normal', 'italic'], axes: ['opsz'], display: 'swap' });
const dmSerif = DM_Serif_Display({ subsets: ['latin', 'latin-ext'], weight: '400', style: ['normal', 'italic'], display: 'swap' });

type Combo = {
  name: string;
  note: string;
  roles: { wordmark: string; title: string; label: string; body: string };
  fonts: { wordmark: string; title: string; label: string; body: string };
  /** El titular lleva itálica real; sin ella la cursiva se vería falsa. */
  trueItalic: boolean;
  /** Peso del nombre, cuando no es el 600 de Newsreader. */
  wordmarkWeight?: number;
  current?: boolean;
};

const combos: Combo[] = [
  {
    name: 'A',
    note: 'Newsreader + Montserrat + Lora. Fue la elegida en septiembre y estuvo montada en el sitio hasta el día 28.',
    roles: {
      wordmark: 'Newsreader 600',
      title: 'Newsreader 400',
      label: 'Montserrat 500',
      body: 'Lora 400',
    },
    fonts: {
      wordmark: newsreader.style.fontFamily,
      title: newsreader.style.fontFamily,
      label: montserrat.style.fontFamily,
      body: lora.style.fontFamily,
    },
    trueItalic: true,
  },
  {
    name: 'B',
    note: 'La misma, con Neuton en el cuerpo: más ligera y más estrecha que Lora, así que entra más texto por línea y la página se siente más tranquila.',
    roles: {
      wordmark: 'Newsreader 600',
      title: 'Newsreader 400',
      label: 'Montserrat 500',
      body: 'Neuton 400',
    },
    fonts: {
      wordmark: newsreader.style.fontFamily,
      title: newsreader.style.fontFamily,
      label: montserrat.style.fontFamily,
      body: neuton.style.fontFamily,
    },
    trueItalic: true,
  },
  {
    name: 'C',
    note: 'Con Libre Caslon Display en los titulares, que fue la que te llamó. Más clásica y con más peso. Aviso: no tiene itálica, así que la palabra en cursiva de cada título tendría que ir en Newsreader o desaparecer.',
    roles: {
      wordmark: 'Newsreader 600',
      title: 'Libre Caslon Display 400',
      label: 'Montserrat 500',
      body: 'Lora 400',
    },
    fonts: {
      wordmark: newsreader.style.fontFamily,
      title: caslon.style.fontFamily,
      label: montserrat.style.fontFamily,
      body: lora.style.fontFamily,
    },
    trueItalic: false,
  },
  {
    name: 'D',
    note: 'Tu propuesta completa: Libre Caslon en todo lo que manda. El nombre va en Libre Caslon Text 700, que es la hermana de texto de la misma familia — la Display sólo existe en un peso.',
    roles: {
      wordmark: 'Libre Caslon Text 700',
      title: 'Libre Caslon Display 400',
      label: 'Montserrat 500',
      body: 'Lora 400',
    },
    fonts: {
      wordmark: caslonText.style.fontFamily,
      title: caslon.style.fontFamily,
      label: montserrat.style.fontFamily,
      body: lora.style.fontFamily,
    },
    trueItalic: false,
    wordmarkWeight: 700,
  },
  {
    name: 'E',
    note: 'Con Bodoni Moda en el cuerpo, como planteaste. Mírala en el párrafo: sus trazos finos casi desaparecen a este tamaño. Es una tipografía de titular, no de lectura larga.',
    roles: {
      wordmark: 'Libre Caslon Text 700',
      title: 'Libre Caslon Display 400',
      label: 'Montserrat 500',
      body: 'Bodoni Moda 400',
    },
    fonts: {
      wordmark: caslonText.style.fontFamily,
      title: caslon.style.fontFamily,
      label: montserrat.style.fontFamily,
      body: bodoni.style.fontFamily,
    },
    trueItalic: false,
    wordmarkWeight: 700,
  },
  {
    name: 'F',
    note: 'Con DM Serif Display en el cuerpo. El problema es el contrario: pesa demasiado y el párrafo se vuelve un bloque oscuro. También es de titular.',
    roles: {
      wordmark: 'Libre Caslon Text 700',
      title: 'Libre Caslon Display 400',
      label: 'Montserrat 500',
      body: 'DM Serif Display 400',
    },
    fonts: {
      wordmark: caslonText.style.fontFamily,
      title: caslon.style.fontFamily,
      label: montserrat.style.fontFamily,
      body: dmSerif.style.fontFamily,
    },
    trueItalic: false,
    wordmarkWeight: 700,
  },
];

export default function TipografiaPage() {
  return (
    <div className="bg-ground px-gutter pt-[calc(var(--spacing-nav)+var(--spacing-major))] pb-section">
      <div className="mx-auto flex max-w-wide flex-col gap-major">
        <header className="flex max-w-measure flex-col gap-i2">
          <p className="eyebrow">Tipografía</p>
          <p className="text-body text-ink">
            <strong className="font-normal">Esta página es el historial, no la decisión.</strong>{' '}
            El 28 de septiembre Carol eligió Didot para el nombre y los titulares, y
            Proxima Nova para el cuerpo y las etiquetas. Es lo que se ve en el sitio.
            Las seis combinaciones de abajo quedan para no perder el camino recorrido.
          </p>
          <p className="text-lead text-ink-2">
            Tres tipografías con tres trabajos: el nombre, los titulares y las etiquetas en
            versalitas, y el texto corrido. Ese contraste entre roles es lo que le faltaba a la
            versión anterior, donde una sola serif fina lo hacía todo.
          </p>
          <p className="text-body text-ink-2">
            A y B se diferencian sólo en el texto corrido: Lora o Neuton. De la C a la F mandan
            los titulares en Libre Caslon Display, y E y F prueban Bodoni Moda y DM Serif Display
            en el cuerpo — están para verlas, aunque las dos son tipografías de titular.
          </p>
        </header>

        {combos.map((combo) => {
          const title: CSSProperties = { fontFamily: combo.fonts.title };
          return (
            <section
              key={combo.name}
              aria-labelledby={`combo-${combo.name}`}
              className="flex flex-col gap-i3 border-t border-ink/20 pt-i3"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-i2">
                <h2 id={`combo-${combo.name}`} className="type-utility text-small font-medium">
                  Opción {combo.name}
                  {combo.current ? <span className="ml-i1 eyebrow">en el sitio</span> : null}
                </h2>
                <p className="type-utility max-w-measure text-small text-ink-2">{combo.note}</p>
              </div>

              <dl className="type-utility flex flex-wrap gap-x-i3 gap-y-1 text-micro text-ink-2">
                {(
                  [
                    ['Nombre', combo.roles.wordmark],
                    ['Titulares', combo.roles.title],
                    ['Etiquetas', combo.roles.label],
                    ['Cuerpo', combo.roles.body],
                  ] as const
                ).map(([role, value]) => (
                  <div key={role} className="flex gap-1">
                    <dt className="tracking-[1.6px] uppercase">{role}:</dt>
                    <dd className="text-ink">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="flex flex-col items-center gap-i2 rounded-media bg-band px-i2 py-major text-center">
                <p
                  style={{ fontFamily: combo.fonts.wordmark, fontWeight: combo.wordmarkWeight ?? 600 }}
                  className="text-[clamp(16px,2vw,20px)] tracking-[4px] uppercase"
                >
                  Carol Leyva
                </p>

                <p
                  style={{ fontFamily: combo.fonts.label, fontWeight: 500 }}
                  className="text-micro tracking-[3.2px] text-accent-ink uppercase"
                >
                  Quién acompaña
                </p>

                <p style={title} className="max-w-[15em] text-opening tracking-[-0.5px]">
                  Tal vez nunca hubo nada roto en{' '}
                  <em
                    className="emphasis"
                    style={combo.trueItalic ? undefined : { fontFamily: newsreader.style.fontFamily }}
                  >
                    ti
                  </em>
                  .
                </p>

                <p
                  style={{ fontFamily: combo.fonts.body }}
                  className="max-w-measure text-body text-ink-2"
                >
                  Nadie nace sintiéndose insuficiente, culpable o incapaz. Esas percepciones se
                  aprenden, casi siempre temprano y casi siempre sin darnos cuenta, y desde el
                  subconsciente gobiernan decisiones, relaciones y la manera en que te percibes.
                </p>

                <span
                  style={{ fontFamily: combo.fonts.label, fontWeight: 500 }}
                  className="control control-lg control-solid mt-i1"
                >
                  Agenda una llamada
                </span>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
