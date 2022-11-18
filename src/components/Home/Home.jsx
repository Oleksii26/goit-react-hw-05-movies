import css from './Home.module.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { popularFilms } from '../FechApi'

const IMAGE_FILM = 'https://image.tmdb.org/t/p/w500/'

export const Home = () => {
    const [films, setFilms] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [totalHits, setTotalHits] = useState([])

    useEffect(() => {

        const getImageData = async () => {
            setIsLoading(true)
            try {
                const result = await popularFilms()
                setFilms(films => [...films, ...result.results])
                setTotalHits(result.results)
                console.log(result.results)
            } catch (error) {
                alert('Something went wrong')
            }
            setIsLoading(false)
        }
        getImageData()
    }, [])
    return <div className={css.container}>
        <h2>Trending today</h2>
        <div className={css.popular}>
            {films.map(e => {
                return <div className={css.filmInformation}>
                    <Link key={e.id} className={css.link} to='/movies/films' ><img className={css.cover} src={`${IMAGE_FILM}${e.backdrop_path}`}
                        alt={e.name || e.title} width={250} />
                        <p className={css.text}>{e.name || e.title}</p>
                    </Link>
                </div>
            })
            }
        </div>
    </div>
}