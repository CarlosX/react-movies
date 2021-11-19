import { useCallback, useEffect, useState } from 'react'
import { IMovieData } from '../interfaces/iMovieData'
import { API_KEY, URL_API } from '../utils/defines'

const useMovieSimilar = (movieId: string | undefined) => {
    const [movies, setMovies] = useState<IMovieData[]>([])

    const getMovieList = useCallback(async () => {
        const response = await fetch(
            `${URL_API}/movie/${movieId}/similar?api_key=${API_KEY}&page=1`
        )
        const data = await response.json()
        return data.results
    }, [movieId])

    useEffect(() => {
        const fetchData = async () => {
            const result = await getMovieList()
            setMovies(result)
        }
        fetchData()
    }, [movieId, getMovieList])

    return { movies }
}

export default useMovieSimilar
