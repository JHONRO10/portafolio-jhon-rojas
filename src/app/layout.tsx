import ARIAChat from '@/components/ARIAChat'
import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  weight: ['300', '400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jhon Rojas — Sistemas AI & Coaching Ontológico',
  description:
    'Construyo agentes AI, CRMs inteligentes y automatizaciones en WhatsApp para que tu negocio cierre más ventas — y acompaño procesos de coaching ontológico. Bogotá, Colombia.',
  keywords: ['AI', 'automatización', 'WhatsApp bot', 'CRM', 'agente AI', 'coaching ontológico', 'Colombia', 'ARIA'],
  authors: [{ name: 'Jhon Rojas' }],
  openGraph: {
    title: 'Jhon Rojas — Sistemas AI & Coaching Ontológico',
    description:
      'Agentes AI, CRMs inteligentes, automatizaciones en WhatsApp y coaching ontológico. Bogotá, Colombia.',
    type: 'website',
    locale: 'es_CO',
    siteName: 'Jhon Rojas',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jhon Rojas — Sistemas AI & Coaching Ontológico',
    description: 'Agentes AI, CRMs inteligentes, automatizaciones en WhatsApp y coaching ontológico.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${syne.variable} ${dmSans.variable}`}>
      <body>
        {children}
        <ARIAChat />
      </body>
    </html>
  )
}
