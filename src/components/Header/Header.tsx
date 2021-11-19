import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">React Movies</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">
                            Inicio
                        </Nav.Link>
                        <Nav.Link as={Link} to="/favorites">
                            Favoritos
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
