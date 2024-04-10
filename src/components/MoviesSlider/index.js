import React from 'react'
import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import './index.css'

const MovieSlider = (props) => {
    const {moviesList} = props
    console.log(moviesList)
    const settings = {
        dots : false ,
        infinite : true ,
        speed : 500 ,
        slidesToShow : 3,
        slidesToScroll : 4 ,

    }
  return (
    <>
      <Slider {...settings}>
        { moviesList.map(each=> (
            <MovieItem movieDetails = {each} key={each.id}/>
        )) }
      </Slider>
    </>
  )
}

export default MovieSlider
