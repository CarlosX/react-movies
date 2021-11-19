import { Container, Row } from "react-bootstrap"

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <p>
                        Made with{' '}
                        <span role="img" aria-label="heart">
                            ❤️
                        </span>{' '}
                        by <a href="https://github.com/CarlosX">@CarlosX</a>
                    </p>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
