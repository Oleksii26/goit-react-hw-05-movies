import { Route, Routes, NavLink } from 'react-router-dom'
import { Home } from './Home/Home';
import { Movies } from './Movies/Movies';
import css from './App.module.css'
import { Films } from './Movies/MovieDetails';
import { Cast } from './Movies/Casts/Cast';
import { Rewievs } from './Movies/Casts/Rewievs';
// bn 
export const App = () => {
  // const [films, setFilms] = useState([])
  // const [isLoading, setIsLoading] = useState(false)
  // const [totalHits, setTotalHits] = useState('')
  // useEffect(() => {

  //   const getImageData = async () => {
  //     setIsLoading(true)
  //     try {
  //       const result = await popularFilms()
  //       setFilms(films => [...films, ...result.hits])
  //       setTotalHits(result.total)
  //     } catch (error) {
  //       alert('Something went wrong')
  //     }
  //     setIsLoading(false)
  //   }
  //   getImageData()



  // }, [])


  return (<>
    <div>
      <nav className={css.navigation}>
        <NavLink className={css.navLink} to='/'>Home</NavLink>
        <NavLink className={css.navLink} to='/movies'>Movies</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies/films' element={<Films />} >
          <Route path='cast' element={<Cast />} />
          <Route path='rewievs' element={<Rewievs />} />
        </Route>
        <Route path='/movies' element={<Movies />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </div>
  </>);
};
