import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div
        className="row justify-content-center align-items-center"
        style={{ height: "90vh" }}
      >
        <div className="col-12 col-md-8 col-lg-6">
          <h1 className="mb-4 text-center">Bienvenido a nuestra API de Películas</h1>
          <p className="mb-4 text-center">
            Da click para ir al listado de películas
          </p>
          <NavLink to="/movies" className="btn btn-primary btn-lg d-flex justify-content-center ">
            Ver Películas
          </NavLink>
        </div>
      </div>

    </>
  )
}

export default Home