import MoviesCarousel from "@/myComponents/MoviesCarousel";
import { getUpcomingMovies, getTopRatedMovies, getPopularMovies } from "@/functions/getMovies";
import CarouselBannerWrapper from "@/myComponents/CarouselBannerWrapper";

export default async function Home() {

  const upcomingMovies = await getUpcomingMovies()
  const topRatedMovies = await getTopRatedMovies()
  const popularMovies = await getPopularMovies()

  return (
    <main>
      <CarouselBannerWrapper />

      <div>
        <MoviesCarousel
          movies={upcomingMovies || []}
          title={'Upcoming Movies'}
        />
        <MoviesCarousel
          movies={topRatedMovies}
          title={'Top Rated Movies'}
        />
        <MoviesCarousel
          movies={popularMovies}
          title={'Popular Movies'}
        />

      </div>
    </main>
  );
}
