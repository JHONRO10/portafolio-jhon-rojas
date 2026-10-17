import type { Metadata } from 'next'
import { Anton, Caveat, Montserrat } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
  display: 'swap',
})

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-caveat',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jhon Rojas — Coach Ontológico',
  description:
    'Coach Ontológico. Emprendedor. Acompaño a personas que saben lo que tienen que hacer y no han podido solas. Bogotá, Colombia.',
  keywords: ['coaching ontológico', 'coach', 'Bogotá', 'Colombia', 'ADH Coaching', 'transformación personal'],
  authors: [{ name: 'Jhon Rojas' }],
  openGraph: {
    title: 'Jhon Rojas — Coach Ontológico',
    description:
      'Coach Ontológico certificado. Conversaciones que sacan a las personas del lugar donde se creó el problema.',
    type: 'website',
    locale: 'es_CO',
    siteName: 'Jhon Rojas',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jhon Rojas — Coach Ontológico',
    description: 'Coach Ontológico certificado. Bogotá, Colombia.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${anton.variable} ${caveat.variable} ${montserrat.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
