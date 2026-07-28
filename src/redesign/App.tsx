import { useSmoothScroll } from './useSmoothScroll'
import Header from './components/Header'
import Hero from './components/Hero'
import Buffet from './components/Buffet'
import Carta from './components/Carta'
import Bebidas from './components/Bebidas'
import Promociones from './components/Promociones'
import AfterOffice from './components/AfterOffice'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

export default function App() {
  useSmoothScroll()

  return (
    <div style={{ background: 'var(--linen)' }}>
      <Header />
      <main>
        <Hero />
        <Buffet />
        <Carta />
        <Bebidas />
        <Promociones />
        <AfterOffice />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}
