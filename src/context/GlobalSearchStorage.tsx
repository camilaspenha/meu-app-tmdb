import { useState, type ReactNode } from 'react';
import {SearchContext} from './SearchContext'

export const GlobalSearchStorage = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState('')
  const [ isSearch, setSearch] = useState(false)
  const [loading, setLoading] = useState(false)
  const [searchForm, setSearchForm] = useState(false)


  return (
    <SearchContext.Provider value={{ query, setQuery, isSearch, setSearch, loading, setLoading, searchForm, setSearchForm}}>
      {children}
    </SearchContext.Provider>
  );
};




