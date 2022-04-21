import './App.css';
import searchIcon from './search.svg';
import {useState,useEffect} from 'react';
import Movie from './Movie.js'


//api movie connection
const apiUrl = 'http://www.omdbapi.com?apikey=e3eab413';
function App() {

  const moviesList = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();
    // 
    setMovies(data.Search);
    console.log(movies);
  }

  const movie1 = {
      Title: "Dragon Ball Z",
      Year: "1989–2003",
      imdbID: "tt0214341",
      Type: "series",
      Poster: "https://m.media-amazon.com/images/M/MV5BNGM5MTEyZDItZWNhOS00NzNkLTgwZTAtNWIzY2IzZmExOWMxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
  }
  useEffect(() => {
    return () => {
      moviesList('dragon ball');
    };
  }, []);

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className='app'>
      <h1>MovieLand Yeah</h1>

      <div className='search'>
        <input
          placeholder='Search Movies Here'
          value={searchTerm}
          onChange={(e)=>{
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={searchIcon}
          alt='searchIcon'
          onClick={() => {
            moviesList(searchTerm);
          }}
        />
      </div>

      
      {
        movies?.length > 0
        ?
        (
          <div className='container'>
              {movies.map((movie)=>(
                <Movie movie={movie}/>
              ))}
          </div>
        )
        :
        (
          <div className='empty'>
            <h2>Movies Not Found ...</h2>
          </div>
        )
      }
      <h3 className='copy'>Copyright Geekers-Joel237 2022</h3>
    </div>
     
  )
}

export default App;
