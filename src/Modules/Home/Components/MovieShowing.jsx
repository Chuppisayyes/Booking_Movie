import { useEffect, useState } from "react";
import { getListOfFilms } from "../../../Apis/movieApi";
import { Link, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";

const MovieShowing = () => {
  const [movies, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [trailer, setTrailer] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const getMovie = async () => {
      try {
        const movies = await getListOfFilms();
        setMovie(movies);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovie();
  }, []);
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return (
    <div>
      <div className="banner">
        <h1>movieShowing</h1>
        <ul>
          {movies.map((movie) => (
            <li key={movie.maPhim}>
              {movie.tenPhim}
              {/* <Link to={`/details/${movie.maPhim}`}>mua ve</Link> */}
              <button onClick={() => navigate(`/details/${movie.maPhim}`)}>Mua Ve</button>
              <button onClick={() => setTrailer(movie.trailer)}>trailer</button>
            </li>
          ))}
        </ul>
      </div>
      <ReactPlayer url={trailer} playing controls></ReactPlayer>
    </div>
  );
};

export default MovieShowing;
