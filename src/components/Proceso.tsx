'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    n: '01',
    title: 'Diagnóstico gratuito',
    text: 'Hablamos 20 minutos. Entiendo tu negocio, dónde pierdes tiempo o leads, y si un sistema AI de verdad te sirve.',
  },
  {
    n: '02',
    title: 'Diseño a medida',
    text: 'Diseño el flujo exacto para tu caso — nada de plantillas genéricas. WhatsApp, CRM, automatización o las tres.',
  },
  {
    n: '03',
    title: 'Implementación',
    text: 'Construyo, conecto y pruebo el sistema con datos reales de tu negocio antes de encenderlo.',
  },
  {
    n: '04',
    title: 'Acompañamiento',
    text: 'Ya en producción, ajusto y respondo — no te dejo solo con algo que no sabes operar.',
  },
]

export default function Proceso() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 px-8" style={{ background: 'var(--bg)' }}>
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
            Cómo trabajamos
          </div>
          <h2
            className="font-extrabold mb-4"
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              letterSpacing: '-0.03em',
            }}
          >
            Un proceso claro,<br />de la llamada al sistema activo
          </h2>
          <p className="text-base max-w-lg leading-relaxed" style={{ color: 'rgba(240,244,255,.6)' }}>
            4 semanas, sin letra pequeña.
          </p>
        </motion.div>

        <div className="relative mt-14">
          <div
            className="hidden md:block absolute top-6 left-0 right-0 h-px"
            style={{ background: 'var(--border)' }}
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                className="relative"
              >
                <div
                  className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center font-extrabold text-sm mb-5"
                  style={{
                    fontFamily: 'var(--font-syne)',
                    background: 'var(--bg)',
                    border: '1px solid var(--cyan)',
                    color: 'var(--cyan)',
                  }}
                >
                  {s.n}
                </div>
                <div
                  className="font-bold text-base mb-2"
                  style={{ fontFamily: 'var(--font-syne)' }}
                >
                  {s.title}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,.55)' }}>
                  {s.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
