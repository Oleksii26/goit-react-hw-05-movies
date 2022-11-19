import axios from "axios";

const API_KEY = '6e9a81a407105e7aedf1637991fa6ef2'
axios.defaults.baseURL = 'https://api.themoviedb.org/3'

// Популярні фільми

export const popularFilms = async () => {
    const { data } = await axios.get(`/trending/all/day?api_key=${API_KEY}`)
    return data
}

//Пошук за запитом

export const searchFilmsByName = async (query) => {
    const { data } = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}`)
    return data
}

//Пошук по айді інформації про фільм

export const searchFilmsById = async (id) => {
    const { data } = await axios.get(`/movie/${id}?api_key=${API_KEY}`)
    return data
}

//Пошук по айді інформації про акторський склад

export const searchFilmsByCredits = async (id) => {
    const { data } = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`)
    return data
}

//Пошук по айді інформації ревь'ю

export const searchFilmsByReviews  = async (id) => {
    const { data } = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`)
    return data
}
