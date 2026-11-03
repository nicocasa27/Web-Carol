import type { Metadata } from 'next';
import { LegalDocument } from '@/components/legal-document';
import { legalDocs } from '@/content/legal';

const doc = legalDocs.consentimiento;

export const metadata: Metadata = {
  title: doc.title,
  description: doc.lead,
  robots: { index: false, follow: true },
};

export default function ConsentimientoPage() {
  return <LegalDocument doc={doc} />;
}
