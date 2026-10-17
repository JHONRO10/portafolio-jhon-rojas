const PREGUNTAS = [
  '¿Cuántos años llevas diciendo que este es tu último año en ese trabajo?',
  '¿Cuál es la conversación que llevas meses evitando? Porque ya sabes con quién es.',
  '¿Por qué arrancas con toda y a las tres semanas se te apagó?',
  '¿Cuántas veces dijiste que sí esta semana cuando querías decir que no?',
  '¿Estás trabajando más que nunca y sientes que sigues en el mismo lugar?',
]

export default function Preguntas() {
  return (
    <section className="band" id="preguntas">
      <div className="wrap" style={{ maxWidth: 780 }}>
        <span className="kick">Antes de seguir</span>
        {PREGUNTAS.map((p) => (
          <p className="q" key={p}>{p}</p>
        ))}
        <p className="sm" style={{ marginTop: 24 }}>Si alguna te incomodó, esa es la conversación.</p>
      </div>
    </section>
  )
}
