import type { Favorites, Show } from "../types/Show"

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = "https://api.themoviedb.org/3"


export async function getNowplayingMovies(){
  const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=pt-BR`)

  if(!response.ok){
    throw new Error(`Erro ao buscar filmes populares`)
  }
  return response.json()
}
export async function getPopular(){
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR`)

  if(!response.ok){
    throw new Error(`Erro ao buscar filmes populares`)
  }
  return response.json()
}

export async function getTopRated(){
  const response = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=pt-BR`)

  if(!response.ok){
    throw new Error(`Erro ao buscar filmes populares`)
  }
  return response.json()
}

export async function getUpComing(){
  const response = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=pt-BR`)

  if(!response.ok){
    throw new Error(`Erro ao buscar filmes populares`)
  }
  return response.json()
}

export async function getLatest(){
  const response = await fetch(`${BASE_URL}/movie/latest?api_key=${API_KEY}&language=pt-BR`)

  if(!response.ok){
    throw new Error(`Erro ao buscar filmes populares`)
  }
  return response.json()
}

export async function getTvPopular(){
  const response = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}&language=pt-BR`)

  if(!response.ok){
    throw new Error(`Erro ao buscar filmes populares`)
  }
  return response.json()
}

export async function getTvTopRated(){
  const response = await fetch(`${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=pt-BR`)

  if(!response.ok){
    throw new Error(`Erro ao buscar filmes populares`)
  }
  return response.json()
}

export async function getGenres(){
  const response = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=pt-BR`)

  if(!response.ok){
    throw new Error(`Erro ao buscar filmes populares`)
  }
  return response.json()
}

export async function searchMovies(query: string) {

    try{
      const [movieRes, tvRes] = await Promise.all([
        fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${encodeURIComponent(query)}`),
        fetch(`${BASE_URL}/search/tv?api_key=${API_KEY}&language=pt-BR&query=${encodeURIComponent(query)}`),
      ]);

      const [movieData, tvData] = await Promise.all([
        movieRes.json(),
        tvRes.json(),
      ]);

      const combinedResults = [
        {type: "movies", results: movieData.results || [] },
        {type: "tv", results: tvData.results || [] }
      ]
      
      return combinedResults
    }catch{
      return []
    }

}

export const fetchItemById = async (favorito:Favorites): Promise<Show> => {
  const response = await fetch(`https://api.themoviedb.org/3/${favorito.type}/${favorito.id}?api_key=${API_KEY}&language=pt-BR`);
  if (!response.ok) {
    throw new Error(`Erro ao buscar item ${favorito.id}`);
  }
  return response.json();
};

export const fetchAllItems = async (favoritos: Favorites[]): Promise<Show[]> => {
  try {
    const results = await Promise.all(favoritos.map(favorito => fetchItemById(favorito)));
    return results; // array de objetos json
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
    return [];
  }
};