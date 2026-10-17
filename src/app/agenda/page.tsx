import type { Metadata } from 'next'
import PhotoSlot from '@/components/PhotoSlot'
import AgendaForm from '@/components/AgendaForm'

export const metadata: Metadata = {
  title: 'Agenda tu conversación — Jhon Rojas',
}

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
        <AgendaForm />
      </div>
    </section>
  )
}
