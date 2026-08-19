import type { Metadata } from 'next';
import { MediaFrame } from '@/components/media-frame';
import { BookingLink } from '@/components/booking-link';
import { Section, Eyebrow, SectionTitle, PageHeader, Prose } from '@/components/section';
import { sobreMiPage } from '@/content/sobre-mi';
import { who } from '@/content/home';
import { media } from '@/content/media';

export const metadata: Metadata = {
  title: 'Quién acompaña',
  description: sobreMiPage.lead,
};

export default function SobreMiPage() {
  return (
    <>
      <PageHeader title={sobreMiPage.title} lead={sobreMiPage.lead} />

      <Section tone="band" labelledBy="de-donde-viene">
        <div className="grid items-start gap-[clamp(40px,6vw,96px)] lg:grid-cols-2">
          <div className="h-[clamp(420px,52vw,640px)] min-w-0">
            <MediaFrame item={media.portrait} priority />
          </div>
          <div className="flex flex-col gap-i2">
            <Eyebrow>El origen</Eyebrow>
            <SectionTitle id="de-donde-viene" lines={sobreMiPage.origin.title} />
            <Prose paragraphs={sobreMiPage.origin.body} className="font-light" />
          </div>
        </div>
      </Section>

      <Section labelledBy="por-que">
        <div className="flex flex-col gap-i2">
          <Eyebrow>El propósito</Eyebrow>
          <SectionTitle id="por-que" lines={sobreMiPage.purpose.title} />
          <Prose paragraphs={sobreMiPage.purpose.body} className="font-light" />
        </div>
      </Section>

      <Section tone="band" labelledBy="trayectoria">
        <div className="flex flex-col gap-i2">
          <Eyebrow>{sobreMiPage.path.years}</Eyebrow>
          <SectionTitle id="trayectoria" lines={sobreMiPage.path.title} />
          <Prose paragraphs={sobreMiPage.path.body} className="font-light" />
        </div>

        <dl className="mt-block flex flex-wrap gap-i3 border-t border-rule pt-i3">
          {who.stats.map((stat) => (
            <div key={stat.value} className="flex flex-col gap-1">
              <dt className="type-display text-stat">{stat.value}</dt>
              <dd className="text-small text-ink-2">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section labelledBy="como-trabajo">
        <div className="flex flex-col items-start gap-i2">
          <Eyebrow>La manera</Eyebrow>
          <SectionTitle id="como-trabajo" lines={sobreMiPage.presence.title} />
          <Prose paragraphs={sobreMiPage.presence.body} className="font-light" />
          <div className="mt-i2">
            <BookingLink long />
          </div>
        </div>
      </Section>
    </>
  );
}
