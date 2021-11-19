import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { IMovieData } from '../../interfaces/iMovieData'
import { useStore } from '../../stores'
import MovieCard from '../MovieCard'

const MovieFavorite = () => {
    const { state } = useStore()
    const { listFavorites } = state
    return (
        <Container>
            <Row>
                {listFavorites.length > 0 ? (
                    listFavorites.map((movie: IMovieData) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                ) : (
                    <>
                        <h1 className="h2 text-center">No hay peliculas en favoritas</h1>
                    </>
                )}
            </Row>
        </Container>
    )
}

export default MovieFavorite
