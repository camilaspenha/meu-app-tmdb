import { useSearch } from "../context/useSearch"
import FavoritosList from "./FavoritosList"
import ResultadoBusca from "./ResultadoBusca"
// import Spinner from "./Spinner"
import Title from "./Title"
const ConteudoFavoritos = () => {


  const{isSearch } = useSearch()
  
  return (
   <>
      <div> 
        {isSearch &&   (
          <main>                   
            <ResultadoBusca />
          </main>
        )}
        
        {!isSearch && (

          <main>
          <div className='mt-4'>
              <Title text='Favoritos' />
          </div>
          <FavoritosList />
          </main>
        )}
    </div>
   </>
  )
}

export default ConteudoFavoritos
