const PASOS = [
  {
    n: '01',
    title: 'Observarlo',
    text: 'No puedes transformar lo que todavía no ves. Y no lo ves porque estás parado adentro del mismo lugar que lo creó.',
  },
  {
    n: '02',
    title: 'Elegir transformarlo',
    text: 'Ver no alcanza. El cambio ocurre cuando eliges — y ahí entran el compromiso y el plan de acciones.',
  },
]

export default function Proceso() {
  return (
    <section className="band" style={{ paddingTop: 0 }} id="proceso">
      <div className="wrap">
        <span className="kick">Qué pasa en una conversación</span>
        <h2 className="disp" style={{ maxWidth: '16ch' }}>
          Son dos pasos. <span className="dim">No hay más.</span>
        </h2>
        <div className="steps">
          {PASOS.map((p) => (
            <div className="stp" key={p.n}>
              <em>{p.n}</em>
              <h3 className="disp">{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
        <p className="sm" style={{ marginTop: 32 }}>Una hora. En un lugar donde estés solo. Sin interrupciones.</p>
      </div>
    </section>
  )
}
