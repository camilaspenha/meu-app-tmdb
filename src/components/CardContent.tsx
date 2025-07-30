import { useState } from "react";
import type { Show } from "../types/Show";
import { getFavorites, isFavorite, toggleFavorite } from "../utils/utils";
import Modal from "./Modal";
import { BsHeart, BsHeartFill } from 'react-icons/bs';


interface Props {
  movie: Show
  type: string
}

const CardContent:React.FC<Props> = ({movie, type}) => {

  //Valida tipo: Série ou Filme se vier da lista de Favoritos
  const favs = getFavorites();
  function getType(id:number){
    if(!favs)
      return
    const favorito = favs.find( (f: {id:number}) => f.id === id)
    const movieType = favorito?.type ? favorito?.type : type

    return movieType
  }
  const validaType = type === 'favoritos' ? getType(movie.id) : type

   const favorito = {
      id: movie.id,
      type: type,
    }

    // Inicializa com o estado true ou false se o filme atual é favorito
    // -> favorited = true/false
    // -> serve pra validar se o ícone vem preenchido ou vazio
    const [favorited, setFavorited] = useState(isFavorite(movie.id));
    
    //Inverte o stado de favorited
    const handleToggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()

      //Recebe o filme e inverte -> adiciona ou retira do localStorage
      toggleFavorite(favorito);

      //Inverte o stado de favorited
      setFavorited(!favorited);
    };


  return (
    <>
      <div className='d-flex position-relative'>
         <div className="text-decoration-none me-3 movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              className="img-fluid h-100 movie-image"
              alt={movie.title}
              
            />
            <button
              id="btn-favoritar"
              className="btn btn-light position-absolute"
              onClick={(e) => handleToggleFavorite(e)}
              title="Favoritar"
            >
              {favorited ? <BsHeartFill color="red" /> : <BsHeart />}
            </button>
            <div id="card-overlay"
                data-type={validaType} 
                data-bs-toggle="modal" 
                data-bs-target={`#${movie.id.toString()}`}
                >
            </div>
        </div>
        <Modal id={movie.id.toString()} type={validaType}/>
      </div>
    </>
  )
}

export default CardContent

