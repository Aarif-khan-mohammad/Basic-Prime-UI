import React from 'react'
import'./index.css'
import MovieSlider from '../MoviesSlider'

const PrimeVideo = (props) => {
    const {moviesList} = props
    
    const comedyMovie = moviesList.filter(m => m.categoryId === "COMEDY")
    const actionMovie = moviesList.filter(m => m.categoryId === "ACTION")

  return (
    <div className='main-container'>
      <header className='header'>
        <img src='https://assets.ccbp.in/frontend/react-js/prime-video-img.png' alt='prime' className='prime'/>
      </header>
      <div className='slicks-container'>
        <h2>Action Movies</h2>
        <MovieSlider moviesList={actionMovie} />
        <h2>Comedy Movies</h2>
        <MovieSlider moviesList={comedyMovie} />
      </div>
        
      
    </div>
  )
}

export default PrimeVideo
