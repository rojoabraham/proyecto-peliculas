import React from 'react'
import './movieDetail.css'

const MovieDetail = ({ id, title, overview, image }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <img
              src={`https://image.tmdb.org/t/p/w500/${image}`}
              className="card-img-top"
              alt="Movie Image"
            />
          </div>
        </div>
        <div className='col-md-6'>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {overview}
            </p>
            <a href="#" className="btn btn-primary">
              Volver
            </a>
          </div>
        </div>

      </div>



    </div>

  )
}


export default MovieDetail