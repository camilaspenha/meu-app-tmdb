import { useState } from "react";
import { isFavorite, toggleFavorite } from "../utils/utils";
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { useSearch } from "../context/useSearch";


interface Props{
  id: number
  type?:string
}


const BtnFavoritar:React.FC<Props> = ({id, type}) => {

  const favorito = {
    id: id,
    type: type,
  }

  const {setLoading} = useSearch();
  

  // Inicializa com o estado true ou false se o filme atual é favorito
    // -> favorited = true/false
    // -> serve pra validar se o ícone vem preenchido ou vazio
    const [favorited, setFavorited] = useState(isFavorite(id));

  //Inverte o stado de favorited
    const handleToggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
      
      setLoading(true)
      e.preventDefault()

      //Recebe o filme e inverte -> adiciona ou retira do localStorage
      toggleFavorite(favorito);

      //Inverte o stado de favorited
      setFavorited(!favorited);
      setLoading(false)
    };

  return (
    <button
      id="btn-favoritar"
      className="btn btn-light position-absolute"
      onClick={(e) => handleToggleFavorite(e)}
      title="Favoritar"
    >
      {favorited ? <BsHeartFill color="red" /> : <BsHeart />}
    </button>
  )
}

export default BtnFavoritar
