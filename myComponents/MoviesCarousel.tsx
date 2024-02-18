import { Movie } from "@/typings"
import MovieCard from "./MovieCard"

type Props = {
  title : string,
  movies? : Movie[],
  isVertical? : boolean
}

function MoviesCarousel({title, movies, isVertical} : Props) {
  console.log('>>>> movies', movies)
  return (
    <div className="z-50">
      <h2>{title}</h2>
      {
       movies && movies.map((item:Movie) => (
          <MovieCard 
           key={item.id} 
           movie={item} 
           />
        ))
      }
    </div>
  )
}

export default MoviesCarousel