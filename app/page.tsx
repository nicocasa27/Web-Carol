import { Fragment } from 'react';
import Link from 'next/link';
import { Opening } from '@/components/opening';
import { Reveal } from '@/components/reveal';
import { MediaFrame } from '@/components/media-frame';
import { BookingLink } from '@/components/booking-link';
import { Section, Eyebrow, SectionTitle, Prose, LineBreak } from '@/components/section';
import { media } from '@/content/media';
import {
  recognition,
  idea,
  method,
  nights,
  who,
  stories,
  invitation,
} from '@/content/home';

/**
 * La portada, tal como está diseñada en `SYNAPTICA Home.dc.html`.
 *
 * Ocho movimientos. El visitante se lee a sí mismo antes de leer la idea,
 * y la idea antes que el método: hablarle del método a alguien que
 * todavía no se ha reconocido en la frase es lo que hace que estas
 * páginas se sientan un folleto.
 *
 * Las rejillas del diseño son fijas (cinco columnas, tres columnas, dos).
 * Aquí se apilan por debajo de sus puntos de quiebre: cinco columnas de
 * setenta píxeles no se leen en un teléfono, y el alcance incluye la
 * versión móvil de todas las páginas.
 */
export default function Home() {
  return (
    <>
      <Opening />

      {/* El reconocimiento */}
      <Section tone="band" width="narrow" labelledBy="reconocimiento">
        <Reveal className="flex flex-col items-center gap-i3 text-center">
          <div
            aria-hidden="true"
            className="h-14 w-px"
            style={{
              background:
                'linear-gradient(color-mix(in srgb, var(--color-ink) 0%, transparent), color-mix(in srgb, var(--color-ink) 30%, transparent))',
            }}
          />
          <h2 id="reconocimiento" className="type-display text-recognition italic max-sm:text-balance">
            {recognition.quote.map((line, index) => (
              <Fragment key={line}>
                {index > 0 ? <LineBreak /> : null}
                {line}
              </Fragment>
            ))}
          </h2>
          <p className="max-w-measure text-body font-light text-ink-2">{recognition.body}</p>
        </Reveal>
      </Section>

      {/* La idea */}
      <Section labelledBy="la-idea">
        <div className="grid items-center gap-[clamp(40px,6vw,96px)] lg:grid-cols-2">
          <Reveal className="flex flex-col gap-i2">
            <Eyebrow>{idea.eyebrow}</Eyebrow>
            <SectionTitle id="la-idea" lines={idea.title} />
            <Prose paragraphs={idea.body} className="font-light" />
            <p className="type-display max-w-measure text-quote italic text-ink-2">
              {idea.pullQuote}
            </p>
            <p className="mt-i1">
              <Link href="/metodo" className="link-read text-small">
                Cómo funciona por dentro
              </Link>
            </p>
          </Reveal>

          <Reveal className="h-[clamp(380px,48vw,600px)] min-w-0">
            <MediaFrame item={media.idea} sizes="(min-width: 1024px) 580px, 100vw" />
          </Reveal>
        </div>
      </Section>

      {/* El método — la columna de la izquierda se queda mientras las cinco
          operaciones pasan al lado. El numeral grande es el mismo recurso
          que ya usa la sección de los 21 días, así que la página gana una
          rima en vez de un idioma nuevo. */}
      <Section tone="band" id="metodo" labelledBy="el-metodo">
        <div className="grid gap-[clamp(40px,6vw,96px)] lg:grid-cols-[minmax(0,24rem)_1fr]">
          <div className="flex flex-col gap-i2 lg:sticky lg:top-[calc(var(--spacing-nav)+3rem)] lg:self-start">
            <Eyebrow>{method.eyebrow}</Eyebrow>
            <SectionTitle id="el-metodo" lines={method.title} />
            <p className="text-body font-light text-ink-2">{method.intro}</p>
            <p className="mt-i1">
              <Link href="/sesiones" className="link-read text-small">
                Cómo trabajamos juntos, sesión por sesión
              </Link>
            </p>
          </div>

          <ol className="flex flex-col border-t border-rule">
            {method.steps.map((step, index) => (
              <Reveal
                as="li"
                key={step.title}
                delay={index * 80}
                className="grid gap-i1 border-b border-rule py-i3 sm:grid-cols-[5rem_1fr] sm:items-baseline sm:gap-i2"
              >
                <span className="type-display text-[clamp(38px,4.6vw,60px)] leading-[0.9] text-accent-ink">
                  {step.numeral}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="type-display text-quote">{step.title}</h3>
                  <p className="max-w-measure text-body font-light text-ink-2">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      {/* Los 21 días */}
      <Section tone="deep" width="deep" labelledBy="veintiun-dias">
        <div className="grid items-center gap-[clamp(40px,7vw,110px)] md:grid-cols-[auto_1fr]">
          <Reveal>
            <p className="type-display text-numeral text-accent-warm">{nights.numeral}</p>
          </Reveal>
          <Reveal className="flex max-w-[560px] flex-col gap-i2">
            <Eyebrow>{nights.eyebrow}</Eyebrow>
            <SectionTitle id="veintiun-dias" lines={nights.title} />
            <Prose paragraphs={nights.body} tone="deep" className="font-light" />
          </Reveal>
        </div>
      </Section>

      {/* Quién acompaña */}
      <Section id="quien" labelledBy="quien-acompana">
        <div className="grid items-center gap-[clamp(40px,6vw,96px)] lg:grid-cols-2">
          <Reveal className="h-[clamp(420px,52vw,640px)] min-w-0">
            <MediaFrame item={media.portrait} sizes="(min-width: 1024px) 580px, 100vw" />
          </Reveal>

          <Reveal className="flex flex-col gap-i2">
            <Eyebrow>{who.eyebrow}</Eyebrow>
            <SectionTitle id="quien-acompana" lines={who.title} />
            <Prose paragraphs={who.body} className="font-light" />

            <dl className="mt-i1 flex flex-wrap gap-i3 border-t border-rule pt-i2">
              {who.stats.map((stat, index) => (
                <div
                  key={stat.value}
                  className={`flex flex-col gap-1 ${index > 0 ? 'border-l border-rule pl-i3' : ''}`}
                >
                  <dt className="type-display text-stat">{stat.value}</dt>
                  <dd className="text-small text-ink-2">{stat.label}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-i1">
              <Link href="/sobre-mi" className="link-read text-small">
                La historia completa
              </Link>
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Historias — un relato, no una comparación en dos tarjetas. La cita
          final rompe la medida de lectura, que es lo que la hace sonar. */}
      <Section tone="band" width="narrow" id="historias" labelledBy="historias-titulo">
        <article className="flex flex-col items-center gap-stack text-center">
          <Reveal className="flex flex-col items-center gap-i2">
            <Eyebrow>{stories.eyebrow}</Eyebrow>
            <SectionTitle id="historias-titulo" lines={stories.title} />
            <p className="max-w-measure text-lead font-light text-ink-2 text-pretty">
              {stories.intro}
            </p>
          </Reveal>

          <Reveal className="flex max-w-measure flex-col gap-i3 text-left">
            {stories.passages.map((passage) => (
              <p key={passage.label} className="text-body font-light text-ink-2">
                <span className="mr-i1 text-micro tracking-[2.4px] text-ink uppercase">
                  {passage.label}
                </span>
                {passage.body}
              </p>
            ))}
          </Reveal>

          <Reveal className="flex flex-col items-center gap-i2">
            <p className="type-display max-w-[22ch] text-[clamp(26px,3.4vw,40px)] leading-[1.28] italic text-ink max-sm:text-balance">
              {stories.closing.map((line, index) => (
                <Fragment key={line}>
                  {index > 0 ? <LineBreak /> : null}
                  {line}
                </Fragment>
              ))}
            </p>
            <Link href="/historias" className="link-read text-small">
              El caso, narrado entero
            </Link>
          </Reveal>
        </article>
      </Section>

      {/* La invitación — las tres dudas dejan de ser tres columnas iguales.
          Siguen abiertas a propósito: el brief pide responder con claridad,
          y un acordeón esconde justo la respuesta que la persona buscaba. */}
      <Section width="invite" labelledBy="la-invitacion">
        <div className="grid gap-[clamp(40px,6vw,96px)] lg:grid-cols-[minmax(0,20rem)_1fr]">
          <Reveal className="flex flex-col gap-i2 lg:sticky lg:top-[calc(var(--spacing-nav)+3rem)] lg:self-start">
            <Eyebrow>{invitation.eyebrow}</Eyebrow>
            <SectionTitle id="la-invitacion" lines={invitation.title} />
          </Reveal>

          <div className="flex flex-col gap-block">
            <dl className="flex flex-col border-t border-rule">
              {invitation.objections.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={index * 80}
                  className="grid gap-i1 border-b border-rule py-i3 md:grid-cols-[minmax(0,16rem)_1fr] md:gap-i2"
                >
                  <dt className="type-display text-quote">{item.title}</dt>
                  <dd className="max-w-measure text-body font-light text-ink-2">{item.body}</dd>
                </Reveal>
              ))}
            </dl>

            <Reveal className="flex flex-col items-start gap-i2">
              <BookingLink long />
              <p className="text-small text-ink-2">{invitation.note}</p>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
