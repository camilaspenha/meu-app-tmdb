import { useSearch } from "../context/useSearch"
import Home from "../pages/Home"
import Hero from "./Hero"
import ResultadoBusca from "./ResultadoBusca"
const Conteudo = () => {


  const{isSearch } = useSearch()
   
  return (
   <>
      <div> 
        {isSearch && <main><ResultadoBusca /></main>}
        {!isSearch && (
            <>
            <Hero />
            <main><Home /></main> 
            </>
        ) }
    </div>
   </>
  )
}

export default Conteudo
