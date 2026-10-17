import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Declaracion from '@/components/Declaracion'
import CtaBanda from '@/components/CtaBanda'
import PhotoSlot from '@/components/PhotoSlot'

export const metadata: Metadata = {
  title: 'Quién soy — Jhon Rojas',
}

const HITOS = [
  {
    yr: 'Antes',
    title: 'Vendiendo fragancias',
    text: 'Emprendedor en Bogotá. Aprendí a vender — y descubrí que si aprendí eso, podía aprender cualquier cosa.',
  },
  {
    yr: 'La formación',
    title: '416 horas de ontología',
    text: 'Diez meses. El lenguaje no describe tu vida: la construye. Ahí entendí por qué la gente sabe qué hacer y no lo hace.',
  },
  {
    yr: 'Hace 2 años',
    title: 'Construir con IA',
    text: 'Empecé desde cero, sin saber programar. Lo que era una incapacidad se volvió una herramienta.',
  },
  {
    yr: 'Hoy',
    title: 'Acompañar y enseñar',
    text: 'Lo que aprendí a los golpes se lo enseño a quien está donde yo estuve.',
  },
]

const VALORES = [
  { b: 'Confidencialidad', s: 'Lo que se habla en sesión se queda en sesión.' },
  { b: 'No te doy respuestas', s: 'Las respuestas están en ti. Mi trabajo es que las encuentres.' },
  { b: 'Sin garantías de resultado', s: 'Acompaño. No prometo lo que no depende de mí.' },
  { b: 'Siempre termina en acción', s: 'Cada sesión cierra con algo concreto para el lunes.' },
]

export default function QuienesSomos() {
  return (
    <>
      <Hero
        firma="Esto es"
        titulo="Aprender a los golpes y enseñarlo"
        tituloStyle={{ fontSize: 'clamp(38px,6vw,70px)' }}
        photo={{ kind: 'placeholder', label: 'Espacio para tu foto', sublabel: 'Retrato de tres cuartos' }}
      >
        <p className="lead">
          Soy Jhon Rojas. Coach Ontológico certificado — 416 horas, diez meses de formación. Me
          formé y pertenezco a ADH Coaching, la Academia de Desarrollo Humano y Coaching.
        </p>
        <p className="lead">
          El certificado lo emiten ADH Coaching y el Center of Education and Leadership, con
          aval de Florida Global University.
        </p>
      </Hero>

      <Declaracion fuerte="No cambias lo que haces" tenue="hasta que cambias cómo observas." maxWidth={1000} />

      <section className="band">
        <div className="wrap mv">
          <div className="oscura">
            <h3 className="disp">Lo que creo</h3>
            <p style={{ marginTop: 14 }}>
              Que las incapacidades se vuelven capacidades, y que lo único que hay en medio es
              el aprendizaje. Lo he vivido tres veces.
            </p>
          </div>
          <div className="clara">
            <h3 className="disp">Hacia dónde voy</h3>
            <p style={{ marginTop: 14 }}>
              Al desarrollo humano y al comportamiento humano. Todo lo demás que construyo hoy
              es el vehículo para llegar allá.
            </p>
          </div>
        </div>
      </section>

      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap two">
          <div>
            <h2 className="disp" style={{ marginBottom: 28, fontSize: 'clamp(25px,3.3vw,38px)' }}>
              Cómo trabajo
            </h2>
            <div className="vals">
              {VALORES.map((v) => (
                <div key={v.b}>
                  <b>{v.b}</b>
                  <span>{v.s}</span>
                </div>
              ))}
            </div>
          </div>
          <PhotoSlot label="Espacio para tu foto" sublabel="Tú dando un taller" aspectRatio="3/4" />
        </div>
      </section>

      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2 className="disp" style={{ maxWidth: '17ch', marginBottom: 12 }}>
            La historia detrás <span className="dim">de lo que enseño</span>
          </h2>
          <div className="tl" style={{ marginTop: 44 }}>
            {HITOS.map((h) => (
              <div className="row" key={h.yr}>
                <span className="ax" />
                <div>
                  <span className="yr">{h.yr}</span>
                  <h3 className="disp">{h.title}</h3>
                  <p>{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanda />
    </>
  )
}
