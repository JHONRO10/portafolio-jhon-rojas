'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import QRCode from 'qrcode'

interface Message {
  role: 'user' | 'assistant'
  content: string
  time?: string
}

const SUGGESTIONS = [
  '¿Por qué la IA es urgente hoy?',
  '¿Cómo aplico IA a mi negocio?',
  '¿Qué es el coaching ontológico?',
  '¿Cuál es el futuro de la IA?',
]

const GREETING = '¡Hola! Soy ARIA, la asistente AI de Jhon Rojas. ¿Sobre qué quieres conversar hoy? Puedo hablarte de inteligencia artificial, coaching ontológico o cómo transformar tu negocio.'

const PORTFOLIO_URL = 'https://portafolio-jhon-rojas.vercel.app'

function getTime() {
  return new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' })
}

export default function ARIAChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [streaming, setStreaming] = useState(false)
  const [showQR, setShowQR] = useState(false)
  const [qrDataUrl, setQrDataUrl] = useState<string>('')
  const [greeted, setGreeted] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  // Generar QR
  useEffect(() => {
    QRCode.toDataURL(PORTFOLIO_URL, {
      width: 220,
      margin: 2,
      color: { dark: '#06090F', light: '#ffffff' },
    }).then(setQrDataUrl).catch(() => {})
  }, [])

  // Scroll al último mensaje
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  // Saludo automático al abrir por primera vez
  useEffect(() => {
    if (open && !greeted) {
      setGreeted(true)
      setLoading(true)
      const timer = setTimeout(() => {
        setLoading(false)
        setStreaming(true)
        const msg: Message = { role: 'assistant', content: '', time: getTime() }
        setMessages([msg])
        let i = 0
        const chars = GREETING.split('')
        const interval = setInterval(() => {
          i++
          setMessages([{ ...msg, content: chars.slice(0, i).join('') }])
          if (i >= chars.length) {
            clearInterval(interval)
            setStreaming(false)
          }
        }, 18)
      }, 900)
      return () => clearTimeout(timer)
    }
  }, [open, greeted])

  async function sendMessage(text: string) {
    if (!text.trim() || loading || streaming) return
    const time = getTime()
    const userMsg: Message = { role: 'user', content: text, time }
    const history = [...messages, userMsg]
    setMessages(history)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: history.map(({ role, content }) => ({ role, content })),
        }),
      })

      if (!res.ok || !res.body) throw new Error('Error de servidor')

      // Empezar a mostrar respuesta vacía
      const assistantMsg: Message = { role: 'assistant', content: '', time: getTime() }
      setMessages([...history, assistantMsg])
      setLoading(false)
      setStreaming(true)

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let accumulated = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        accumulated += decoder.decode(value, { stream: true })
        setMessages([...history, { ...assistantMsg, content: accumulated }])
      }
    } catch {
      setMessages([...history, { role: 'assistant', content: 'Error de conexión. Intenta de nuevo.', time: getTime() }])
    } finally {
      setLoading(false)
      setStreaming(false)
    }
  }

  function downloadQR() {
    if (!qrDataUrl) return
    const a = document.createElement('a')
    a.href = qrDataUrl
    a.download = 'jhonrojas-portafolio-qr.png'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  return (
    <>
      {/* Botón flotante */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl"
        style={{ background: 'linear-gradient(135deg, #00CFFF, #0077AA)' }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Abrir chat con ARIA"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} className="text-white text-2xl font-bold">✕</motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} className="text-2xl">🤖</motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Ventana de chat */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-28 right-4 z-50 flex flex-col rounded-2xl overflow-hidden shadow-2xl"
            style={{
              width: 'min(380px, calc(100vw - 2rem))',
              height: 560,
              background: '#06090F',
              border: '1px solid rgba(0,207,255,0.2)',
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 flex-shrink-0" style={{ background: '#0C1220', borderBottom: '1px solid rgba(0,207,255,0.12)' }}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-lg flex-shrink-0" style={{ background: 'rgba(0,207,255,0.15)' }}>🤖</div>
                <div>
                  <div className="font-bold text-sm" style={{ fontFamily: 'var(--font-syne)', color: '#00CFFF' }}>ARIA</div>
                  <div className="text-xs flex items-center gap-1" style={{ color: '#5A6580' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
                    {streaming ? 'escribiendo...' : 'AI de Jhon Rojas'}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowQR(true)}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-all hover:opacity-80"
                style={{ background: 'rgba(0,207,255,0.1)', border: '1px solid rgba(0,207,255,0.25)', color: '#00CFFF', fontFamily: 'var(--font-syne)' }}
              >
                QR
              </button>
            </div>

            {/* Mensajes */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
              {messages.length === 0 && !loading && (
                <div className="text-center mt-4">
                  <div className="text-3xl mb-2">🤖</div>
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'var(--font-syne)', color: '#00CFFF' }}>Hola, soy ARIA</p>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: '#5A6580' }}>El asistente AI de Jhon Rojas. ¿En qué puedo ayudarte?</p>
                  <div className="flex flex-col gap-2">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => sendMessage(s)}
                        className="text-xs text-left px-3 py-2 rounded-xl transition-all hover:opacity-80"
                        style={{ background: 'rgba(0,207,255,0.08)', border: '1px solid rgba(0,207,255,0.2)', color: '#F0F4FF' }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((m, i) => (
                <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <div
                    className="max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed"
                    style={m.role === 'user'
                      ? { background: 'rgba(255,92,43,0.2)', border: '1px solid rgba(255,92,43,0.3)', borderBottomRightRadius: 4, color: '#F0F4FF' }
                      : { background: 'rgba(0,207,255,0.1)', border: '1px solid rgba(0,207,255,0.2)', borderBottomLeftRadius: 4, color: '#F0F4FF' }
                    }
                  >
                    {m.role === 'assistant' && (
                      <div className="text-xs font-semibold mb-1" style={{ color: '#00CFFF', fontFamily: 'var(--font-syne)' }}>ARIA</div>
                    )}
                    {m.content}
                    {/* Cursor parpadeante en el último mensaje de ARIA mientras escribe */}
                    {streaming && i === messages.length - 1 && m.role === 'assistant' && (
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="inline-block w-0.5 h-3.5 ml-0.5 align-middle rounded"
                        style={{ background: '#00CFFF' }}
                      />
                    )}
                  </div>
                  {m.time && (
                    <span className="text-xs mt-1 px-1" style={{ color: '#3A4560' }}>{m.time}</span>
                  )}
                </div>
              ))}

              {/* Dots de carga (solo antes de que empiece el stream) */}
              {loading && (
                <div className="flex justify-start">
                  <div className="px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center" style={{ background: 'rgba(0,207,255,0.1)', border: '1px solid rgba(0,207,255,0.2)' }}>
                    {[0, 1, 2].map((i) => (
                      <motion.span key={i} className="w-2 h-2 rounded-full" style={{ background: '#00CFFF' }}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Sugerencias después del saludo */}
              {messages.length === 1 && !loading && !streaming && (
                <div className="flex flex-col gap-2 mt-1">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => sendMessage(s)}
                      className="text-xs text-left px-3 py-2 rounded-xl transition-all hover:opacity-80"
                      style={{ background: 'rgba(0,207,255,0.06)', border: '1px solid rgba(0,207,255,0.15)', color: '#8A9BB8' }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="p-3 flex-shrink-0" style={{ borderTop: '1px solid rgba(0,207,255,0.12)' }}>
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage(input)}
                  placeholder="Escribe tu pregunta..."
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm outline-none"
                  style={{ background: '#0C1220', border: '1px solid rgba(0,207,255,0.15)', color: '#F0F4FF' }}
                  disabled={loading || streaming}
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim() || loading || streaming}
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all hover:opacity-80 disabled:opacity-40"
                  style={{ background: '#00CFFF' }}
                >
                  <span className="text-[#06090F] font-bold text-lg">→</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal QR */}
      <AnimatePresence>
        {showQR && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(6px)' }}
            onClick={() => setShowQR(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="rounded-2xl p-8 text-center max-w-sm w-full"
              style={{ background: '#0C1220', border: '1px solid rgba(0,207,255,0.2)' }}
            >
              <h3 className="font-extrabold text-xl mb-2" style={{ fontFamily: 'var(--font-syne)', color: '#F0F4FF' }}>
                Comparte mi portafolio
              </h3>
              <p className="text-sm mb-6" style={{ color: '#5A6580' }}>Escanea para visitar</p>

              <div className="rounded-xl p-4 mb-6 inline-block" style={{ background: '#ffffff' }}>
                {qrDataUrl
                  ? <img src={qrDataUrl} alt="QR portafolio Jhon Rojas" width={220} height={220} />
                  : <div className="w-[220px] h-[220px] flex items-center justify-center text-sm text-gray-400">Generando...</div>
                }
              </div>

              <div className="flex gap-3 justify-center">
                <button
                  onClick={downloadQR}
                  disabled={!qrDataUrl}
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-85 disabled:opacity-40"
                  style={{ fontFamily: 'var(--font-syne)', background: '#00CFFF', color: '#06090F' }}
                >
                  Descargar QR
                </button>
                <button
                  onClick={() => setShowQR(false)}
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-80"
                  style={{ border: '1px solid rgba(0,207,255,0.2)', color: '#F0F4FF' }}
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
