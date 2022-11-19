import css from './Movies.module.css'
import { Link, Outlet, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { searchFilmsById } from '../FechApi'

const IMAGE_FILM = 'https://image.tmdb.org/t/p/w500/'

export const MovieDetails = () => {
    const { movieId } = useParams()
    const [movie, setMovie] = useState('')


    useEffect(() => {
        searchFilmsById(movieId).then((data) => setMovie(data))
    }, [movieId])

  
    const noPhoto = 'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483097.jpg'
    const { title, release_date, vote_average, backdrop_path, id, overview, /* genres */ } = movie

    // console.log(genres[0].name)
 
    return <div className={css.films}>
        <Link className={css.link} to='/'>← back</Link>

        <div className={css.contain}>
            <img height={280} src={backdrop_path ? `${IMAGE_FILM}${backdrop_path}` : noPhoto} alt={id} />
            <div className={css.about}>
                <h1>{title} ({`${release_date}`.slice(0, 4)})</h1>
                <p className={css.text}>User Score: {(vote_average * 10).toFixed()}%</p>
                <h2>Overview</h2>
                <p>{overview}</p>
                {/* <h3>Genres</h3> */}
                {/* <p>{genre.map(e => e.id).join(', ')}</p> */}
                {/* <p>{genres}</p> */}
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