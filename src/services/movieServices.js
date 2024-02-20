//import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3'

// const config = {
//     'Content-Type': 'application/json',
//     headers: { Authorization: 'Bearer 3ca964b421124ea839b827d0a63a93e4'}
// }

// const getAllMovies = async () => axios.get(BASE_URL+'/movie/popular', {config})

const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2E5NjRiNDIxMTI0ZWE4MzliODI3ZDBhNjNhOTNlNCIsInN1YiI6IjY1Y2Q5YmM5YTNiNWU2MDE0ODJiODk4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FZ6Yu72nexSSeH1gDJQXzrsMlTbIfjx131zaKgHLG44'
    }
  };
  
const getAllMovies = async (type = 'popular') => fetch(`${BASE_URL}/movie/${type}?language=en-US&page=1`, options)

const getMovie = async (movieId) => fetch(`${BASE_URL}/movie/${movieId}`, options)

const getGenres = async() => fetch(`${BASE_URL}/genre/movie/list`, options)

const getMovieByGenre = async( type ='popular', genre) => fetch(`${BASE_URL}/discover/movie?with_genres=${genre}`, options)


export { getAllMovies, getMovie, getGenres, getMovieByGenre }