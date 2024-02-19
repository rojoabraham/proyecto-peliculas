import { useEffect, useState } from 'react'
import { getAllMovies } from '../services/movieServices'
import MoviesList from '../components/MoviesList'
import MovieCard from '../components/MovieCard'

const Movies = () => {
  const [peliculas, setPeliculas] = useState([])
  const [tipo, setTipo] = useState('Populares')
  const [activeButton, setActiveButton] = useState(0);
  const buttons = [
    {id:0, label: 'popular', name: 'Populares'},
    {id:1, label: 'top_rated', name: 'Top Rated'},
    {id:2, label: 'upcoming', name: 'Upcoming'}];

  const getMoviesData = async (type) => {
    try {
      const response = await getAllMovies(type)
      const data = await response.json()
      const { results } = data
      setPeliculas(results)
    } catch (error) {
      console.log('Paso un error', error)
    }
  }

  const handleClick = (value) => {
    setActiveButton(value.id)
    getMoviesData(value.label);
    if(value.label==='upcoming') {
      setTipo('Upcoming');
    } else if(value.label==='top_rated') {
      setTipo('Top Rated');
    } else {
      setTipo('Populares')
    }
  };

  useEffect(() => {
    getMoviesData()
  }, [])

  return (
    <div className='bg-body-tertiary'>
      <h1 className='text-center'>Películas {tipo}</h1>
      <div className='d-flex justify-content-center'>
        <span className='text-center'>Filtrar:&nbsp;</span>
        <div className="btn-group">
      {buttons.map((value) => (
        <button
          key={value.id}
          type="button"
          className={`btn ${activeButton === value.id ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => handleClick(value)}
        >
          {value.name}
        </button>
      ))}
    </div>
      </div>
  

      <MoviesList>
      {peliculas.map((movie) => (<MovieCard 
      key={movie.id}
      id={movie.id} 
      name={movie.title} 
      image={movie.poster_path}
      overview={movie.overview}
      />))}
    </MoviesList> 
    </div>
  )
}

export default Movies