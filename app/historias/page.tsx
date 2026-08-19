import type { Metadata } from 'next';
import { BookingLink } from '@/components/booking-link';
import { Section, Eyebrow, SectionTitle, PageHeader } from '@/components/section';
import { historiasPage } from '@/content/historias';

export const metadata: Metadata = {
  title: 'Historias de transformación',
  description: historiasPage.lead,
};

export default function HistoriasPage() {
  return (
    <>
      <PageHeader title={historiasPage.title} lead={historiasPage.lead} />

      <Section tone="band" width="narrow" labelledBy="caso">
        <article className="flex flex-col gap-block">
          <div className="flex flex-col items-center gap-i2 text-center">
            <Eyebrow>Un caso</Eyebrow>
            <SectionTitle id="caso" lines={historiasPage.story.title} />
          </div>

          <dl className="flex flex-col gap-i2">
            {historiasPage.story.blocks.map((block) => (
              <div
                key={block.label}
                className="flex flex-col gap-i1 rounded-card bg-ground p-i3"
              >
                <dt className="text-micro tracking-[2.4px] text-ink-2 uppercase">
                  {block.label}
                </dt>
                <dd className="text-card font-light text-ink-2">{block.body}</dd>
              </div>
            ))}
          </dl>

          <p className="type-display text-center text-[clamp(22px,2.6vw,30px)] leading-[1.4] italic text-ink-2">
            {historiasPage.story.closing}
          </p>
        </article>
      </Section>

      <Section width="narrow">
        <div className="flex flex-col items-center gap-i3 text-center">
          <p className="max-w-measure text-small text-ink-2">{historiasPage.note}</p>
          <BookingLink long />
        </div>
      </Section>
    </>
  );
}
