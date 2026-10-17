import Link from 'next/link'

const WA = 'https://wa.me/573006800524?text=Hola%20Jhon%2C%20quiero%20agendar%20una%20hora'

export default function Footer() {
  return (
    <footer>
      <div className="fin">
        <div>
          <h2 className="disp" style={{ color: 'var(--crema)', maxWidth: '16ch' }}>
            ¿Listo para tener la conversación que llevas meses evitando?
          </h2>
          <a className="btn" href={WA} target="_blank" rel="noopener noreferrer" style={{ marginTop: 26, display: 'inline-block' }}>
            Escríbeme por WhatsApp
          </a>
        </div>
        <div className="fnav">
          <Link href="/">Inicio</Link>
          <Link href="/quienes-somos">Quién soy</Link>
          <Link href="/soluciones">Soluciones</Link>
          <Link href="/metodologia">Metodología</Link>
          <Link href="/agenda">Agenda</Link>
          <a href="https://adhcoaching.com/" target="_blank" rel="noopener noreferrer">ADH Coaching</a>
        </div>
      </div>
      <div className="marca">JHON ROJAS</div>
      <div className="legal">© 2026 Jhon Rojas · Coach Ontológico · Bogotá, Colombia</div>
    </footer>
  )
}
