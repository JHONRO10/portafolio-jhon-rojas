import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Declaracion from '@/components/Declaracion'
import CtaBanda from '@/components/CtaBanda'
import PhotoSlot from '@/components/PhotoSlot'

export const metadata: Metadata = {
  title: 'Metodología — Jhon Rojas',
}

const PASOS = [
  {
    yr: '01',
    title: 'Observarlo',
    text: 'No puedes transformar lo que todavía no ves. Y no lo ves porque estás parado adentro del mismo lugar que lo creó. Acordamos qué quieres lograr — específico, medible, con fecha — y miramos qué se atraviesa de verdad.',
  },
  {
    yr: '02',
    title: 'Elegir transformarlo',
    text: 'Ver no alcanza. Mucha gente ve y se queda igual. El cambio ocurre cuando eliges — y ahí entran el compromiso y el plan de acciones.',
  },
]

const LLEVAS = [
  'Un resultado específico, medible y con fecha',
  'Qué se atraviesa de verdad — casi nunca es lo que creías',
  'Un plan de acciones para el lunes',
  'Preguntas que solo tú puedes responder',
]

export default function Metodologia() {
  return (
    <>
      <Hero
        firma="Un camino claro,"
        titulo="Son dos pasos"
        tituloStyle={{ fontSize: 'clamp(44px,7vw,82px)' }}
        photo={{ kind: 'placeholder', label: 'Espacio para tu foto', sublabel: 'Tú en sesión virtual' }}
      >
        <p className="lead">No hay más. Una hora, en un lugar donde estés solo y sin interrupciones.</p>
      </Hero>

      <Declaracion fuerte="No puedes transformar" tenue="lo que todavía no ves." maxWidth={940} />

      <section className="band">
        <div className="wrap">
          <div className="tl">
            {PASOS.map((p) => (
              <div className="row" key={p.yr}>
                <span className="ax" />
                <div>
                  <span className="yr">{p.yr}</span>
                  <h3 className="disp">{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band beige">
        <div className="wrap llevas">
          <PhotoSlot label="Espacio para tu foto" sublabel="Tú trabajando con un cliente" />
          <div>
            <h2 className="disp">Lo que te llevas</h2>
            <div className="chk">
              {LLEVAS.map((l) => (
                <div key={l}>
                  <i>✓</i>
                  <span>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanda />
    </>
  )
}
