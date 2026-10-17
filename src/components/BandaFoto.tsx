import Image from 'next/image'

// FOTO PROVISIONAL — ya es una foto real de Jhon (public/foto1.jpg), no stock.
// Reemplazar cuando llegue la sesión fotográfica definitiva (jhon-banda.jpg).
const FOTO_BANDA = '/foto1.jpg'

export default function BandaFoto() {
  return (
    <div className="banda" style={{ position: 'relative' }}>
      <Image src={FOTO_BANDA} alt="Jhon Rojas" fill style={{ objectFit: 'cover' }} />
    </div>
  )
}
