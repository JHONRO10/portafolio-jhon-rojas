'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const pills = [
  'n8n Workflows',
  'Supabase',
  'OpenAI GPT-4',
  'Claude AI',
  'WhatsApp API',
  'Next.js',
  'Vercel',
  'Railway',
  'GitHub',
  'Evolution API',
]

export default function Stack() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-16 px-8" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-[1100px] mx-auto" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: 'var(--cyan)' }}
          >
            Tecnología
          </div>
          <h2
            className="font-extrabold mb-8"
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: '1.8rem',
              letterSpacing: '-0.03em',
            }}
          >
            Stack que uso para construir
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-3"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07 } },
          }}
        >
          {pills.map((p) => (
            <motion.div
              key={p}
              variants={{
                hidden: { opacity: 0, scale: 0.85 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
              }}
              className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-default hover:-translate-y-0.5"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: 'var(--cyan)' }}
              />
              {p}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
