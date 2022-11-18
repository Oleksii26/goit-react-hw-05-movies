import { useState } from 'react'
import css from './Movies.module.css'

export const Movies = () => {
    const [query, setQuery] = useState('')
    const [data, setData] = useState([])

    const onSearch = e => {
        e.preventDefault()
        // const query = e.target[0].value
        setQuery(query)
        setData([...data, query])
    }

    return <div className={css.container}>
        <form onSubmit={onSearch} action="">
            <input type="text" />
            <button type="submit">Search</button>
        </form>
        <ul>{[...data].map(e => <li key={e}>{e}</li>)}</ul>
    </div>
}