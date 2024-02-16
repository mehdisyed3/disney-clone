import MoviesCarousel from "@/myComponents/MoviesCarousel";
import { getUpcomingMovies, getTopRatedMovies, getPopularMovies } from "@/functions/getMovies";

export default async function Home() {

  const upcomingMovies = await getUpcomingMovies()
  const topRatedMovies = await getTopRatedMovies()
  const popularMovies = await getPopularMovies()

  return (
    <main>
      <h1 className=""> Let's build disney</h1>

    <div>
      <MoviesCarousel 
      movies={upcomingMovies || []} 
      title ={'Upcoming Movies'} 
      />
      <MoviesCarousel 
      movies={topRatedMovies} 
      title ={'Top Rated Movies'} 
      />
      <MoviesCarousel 
      movies={popularMovies} 
      title ={'Popular Movies'} 
      />

    </div>
    </main>
  );
}
