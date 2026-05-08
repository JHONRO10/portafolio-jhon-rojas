'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const WA =
  'https://wa.me/573006800524?text=Hola%20Jhon!%20Vi%20tu%20portafolio%20y%20quiero%20saber%20c%C3%B3mo%20la%20IA%20puede%20ayudar%20a%20mi%20negocio'

export default function CtaFinal() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      className="py-32 px-8 text-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, var(--bg2) 0%, #0A1525 100%)' }}
    >
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(0,207,255,.1) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: 'var(--cyan)' }}
          >
            ¿Listo para automatizar?
          </div>

          <h2
            className="font-extrabold max-w-2xl mx-auto mb-5"
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              letterSpacing: '-0.03em',
            }}
          >
            Tu negocio merece trabajar<br />con Inteligencia Artificial
          </h2>

          <p className="max-w-lg mx-auto mb-10 text-lg" style={{ color: 'rgba(240,244,255,.6)' }}>
            Agenda una llamada de 20 minutos. Sin compromiso. Te muestro exactamente cómo ARIA
            puede funcionar para tu negocio.
          </p>

          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-bold text-lg px-9 py-4 rounded-xl text-white transition-all duration-300 hover:-translate-y-1 hover:opacity-90"
            style={{
              fontFamily: 'var(--font-syne)',
              background: '#25D366',
              boxShadow: '0 4px 30px rgba(37,211,102,.3)',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Escríbeme por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
