import { Fragment } from 'react';
import Link from 'next/link';
import { Opening } from '@/components/opening';
import { Reveal } from '@/components/reveal';
import { MediaFrame } from '@/components/media-frame';
import { BookingLink } from '@/components/booking-link';
import { CredentialStrip } from '@/components/credential-strip';
import {
  Section,
  Eyebrow,
  SectionTitle,
  Prose,
  LineBreak,
} from '@/components/section';
import { media } from '@/content/media';
import {
  recognition,
  idea,
  method,
  nights,
  who,
  stories,
  doors,
  invitation,
} from '@/content/home';

/**
 * La portada.
 *
 * Ocho bloques. El visitante se reconoce en la frase, entiende la idea,
 * ve el método y sólo entonces conoce a quien acompaña — el orden de la
 * primera versión, que Carol pidió recuperar.
 *
 * Tras sus referencias (Maren & Co., Marisa Peer) la página se aligeró: el
 * método y los 21 días comparten una sola banda, la historia es una cita,
 * y las dos maneras de trabajar con ella van una junto a otra. El detalle
 * vive en las páginas internas.
 *
 * Fondos: marfil · hueso · marfil · petróleo · hueso · marfil · hueso ·
 * marfil. Ningún fondo se repite seguido y hay una sola banda oscura.
 *
 * Las rejillas se apilan por debajo de sus puntos de quiebre: cinco
 * columnas de setenta píxeles no se leen en un teléfono.
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
          <h2 id="reconocimiento" className="type-display text-recognition max-sm:text-balance">
            {recognition.quote.map((line, index) => (
              <Fragment key={line}>
                {index > 0 ? <LineBreak /> : null}
                {line}
              </Fragment>
            ))}
          </h2>
          {/* Cuatro frases, no un bloque: cada una respira sola. Y un
              punto más grandes que el cuerpo normal, porque en la captura
              de Carol se veían diminutas bajo un titular de 44 px. */}
          <div className="flex max-w-[30em] flex-col gap-i2 text-lead font-light text-ink-2 text-pretty">
            {recognition.body.map((line) => (
              <p key={line.slice(0, 24)}>{line}</p>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* La idea */}
      <Section labelledBy="la-idea">
        <div className="grid items-center gap-[clamp(40px,6vw,96px)] lg:grid-cols-2">
          <Reveal className="flex flex-col gap-i2">
            <Eyebrow>{idea.eyebrow}</Eyebrow>
            <SectionTitle id="la-idea" lines={idea.title} />
            <Prose paragraphs={idea.body} className="font-light" />
            <p className="type-display max-w-measure text-quote text-ink-2">
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

      {/* El ritmo del proceso — el método y los 21 días en una sola banda
          oscura, contados como un ritmo (idea de la referencia Maren & Co.
          que señaló Carol). Es la única sección en petróleo de la portada. */}
      <Section tone="deep" id="metodo" labelledBy="el-metodo">
        <div className="flex flex-col gap-major">
          <Reveal className="flex max-w-[640px] flex-col gap-i2">
            <Eyebrow>{method.eyebrow}</Eyebrow>
            <SectionTitle id="el-metodo" lines={method.title} />
            <p className="text-body font-light text-deep-ink-2">{method.intro}</p>
            {/* La línea entre guiones que escribió Carol. Va en la display
                y en el claro fuerte: es la frase que resume para qué
                sirve todo lo anterior, no una nota al pie. */}
            <p className="type-display mt-i1 text-quote text-deep-ink text-balance">
              — {method.purpose} —
            </p>
          </Reveal>

          <ol className="grid border-t border-deep-rule sm:grid-cols-2 lg:grid-cols-5">
            {method.steps.map((step, index) => (
              <Reveal
                as="li"
                key={step.title}
                delay={index * 80}
                className="flex flex-col gap-i1 border-b border-deep-rule py-i3 last:border-b-0 lg:border-r lg:border-b-0 lg:px-i2 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
              >
                <span className="type-display text-[clamp(30px,3.2vw,40px)] leading-none text-accent-warm">
                  {step.numeral}
                </span>
                <h3 className="type-display text-quote text-deep-ink">{step.title}</h3>
                <p className="text-small font-light text-deep-ink-2">{step.body}</p>
              </Reveal>
            ))}
          </ol>

          {/* Los 21 días cierran el ritmo: son lo que pasa después de la
              sesión, y lo que más distingue el proceso. */}
          <Reveal className="grid items-center gap-i3 border-t border-deep-rule pt-i3 md:grid-cols-[auto_1fr] md:gap-major">
            <p className="type-display text-[clamp(88px,11vw,140px)] leading-[0.85] text-accent-warm">
              {nights.numeral}
            </p>
            <div className="flex max-w-measure flex-col gap-i1">
              <h3 className="type-display text-title-sm text-deep-ink text-balance">
                {nights.title.join(' ')}
              </h3>
              <p className="text-body font-light text-deep-ink-2">{nights.short}</p>
              <p className="mt-i1">
                <Link href="/metodo" className="link-read text-small">
                  El método en detalle
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Quién acompaña — la pregunta de veinte años, a quién acompaña, su
          trayectoria breve y sus credenciales. Nada más: Carol prefiere la
          versión con menos información. */}
      <Section tone="band" id="quien" labelledBy="quien-acompana">
        <div className="flex flex-col gap-major">
          <Reveal className="flex max-w-[940px] flex-col gap-i2">
            <Eyebrow>{who.eyebrow}</Eyebrow>
            <SectionTitle id="quien-acompana" lines={who.question} className="text-balance" />
            <p className="max-w-measure text-lead font-light text-ink-2 text-pretty">{who.lead}</p>
          </Reveal>

          <div className="grid items-center gap-[clamp(40px,6vw,96px)] lg:grid-cols-2">
            <Reveal className="h-[clamp(420px,52vw,640px)] min-w-0">
              <MediaFrame item={media.portrait} sizes="(min-width: 1024px) 580px, 100vw" />
            </Reveal>

            <Reveal className="flex flex-col gap-i3">
              <Prose paragraphs={who.body} className="font-light" />

              <dl className="flex flex-wrap gap-i3 border-t border-rule pt-i2">
                {who.stats.map((stat, index) => (
                  <div
                    key={stat.value}
                    className={`flex flex-col gap-1 ${index > 0 ? 'border-l border-rule pl-i3' : ''}`}
                  >
                    <dt className="type-display text-stat">{stat.value}</dt>
                    <dd className="type-utility text-small text-ink-2">{stat.label}</dd>
                  </div>
                ))}
              </dl>

              <p>
                <Link href="/sobre-mi" className="link-read text-small">
                  La historia completa
                </Link>
              </p>
            </Reveal>
          </div>

          <CredentialStrip />
        </div>
      </Section>

      {/* Una historia — una cita grande y una línea de contexto, como el
          testimonio único de Maren & Co. El relato completo vive en
          /historias. */}
      <Section width="narrow" id="historias" labelledBy="historias-titulo">
        <Reveal className="flex flex-col items-center gap-i3 text-center">
          <Eyebrow>{stories.eyebrow}</Eyebrow>
          <SectionTitle id="historias-titulo" lines={stories.title} />
          <p className="max-w-measure text-body font-light text-ink-2 text-pretty">{stories.intro}</p>
          <p className="type-display mt-i1 max-w-[22ch] text-[clamp(26px,3.4vw,40px)] leading-[1.28] text-ink max-sm:text-balance">
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
      </Section>

      {/* Las puertas — las maneras de trabajar con Carol, una junto a otra
          (arquitectura del sitio de Marisa Peer, sin sus tácticas de
          venta). Cuando exista formación para terapeutas, será la tercera. */}
      <Section tone="band" labelledBy="puertas">
        <div className="flex flex-col gap-major">
          <Reveal className="flex flex-col items-center gap-i2 text-center">
            <Eyebrow>{doors.eyebrow}</Eyebrow>
            <SectionTitle id="puertas" lines={doors.title} />
          </Reveal>

          <ul className="grid gap-i2 md:grid-cols-2">
            {doors.items.map((door, index) => (
              <Reveal
                as="li"
                key={door.label}
                delay={index * 80}
                className="flex flex-col gap-i2 rounded-card bg-ground p-i3"
              >
                <p className="eyebrow">{door.label}</p>
                <h3 className="type-display text-quote">{door.title}</h3>
                <p className="flex-1 text-body font-light text-ink-2">{door.body}</p>
                <p>
                  <Link href={door.href} className="link-read text-small">
                    {door.linkLabel}
                  </Link>
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* La invitación — las tres dudas siguen abiertas a propósito: el brief
          pide responder con claridad, y un acordeón esconde justo la
          respuesta que la persona buscaba. Carol las validó en la junta. */}
      <Section width="invite" labelledBy="la-invitacion">
        <div className="grid gap-[clamp(40px,6vw,96px)] lg:grid-cols-[minmax(0,20rem)_1fr]">
          <Reveal className="flex flex-col gap-i2 lg:sticky lg:top-[calc(var(--spacing-nav)+3rem)] lg:self-start">
            <Eyebrow>{invitation.eyebrow}</Eyebrow>
            <SectionTitle id="la-invitacion" lines={invitation.title} />
          </Reveal>

          <div className="flex flex-col gap-major">
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

            {/* Centrado, como pidió Carol: es el final del recorrido y no
                compite ya con ninguna columna. */}
            <Reveal className="flex flex-col items-center gap-i2 text-center">
              <BookingLink />
              <div className="flex max-w-[34em] flex-col gap-1">
                <p className="text-small text-ink-2">{invitation.note}</p>
                <p className="text-small text-ink-2">{invitation.noteSecondary}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
