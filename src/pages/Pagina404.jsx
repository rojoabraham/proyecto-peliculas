import { Link } from"react-router-dom";

const Pagina404 = () => {
  return (
    <div>
    <h1>Oops! La página que buscas no existe</h1>
    <p>Te recomendamos dar click en el siguiente link</p>
    <Link to='/'>Volver al Inicio</Link>
</div>
  )
}

export default Pagina404