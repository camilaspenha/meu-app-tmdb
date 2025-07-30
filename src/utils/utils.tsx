import type { Favorites } from "../types/Show";

const FAVORITES_KEY = 'cine_favorites';

export function handleScroll(): void {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  if (window.scrollY >= 30) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
}


//Retorna a lista de favoritos do LocalStorage
export function getFavorites(): Favorites[] {
  const raw = localStorage.getItem(FAVORITES_KEY);
  return raw ? JSON.parse(raw) : [];
}

//Retorna se um determinado filme está favorito
export function isFavorite(id:number): boolean {
  return getFavorites().some( f => f.id === id);
}
export function toggleFavorite( favorito: Favorites): void {    

    const atuais = getFavorites()
    let atualiza

  //Verifica se o filme é favorito
  const consultaFavorito = isFavorite(favorito.id)

  if(!consultaFavorito){
    atualiza = [...atuais, favorito]
  } else {
    atualiza = atuais.filter( (f) => f.id !== favorito.id)
  }
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(atualiza))
}