import React from 'react'
import { Container, Row } from 'react-bootstrap'
import MovieList from '../../components/MovieList'

const MoviesPage = () => {
    return (
        <Container className="mt-4">
            <h1 className="h2 mb-4">List Movies</h1>
            <Row>
                <MovieList />
            </Row>
        </Container>
    )
}

export default MoviesPage
