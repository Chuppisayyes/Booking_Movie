import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowTime from "../component/ShowTime";
import Overview from "../component/Overview";
import { getMovieDetails } from "../../../Apis/cinemaAPI";

export default function Details() {
  const params = useParams();
  const [movies, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fectData = async () => {
      try {
        const movie = await getMovieDetails(params.movieId);
        setMovie(movie);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fectData();
  }, []);
  if (isLoading) {
    return <h1>loading...</h1>;
  }

  console.log(movies);
  const { ...movieDetails } = movies;
  return (
    <div>
      <Overview movie={movieDetails} />
      <ShowTime showTimes={movies.heThongRapChieu || []} />
    </div>
  );
}
