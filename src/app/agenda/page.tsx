import type { Metadata } from 'next'
import PhotoSlot from '@/components/PhotoSlot'

export const metadata: Metadata = {
  title: 'Agenda tu conversación — Jhon Rojas',
}

const WA = 'https://wa.me/573006800524?text=Hola%20Jhon%2C%20quiero%20agendar%20una%20hora'

export default function Agenda() {
  return (
    <section className="band">
      <div className="wrap agenda">
        <div>
          <span className="firma">Una hora</span>
          <h1 className="disp" style={{ fontSize: 'clamp(40px,6.4vw,76px)' }}>
            Demos el primer paso juntos
          </h1>
          <p className="lead">
            Una hora para ver qué se atraviesa de verdad y salir con un plan concreto. Sin
            compromiso de seguir después.
          </p>
          <p className="lead">
            Si en los primeros 15 minutos sientes que esto no es para ti, lo dejamos ahí y no
            pagas.
          </p>
          <PhotoSlot
            label="Espacio para tu foto"
            sublabel="Tú en una actitud cercana"
            aspectRatio="4/3"
            style={{ marginTop: 34 }}
          />
        </div>
        <div className="form">
          <h3 className="disp">Agenda tu conversación</h3>
          <input type="text" id="ag-nombre" placeholder="Nombre completo" />
          <input type="email" id="ag-correo" placeholder="Correo electrónico" />
          <input type="tel" id="ag-tel" placeholder="WhatsApp / teléfono" />
          <select id="ag-tipo" defaultValue="">
            <option value="" disabled>Tipo de sesión</option>
            <option>Conversación 1:1 — $30 USD</option>
            <option>Taller — $90 USD</option>
            <option>Organizacional — cotización</option>
          </select>
          <textarea id="ag-meta" placeholder="¿Qué te gustaría lograr?" />
          <a className="btn" href={WA} target="_blank" rel="noopener noreferrer">
            Quiero mi conversación →
          </a>
          <p className="nota">Te respondo por WhatsApp el mismo día.</p>
        </div>
      </div>
    </section>
  )
}
