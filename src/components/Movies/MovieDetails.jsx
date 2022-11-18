import css from './Movies.module.css'
import { Link, Outlet, useParams } from 'react-router-dom'

export const MovieDetails = () => {
    const { movieId } = useParams()

    console.log(movieId.films)
    return <div className={css.films}>
        <Link className={css.link} to='/'>← back</Link>

        <div className={css.contain}>
            <img className={css.img} src="" alt="" />
            <div className={css.about}>
                <h2>title</h2>
                <p className={css.text}>789qwezxc</p>
                <h3>Autor: </h3>
                <h3>Genres: Action</h3>
            </div>
        </div>
        <div className={css.cast}>
            <h4>Additional information</h4>
            <ul className={css.list}>
                <li ><Link className={css.linkCast} to='cast'>Cast</Link></li>
                <li ><Link className={css.linkCast} to='rewievs'>Rewievs</Link></li>
            </ul>
        </div>
        <div className={css.about}>
            <Outlet />
        </div>
    </div>
}