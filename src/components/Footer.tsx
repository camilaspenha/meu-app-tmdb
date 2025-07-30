import { SITE_URL } from "../../constants/dados"

const Footer = () => {

  return (
    <footer>
        <div className="container p-4">
          <div className="credits d-md-flex justify-content-between align-items-center">
            <small className="text-secondary me-4 mt-1">This product uses the TMDB API but is not endorsed or certified by TMDB.</small>
            <a target="_blank" href="https://developer.themoviedb.org/docs/getting-started">
              <img src={`${SITE_URL}tmdb_logo.svg`} alt="TMDB Logo" style={{width: '100px'}}/>
            </a>
          </div>
        </div>
      </footer>
  )
}

export default Footer
