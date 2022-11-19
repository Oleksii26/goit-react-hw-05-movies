import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { searchFilmsByCredits } from '../../FechApi'
import css from './Casts.module.css'

const IMAGE_FILM = 'https://image.tmdb.org/t/p/w500/'

export const Cast = () => {
    const { movieId } = useParams()
    const [movie, setMovie] = useState('')

    useEffect(() => {
        const getFilmById = async () => {
            try {
                const result = await searchFilmsByCredits(Number(movieId))
                setMovie(result)
            } catch (error) {
                alert('Oooops')
            }
        }
        getFilmById()
    }, [movieId])

    console.log(movie)
    
    return <ul className={css.list}>
        {movie.cast.map(e => <li key={e.cast_id}>
            <img className={css.image}src={`${IMAGE_FILM}${e.profile_path}`}
                alt={e.original_name} /><p> {e.original_name}</p></li>)}
    </ul>
}