import { useCallback, useState } from 'react'
import { API_KEY, URL_API } from '../utils/defines'

const useMovieActions = (movieId: number) => {
    const [errorRating, setErrorRating] = useState('')
    const postMovieRating = useCallback(
        async (rating: number) => {
            if (movieId === undefined) return null
            try {
                const response = await fetch(
                    `${URL_API}/movie/${movieId}/rating?api_key=${API_KEY}`,
                    {
                        method: 'POST',
                        body: JSON.stringify({
                            value: rating,
                        }),
                    }
                )
                if (response.status === 401) {
                    setErrorRating(() => 'Error Servicio!')
                } else {
                    const movieDetails = await response.json()
                    return movieDetails
                }
            } catch (error) {
                setErrorRating(() => 'Error Servicio!')
            }
            return null
        },
        [movieId]
    )
    return { postMovieRating, errorRating }
}

export default useMovieActions
