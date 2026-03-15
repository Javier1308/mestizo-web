import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import BuffetSection from './components/BuffetSection'
import MenuSection from './components/MenuSection'
import BebidasSection from './components/BebidasSection'
import Promociones from './components/Promociones'
import AfterOffice from './components/AfterOffice'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <BuffetSection />
      <MenuSection />
      <BebidasSection />
      <Promociones />
      <AfterOffice />
      <Contacto />
      <Footer />
    </div>
  )
}

export default App
