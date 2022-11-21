import { useState, useEffect } from 'react'
import css from './Movies.module.css'
import { searchFilmsByName } from '../FechApi'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { IMAGE_FILM } from '../FechApi'
import { NO_IMAGE } from '../FechApi'

const Movies = () => {
    const locations = useLocation()
    const [query, setQuery] = useState('')
    const [movie, setMovie] = useState([])
    const [params, setParams] = useSearchParams()

    useEffect(() => {
        const movieName = params.get('query')
        if (!movieName) return
        searchFilmsByName(movieName).then(data => setMovie(data.results))
    }, [params])

    const onChange = e => {
        setQuery(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault()
        setParams({ query })
    }
 
    return <div className={css.container}>
        <form onSubmit={onSubmit} action="">
            <input onChange={onChange} type="text" />
            <button type="submit">Search</button>
        </form>
        <div className={css.list}>
            {movie.map(e => <div className={css.item} key={e.id} >
                <img className={css.image} src={e.backdrop_path ? `${IMAGE_FILM}${e.backdrop_path}` : NO_IMAGE} alt={e.id} />
                <Link className={css.linkFilm} to={`${e.id}`} state={{ from: locations }}>{e.title || e.name}
                </Link>
            </div>)}
        </div>
    </div>
}
export default Movies