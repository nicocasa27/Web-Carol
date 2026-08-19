import type { Metadata } from 'next';
import { BookingLink } from '@/components/booking-link';
import { Section, Eyebrow, SectionTitle, PageHeader, Prose } from '@/components/section';
import { sesionesPage } from '@/content/sesiones';

export const metadata: Metadata = {
  title: 'Las sesiones',
  description: sesionesPage.lead,
};

export default function SesionesPage() {
  return (
    <>
      <PageHeader title={sesionesPage.title} lead={sesionesPage.lead} />

      <Section tone="band" labelledBy="la-forma">
        <div className="flex flex-col gap-i2">
          <Eyebrow>El recorrido</Eyebrow>
          <SectionTitle id="la-forma" lines={sesionesPage.shape.title} />
        </div>

        <ol className="mt-block flex flex-col border-t border-rule">
          {sesionesPage.shape.steps.map((step) => (
            <li
              key={step.label}
              className="grid gap-i1 border-b border-rule py-i2 md:grid-cols-[16rem_1fr] md:gap-i2"
            >
              <h3 className="type-display text-quote">{step.label}</h3>
              <p className="max-w-measure text-body font-light text-ink-2">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section labelledBy="practico">
        <div className="flex flex-col gap-i2">
          <Eyebrow>Detalles prácticos</Eyebrow>
          <SectionTitle id="practico" lines={sesionesPage.modality.title} />
        </div>

        <dl className="mt-block flex flex-col border-t border-rule">
          {sesionesPage.modality.items.map((item) => (
            <div
              key={item.term}
              className="flex flex-col gap-1 border-b border-rule py-i2 md:flex-row md:gap-i2"
            >
              <dt className="text-micro tracking-[2.4px] text-ink-2 uppercase md:w-[12rem]">
                {item.term}
              </dt>
              <dd className="max-w-measure text-body">{item.description}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section tone="band" labelledBy="evidencia">
        <div className="flex flex-col gap-i2">
          <Eyebrow>La evidencia</Eyebrow>
          <SectionTitle id="evidencia" lines={sesionesPage.evidence.title} />
          <Prose paragraphs={sesionesPage.evidence.body} className="font-light" />
        </div>

        <div className="mt-block grid gap-i2 md:grid-cols-2">
          {sesionesPage.evidence.quotes.map((quote) => (
            <blockquote
              key={quote}
              className="flex flex-col gap-i1 rounded-card bg-ground p-i3"
            >
              <p className="type-display text-quote italic text-ink-2">«{quote}»</p>
            </blockquote>
          ))}
        </div>

        <p className="mt-block max-w-measure text-lead">{sesionesPage.evidence.closing}</p>
      </Section>

      <Section labelledBy="no-es-para">
        <div className="flex flex-col items-start gap-i2">
          <Eyebrow>Con honestidad</Eyebrow>
          <SectionTitle id="no-es-para" lines={sesionesPage.notFor.title} />
          <Prose paragraphs={sesionesPage.notFor.body} className="font-light" />
          <div className="mt-i2">
            <BookingLink long />
          </div>
        </div>
      </Section>
    </>
  );
}
