'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const WA = 'https://wa.me/573006800524'

const services = [
  {
    icon: '💬',
    name: 'WhatsApp AI',
    desc: 'Agente AI en WhatsApp que responde, califica y registra leads automáticamente.',
    price: '$500K',
    period: 'COP / único',
    includes: [
      'Respuestas automáticas',
      'Detección de intención',
      'Registro de leads',
      'Integración WhatsApp',
    ],
    featured: false,
  },
  {
    icon: '🤖',
    name: 'CRM AI Completo',
    desc: 'CRM inteligente con ARIA integrado, dashboards y automatización de seguimiento.',
    price: '$3M',
    period: 'COP / único',
    includes: [
      'Todo de WhatsApp AI',
      'CRM personalizado',
      'Dashboard en tiempo real',
      'Seguimiento automático',
      'Soporte 30 días',
    ],
    featured: true,
  },
  {
    icon: '⚙️',
    name: 'Automatizaciones',
    desc: 'Automatizo procesos manuales repetitivos: emails, tareas, notificaciones, reportes.',
    price: '$1M',
    period: 'COP / único',
    includes: [
      'Flujos n8n personalizados',
      'Integraciones a medida',
      'Notificaciones automáticas',
      'Documentación incluida',
    ],
    featured: false,
  },
]

export default function Servicios() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="servicios" className="py-24 px-8" style={{ background: 'var(--bg2)' }}>
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
            Servicios
          </div>
          <h2
            className="font-extrabold mb-4"
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              letterSpacing: '-0.03em',
            }}
          >
            ¿Qué puedo construir<br />para tu negocio?
          </h2>
          <p className="text-base max-w-lg leading-relaxed" style={{ color: 'rgba(240,244,255,.6)' }}>
            Sistemas reales, no promesas. Cada solución está construida con IA y automatizaciones
            que funcionan desde el día uno.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.12 }}
              className="relative rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col"
              style={{
                background: s.featured
                  ? 'linear-gradient(135deg, rgba(0,207,255,.07), var(--card))'
                  : 'var(--card)',
                border: s.featured ? '1px solid var(--cyan)' : '1px solid var(--border)',
              }}
            >
              {s.featured && (
                <div
                  className="absolute top-5 right-5 font-bold text-xs px-3 py-1 rounded-full"
                  style={{
                    fontFamily: 'var(--font-syne)',
                    background: 'var(--cyan)',
                    color: 'var(--bg)',
                  }}
                >
                  ⭐ Popular
                </div>
              )}

              <span className="text-3xl mb-5 block">{s.icon}</span>
              <div
                className="font-extrabold text-xl mb-2"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                {s.name}
              </div>
              <p
                className="text-sm leading-relaxed mb-6 flex-1"
                style={{ color: 'rgba(240,244,255,.55)' }}
              >
                {s.desc}
              </p>
              <div
                className="font-extrabold text-2xl mb-4"
                style={{ fontFamily: 'var(--font-syne)', color: 'var(--cyan)' }}
              >
                {s.price}{' '}
                <span
                  className="text-sm font-normal"
                  style={{ fontFamily: 'var(--font-dm)', color: 'var(--muted)' }}
                >
                  {s.period}
                </span>
              </div>

              <ul className="flex flex-col gap-2 mb-6">
                {s.includes.map((inc) => (
                  <li
                    key={inc}
                    className="text-sm flex items-center gap-2"
                    style={{ color: 'rgba(240,244,255,.6)' }}
                  >
                    <span style={{ color: 'var(--cyan)', fontWeight: 700 }}>✓</span> {inc}
                  </li>
                ))}
              </ul>

              <a
                href={`${WA}?text=Hola%20Jhon!%20Me%20interesa%20el%20servicio%20de%20${encodeURIComponent(s.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-85 mt-auto"
                style={
                  s.featured
                    ? {
                        fontFamily: 'var(--font-syne)',
                        background: 'var(--cyan)',
                        color: 'var(--bg)',
                      }
                    : {
                        fontFamily: 'var(--font-syne)',
                        border: '1px solid var(--border)',
                        color: 'var(--white)',
                      }
                }
              >
                Quiero este servicio →
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
