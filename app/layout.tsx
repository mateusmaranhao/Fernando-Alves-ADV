import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css'; // Global styles
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { CookieBanner } from '@/components/ui/CookieBanner';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Advogado em Indaiatuba | Fernando Alves Caetano',
  description: 'Fernando Alves Caetano oferece atendimento jurídico em Indaiatuba/SP, com atuação em Direito Civil, inventários e plantão. Entre em contato.',
  openGraph: {
    title: 'Advogado em Indaiatuba | Fernando Alves Caetano',
    description: 'Fernando Alves Caetano oferece atendimento jurídico em Indaiatuba/SP, com atuação em Direito Civil, inventários e plantão. Entre em contato.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Fernando Alves Caetano Advocacia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advogado em Indaiatuba | Fernando Alves Caetano',
    description: 'Fernando Alves Caetano oferece atendimento jurídico em Indaiatuba/SP, com atuação em Direito Civil, inventários e plantão. Entre em contato.',
  },
  metadataBase: new URL(process.env.APP_URL || 'https://fernandoalvescaetano.adv.br'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="bg-brand-offwhite text-brand-text font-sans antialiased min-h-[100dvh] flex flex-col selection:bg-brand-petroleum selection:text-brand-offwhite" suppressHydrationWarning>
        <Header />
        <main id="app-view" className="flex-grow focus:outline-none" tabIndex={-1} role="main">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
