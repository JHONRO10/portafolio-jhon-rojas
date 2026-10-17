import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Declaracion from '@/components/Declaracion'
import Preguntas from '@/components/Preguntas'
import BandaFoto from '@/components/BandaFoto'
import Cifras from '@/components/Cifras'
import Proceso from '@/components/Proceso'
import Trayectoria from '@/components/Trayectoria'
import Formatos from '@/components/Formatos'
import Cierre from '@/components/Cierre'

export default function Home() {
  return (
    <>
      <Nav />
      <div className="shell">
        <Hero />
        <Declaracion />
        <Preguntas />
        <BandaFoto />
        <Cifras />
        <Proceso />
        <Trayectoria />
        <Formatos />
      </div>
      <Cierre />
    </>
  )
}
