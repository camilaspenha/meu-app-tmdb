import React, { useState } from "react";
import { useSearch } from "../context/useSearch"
import { searchMovies } from "../services/tmdb";
import type { Show } from "../types/Show";
import Title from "./Title";
import Card from "./Card";
import Spinner from "./Spinner";

const ResultadoBusca = () => {

  const{setSearch, setQuery}= useSearch()
  function limparBusca(){
  setSearch(false)
  setQuery('')
  }
    

  const {loading, setLoading, query} = useSearch()
  const [movies, setMovies] = useState<Show[]>([])
  const [shows, setShows] = useState<Show[]>([])

  React.useEffect(() => {
      if (!query) return;
  
      
      const fetchMovies = async () => {
        setLoading(true)
        try {
          const response = await searchMovies(query);
          if(!response)
            return
  
          const moviesResults = response.filter((f) => f.type === 'movies')
          const tvsResults = response.filter((f) => f.type === 'tv')
  
          const listMovies = moviesResults[0].results
          const listTv = tvsResults[0].results
          
          const filtraMovies = listMovies.filter( (m:Show) => m.backdrop_path !== null && m.poster_path !== null && m.overview !== '')

          const filtraTvs = listTv.filter( (t:Show) => t.backdrop_path !== null && t.poster_path !== null && t.overview !== '')

          setMovies(filtraMovies)
          setShows(filtraTvs)
          setLoading(false)
          
        } catch (error) {
          console.error('Erro ao buscar filmes:', error);
        }
          
      };
      fetchMovies();
    }, [query, setLoading]);

   return (
      <main>
        <div className="mt-5">
          <Title text="Resultado da busca">
            <a style={{width: "fit-content", position:"fixed", right:"16px", zIndex:"100"}} className="btn btn-md btn-warning text-end ms-2" onClick={limparBusca}>
              <i className="me-2 bi bi-arrow-left"></i>
              Voltar
            </a>
          </Title>
          
        </div>
        

          {loading && <Spinner />}

          {!loading && movies.length == 0 && shows.length == 0 && (
            <>
            <div className="container px-4">
              <h3 className="text-warning">Ops!</h3>
              <h4 className="mt-4">Nenhum resultado foi encontrado para esta busca.</h4>
              <p>Tente com um nome diferente ;) </p>
            </div>
            </>
          )}
          
           { movies.length > 0 && (
            <>
            <div className='mt-2'>
              <Title text="Filmes">
                <span className="badge text-bg-warning">{movies.length}</span>                
              </Title>
            </div>
            <div className="movie-section mb-5" tabIndex={0}>
              <div className="movie-row d-flex">
                  <Card type="movie" movies={movies} />
              </div>
            </div>
            </>
             
            )}

            {shows.length > 0 && (
              <>
              <div className='mt-2'>
                <Title text="Séries">
                  <span className="badge text-bg-warning">{shows.length}</span>
                </Title>
              </div>
              <div className="movie-section mb-5" tabIndex={0}>
                <div className="movie-row d-flex">
                    <Card type="tv" movies={shows} />
                </div>
              </div>
            </>
          )}
          
      </main>
    )
}

export default ResultadoBusca
