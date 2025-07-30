import React from 'react'
import type { Show } from '../types/Show'
import CardContent from './CardContent'

interface Props {
  movies: Show[]
  type: string
}

const Card: React.FC<Props>  = ({movies, type}) => {

  return (
    <>
      {movies.map( (movie) => (
        <CardContent key={movie.id} movie={movie} type={type}/>
      ))}
    </>
  )
}

export default Card

