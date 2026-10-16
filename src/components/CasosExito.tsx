'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const cases = [
  {
    tag: 'ADH Coaching Academy',
    sub: 'MINERVA — Agente AI de ventas',
    icon: '🎓',
    retoLabel: 'El reto',
    reto: 'Calificar y atender decenas de leads diarios por WhatsApp sin perder ninguno.',
    solLabel: 'La solución',
    sol: 'Agente AI que responde, califica y escala leads al cerrador automáticamente.',
    stats: [
      ['100', 'leads/mes'],
      ['24/7', 'activo'],
      ['0', 'perdidos'],
    ],
  },
  {
    tag: 'Sublime Store',
    sub: 'FIDELIO — Atención al cliente',
    icon: '🛍️',
    retoLabel: 'El reto',
    reto: 'Alto volumen de consultas sobre productos con equipo pequeño.',
    solLabel: 'La solución',
    sol: 'Agente AI en WhatsApp que responde preguntas, verifica stock y cierra ventas.',
    stats: [['24/7', 'atención inmediata sin contratar más personal']],
  },
]

export default function CasosExito() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="casos" className="py-24 px-8" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: 'var(--cyan)' }}
          >
            Demos · Resultados reales
          </div>
          <h2
            className="font-extrabold mb-4"
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              letterSpacing: '-0.03em',
            }}
          >
            Casos de éxito
          </h2>
          <p className="text-base max-w-lg leading-relaxed" style={{ color: 'rgba(240,244,255,.6)' }}>
            Tecnología real, resultados medibles, clientes satisfechos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {cases.map((c, i) => (
            <motion.div
              key={c.tag}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.12 }}
              className="rounded-2xl p-8"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <div className="flex items-center gap-3 mb-7">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: 'rgba(0,207,255,.12)', border: '1px solid var(--border)' }}
                >
                  {c.icon}
                </div>
                <div>
                  <p className="font-bold" style={{ fontFamily: 'var(--font-syne)' }}>{c.tag}</p>
                  <p className="text-xs" style={{ color: 'var(--muted)' }}>{c.sub}</p>
                </div>
              </div>

              <div className="space-y-5 text-sm mb-8">
                <div className="flex gap-3">
                  <span style={{ color: 'var(--cyan)' }} className="mt-0.5 flex-shrink-0">▸</span>
                  <div>
                    <p className="mb-1 uppercase text-xs tracking-wider" style={{ color: 'var(--muted)' }}>
                      {c.retoLabel}
                    </p>
                    <p style={{ color: 'rgba(240,244,255,.75)' }}>{c.reto}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span style={{ color: 'var(--cyan)' }} className="mt-0.5 flex-shrink-0">▸</span>
                  <div>
                    <p className="mb-1 uppercase text-xs tracking-wider" style={{ color: 'var(--muted)' }}>
                      {c.solLabel}
                    </p>
                    <p style={{ color: 'rgba(240,244,255,.75)' }}>{c.sol}</p>
                  </div>
                </div>
              </div>

              <div
                className={`grid gap-4 pt-6 ${c.stats.length === 3 ? 'grid-cols-3' : 'grid-cols-1'}`}
                style={{ borderTop: '1px solid var(--border)' }}
              >
                {c.stats.map(([v, l]) => (
                  <div key={l} className={c.stats.length === 3 ? 'text-center' : ''}>
                    <p className="text-2xl font-extrabold" style={{ fontFamily: 'var(--font-syne)', color: 'var(--cyan)' }}>
                      {v}
                    </p>
                    <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>{l}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Placeholder para el próximo caso — Jhon lo completa cuando confirme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 rounded-2xl p-6 text-center text-sm"
          style={{ border: '1px dashed var(--border)', color: 'var(--muted)' }}
        >
          + Próximamente: capturas y resultados de Nivel Up
        </motion.div>
      </div>
    </section>
  )
}
