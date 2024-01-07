import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../../Apis/cinemaAPI";
import Overview from "../component/Overview";
import ShowTime from "../component/ShowTime";
export default function Details() {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  useEffect(() => {
    const getMovieScheduleInfo = async () => {
      try {
        const movieScheduleInfo = await getMovieDetails(params.movieID);
        setMovie(movieScheduleInfo);
      } catch (error) {
        console.error(error);
      }
    };
    getMovieScheduleInfo();
  }, []);
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
