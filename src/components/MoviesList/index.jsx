import React from 'react'

const MoviesList = ({children}) => {
  return (
    <div className='album py-5'>
    <div className='container'>
      <div className='row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3'>
        {children}
      </div>
    </div>
  </div>
)
}

export default MoviesList