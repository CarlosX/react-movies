import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router'
import { ToastContainer } from 'react-toastify'
import MovieCast from '../../components/MovieCast'
import MovieSimilar from '../../components/MovieSimilar'
import MovieView from '../../components/MovieView'
import useMovieDetails from '../../hooks/useMovieDetails'
import Loading from '../../components/loading'
import 'react-toastify/dist/ReactToastify.css'
import './movie.css'

const MovieViewPage = () => {
    const { id } = useParams()
    const { movie } = useMovieDetails(id)
    return (
        <Container className="mt-5" fluid>
            <>
                {movie ? (
                    <Container>
                        <Row>
                            <MovieView movie={movie} />
                        </Row>
                        <Row className="mb-4">
                            {movie.credits && (
                                <MovieCast cast={movie.credits.cast} />
                            )}
                        </Row>
                        <Row>{id && <MovieSimilar movieId={id} />}</Row>
                    </Container>
                ) : 
                    <Row className="position-relative" style={{ minHeight: '70vh' }}>
                        <Loading />
                    </Row>
                }
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                />
            </>
        </Container>
    )
}

export default MovieViewPage
