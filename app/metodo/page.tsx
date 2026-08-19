import type { Metadata } from 'next';
import { Reveal } from '@/components/reveal';
import { BookingLink } from '@/components/booking-link';
import { Section, Eyebrow, SectionTitle, PageHeader, Prose } from '@/components/section';
import { metodoPage } from '@/content/metodo';
import { method, nights } from '@/content/home';

export const metadata: Metadata = {
  title: 'El método',
  description: metodoPage.lead,
};

export default function MetodoPage() {
  return (
    <>
      <PageHeader title={metodoPage.title} lead={metodoPage.lead} />

      <Section tone="band" labelledBy="que-es-rtt">
        <div className="flex flex-col gap-i2">
          <Eyebrow>Rapid Transformational Therapy</Eyebrow>
          <SectionTitle id="que-es-rtt" lines={metodoPage.rtt.title} />
          <Prose paragraphs={metodoPage.rtt.body} className="font-light" />
        </div>

        <div className="mt-block flex max-w-measure flex-col gap-i1 border-t border-rule pt-i2">
          <Eyebrow quiet>{metodoPage.rtt.formal.label}</Eyebrow>
          <p className="type-display text-quote italic text-ink-2">
            {metodoPage.rtt.formal.text}
          </p>
        </div>
      </Section>

      <Section labelledBy="las-cinco">
        <div className="flex flex-col gap-i2">
          <Eyebrow>{method.eyebrow}</Eyebrow>
          <SectionTitle id="las-cinco" lines={method.title} />
          <p className="max-w-measure text-body font-light text-ink-2">{method.intro}</p>
        </div>

        <ol className="mt-block flex flex-col border-t border-rule">
          {method.steps.map((step, index) => (
            <Reveal
              as="li"
              key={step.title}
              delay={index * 80}
              className="grid gap-i1 border-b border-rule py-i2 md:grid-cols-[4rem_14rem_1fr] md:items-baseline md:gap-i2"
            >
              <span className="type-display text-body text-accent-ink">{step.numeral}</span>
              <h3 className="type-display text-quote">{step.title}</h3>
              <p className="max-w-measure text-body font-light text-ink-2">{step.body}</p>
            </Reveal>
          ))}
        </ol>

        <p className="mt-i2 max-w-measure text-body font-light text-ink-2">
          {metodoPage.sequence.follow}
        </p>
      </Section>

      <Section tone="deep" width="deep" labelledBy="los-21">
        <div className="grid items-center gap-[clamp(40px,7vw,110px)] md:grid-cols-[auto_1fr]">
          <p className="type-display text-numeral text-accent-warm">{nights.numeral}</p>
          <div className="flex max-w-[560px] flex-col gap-i2">
            <Eyebrow>{nights.eyebrow}</Eyebrow>
            <SectionTitle id="los-21" lines={nights.title} />
            <Prose paragraphs={nights.body} tone="deep" className="font-light" />
            <p className="text-lead text-deep-ink">{metodoPage.nightsNote}</p>
          </div>
        </div>
      </Section>

      <Section tone="band" labelledBy="que-se-integro">
        <div className="flex flex-col gap-i2">
          <Eyebrow>La integración</Eyebrow>
          <SectionTitle id="que-se-integro" lines={metodoPage.approach.title} />
          <Prose paragraphs={metodoPage.approach.body} className="font-light" />
        </div>

        <dl className="mt-block flex flex-col border-t border-rule">
          {metodoPage.approach.disciplines.map((d) => (
            <div
              key={d.name}
              className="flex flex-col gap-1 border-b border-rule py-i2 md:flex-row md:items-baseline md:gap-i2"
            >
              <dt className="text-body md:w-[22rem]">{d.name}</dt>
              <dd className="text-small text-ink-2">{d.role}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section labelledBy="diferencia">
        <div className="flex flex-col items-start gap-i2">
          <Eyebrow>La diferencia</Eyebrow>
          <SectionTitle id="diferencia" lines={metodoPage.difference.title} />
          <Prose paragraphs={metodoPage.difference.body} className="font-light" />
          <div className="mt-i2">
            <BookingLink long />
          </div>
        </div>
      </Section>
    </>
  );
}
