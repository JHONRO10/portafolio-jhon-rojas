import Link from 'next/link'
import Hero from '@/components/Hero'
import Declaracion from '@/components/Declaracion'
import CtaBanda from '@/components/CtaBanda'
import PhotoSlot from '@/components/PhotoSlot'

const CIFRAS = [
  { n: '416', label: 'Horas de certificación' },
  { n: '10', label: 'Meses de formación' },
  { n: 'ADH', label: 'Academia de Desarrollo Humano' },
  { n: 'FGU', label: 'Aval Florida Global University' },
]

export default function Home() {
  return (
    <>
      <Hero
        firma="Hola, soy"
        titulo="Jhon Rojas"
        photo={{ kind: 'placeholder', label: 'Espacio para tu foto', sublabel: 'Retrato o video corto presentándote' }}
      >
        <p className="lead" style={{ fontWeight: 600, color: 'var(--negro)', fontSize: 18 }}>
          Coach Ontológico. Emprendedor. Acompaño a personas que saben lo que tienen que hacer
          y no han podido solas.
        </p>
        <p className="lead">
          Las incapacidades se vuelven capacidades. Lo único que hay en medio es el aprendizaje
          — y una conversación que te saque del lugar donde se creó el problema.
        </p>
      </Hero>

      <Declaracion fuerte="No es que no puedas." tenue="Es que te apagaste antes de cogerle el hilo." />

      <section className="band">
        <div className="wrap two">
          <div>
            <h2 className="disp" style={{ fontSize: 'clamp(25px,3.3vw,38px)' }}>
              Lo que enseño lo aprendí <span className="dim">haciéndolo.</span>
            </h2>
            <p className="lead">
              Vendí fragancias, me certifiqué en coaching ontológico, aprendí a construir con
              inteligencia artificial sin saber programar. Cada vez costó al principio.
            </p>
            <p className="lead">
              Por eso sé exactamente dónde se apaga la gente — porque es donde yo me apago
              también. Y sé qué hay que hacer ahí.
            </p>
          </div>
          <PhotoSlot label="Espacio para tu foto" sublabel="Tú trabajando o grabando" aspectRatio="4/3" />
        </div>
      </section>

      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <PhotoSlot
            label="Espacio para tu foto"
            sublabel="Banda ancha, tú en acción — a todo el ancho de pantalla"
            aspectRatio="21/7"
          />
        </div>
      </section>

      <section className="band" style={{ paddingBlock: 64 }}>
        <div className="wrap nums">
          {CIFRAS.map((c) => (
            <div key={c.label}>
              <b>{c.n}</b>
              <span>{c.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap cards3">
          <div className="card">
            <span className="n">01</span>
            <h3 className="disp">Quién soy</h3>
            <p>Coach ontológico y emprendedor. Lo que enseño lo aprendí haciéndolo.</p>
            <Link className="mas" href="/quienes-somos">Ver más →</Link>
          </div>
          <div className="card">
            <span className="n">02</span>
            <h3 className="disp">Qué resuelvo</h3>
            <p>Decisiones trabadas, conversaciones evitadas, metas que se apagan.</p>
            <Link className="mas" href="/soluciones">Ver más →</Link>
          </div>
          <div className="card">
            <span className="n">03</span>
            <h3 className="disp">Cómo lo hago</h3>
            <p>Dos pasos: observarlo y elegir transformarlo. No hay más.</p>
            <Link className="mas" href="/metodologia">Ver más →</Link>
          </div>
        </div>
      </section>

      <CtaBanda />
    </>
  )
}
