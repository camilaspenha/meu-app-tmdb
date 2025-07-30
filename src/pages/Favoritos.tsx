import NavBar from '../components/NavBar'
import { GlobalSearchStorage } from '../context/GlobalSearchStorage'
import Footer from '../components/Footer'
import { handleScroll } from '../utils/utils'
import ConteudoFavoritos from '../components/ConteudoFavoritos'

const Favoritos = () => {
    
    window.addEventListener('scroll', handleScroll);
  return (
    <>  
      <GlobalSearchStorage>
        <header>
          <NavBar />
        </header>

        <ConteudoFavoritos />

      </GlobalSearchStorage>
      <Footer />
    
    </>
  )
}

export default Favoritos
