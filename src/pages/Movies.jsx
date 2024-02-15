import { useEffect, useState } from 'react'
import { getAllMovies } from '../services/movieServices'
import MoviesList from '../components/MoviesList'
import MovieCard from '../components/MovieCard'

const Movies = () => {
  const [peliculas, setPeliculas] = useState([])

  const getMoviesData = async () => {
    try {
      const response = await getAllMovies()
      const data = await response.json()
      const { results } = data
      console.log(results)
      setPeliculas(results)
    } catch (error) {
      console.log('Paso un error', error)
    }
  }

  
  useEffect(() => {
    getMoviesData()
  }, [])

  return (
    <div className='bg-body-tertiary'>
      <h1 className='text-center'>Películas Populares</h1>

      <MoviesList>
      {peliculas.map((movie) => (<MovieCard 
      key={movie.id} 
      name={movie.title} 
      image={movie.poster_path}
      overview={movie.overview}
      />))}
    </MoviesList> 
    </div>
  )
}

export default Movies