import { Route, Routes, NavLink } from 'react-router-dom'
import css from './App.module.css'
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./Home/Home'))
const Movies = lazy(() => import('./Movies/Movies'))
const MovieDetails = lazy(() => import('./Movies/MovieDetails'))
const Cast = lazy(() => import('./Movies/Casts/Cast'))
const Rewievs = lazy(() => import('./Movies/Casts/Rewievs'))

export const App = () => {

  return (<Suspense fallback={<>Page is loading...</>}>
    <div className={css.App}>
      <nav className={css.navigation}>
        <NavLink className={css.navLink} to='/'>Home</NavLink>
        <NavLink className={css.navLink} to='/movies'>Movies</NavLink>
      </nav>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:movieId' element={<MovieDetails />} >
          <Route path='cast' element={<Cast />} />
          <Route path='rewievs' element={<Rewievs />} />
        </Route>
        <Route path='*' element={<Home />} />
      </Routes>
    </div>
  </Suspense>
  );
};
