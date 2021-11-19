import { useEffect, useState } from 'react'
import { IMovieData } from '../interfaces/iMovieData'
import { API_KEY, URL_API } from '../utils/defines'

const useMoviList = () => {
    const [movies, setMovies] = useState<IMovieData[]>([])
    useEffect(() => {
        const getData = async () => {
            let dataJson = await fetch(
                `${URL_API}/movie/now_playing?api_key=${API_KEY}`
            )
            let data = await dataJson.json()
            setMovies(data.results)
        }
        getData()
    }, [])
    return { movies }
}

export default useMoviList
