import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import { toast } from 'react-toastify'
import { Rating } from 'react-simple-star-rating'
import { IMovieData } from '../../interfaces/iMovieData'
import useMovieActions from '../../hooks/useMovieActions'
import { useStore } from '../../stores'
import 'react-circular-progressbar/dist/styles.css'
import './movieActions.css'

interface IMovieActionsProps {
    movie: IMovieData
}

const MovieActions = ({ movie }: IMovieActionsProps) => {
    const { id, vote_average } = movie
    const { state, dispatch } = useStore()
    const { postMovieRating, errorRating } = useMovieActions(id)
    let rateValue = Math.round(vote_average * 10)
    let rating = 0
    let isFavorite = false
    if (state.listFavorites.length > 0) {
        isFavorite = state.listFavorites.some((item) => item.id === id)
    }
    const handleRating = (rating: number) => {
        postMovieRating(rating)
    }

    const handleFavorite = () => {
        if (isFavorite) {
            toast.success("Se ha borrado correctamente!")
            dispatch({ type: 'REMOVE_FAVORITE', payload: id })
        } else {
            const { poster_path, title, release_date } = movie
            toast.success("Se agregó como favorito!")
            dispatch({
                type: 'ADD_FAVORITE',
                payload: {
                    id,
                    title,
                    poster_path,
                    release_date,
                    vote_average,
                },
            })
        }
    }

    return (
        <ul className="movie-actions p-0">
            <li>
                <div style={{ width: 80, height: 80, color: '#fff' }}>
                    <CircularProgressbarWithChildren
                        value={rateValue}
                        background
                        backgroundPadding={6}
                    >
                        <img
                            style={{ width: 40, marginTop: -5 }}
                            src="https://i.imgur.com/b9NyUGm.png"
                            alt="doge"
                        />
                        <div style={{ fontSize: 12, marginTop: -5 }}>
                            <strong>{`${rateValue}%`}</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
            </li>
            <li>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-favorite`}>
                            {!isFavorite ? (
                                <>
                                    Marcar como <strong>favorito</strong>
                                </>
                            ) : (
                                <>
                                    Remover de <strong>favorito</strong>
                                </>
                            )}
                        </Tooltip>
                    }
                >
                    <Button
                        variant="secondary"
                        className="rounded-circle"
                        onClick={handleFavorite}
                    >
                        <i
                            className={`fas fa-heart ${
                                isFavorite ? 'text-danger' : ''
                            }`}
                        />
                    </Button>
                </OverlayTrigger>
            </li>
            <li>
                <div className="position-relative">
                    {errorRating ? (
                        <span className="text-danger">{errorRating}</span>
                    ) : (
                        <>
                            <Rating
                                onClick={handleRating}
                                ratingValue={rating} /* Rating Props */
                            />
                            <span
                                className="position-absolute text-muted"
                                style={{ bottom: -12, left: 40 }}
                            >
                                Valorár
                            </span>
                        </>
                    )}
                </div>
            </li>
        </ul>
    )
}

export default MovieActions
