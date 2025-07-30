import { useEffect, useState } from 'react';
import { getFavorites } from '../utils/utils';
import Card from '../components/Card';
import { useSearch } from '../context/useSearch';
import type { Show } from '../types/Show';
import Spinner from './Spinner';
import Title from './Title';
import { fetchAllItems } from '../services/tmdb';


const FavoritosList = () => {

  const [movies, setMovies] = useState<Show[]>([])
  const {loading, setLoading} = useSearch();
  const favoritos = getFavorites();
  
   useEffect(() => {

    setLoading(true)
    fetchAllItems(favoritos).then(data => {
        setMovies(data)
    });
    setLoading(false)
  }, [loading]);
  
  return (
    <>
      {loading && <Spinner />}

      {movies.length > 0 ? (
        <>
          <div className='mt-2'>
            <Title text="Meus Favoritos">
              <span className="badge text-bg-warning">{movies.length}</span>                
            </Title>
          </div>
          <div className="container conteiner-favoritos">
            <div className="movie-section mb-5" tabIndex={0}>
            <div className="movie-row d-flex">
                <Card type={'favoritos'} movies={movies} />
            </div>
          </div>
          </div>
        </>
      ) : (

        <div className="container px-4">
          <h3 className="text-warning">Ops!</h3>
          <h5 className="mt-4">Nenhum favorito ainda.</h5>
          <p>Comece com uma busca de títulos ;) </p>
        </div>
      ) }


    </>
  )
}

export default FavoritosList
