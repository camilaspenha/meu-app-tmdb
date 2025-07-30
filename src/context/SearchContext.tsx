import { createContext } from 'react';

type SearchContextType = {
  query: string,
  isSearch: boolean,
  loading: boolean,
  searchForm: boolean,
  setSearch: (value: boolean) => void,
  setQuery: (value: string) => void,
  setLoading: (value: boolean) => void,
  setSearchForm: (value: boolean) => void,
};

export const SearchContext = createContext<SearchContextType | undefined>(undefined);