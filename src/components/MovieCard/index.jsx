import { NavLink} from 'react-router-dom'
import './movieCard.css'

const MovieCard = ({ id, name, image, overview }) => {
    let imagen = 'https://image.tmdb.org/t/p/w500/' + image
    return (
        <div className="col h-100">
            <div className="card d-flex align-items-stretch w-100 ">
                <img src={imagen} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                        {overview.length > 180 ? `${overview.substring(0, 180)}...` : overview} 
                    </p>
                </div>
                    <div className="card-footer text-center ">
                    <NavLink to={`/movie/${id}`} className="btn btn-primary">
                        Ver pelicula
                    </NavLink>
                    </div>
            </div>
        </div>
    );
}

export default MovieCard