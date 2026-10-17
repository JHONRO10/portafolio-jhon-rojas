const HITOS = [
  {
    yr: 'Antes',
    title: 'Vendiendo fragancias',
    text: 'Emprendedor en Bogotá. Aprendí a vender — y descubrí que si aprendí eso, podía aprender cualquier cosa.',
    on: false,
  },
  {
    yr: 'La formación',
    title: '416 horas de ontología',
    text: 'Diez meses. El lenguaje no describe tu vida: la construye. Ahí entendí por qué la gente sabe qué hacer y no lo hace.',
    on: false,
  },
  {
    yr: 'Hace 2 años',
    title: 'Construir con IA',
    text: 'Empecé desde cero, sin saber programar. Agentes, automatizaciones, páginas. Lo que era una incapacidad se volvió una herramienta.',
    on: false,
  },
  {
    yr: 'Hoy',
    title: 'Acompañar y enseñar',
    text: 'Lo que aprendí a los golpes, se lo enseño a quien está en el mismo punto donde yo estuve.',
    on: true,
  },
]

export default function Trayectoria() {
  return (
    <section className="band" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <h2 className="disp" style={{ maxWidth: '17ch' }}>La historia detrás de lo que enseño</h2>
        <div className="tl">
          {HITOS.map((h) => (
            <div className={`row${h.on ? ' on' : ''}`} key={h.yr}>
              <span className="yr">{h.yr}</span>
              <span className="ax" />
              <div>
                <h3 className="disp">{h.title}</h3>
                <p>{h.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
