import React from 'react'
import { useRef, useState } from "react";
import debounce from 'lodash/debounce';
import { Link } from 'react-router-dom';

interface Props {
  query: string
  loading: boolean
  setIsSearching: (param: boolean) => void
  setLoading: (param: boolean) => void
  setQuery: (param: string) => void
}

const Header: React.FC<Props> = ({setIsSearching, setQuery, setLoading}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearch = debounce(async (query: string) => {
      if (!query) {
        setIsSearching(false);
        setQuery('')
        return;
      }
      setIsSearching(true);
      setQuery(query)
    }, 500);
  
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoading(true)
      const value = e.target.value;
  
      if(!value || value == '')
        setLoading(false)
        setSearchTerm(value);
        localStorage.clear()
        localStorage.setItem('search', value)
      debouncedSearch(value);
    };
  
    const handleClearSearch = () => {
      setSearchTerm('');
      setIsSearching(false);
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

  return (
     <header>
        <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-body-dark">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Início</Link>
                </li>
                <li className="nav-item">
                  <Link to="/favorites" className="nav-link">Favoritos</Link>
                </li>
              </ul>
              <div className="form-busca ms-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar..."
                  onChange={handleSearch}
                  ref={inputRef}
                  value={searchTerm}
                />
                {searchTerm && (
                    <i  
                    id="btn-limpa-busca"
                    onClick={handleClearSearch}
                    className="bi bi-x-circle">
                    </i>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
  )
}

export default Header
