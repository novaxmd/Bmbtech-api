import type { Metadata } from 'next';
import { DocsHomePage } from '@/app/docs/DocsHomePage';

export const metadata: Metadata = {
    title: 'Documentation - Bmbtech',
    description: 'Official Bmbtech documentation for runtime behavior, cookie handling, FAQ, and changelog.',
    keywords: ['Bmbtech docs', 'runtime documentation', 'social media downloader', 'FAQ'],
    alternates: {
        canonical: '/docs',
    },
    openGraph: {
        title: 'Bmbtech Documentation',
        description: 'Runtime docs aligned with the current BringAlive Bmbtech setup',
        type: 'website',
    },
};

export default function DocsPage() {
    return <DocsHomePage />;
}
