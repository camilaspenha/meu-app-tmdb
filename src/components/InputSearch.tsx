import { useRef } from 'react';
import { useSearch } from '../context/useSearch';


const InputSearch = () => {

  const inputRef = useRef<HTMLInputElement>(null);
  const {query, setQuery, setSearch} = useSearch()

  

  const clean = () => {
      setQuery('')
      setSearch(false)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      const query = e.target.value;
      if(!query || query == ''){
        clean()
      } else {
        setQuery(query)
        setSearch(true)
      }
  };

  const handleClearSearch = () => {
    clean()
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="form-busca ms-4">
      <input
        type="text"
        id="busca"
        name="busca"
        className="form-control"
        placeholder="Buscar no site ..."
        onChange={handleSearch}
        ref={inputRef}
        value={query}
      />
      {query && (
          <i  
          id="btn-limpa-busca"
          onClick={handleClearSearch}
          className="bi bi-x-circle">
          </i>
      )}
    </div>
  )
}

export default InputSearch
