import css from './Movies.module.css'
import { Link, Outlet } from 'react-router-dom'

export const Films = () => {

    return <div className={css.films}>
        <Link className={css.link} to='/'>← back</Link>

        <div className={css.contain}>
            <img className={css.img} src="" alt="" />
            <div className={css.about}>
                <h2>Super Film</h2>
                <p className={css.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis corporis atque reprehenderit. Modi necessitatibus quibusdam,
                    eos neque nesciunt ratione aperiam incidunt
                    fugit ex hic quas impedit consequuntur sed eum doloribus.</p>
                <h3>Autor: Baran</h3>
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
        <div className={css.about }>
            <Outlet />
        </div>
    </div>
}