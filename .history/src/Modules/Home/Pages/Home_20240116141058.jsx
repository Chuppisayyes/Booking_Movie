import React from "react";
import { useParams } from "react-router-dom";
import MovieShowing from "../Components/MovieShowing/MovieShowing";
import Cinema from "../Components/Cinema/CinemaSystems";
import Application from "../Components/Application/Application";
import News from "../Components/News/News";
import Banner from "../Components/Banner-FIX/Banner";
export default function Home() {
  const { movieId } = useParams();
  return (
    <div>
      <Banner />
      <MovieShowing />
      <Cinema />
      <News />
      {/* <Application /> */}
    </div>
  );
}
