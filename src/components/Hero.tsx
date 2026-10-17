import Image from 'next/image'
import PhotoSlot from './PhotoSlot'

const WA = 'https://wa.me/573006800524?text=Hola%20Jhon%2C%20quiero%20agendar%20una%20hora'

// FOTO PROVISIONAL — jhon-hero.jpg ya es la foto real aprobada del paquete.
const FOTO_HERO = '/jhon-hero.jpg'

// Para activar el video cuando exista:
// 1. Descomenta VIDEO_SRC abajo.
// 2. Cambia el <Image> del vcard por <video poster={FOTO_HERO} controls src={VIDEO_SRC} />
// const VIDEO_SRC = "/videos/jhon-intro.mp4"

type PhotoConfig =
  | { kind: 'video' }
  | { kind: 'placeholder'; label: string; sublabel: string }

export default function Hero({
  firma,
  titulo,
  tituloStyle,
  children,
  photo,
}: {
  firma: string
  titulo: string
  tituloStyle?: React.CSSProperties
  children: React.ReactNode
  photo: PhotoConfig
}) {
  return (
    <section className="band">
      <div className="wrap hero">
        <div>
          <span className="firma">{firma}</span>
          <h1 className="disp" style={tituloStyle}>{titulo}</h1>
          {children}
          <a className="btn" href={WA} target="_blank" rel="noopener noreferrer" style={{ marginTop: 32, display: 'inline-block' }}>
            Hablemos una hora
          </a>
        </div>
        {photo.kind === 'video' ? (
          <div className="vcard">
            <Image src={FOTO_HERO} alt="Jhon Rojas" fill style={{ objectFit: 'cover' }} priority />
            <div className="vtag">
              <div>
                <b>Escúchame un minuto</b>
                <span>Jhon Rojas · Coach Ontológico</span>
              </div>
              <div className="play">▶</div>
            </div>
          </div>
        ) : (
          <PhotoSlot label="Espacio para tu foto" sublabel={photo.sublabel} />
        )}
      </div>
    </section>
  )
}
