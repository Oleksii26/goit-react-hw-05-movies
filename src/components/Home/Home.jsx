import css from './Home.module.css'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { popularFilms } from '../FechApi'
import { IMAGE_FILM } from '../FechApi';

const Home = () => {
const locations = useLocation()
    const [films, setFilms] = useState([])

    useEffect(() => {

        const getFilmsData = async () => {

            try {
                const result = await popularFilms()
                setFilms(result.results)

            } catch (error) {
                alert('Something went wrong')
            }
        }
        getFilmsData()
    }, [])

    return <div className={css.container}>
        <h2 className={css.title}>Trending today</h2>
        <div className={css.popular}>
            {films.map((e, i) => {
                return <div key={e.id + i} className={css.filmInformation}>
                    <Link className={css.link} to={`movies/${e.id}`} state={{ from: locations }} ><img className={css.cover} src={`${IMAGE_FILM}${e.backdrop_path}`}
                        alt={e.name || e.title} width={400} />
                        <p className={css.text}>{e.name || e.title}</p>
                    </Link>
                </div>
            })
            }
        </div>
    </div>
}

export default Home