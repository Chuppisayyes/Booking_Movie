import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { FaCirclePlay } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import { getListOfFilms } from "../../../../Apis/movieApi";
import {
  Container,
  Card,
  ImageMovie,
  CardBottom,
  TitleMovieP,
  CardFooterMovie,
  CardFooterDescrip,
  ButtonBuyTicket,
  LayoutMovie,
  CardImage,
  ButtonTrailer,
} from "./MovieShowing.style";
import ModalMovie from "../../../../Components/Modals/ModalMovies";
import IsLoading from "../../../../Components/IsLoading/IsLoading";
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  rows: 2,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        rows: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        rows: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        rows: 5,

        slidesToScroll: 1,
      },
    },
  ],
};

export default function MovieShowing() {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [trailerMovie, settrailerMovie] = useState(null);
  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const dataMovies = await getListOfFilms();
        setMovies(dataMovies);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);
  const onOpenTrailer = (trailer) => {
    setIsOpen(true);
    settrailerMovie(trailer);
  };
  const navigate = useNavigate();
  if (isLoading) {
    return <IsLoading />;
  }
  return (
    <div className="mb-5">
      <Container id='0'>
        {isOpen && (
          <div>
            <ModalMovie trailerMovie={trailerMovie} onClose={() => setIsOpen()} />
          </div>
        )}
        <Slider {...settings}>
          {movies.map((movie) => {
            return (
              <Card className="card" key={movie.maPhim}>
                <CardImage>
                  <ImageMovie src={movie.hinhAnh} alt={movie.biDanh} />
                  <LayoutMovie></LayoutMovie>
                  <ButtonTrailer onClick={() => onOpenTrailer(movie.trailer)}>
                    <FaCirclePlay />
                  </ButtonTrailer>
                </CardImage>
                <ButtonBuyTicket onClick={() => navigate(`/details/${movie.maPhim}`)}>Mua Vé</ButtonBuyTicket>
                <CardBottom className="pt-1">
                  <TitleMovieP>C18 </TitleMovieP>
                  <h5 style={{ fontWeight: "bold", marginLeft: 2 }}>{movie.tenPhim}</h5>
                </CardBottom>
                <CardFooterMovie>
                  <CardFooterDescrip>{movie.moTa}</CardFooterDescrip>
                </CardFooterMovie>
              </Card>
            );
          })}
        </Slider>
      </Container>
    </div>
  );
}
