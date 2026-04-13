import type { Metadata } from 'next';
import { ApiDocsPage } from '@/app/docs/api/ApiDocsPage';

export const metadata: Metadata = {
  title: 'API - Bmbtech Docs',
  description: 'Complete Bmbtech API endpoint and error handling reference based on current backend implementation.',
  keywords: ['Bmbtech API', 'endpoint reference', 'error codes', 'api v1 extract proxy merge'],
  alternates: {
    canonical: '/docs/api',
  },
  openGraph: {
    title: 'API Reference - Bmbtech',
    description: 'Endpoints, categories, and error handling guide for Bmbtech API.',
  },
};

export default function Page() {
  return <ApiDocsPage />;
}
