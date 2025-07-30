
import NavBar from '../components/NavBar'
import { GlobalSearchStorage } from '../context/GlobalSearchStorage'
import Footer from '../components/Footer'
import { handleScroll } from '../utils/utils'
import Conteudo from '../components/Conteudo'

const Inicio = () => {
  
  window.addEventListener('scroll', handleScroll);
  return (
    <>
      <GlobalSearchStorage>
        <header>
          <NavBar />
        </header>

          <Conteudo />
      </GlobalSearchStorage>
      
      <Footer />
    </>
  )
}

export default Inicio
