import React from 'react'
import Banner from '../Components/Banner'
import Cinema from '../Components/Cinema'
import MovieShowing from '../Components/MovieShowing'



const Home = () => {
  return (
    <div>
        <h1 className='bg-dark'>Header</h1>
        <Banner/>
        <MovieShowing/>
        <Cinema/>
    </div>
  )
}

export default Home