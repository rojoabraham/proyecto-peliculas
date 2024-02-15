import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Movies from '../pages/Movies'
import About from '../pages/About'

const RoutesIndex = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movies' element={<Movies />} />
        <Route path='about' element={<About />} />
    </Routes>
  )
}

export default RoutesIndex