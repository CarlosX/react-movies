import { IMovieData } from '../../interfaces/iMovieData'
import { dateToLocale } from '../../utils/dateToLocale'

interface MovieInfoProps {
    movie: IMovieData
}

const MovieInfo = ({ movie }: MovieInfoProps) => {
    const { genres, release_date, runtime } = movie
    return (
        <div className="movie-info mb-3 position-relative">
            <span className="text-muted">{ release_date && dateToLocale(release_date)}</span>
            <span className="text-muted">
                {genres?.map((genre) => genre.name).join(', ')}
            </span>
            <span className="text-muted">duración: {runtime} min</span>
        </div>
    )
}


export default MovieInfo