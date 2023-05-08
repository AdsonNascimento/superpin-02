import './App.scss'
import Header from './components/Header.jsx'
import Banner from './components/Banner.jsx'
import Sobre from './components/Sobre.jsx'
import Marcas from './components/Marcas.jsx'
import Projetos from './components/Projetos.jsx'
import Vamos from './components/Vamos.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
    <Header />
    <main id='main'>
      <Banner />
      <Sobre />
      <Marcas />
      <Projetos />
      <Vamos />
    </main>
    <Footer />
    </>
  )
}

export default App
