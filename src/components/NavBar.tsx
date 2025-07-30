import { Link } from "react-router-dom"
import InputSearch from "./InputSearch"


const NavBar= () => {
  return (
    <>
    <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-body-dark">
      <div className="container-fluid">
        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item text-end mt-4 mt-lg-0">
              <Link to="/" className="nav-link text-light">Início</Link>
            </li>
            <li className="nav-item text-end">
              <Link to="/favoritos" className="nav-link text-light">Favoritos</Link>
            </li>
          </ul>
           <InputSearch />
        </div>
      </div>
    </nav>
    </>
  )
}

export default NavBar
