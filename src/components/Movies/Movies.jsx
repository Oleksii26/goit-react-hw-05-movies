import { useState, useEffect } from 'react'
import css from './Movies.module.css'
import {searchFilmsByName} from '../FechApi'

export const Movies = () => {
    const [query, setQuery] = useState('')
    const [films, setFilms] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {
        
        const getFilmsData = async (query) => {

            try {
                const result = await searchFilmsByName(query)
                setFilms(films => [...result.results])
            } catch (error) {
                alert('Something went wrong')
            }
        }
        if(query !== '') {
            getFilmsData(query)
        }
        console.log(films)
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
        <ul>{films.map((e, i) => <li key={e.id + i}>{e.original_title}</li>)}</ul>
    </div>
}