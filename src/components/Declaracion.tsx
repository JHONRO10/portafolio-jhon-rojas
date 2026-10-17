export default function Declaracion({
  fuerte,
  tenue,
  maxWidth = 960,
}: {
  fuerte: string
  tenue: string
  maxWidth?: number
}) {
  return (
    <section className="band" style={{ paddingBlock: 30 }}>
      <div className="wrap" style={{ maxWidth, textAlign: 'center' }}>
        <h2 className="disp">
          {fuerte} <span className="dim">{tenue}</span>
        </h2>
      </div>
    </section>
  )
}
