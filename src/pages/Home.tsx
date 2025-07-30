import { useSearch } from "../context/useSearch"
import { useEffect, useState } from "react";
import {getPopular, getTopRated,getTvTopRated, getTvPopular, getUpComing} from '../services/tmdb'
import type {Show } from '../types/Show'
import Card from "../components/Card";
import Title from "../components/Title";
import Spinner from "../components/Spinner";

const Home = () => {

    const {loading, setLoading} = useSearch()
    const [movies, setMovies] = useState<Show[]>([])
    const [upComing, setUpComing] = useState<Show[]>([])
    const [tv, setTv] = useState<Show[]>([])
    const [top, setTop] = useState<Show[]>([])
    const [toptv, setToptv] = useState<Show[]>([])
    
      
     useEffect( () => {
        
      setLoading(true)
        getPopular()
        .then( (movies) => setMovies(movies.results))
    
        getTopRated()
        .then( (movies) => setTop(movies.results))
        
        getUpComing()
        .then( (movies) => setUpComing(movies.results))
    
        getTvPopular()
        .then( (movies) => setTv(movies.results))
        
        getTvTopRated()
        .then( (movies) => setToptv(movies.results))

        const limpaTop = top.filter( (m) => m.backdrop_path !== null && m.poster_path !== null && m.overview !== '')
        setTop(limpaTop)

        const limpaUp = upComing.filter( (m) => m.backdrop_path !== null && m.poster_path !== null && m.overview !== '')
        setUpComing(limpaUp)

        const limpaPop = tv.filter((m) => m.backdrop_path !== null && m.poster_path !== null && m.overview !== '' )
        setTv(limpaPop)

        const limpatoptv = toptv.filter((m) => m.backdrop_path !== null && m.poster_path !== null && m.overview !== '' )
        setToptv(limpatoptv)

        const limpaMovies = movies.filter( (m) => m.backdrop_path !== null && m.poster_path !== null && m.overview !== '')
        setMovies(limpaMovies)

        setLoading(false)

      },[])
      

  return (
    <main>
      {loading && <Spinner />}
      {movies && movies.length > 0 && (
        <div>
            <Title text="Filmes Populares"  />

            <div className="movie-section mb-5" tabIndex={0}>
                <div className="movie-row d-flex">
                  <Card type={"movie"} movies={movies} />
                </div>
            </div>
        </div>
      )}

      {toptv && toptv.length > 0 && (
        <div>
            <Title text="Top Séries"  />

            <div className="movie-section mb-5" tabIndex={0}>
                <div className="movie-row d-flex">
                  <Card type={"tv"} movies={toptv} />
                </div>
            </div>
        </div>
      )}

      {upComing && upComing.length > 0 && (
        <div>
           <Title text="Lançamentos" />

            <div className="movie-section mb-5" tabIndex={0}>
                <div className="movie-row d-flex">
                  <Card type={"movie"} movies={upComing} />
                </div>
            </div>
        </div>
      )}

      {top && top.length > 0 && (
        <div>
          
          <Title text="Top Filmes" />

          <div className="movie-section mb-5" tabIndex={0}>
              <div className="movie-row d-flex">
                <Card type={"movie"} movies={top} />
              </div>
          </div>

        </div>
      )}

      {tv && tv.length > 0 && (
        <div>
        
        <Title text="Séries"/>
          <div className="movie-section mb-5" tabIndex={0}>
              <div className="movie-row d-flex">
                 <Card type={"tv"} movies={tv} />
              </div>
          </div>
        </div>
      )}
    </main>
  )
}
export default Home
