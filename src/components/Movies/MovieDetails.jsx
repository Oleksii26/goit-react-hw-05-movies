import css from './Movies.module.css'
import { Link, Outlet, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { searchFilmsById } from '../FechApi'

const IMAGE_FILM = 'https://image.tmdb.org/t/p/w500/'

export const MovieDetails = () => {
    const { movieId } = useParams()
    const [movie, setMovie] = useState('')

    useEffect(() => {
        const getFilmById = async () => {
            try {
                const result = await searchFilmsById(Number(movieId))
                setMovie(result)
            } catch (error) {
                // alert('Oooops')
            }
        }
        getFilmById()
    }, [movieId])
    console.log(movie)
    const noPhoto = 'https://www.alfasolare.ru/a_solar_restyle/wp-content/themes/consultix/images/no-image-found-360x260.png'
    const { title, release_date, vote_average, backdrop_path, id, overview, /* genres */ } = movie
    // const releseYeahr = movie.release_date.slice(0, 4)
    return <div className={css.films}>
        <Link className={css.link} to='/'>← back</Link>

        <div className={css.contain}>
            <img src={backdrop_path ? `${IMAGE_FILM}${backdrop_path}` : noPhoto} alt={id} />
            <div className={css.about}>
                <h1>{title} {release_date/* .slice(0, 4) */}</h1>
                <p className={css.text}>User Score: {(vote_average * 10).toFixed()}%</p>
                <h2>Overview</h2>
                <p>{overview}</p>
                <h3>Genres</h3>

                {/* <p>{genres.map(e => <span>{e.name} </span> )}</p> */}
               
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
            <Outlet prop='manny' />
        </div>
    </div>
}