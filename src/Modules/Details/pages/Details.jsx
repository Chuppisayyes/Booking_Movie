import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../../Apis/cinemaAPI";
import Overview from "../component/Overview";
import ShowTime from "../component/ShowTime";
import IsLoading from "../../../Components/IsLoading/IsLoading";
export default function Details() {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getMovieScheduleInfo = async () => {
      try {
        setIsLoading(true);
        const movieScheduleInfo = await getMovieDetails(params.movieID);
        setMovie(movieScheduleInfo);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieScheduleInfo();
  }, []);
  if (isLoading) {
    return <IsLoading />;
  }
  if (!movie) {
    return;
  }
  const { heThongRapChieu: showtime, ...movieDetails } = movie;

  return (
    <div style={{ backgroundColor: "#0A2028" }}>
      <Overview movieDetails={movieDetails} />
      <ShowTime showTimes={showtime} />
    </div>
  );
}
