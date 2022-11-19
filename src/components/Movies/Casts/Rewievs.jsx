import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { searchFilmsByReviews } from '../../FechApi'
import css from './Casts.module.css'

// const IMAGE_FILM = 'https://image.tmdb.org/t/p/w500/'

export const Rewievs = () => {
    const { movieId } = useParams()
    const [movie, setMovie] = useState('')

    useEffect(() => {
        const getFilmById = async () => {
            try {
                const result = await searchFilmsByReviews(Number(movieId))
                setMovie(result)
            } catch (error) {
                alert('Oooops')
            }
        }
        getFilmById()
    }, [movieId])

    console.log(movie)

    return (movie.results.length > 0 ? (<ul className={css.listReview}>
        {movie.results.map(e => <li key={e.id}>
            <h4>{e.author}</h4>
            <p>{e.content}</p>
        </li>)}
    </ul>) : 'We don`t have any rewievs this movie')
}