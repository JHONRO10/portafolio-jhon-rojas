import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Declaracion from '@/components/Declaracion'
import CtaBanda from '@/components/CtaBanda'
import PhotoSlot from '@/components/PhotoSlot'

export const metadata: Metadata = {
  title: 'Soluciones — Jhon Rojas',
}

const WA = 'https://wa.me/573006800524?text=Hola%20Jhon%2C%20quiero%20agendar%20una%20hora'

const IDENTIFICAS = [
  { t: 'La decisión que no tomas', p: 'Sabes cuál es. Lleva meses ahí.' },
  { t: 'La conversación que evitas', p: 'Y ya sabes exactamente con quién es.' },
  { t: 'Arrancas y te apagas', p: 'Con toda la primera semana. A las tres, nada.' },
  { t: 'Dices que sí sin querer', p: 'Y después te da rabia contigo.' },
  { t: 'Trabajas y no avanzas', p: 'Más horas que nunca, el mismo lugar.' },
  { t: 'Te conformas', p: 'Y le dices "por ahora". Lleva dos años siendo por ahora.' },
]

const HERRAMIENTAS = [
  { t: 'FODA', p: 'Para ver con qué cuentas de verdad y qué te está jugando en contra sin que lo hayas mirado.' },
  { t: 'El poder de las conversaciones', p: 'Las conversaciones que no has tenido son las que te tienen donde estás.' },
  { t: 'El lenguaje es generativo', p: 'Lo que dices no describe tu vida. La construye.' },
  { t: 'Compromiso', p: 'La diferencia entre querer algo y estar comprometido con algo. No son lo mismo y se nota.' },
  { t: 'Escucha', p: 'Lo que oíste no es lo que te dijeron. Es lo que interpretaste.' },
  { t: 'SMART', p: 'Para convertir un "quiero estar mejor" en algo que puedas medir.' },
  { t: 'Rueda de la vida', p: 'Para ver en qué área estás pagando el precio de las otras.' },
  { t: 'Disposiciones corporales', p: 'Tu cuerpo ya decidió antes que tú. Aquí aprendes a leerlo.' },
  { t: 'Plan de acciones', p: 'Lo que haces el lunes. Sin esto, la conversación fue solo una conversación bonita.' },
]

export default function Soluciones() {
  return (
    <>
      <Hero
        firma="Lo que hoy te frena,"
        titulo="Mañana es tu impulso"
        tituloStyle={{ fontSize: 'clamp(40px,6.4vw,76px)' }}
        photo={{ kind: 'placeholder', label: 'Espacio para tu foto', sublabel: 'Tú escuchando a un cliente' }}
      >
        <p className="lead">
          Trabajamos sobre lo que de verdad se atraviesa, con distinciones y herramientas
          probadas del coaching ontológico.
        </p>
      </Hero>

      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2 className="disp" style={{ marginBottom: 34 }}>¿Te identificas?</h2>
          <div className="cards6">
            {IDENTIFICAS.map((i) => (
              <div className="card" key={i.t}>
                <h3 className="disp">{i.t}</h3>
                <p>{i.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Declaracion
        fuerte="Las herramientas correctas, en la conversación correcta,"
        tenue="lo cambian todo."
        maxWidth={1000}
      />

      <section className="band dark">
        <div className="wrap">
          <span className="firma">Distinciones</span>
          <h2 className="disp" style={{ marginBottom: 34 }}>Con qué trabajamos</h2>
          <PhotoSlot
            label="Espacio para tu foto"
            sublabel="Tú usando una pizarra o herramienta"
            aspectRatio="21/8"
            style={{ marginBottom: 30 }}
            dark
          />
          <div className="tools">
            {HERRAMIENTAS.map((h) => (
              <div className="card" key={h.t}>
                <h3 className="disp">{h.t}</h3>
                <p>{h.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <h2 className="disp" style={{ marginBottom: 34 }}>Tres formas <span className="dim">de empezar</span></h2>
          <div className="cards3">
            <div className="card">
              <h3 className="disp">Conversación 1:1</h3>
              <div className="pr">$30</div>
              <span className="mt">1 hora · presencial o virtual</span>
              <p>Para quien ya sabe que algo tiene que cambiar y no ha logrado moverlo solo.</p>
              <a className="btn" href={WA} target="_blank" rel="noopener noreferrer" style={{ marginTop: 20, textAlign: 'center' }}>
                Escríbeme
              </a>
            </div>
            <div className="card">
              <h3 className="disp">Taller</h3>
              <div className="pr">$90</div>
              <span className="mt">3 a 4 horas · hasta 20 personas</span>
              <p>Para equipos o grupos que deciden juntos — y que se traban juntos.</p>
              <a className="btn" href={WA} target="_blank" rel="noopener noreferrer" style={{ marginTop: 20, textAlign: 'center' }}>
                Escríbeme
              </a>
            </div>
            <div className="card">
              <h3 className="disp">Organizacional</h3>
              <div className="pr" style={{ fontSize: 25 }}>Cotización</div>
              <span className="mt">Empresas · con equipo de coaches</span>
              <p>Procesos para equipos completos. El alcance se define contigo antes de cotizar.</p>
              <a className="btn" href={WA} target="_blank" rel="noopener noreferrer" style={{ marginTop: 20, textAlign: 'center' }}>
                Pedir propuesta
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaBanda />
    </>
  )
}
