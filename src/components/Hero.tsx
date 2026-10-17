import Image from 'next/image'

// FOTO PROVISIONAL — ya es una foto real de Jhon (public/foto2.jpg), no stock.
// Reemplazar cuando llegue la sesión fotográfica definitiva (jhon-hero.jpg).
const FOTO_HERO = '/foto2.jpg'

const WA = 'https://wa.me/573006800524?text=Hola%20Jhon%2C%20quiero%20agendar%20una%20hora'

export default function Hero() {
  return (
    <section className="band" style={{ paddingTop: 72 }}>
      <div className="wrap hero">
        <div>
          <span className="firma">Soy</span>
          <h1 className="disp">Jhon Rojas</h1>
          <p style={{ fontWeight: 700, fontSize: 17, marginTop: 22, maxWidth: '46ch' }}>
            Coach Ontológico. Emprendedor. Acompaño a personas que saben lo que tienen que
            hacer y no han podido solas.
          </p>
          <p className="lead">
            Las incapacidades se vuelven capacidades. Lo único que hay en medio es el
            aprendizaje — y una conversación que te saque del lugar donde se creó el problema.
          </p>
          <a className="btn" href={WA} target="_blank" rel="noopener noreferrer" style={{ marginTop: 34, display: 'inline-block' }}>
            Hablemos una hora →
          </a>
        </div>
        <div className="vcard">
          <Image src={FOTO_HERO} alt="Jhon Rojas" fill style={{ objectFit: 'cover', objectPosition: 'top' }} priority />
          <div className="vtag">
            <div>
              <b>Escúchame un minuto</b>
              <span>Jhon Rojas · Coach Ontológico</span>
            </div>
            <div className="play">▶</div>
          </div>
        </div>
      </div>
    </section>
  )
}
