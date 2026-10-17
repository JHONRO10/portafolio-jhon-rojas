'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const WA = 'https://wa.me/573006800524?text=Hola%20Jhon%2C%20quiero%20agendar%20una%20hora'

const LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/quienes-somos', label: 'Quién soy' },
  { href: '/soluciones', label: 'Soluciones' },
  { href: '/metodologia', label: 'Metodología' },
]

export default function Nav() {
  const pathname = usePathname()
  return (
    <nav>
      <Link href="/" className="logo"><b>JHON</b> ROJAS</Link>
      <div className="menu">
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} aria-current={pathname === l.href}>
            {l.label}
          </Link>
        ))}
      </div>
      <a className="btn" href={WA} target="_blank" rel="noopener noreferrer">Hablemos</a>
    </nav>
  )
}
