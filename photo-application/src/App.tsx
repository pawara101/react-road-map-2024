import { useState, useEffect } from 'react';
import './App.css'
import Search from './components/Search.tsx';
import Spinner from './components/Spinner.tsx';
import MovieCard from './components/MovieCard.tsx';
import {useDebounce} from 'react-use';


const API_BASE_URL:string = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  useDebounce(() => {setDebouncedSearchTerm(searchTerm)}, 500, [searchTerm]);

  const fetchMovies = async (term: string) => {
    setIsLoading(true)
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`
      const response = await fetch(endpoint, API_OPTIONS)

      if(!response.ok){
        throw new Error('Failed to fetch movies');
      }

      const data = await response.json()
      if(data.Response === 'False'){
        setErrorMessage(data.Erroe || 'Failed to fetch Movies');
        setMovieList([]);
        return;
      }
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage('Opps!!! Error fetching movies. Please try again later')
    } finally{
      setIsLoading(false)
    }
  }

  useEffect(()=> {
    fetchMovies(debouncedSearchTerm);
  },[debouncedSearchTerm])

  return (
    <main>
      <div className='pattern'></div>
      <div className='wrapper'>
        <header>
          <h1>
            Find <span className='text-gradient'>Movies</span> You will Enjoy without hassle
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        <section className="all-movies">
          <h2>All Movies</h2>
          {isLoading ? (
            <Spinner/>
          ): errorMessage ? (
            <p className='text-red-500'>{errorMessage}</p>
          ): (
            <ul>
              {movieList.map((movie) => (
                <MovieCard/>
              ))}
            </ul>
          )}

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </section>
      </div>
    </main>
  )
}

export default App

