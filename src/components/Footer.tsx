const Footer = () => {

  return (
    <footer>
        <div className="container p-2 p-md-4">
          <div className="credits d-md-flex justify-content-between align-items-center">
            <small className="text-secondary me-4 mt-1">This product uses the TMDB API but is not endorsed or certified by TMDB.</small>
            <a target="_blank" href="https://developer.themoviedb.org/docs/getting-started">
              <img src="https://raw.githubusercontent.com/camilaspenha/meu-app-tmdb/8fec7156a31833801a9e6ae17b38160c4ec152a1/docs/tmdb_logo.svg" alt="TMDB Logo" style={{width: '100px'}}/>
            </a>
          </div>
        </div>
      </footer>
  )
}

export default Footer
