'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const WA_DEMO = 'https://wa.me/573006800524?text=Hola%20Jhon!%20Quiero%20ver%20una%20demo%20del%20sistema%20AI%20para%20mi%20negocio'
const WA_SERVICIOS = '#servicios'

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center pt-32 pb-16 px-8 relative overflow-hidden"
    >
      {/* Glows */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-20%', right: '-10%',
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(0,207,255,.15) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-10%', left: '-5%',
          width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(255,92,43,.1) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1100px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full text-xs font-medium px-4 py-1.5 mb-6 tracking-widest"
            style={{
              background: 'rgba(0,207,255,.1)',
              border: '1px solid rgba(0,207,255,.25)',
              color: 'var(--cyan)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: 'var(--cyan)' }}
            />
            Disponible para nuevos proyectos
          </div>

          {/* H1 */}
          <h1
            className="font-extrabold leading-tight mb-5"
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              letterSpacing: '-0.03em',
            }}
          >
            Automatizo tu negocio<br />
            con{' '}
            <span style={{ color: 'var(--cyan)' }}>Sistemas AI</span>
            <br />
            que{' '}
            <span style={{ color: 'var(--orange)' }}>venden</span> por ti
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg mb-8 font-light max-w-lg leading-relaxed"
            style={{ color: 'rgba(240,244,255,.7)' }}
          >
            Construyo agentes AI, CRMs inteligentes y automatizaciones en WhatsApp
            para que tu equipo deje de hacer trabajo manual y empiece a cerrar más ventas.
          </p>

          {/* CTAs */}
          <div className="flex gap-4 flex-wrap">
            <a
              href={WA_DEMO}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-bold px-7 py-4 rounded-xl text-base transition-all duration-200 hover:opacity-85 hover:-translate-y-0.5"
              style={{
                fontFamily: 'var(--font-syne)',
                background: 'var(--cyan)',
                color: 'var(--bg)',
                boxShadow: '0 4px 20px rgba(0,207,255,.25)',
              }}
            >
              💬 Ver demo en WhatsApp
            </a>
            <a
              href={WA_SERVICIOS}
              className="flex items-center gap-2 font-medium px-7 py-4 rounded-xl text-base transition-all duration-200 hover:-translate-y-0.5"
              style={{
                border: '1px solid rgba(240,244,255,.2)',
                color: 'var(--white)',
              }}
            >
              Ver servicios →
            </a>
          </div>
        </motion.div>

        {/* RIGHT — foto */}
        <motion.div
          className="relative block"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div
            className="relative w-full rounded-2xl overflow-hidden"
            style={{ height: 520, border: '1px solid var(--border)' }}
          >
            <Image
              src="/foto2.jpg"
              alt="Jhon Rojas"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Tarjeta flotante inferior */}
          <motion.div
            className="absolute -bottom-6 -left-8 flex items-center gap-3 px-5 py-4 rounded-2xl"
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              backdropFilter: 'blur(10px)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
              style={{ background: 'rgba(0,207,255,.15)' }}
            >
              🤖
            </div>
            <div>
              <div className="text-xs" style={{ color: 'var(--muted)' }}>Agente AI activo</div>
              <div className="font-bold text-sm" style={{ fontFamily: 'var(--font-syne)' }}>
                ARIA · 24/7
              </div>
            </div>
          </motion.div>

          {/* Tarjeta flotante superior */}
          <motion.div
            className="absolute top-8 -right-6 text-center px-5 py-4 rounded-2xl"
            style={{
              background: 'var(--card)',
              border: '1px solid rgba(255,92,43,.2)',
              backdropFilter: 'blur(10px)',
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <div
              className="font-extrabold text-2xl"
              style={{ fontFamily: 'var(--font-syne)', color: 'var(--orange)' }}
            >
              2 meses
            </div>
            <div className="text-xs" style={{ color: 'var(--muted)' }}>construyendo en AI</div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
