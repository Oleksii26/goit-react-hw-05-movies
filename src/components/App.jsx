import { Route, Routes, NavLink } from 'react-router-dom'
import { Home } from './Home/Home';
import { Movies } from './Movies/Movies';
import css from './App.module.css'
import { MovieDetails } from './Movies/MovieDetails';
import { Cast } from './Movies/Casts/Cast';
import { Rewievs } from './Movies/Casts/Rewievs';

export const App = () => {
 
  return (<>
    <div className={css.App}>
      <nav className={css.navigation}>
        <NavLink className={css.navLink} to='/'>Home</NavLink>
        <NavLink className={css.navLink} to='/movies'>Movies</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:movieId' element={<MovieDetails />} >
          <Route path='cast' element={<Cast />} />
          <Route path='rewievs' element={<Rewievs />} />
        </Route>
        <Route path='*' element={<Home />} />
      </Routes>
    </div>
  </>);
};
