import { NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
    const linkIsActive = (isActive) => {
        return isActive ? 'header-list-link is-active' : 'header-list-link'
    }
  
    return (
    <header>
        <nav className="header">
            <NavLink to="/" className="header-logo">API Películas</NavLink>
            <ul className="header-nav-list">
                <li>
                <NavLink to="/" 
                className= {({isActive}) => linkIsActive(isActive)}>
                    Home
                </NavLink>
                </li>
                <li>
                <NavLink to="/movies" className= {({isActive}) => linkIsActive(isActive)}>Movies</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className= {({isActive}) => linkIsActive(isActive)}>About</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header