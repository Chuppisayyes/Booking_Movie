import React from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../Components/Banner'
import MovieShowing from '../Components/MovieShowing/MovieShowing'

export default function Home() {
  const { movieId } = useParams()
  return (
    <div>
      <Banner movieId={movieId} />
      <MovieShowing />
      <Cinema/>
      <News/>
      <Application />
      <Footer />
    </div>
  )
}
