import type { Metadata } from 'next'
import { Playfair_Display, Lora, Inter } from 'next/font/google'
import './globals.css'
import { SITE_CONFIG } from '@/lib/constants'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.title,
    template: `%s | Jady Moraes`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'leitura crítica',
    'leitura crítica literária',
    'parecer editorial',
    'feedback manuscrito',
    'análise literária',
    'revisão literária',
    'Jady Moraes',
    'crítica literária',
    'manuscrito',
    'autores brasileiros',
  ],
  authors: [{ name: 'Jady Moraes', url: SITE_CONFIG.url }],
  creator: 'Jady Moraes',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: 'Jady Moraes — Leitura Crítica Literária',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Jady Moraes — Leitura Crítica Literária',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jady Moraes',
  jobTitle: 'Leitora Crítica Literária',
  url: SITE_CONFIG.url,
  email: SITE_CONFIG.email,
  sameAs: [SITE_CONFIG.instagram],
  description: SITE_CONFIG.description,
  knowsAbout: [
    'Leitura crítica',
    'Análise literária',
    'Parecer editorial',
    'Narrativa',
    'Desenvolvimento de personagens',
  ],
  offers: {
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: 'Leitura Crítica Literária',
      description:
        'Análise profissional de manuscritos com feedback estruturado sobre narrativa, personagens, ritmo e estrutura.',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${lora.variable} ${inter.variable} font-inter bg-cream-100 text-charcoal antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
