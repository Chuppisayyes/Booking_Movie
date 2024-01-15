import React from 'react'
import Banner from './Banner'
import Cinema from './Cinema'
import { useParams } from 'react-router-dom'


export default function Home() {
  const { movieId } = useParams()
  return (
    <div>
      <Banner movieId={movieId} />
      <MovieShowing />
      <Cinema />
      <News />
      <Application />
      <Footer />
    </div>
  )
}
