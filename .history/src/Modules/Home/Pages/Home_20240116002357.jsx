import React from 'react'
import Banner from './Banner'
import Cinema from './Cinema'
import { useParams } from 'react-router-dom'
import News from './News/News'
import Application from './Application/Application'
import Footer from '../../Components/Footer'
import MovieShowing from './MovieShowing/MovieShowing'

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
