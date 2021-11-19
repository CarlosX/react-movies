import React from 'react'
import { Container, Row } from 'react-bootstrap'
import useMovieList from '../../hooks/useMovieList'
import { IMovieData } from '../../interfaces/iMovieData'
import Loading from '../loading'
import MovieCard from '../MovieCard'

const MovieList: React.FC = () => {
    const { movies } = useMovieList()

    return (
        <Container>
            <Row className="position-relative" style={{ minHeight: '70vh' }}>
                {movies.length > 0 ? (
                    movies.map((movie: IMovieData) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                ) : (
                    <Loading />
                )}
            </Row>
        </Container>
    )
}

export default MovieList
