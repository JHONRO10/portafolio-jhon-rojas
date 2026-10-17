const CIFRAS = [
  { n: '416', label: 'Horas de certificación' },
  { n: '10', label: 'Meses de formación' },
  { n: 'ADH', label: 'Academia de Desarrollo Humano' },
  { n: 'FGU', label: 'Aval Florida Global University' },
]

export default function Cifras() {
  return (
    <section className="band" style={{ paddingBlock: 72 }}>
      <div className="wrap nums">
        {CIFRAS.map((c) => (
          <div key={c.label}>
            <b>{c.n}</b>
            <span>{c.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
