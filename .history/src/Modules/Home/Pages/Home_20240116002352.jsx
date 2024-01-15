import React from "react";
import MovieShowing from "../Components/MovieShowing/MovieShowing";
import Footer from "../../../Components/Footer";

export default function Home() {
  return (
    <div>
            <Banner movieId={movieId} />
      <MovieShowing />
      <Cinema />
      <News />
      <Application />
      <Footer />
      <MovieShowing />
    </div>
  );
}
