const WA = 'https://wa.me/573006800524?text=Hola%20Jhon%2C%20quiero%20agendar%20una%20hora'

export default function Cierre() {
  return (
    <section className="close">
      <div className="cg">
        <div>
          <h2 className="disp">
            ¿Listo para tener la conversación <span className="dim">que llevas meses evitando?</span>
          </h2>
          <a className="btn" href={WA} target="_blank" rel="noopener noreferrer" style={{ marginTop: 30, display: 'inline-block' }}>
            Escríbeme por WhatsApp →
          </a>
        </div>
        <div>
          <p className="sm" style={{ color: 'rgba(242,251,252,.62)' }}>Una hora. Sin compromiso de seguir.</p>
          <p className="sm" style={{ color: 'rgba(242,251,252,.62)', marginTop: 16 }}>
            Si en los primeros 15 minutos sientes que esto no es para ti, lo dejamos ahí y no pagas.
          </p>
        </div>
      </div>
      <div className="flinks">
        <div>
          <b>Jhon Rojas</b>
          Coach Ontológico certificado<br />Bogotá, Colombia
        </div>
        <div>
          <b>Contacto</b>
          +57 300 680 0524<br />WhatsApp
        </div>
        <div>
          <b>Formación</b>
          ADH Coaching<br />
          <a href="https://adhcoaching.com/" target="_blank" rel="noopener noreferrer">adhcoaching.com</a>
        </div>
      </div>
      <div className="mark">JHON ROJAS</div>
    </section>
  )
}
