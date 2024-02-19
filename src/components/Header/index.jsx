import { NavLink } from 'react-router-dom'
import './header.css'
import logo from '../../assets/api logo.png'

const Header = () => {
    const linkIsActive = (isActive) => {
        return isActive ? 'header-list-link is-active' : 'header-list-link'
    }
  
    return (
    <header>
        <nav className="header">
            <NavLink to="/" className="header-logo">
                <img src={logo} className='logo' />
            </NavLink>
            <ul className="header-nav-list">
                <li>
                <NavLink to="/" 
                className= {({isActive}) => linkIsActive(isActive)}>
                    Home
                </NavLink>
                </li>
                <li>
                <NavLink to="/movies" className= {({isActive}) => linkIsActive(isActive)}>Películas</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className= {({isActive}) => linkIsActive(isActive)}>Nosotros</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header