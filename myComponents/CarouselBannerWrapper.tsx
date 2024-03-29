import CarouselBanner from "@/myComponents/CarouselsBanner";
import { getDiscoverMovies } from "@/functions/getMovies";

type Props = {
  id?: string;
  keywords?: string;
};

async function CarouselBannerWrapper({ id, keywords }: Props) {
  const movies = await getDiscoverMovies(id, keywords);

  return <CarouselBanner movies={movies} />;
}

export default CarouselBannerWrapper;