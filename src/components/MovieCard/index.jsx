import { NavLink} from 'react-router-dom'

const MovieCard = ({ name, image, overview }) => {
    let imagen = 'https://image.tmdb.org/t/p/w500/' + image
    return (
        <div className="col">
            <div className="card" style={{ width: "18rem" }}>
                <img src={imagen} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                        {overview} 
                    </p>
                </div>
                    <div className="card-footer text-center">
                    <NavLink to={`/movies/${name}`} className="btn btn-primary">
                        Ver pelicula
                    </NavLink>
                    </div>
            </div>
        </div>
    );
}

export default MovieCard