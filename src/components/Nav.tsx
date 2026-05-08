'use client'

const WA = 'https://wa.me/573006800524?text=Hola%20Jhon!%20Quiero%20saber%20m%C3%A1s%20sobre%20los%20sistemas%20AI%20para%20mi%20negocio'

export default function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
      style={{
        background: 'rgba(6,9,15,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <a
        href="#"
        className="flex items-center gap-3 no-underline"
        style={{ color: 'var(--white)', fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.02em' }}
      >
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-extrabold text-white flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, var(--cyan), #0077AA)' }}
        >
          JR
        </div>
        Jhon Rojas
      </a>

      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold px-5 py-2 rounded-lg text-sm transition-all duration-200 hover:opacity-80 hover:-translate-y-px"
        style={{ background: 'var(--cyan)', color: 'var(--bg)' }}
      >
        Agenda una llamada →
      </a>
    </nav>
  )
}
