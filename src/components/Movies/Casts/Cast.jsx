import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { searchFilmsByCredits } from '../../FechApi'
import css from './Casts.module.css'
import { IMAGE_FILM } from '../../FechApi'

 const Cast = () => {
    const { movieId } = useParams()
    const [movie, setMovie] = useState([])


    useEffect(() => {
        searchFilmsByCredits(movieId).then((data) => setMovie(data.cast))

    }, [movieId])

    return (movie.length ? (<ul className={css.list}>
        {movie.map(e => <li key={e.cast_id}>
            <img className={css.image} src={e.profile_path ? `${IMAGE_FILM}${e.profile_path}`:`https://museum-literature.odessa.ua/wp-content/uploads/2019/05/no-photo.png`}
                alt={e.name} /><p>{e.name}</p></li>)}
    </ul>) :  <p>Not information</p> )
}
export default Cast