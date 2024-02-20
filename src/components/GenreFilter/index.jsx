import { useEffect, useState } from 'react'
import { getGenres } from '../../services/movieServices'


const GenreFilter = () => {
    const [genres, setGenres] = useState([])
    
    const getGenresList = async () => {
        try {
            const response = await getGenres()
            const data = await response.json()
            setGenres(data.genres) 
            console.log(genres)
        } catch (error) {
            console.log('Paso un error', error)
        }
    }


    useEffect(() => {
        getGenresList();
    }, []);

    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Genres
            </button>
            <ul className="dropdown-menu">
                {genres.map((genre) => (<li key={genre.id}><a key={genre.id} className="dropdown-item" href="#">{genre.name}</a></li>))}
            </ul>
        </div>)
}

export default GenreFilter