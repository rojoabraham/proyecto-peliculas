import React from 'react'
import './movieDetail.css'

const MovieDetail = ({ id, title, overview, image, genres=[] }) => {

console.log(genres)
const genresList = (genres) => {
genres.map((genre) => (<a key={genre.id} href="#" className="label">{genre.name}</a>) )

}  
  
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <img
              src={`https://image.tmdb.org/t/p/w500/${image}`}
              className="card-img-top"
              alt={title}
            />
          </div>
        </div>
        <div className='col-md-6'>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            {genres.map((genre) => (<a key={genre} href="#" className="label">1</a>) )}
            <p className="card-text">
              {overview}
            </p>
            <a href="/movies" className="btn btn-primary">
              Volver
            </a>
          </div>
        </div>

      </div>



    </div>

  )
}


export default MovieDetail