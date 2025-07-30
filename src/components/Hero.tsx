import { SITE_URL } from "../../constants/dados"

const Hero = () => {
  return (
    <section id="hero" style={{backgroundImage: `${SITE_URL}/hero_bg.jpg`}}>
        <div className="container">
          <h1>The Movie Database <span className="text-warning">TMDB API</span></h1>
          <h4>Uma interface de catálogo com busca, detalhes de filmes e avaliações</h4>
        </div>
      </section>
  )
}

export default Hero
