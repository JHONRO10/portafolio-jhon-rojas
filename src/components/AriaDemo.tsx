'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const messages = [
  { type: 'user', text: 'Hola, me interesa información sobre la certificación 👋' },
  { type: 'aria', text: '¡Hola! Con gusto te ayudo 😊 ¿Cuál es tu nombre?' },
  { type: 'user', text: 'Soy Carlos, soy coach independiente' },
  {
    type: 'aria',
    text: '¡Perfecto Carlos! Te voy a compartir la info completa. Mientras tanto, ¿ya tienes experiencia en coaching o estás empezando?',
    badge: true,
  },
]

const features = [
  {
    icon: '⚡',
    title: 'Respuesta instantánea 24/7',
    desc: 'ARIA responde en segundos, a cualquier hora, sin descanso.',
  },
  {
    icon: '🎯',
    title: 'Califica leads automáticamente',
    desc: 'Detecta quién está listo para comprar y lo marca como hot lead.',
  },
  {
    icon: '🗂️',
    title: 'Guarda todo en tu CRM',
    desc: 'Nombre, interés, etapa del proceso. Datos limpios y organizados.',
  },
  {
    icon: '📧',
    title: 'Follow-up automático',
    desc: 'Secuencias de seguimiento que convierten prospectos en clientes.',
  },
]

export default function AriaDemo() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 px-8 relative overflow-hidden" style={{ background: 'var(--bg)' }}>
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          width: 800, height: 800,
          background: 'radial-gradient(circle, rgba(0,207,255,.06) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-[1100px] mx-auto relative z-10">
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
            La solución
          </div>
          <h2
            className="font-extrabold mb-12"
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              letterSpacing: '-0.03em',
            }}
          >
            ARIA: tu agente AI<br />en WhatsApp
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Chat visual */}
          <motion.div
            className="rounded-2xl overflow-hidden"
            style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="flex items-center gap-2 px-6 py-4"
              style={{ background: 'var(--bg3)', borderBottom: '1px solid var(--border)' }}
            >
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#FF5F57' }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#FFBD2E' }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#28C840' }} />
              <span className="ml-2 text-xs" style={{ color: 'var(--muted)' }}>
                WhatsApp · ARIA en vivo
              </span>
            </div>

            <div className="p-6 flex flex-col gap-4">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.4 }}
                  className={`max-w-[78%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.type === 'user' ? 'self-end rounded-br-sm' : 'self-start rounded-bl-sm'
                  }`}
                  style={
                    msg.type === 'user'
                      ? {
                          background: 'rgba(255,92,43,.15)',
                          border: '1px solid rgba(255,92,43,.2)',
                        }
                      : {
                          background: 'rgba(0,207,255,.1)',
                          border: '1px solid rgba(0,207,255,.2)',
                        }
                  }
                >
                  {msg.type === 'aria' && (
                    <div
                      className="text-xs font-semibold mb-1"
                      style={{ color: 'var(--cyan)' }}
                    >
                      ARIA · AI
                    </div>
                  )}
                  {msg.text}
                  {msg.badge && (
                    <div
                      className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full mt-2 ml-1"
                      style={{
                        background: 'rgba(0,207,255,.1)',
                        border: '1px solid rgba(0,207,255,.2)',
                        color: 'var(--cyan)',
                      }}
                    >
                      🔥 Lead caliente detectado
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.ul
            className="flex flex-col gap-4 list-none"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {features.map((f, i) => (
              <motion.li
                key={f.title}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl transition-all duration-200"
                style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-lg"
                  style={{ background: 'rgba(0,207,255,.12)' }}
                >
                  {f.icon}
                </div>
                <div>
                  <div
                    className="font-bold text-sm mb-1"
                    style={{ fontFamily: 'var(--font-syne)' }}
                  >
                    {f.title}
                  </div>
                  <div className="text-xs leading-relaxed" style={{ color: 'rgba(240,244,255,.5)' }}>
                    {f.desc}
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>

        </div>
      </div>
    </section>
  )
}
