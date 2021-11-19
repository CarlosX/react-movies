import { useCallback, useEffect, useState } from 'react'
import { IMovieData } from '../interfaces/iMovieData'
import { API_KEY, URL_API } from '../utils/defines'

const useMovieDetails = (movieId: string | undefined) => {
    const [movie, setMovie] = useState<IMovieData | null>(null)

    const getMovieDetails = useCallback(async () => {
        if (movieId === undefined) return null
        const response = await fetch(
            `${URL_API}/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits`
        )
        const movieDetails = await response.json()
        return movieDetails
    }, [movieId])

    useEffect(() => {
        const fetchData = async () => {
            const movieDetailsData = await getMovieDetails()
            setMovie(() => movieDetailsData)
        }
        fetchData()
    }, [getMovieDetails, movieId])

    return { movie }
}

export default useMovieDetails
