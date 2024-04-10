import React from 'react'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = (props) => {
    const {movieDetails} = props
    const {thumbnailUrl , videoUrl} = movieDetails
  return (
    <div>
      <Popup trigger={ <img src={thumbnailUrl} alt='movie' className='thumbnail'/>} 
      position="top left">
      {close => (
          <div className="modal-container">
            <button
              className="close-button"
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size={20} color="#231f20" />
            </button>
            <div className="video-wrapper">
              <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
            </div>
          </div>
        )}
    </Popup>
    </div>
  )
}

export default MovieItem;
