import React from 'react'

const MoviesList = ({children}) => {
  return (
    <div className='album py-5'>
    <div className='container'>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
        {children}
      </div>
    </div>
  </div>
)
}

export default MoviesList