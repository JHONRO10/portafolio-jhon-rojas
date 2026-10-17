'use client'

import { useState } from 'react'

const WA_NUMERO = '573006800524'

const TIPOS = [
  'Conversación 1:1 — $30 USD',
  'Taller — $90 USD',
  'Organizacional — cotización',
]

export default function AgendaForm() {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [tel, setTel] = useState('')
  const [tipo, setTipo] = useState('')
  const [meta, setMeta] = useState('')

  const lineas = [
    'Hola Jhon, quiero agendar una hora.',
    nombre && `Nombre: ${nombre}`,
    correo && `Correo: ${correo}`,
    tel && `Mi WhatsApp/teléfono: ${tel}`,
    tipo && `Tipo de sesión: ${tipo}`,
    meta && `Qué quiero lograr: ${meta}`,
  ].filter(Boolean)

  const href = `https://wa.me/${WA_NUMERO}?text=${encodeURIComponent(lineas.join('\n'))}`

  return (
    <div className="form">
      <h3 className="disp">Agenda tu conversación</h3>
      <input
        type="text"
        placeholder="Nombre completo"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />
      <input
        type="tel"
        placeholder="WhatsApp / teléfono"
        value={tel}
        onChange={(e) => setTel(e.target.value)}
      />
      <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
        <option value="" disabled>Tipo de sesión</option>
        {TIPOS.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
      <textarea
        placeholder="¿Qué te gustaría lograr?"
        value={meta}
        onChange={(e) => setMeta(e.target.value)}
      />
      <a className="btn" href={href} target="_blank" rel="noopener noreferrer">
        Quiero mi conversación →
      </a>
      <p className="nota">Te respondo por WhatsApp el mismo día.</p>
    </div>
  )
}
