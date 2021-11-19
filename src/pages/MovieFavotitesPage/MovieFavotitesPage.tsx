import { Container, Row } from 'react-bootstrap'
import MovieFavorite from '../../components/MovieFavorite'

const MovieFavotitesPage = () => {
    return (
        <Container className="mt-4">
            <h1 className="h2 mb-4">List Movie Favorites</h1>
            <Row style={{ minHeight: '100vh' }}>
                <MovieFavorite />
            </Row>
        </Container>
    )
}

export default MovieFavotitesPage
