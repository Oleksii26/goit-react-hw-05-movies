import css from './Movies.module.css'
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { searchFilmsById } from '../FechApi'
import { IMAGE_FILM } from '../FechApi'
import { NO_PHOTO } from '../FechApi'

 const MovieDetails = () => {
   const navigate = useNavigate()
    const { movieId } = useParams('')
    const [movie, setMovie] = useState([])


    useEffect(() => {
        searchFilmsById(movieId).then((data) => setMovie(data))

    }, [movieId])

    const { release_date, vote_average, backdrop_path, id, overview, genres } = movie

    return <div className={css.films}>
        <Link className={css.link} onClick={() => navigate(-1)}>← back</Link>

        <div className={css.contain}>
            <img height={280} src={backdrop_path ? `${IMAGE_FILM}${backdrop_path}` : NO_PHOTO} alt={id} />
            <div className={css.about}>
                <h1>{movie.title}  ({`${release_date}`.slice(0, 4) || 'unknown'})</h1>
                <p className={css.text}>User Score: {(vote_average * 10).toFixed()}%</p>
                <h2>Overview</h2>
                <p>{overview}</p>
                <p>{genres ? genres.map(e => e.name).join(', ') : 'not information'}</p>
            </div>
        </div>
        <div className={css.cast}>
            <h4>Additional information</h4>
            <ul className={css.list}>
                <li  ><Link className={css.linkCast} to='cast'>Cast</Link></li>
                <li ><Link className={css.linkCast} to='rewievs'>Rewievs</Link></li>
            </ul>
        </div>
        <div className={css.about}>
            <Outlet />
        </div>
    </div>
}
export default MovieDetails