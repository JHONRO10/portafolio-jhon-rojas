const WA = 'https://wa.me/573006800524?text=Hola%20Jhon%2C%20quiero%20agendar%20una%20hora'

export default function Formatos() {
  return (
    <section className="band" style={{ paddingTop: 0 }} id="formatos">
      <div className="wrap">
        <span className="kick">Cómo trabajamos</span>
        <h2 className="disp" style={{ maxWidth: '14ch' }}>
          Tres formas <span className="dim">de empezar</span>
        </h2>
        <div className="cards">
          <div className="card">
            <h3 className="disp">Conversación 1:1</h3>
            <div className="pr">$30</div>
            <span className="mt">1 hora · presencial o virtual</span>
            <p>Para quien ya sabe que algo tiene que cambiar y no ha logrado moverlo solo.</p>
            <a className="btn btn-dark" href={WA} target="_blank" rel="noopener noreferrer" style={{ marginTop: 22, textAlign: 'center' }}>
              Escríbeme
            </a>
          </div>
          <div className="card">
            <h3 className="disp">Taller</h3>
            <div className="pr">$90</div>
            <span className="mt">3 a 4 horas · hasta 20 personas</span>
            <p>Para equipos o grupos que deciden juntos — y que se traban juntos.</p>
            <a className="btn btn-dark" href={WA} target="_blank" rel="noopener noreferrer" style={{ marginTop: 22, textAlign: 'center' }}>
              Escríbeme
            </a>
          </div>
          <div className="card">
            <h3 className="disp">Organizacional</h3>
            <div className="pr" style={{ fontSize: 24 }}>Cotización</div>
            <span className="mt">Empresas · con equipo de coaches</span>
            <p>Procesos para equipos completos. El alcance se define contigo antes de cotizar.</p>
            <a className="btn btn-dark" href={WA} target="_blank" rel="noopener noreferrer" style={{ marginTop: 22, textAlign: 'center' }}>
              Pedir propuesta
            </a>
          </div>
        </div>
        <div className="pend">
          <b>Testimonios · pendientes</b>
          <p className="sm">
            Aquí van tres personas reales, con nombre y foto, contando qué cambió. Sin ellos este
            bloque se elimina. No se inventa ninguno.
          </p>
        </div>
      </div>
    </section>
  )
}
