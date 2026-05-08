'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const timeline = [
  {
    dot: 'orange',
    year: 'Antes',
    text: 'Emprendedor en fragancias y coaching ontológico en Bogotá',
  },
  {
    dot: 'cyan',
    year: 'Hace 2 meses',
    text: 'Empecé a construir sistemas AI desde cero con $150K COP',
  },
  {
    dot: 'cyan',
    year: 'Hoy',
    text: 'CRM + ARIA en producción. Primer portafolio. Primeros clientes.',
  },
]

export default function Historia() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 px-8" style={{ background: 'var(--bg)' }}>
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Texto + timeline */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: 'var(--cyan)' }}
            >
              Quién soy
            </div>
            <h2
              className="font-extrabold mb-6"
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                letterSpacing: '-0.03em',
              }}
            >
              De vender perfumes<br />a construir AI
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'rgba(240,244,255,.65)' }}>
              Soy Jhon Rojas, emprendedor colombiano. Hace 2 meses decidí aprender a construir
              sistemas con Inteligencia Artificial desde cero, con un computador básico y menos de
              $150.000 COP de inversión.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(240,244,255,.65)' }}>
              Hoy tengo un CRM funcional con un agente AI conectado a WhatsApp, corriendo en
              producción. No espero ser perfecto. Construyo, vendo y mejoro.
            </p>

            <ul className="flex flex-col gap-6 list-none">
              {timeline.map((t, i) => (
                <motion.li
                  key={t.year}
                  className="flex gap-4 items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                >
                  <div
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1.5"
                    style={{
                      background: t.dot === 'cyan' ? 'var(--cyan)' : 'var(--orange)',
                      boxShadow:
                        t.dot === 'cyan'
                          ? '0 0 10px rgba(0,207,255,.5)'
                          : '0 0 10px rgba(255,92,43,.4)',
                    }}
                  />
                  <div>
                    <div
                      className="text-xs mb-1"
                      style={{ fontFamily: 'var(--font-syne)', color: 'var(--muted)' }}
                    >
                      {t.year}
                    </div>
                    <div className="text-base">{t.text}</div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Grid de fotos */}
          <motion.div
            className="grid grid-cols-2 gap-4 mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="row-span-2 relative rounded-2xl overflow-hidden"
              style={{ border: '1px solid var(--border)', minHeight: 460 }}
            >
              <Image
                src="/foto3.jpg"
                alt="Jhon Rojas — Coach Ontológico ADH"
                fill
                className="object-cover object-top"
              />
            </div>
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ border: '1px solid var(--border)', height: 220 }}
            >
              <Image
                src="/foto1.jpg"
                alt="Jhon Rojas — Evento ADH"
                fill
                className="object-cover object-top"
              />
            </div>
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ border: '1px solid var(--border)', height: 220 }}
            >
              <Image
                src="/foto2.jpg"
                alt="Jhon Rojas"
                fill
                className="object-cover object-top"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
