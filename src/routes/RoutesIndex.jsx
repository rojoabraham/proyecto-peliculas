import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Movies from '../pages/Movies'
import About from '../pages/About'
import Pagina404 from '../pages/Pagina404'
import MovieDetails from '../pages/MovieDetails'

const RoutesIndex = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movies' element={<Movies />} />
        <Route path='movie/:id' element={<MovieDetails/>}/>
        <Route path='about' element={<About />} />
        <Route path='*' element={<Pagina404 />}/>
    </Routes>
  )
}

export default RoutesIndex