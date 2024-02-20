import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovie } from '../services/movieServices'
import MovieDetail from '../components/MovieDetail'

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({})

    const getMovieData = async () => {
      try {
        const response = await getMovie(id)
        const data = await response.json()
        //const { results } = data
        console.log(data)
        setMovie(data)
      } catch (error) {
        console.log('Paso un error', error)
      }
    }
 
    useEffect(() => {
        getMovieData();
      }, );

    return (
    <>
        <MovieDetail 
            id={movie.id}
            title={movie.title}
            overview={movie.overview}
            image={movie.poster_path}
            genres={movie.genres}
        />
    </>
  )
}

export default MovieDetails