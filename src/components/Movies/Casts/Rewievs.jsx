import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { searchFilmsByReviews } from '../../FechApi'
import css from './Casts.module.css'

const Rewievs = () => {
    const { movieId } = useParams()
    const [movie, setMovie] = useState([])

    useEffect(() => {
        searchFilmsByReviews(movieId).then((data) => setMovie(data.results))
    }, [movieId])

    return ((movie.length > 0) ? (< ul className={css.listReview} >
        {movie.map(e => <li key={e.id}>
            <h4>{e.author}</h4>
            <p>{e.content}</p>
        </li>)
        }
    </ul >) : ('We don`t have any rewievs this movie'))
}
export default Rewievs