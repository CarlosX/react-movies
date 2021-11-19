import { Row } from 'react-bootstrap'
import useMovieSimilar from '../../hooks/useMovieSimilar'
import MovieCard from '../MovieCard'

interface MovieSimilarProps {
    movieId: string
}

const MovieSimilar = ({ movieId }: MovieSimilarProps) => {
    const { movies } = useMovieSimilar(movieId)

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <>
            <hr />
            <h2 className="h4 mb-3">Recomendados</h2>
            <Row>
                {movies.length > 0 && movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} onScroll={scrollToTop} />
                ))}
            </Row>
        </>
    )
}

export default MovieSimilar
