'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const problems = [
  {
    emoji: '📵',
    title: 'Leads que se pierden',
    text: 'Los clientes escriben a las 10pm. Nadie responde. Al día siguiente ya compraron en otro lado.',
  },
  {
    emoji: '🔁',
    title: 'Respuestas lentas',
    text: 'Tu equipo responde el mismo mensaje 40 veces al día. Eso es tiempo que debería estar en ventas.',
  },
  {
    emoji: '📉',
    title: 'Seguimiento deficiente',
    text: 'Un prospecto interesado queda en el limbo porque nadie tiene tiempo de hacer follow-up.',
  },
  {
    emoji: '🗂️',
    title: 'Desorden comercial',
    text: 'Los datos de clientes están en WhatsApp, Excel y la memoria de 3 personas a la vez.',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export default function Problema() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 px-8" style={{ background: 'var(--bg2)' }}>
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
            El problema
          </div>
          <h2
            className="font-extrabold mb-4"
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              letterSpacing: '-0.03em',
            }}
          >
            Tu negocio pierde tiempo<br />y dinero todos los días
          </h2>
          <p className="text-base max-w-xl leading-relaxed" style={{ color: 'rgba(240,244,255,.6)' }}>
            Mientras tu equipo responde mensajes manualmente, la competencia ya automatizó su
            seguimiento con IA.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {problems.map((p) => (
            <motion.div
              key={p.title}
              variants={item}
              className="relative rounded-2xl p-7 overflow-hidden transition-all duration-200 hover:-translate-y-1"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: 'linear-gradient(90deg, var(--cyan), transparent)' }}
              />
              <span className="text-3xl mb-4 block">{p.emoji}</span>
              <div
                className="font-bold text-base mb-2"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                {p.title}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(240,244,255,.55)' }}>
                {p.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
