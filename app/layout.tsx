import type { Metadata } from 'next';
import { Inter, Space_Grotesk, Manrope } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { site } from '@/lib/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk', display: 'swap' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: 'Evolune EdgeTech — Building What Comes Next',
    template: '%s — Evolune EdgeTech',
  },
  description:
    'Evolune EdgeTech architects autonomous agentic platforms and unified developer reliability engines. Creators of Evolune OS, Flasqo, and SpendVeto.',
  openGraph: {
    title: 'Evolune EdgeTech — Building What Comes Next',
    description:
      'Evolune EdgeTech architects autonomous agentic platforms and unified developer reliability engines. Creators of Evolune OS, Flasqo, and SpendVeto.',
    url: `https://${site.domain}`,
    siteName: 'Evolune EdgeTech',
    images: ['/assets/evolune/social/og-image.jpg'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evolune EdgeTech — Building What Comes Next',
    description:
      'Evolune EdgeTech architects autonomous agentic platforms and unified developer reliability engines.',
    images: ['/assets/evolune/social/og-image.jpg'],
  },
  icons: {
    icon: '/assets/evolune/brand/favicon.png',
    apple: '/assets/evolune/brand/logo-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.legalName,
    url: `https://${site.domain}`,
    logo: `https://${site.domain}/assets/evolune/brand/logo-icon.png`,
    foundingDate: '2025-02',
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bengaluru',
      addressCountry: 'IN',
    },
    sameAs: Object.values(site.socials),
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
