import type { Metadata } from 'next';
import { Reveal } from '@/components/reveal';
import { BookingLink } from '@/components/booking-link';
import { Section, Eyebrow, SectionTitle, PageHeader, Prose } from '@/components/section';
import { escuelasPage } from '@/content/escuelas';

export const metadata: Metadata = {
  title: 'Escuelas',
  description: escuelasPage.lead,
};

export default function EscuelasPage() {
  return (
    <>
      <PageHeader title={escuelasPage.title} lead={escuelasPage.lead} />

      <Section tone="band" labelledBy="por-que">
        <div className="flex flex-col gap-i2">
          <Eyebrow>{escuelasPage.why.eyebrow}</Eyebrow>
          <SectionTitle id="por-que" lines={escuelasPage.why.title} />
          <Prose paragraphs={escuelasPage.why.body} className="font-light" />
        </div>
      </Section>

      <Section labelledBy="protocolo">
        <div className="grid gap-[clamp(40px,6vw,96px)] lg:grid-cols-[minmax(0,24rem)_1fr]">
          <div className="flex flex-col gap-i2 lg:sticky lg:top-[calc(var(--spacing-nav)+3rem)] lg:self-start">
            <Eyebrow>{escuelasPage.protocol.eyebrow}</Eyebrow>
            <SectionTitle id="protocolo" lines={escuelasPage.protocol.title} />
            <p className="text-body font-light text-ink-2">{escuelasPage.protocol.intro}</p>
          </div>

          <div className="flex flex-col gap-i3">
            <ol className="flex flex-col border-t border-rule">
              {escuelasPage.protocol.weeks.map((week, index) => (
                <Reveal
                  as="li"
                  key={week.label}
                  delay={index * 80}
                  className="grid gap-i1 border-b border-rule py-i3 sm:grid-cols-[5rem_1fr] sm:items-baseline sm:gap-i2"
                >
                  <span className="type-display text-[clamp(38px,4.6vw,60px)] leading-[0.9] text-accent-ink">
                    {week.numeral}
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="type-display text-quote">{week.label}</h3>
                    {/* El contenido de cada semana no existe todavía. En vez
                        de rellenarlo con material clínico inventado, el
                        hueco dice qué va dentro — la misma técnica que los
                        medios pendientes. */}
                    <p className="max-w-measure text-small text-ink-2">
                      <span className="type-utility mr-i1 text-micro tracking-[2.4px] text-ink uppercase">
                        En preparación
                      </span>
                      {week.pending}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>

            <p className="max-w-measure text-body font-light text-ink-2">
              {escuelasPage.protocol.pendingNote}
            </p>
          </div>
        </div>
      </Section>

      <Section tone="band" labelledBy="platicas">
        <div className="flex flex-col gap-i2">
          <Eyebrow>{escuelasPage.talks.eyebrow}</Eyebrow>
          <SectionTitle id="platicas" lines={escuelasPage.talks.title} />
          <Prose paragraphs={escuelasPage.talks.body} className="font-light" />
        </div>
      </Section>

      <Section tone="deep" width="invite" labelledBy="para-tu-escuela">
        <div className="flex flex-col items-start gap-i2">
          <Eyebrow>{escuelasPage.invitation.eyebrow}</Eyebrow>
          <SectionTitle id="para-tu-escuela" lines={escuelasPage.invitation.title} />
          <Prose paragraphs={[escuelasPage.invitation.body]} tone="deep" className="font-light" />
          <div className="mt-i2">
            <BookingLink />
          </div>
        </div>
      </Section>
    </>
  );
}
