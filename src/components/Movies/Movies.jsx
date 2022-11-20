import { useState, useEffect } from 'react'
import css from './Movies.module.css'
import { searchFilmsByName } from '../FechApi'
import { Link } from 'react-router-dom'
import { IMAGE_FILM } from '../FechApi'
import { NO_IMAGE } from '../FechApi'

export const Movies = () => {
    const [query, setQuery] = useState('')
    const [films, setFilms] = useState([])

    useEffect(() => {

        const getFilmsData = async (query) => {

            try {
                const result = await searchFilmsByName(query)
                setFilms([...result.results])
            } catch (error) {
                alert('Something went wrong')
            }
        }
        if (query !== '') {
            getFilmsData(query)
        }

    }, [query])

    const onSearch = e => {
        e.preventDefault()
        const query = e.target[0].value
        setQuery(query)
    }

    return <div className={css.container}>
        <form onSubmit={onSearch} action="">
            <input type="text" />
            <button type="submit">Search</button>
        </form>
        <div className={css.list}>
            {films.map(e => <div className={css.item} >
                <img className={css.image} src={e.backdrop_path ? `${IMAGE_FILM}${e.backdrop_path}` : NO_IMAGE} alt={e.id} />
                <Link className={css.linkFilm} to={`${e.id}`}>{e.title || e.name}
                </Link>
            </div>)}
        </div>
    </div>
}