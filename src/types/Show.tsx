export type Show = {
  id: number
  title: string
  tagline: string
  poster_path: string
  overview: string
  vote_average: number
  release_date: string
  genres:{
    name: string
  }[]
  homepage: string
  belongs_to_collection:{
    name: string
    poster_path: string
  }
  type: string
  backdrop_path: string
}

export type Genre ={
  id: number
  name: string
}

export interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}

export interface Provider {
  provider_id: number;
  provider_name: string;
  logo_path: string;
}

export type Favorites = {
  id:number
  type?: string
}