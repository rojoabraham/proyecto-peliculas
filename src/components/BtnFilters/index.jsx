import { useState } from 'react';
import { getAllMovies } from '../services/movieServices'

const ButtonGroupComponent = () => {
  const [activeButton, setActiveButton] = useState(0);
  const [tipo, setTipo] = useState('Populares')
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

  return (
    <div className="btn-group">
      {buttons.map((label, index) => (
        <button
          key={index}
          type="button"
          className={`btn ${activeButton === index ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => handleClick(index)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default ButtonGroupComponent;