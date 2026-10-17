const WA = 'https://wa.me/573006800524?text=Hola%20Jhon%2C%20quiero%20agendar%20una%20hora'

export default function CtaBanda() {
  return (
    <section className="band dark">
      <div className="wrap cta">
        <h2 className="disp">Tu primera conversación <span className="dim">es de una hora</span></h2>
        <div className="r">
          <p style={{ marginLeft: 'auto' }}>
            Una hora para ver qué se atraviesa y salir con un plan. Sin compromiso de seguir.
          </p>
          <a className="btn" href={WA} target="_blank" rel="noopener noreferrer" style={{ marginTop: 26, display: 'inline-block' }}>
            Escríbeme por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
