import { useState } from 'react'
import { Button, Card, Container, Modal } from 'react-bootstrap'
import { ICast } from '../../interfaces/iMovieCasting'
import './moviecast.css'

interface IMovieCastProps {
    cast: ICast[]
}

const renderCastList = (cast: ICast[], classAdd: string = '') => {
    return (
        <>
            {cast.map((item: ICast, index: number) => {
                return (
                    <div key={index} className={classAdd}>
                        <Card>
                            {item.profile_path ? (
                                <Card.Img
                                    variant="top"
                                    width={138}
                                    src={`https://www.themoviedb.org/t/p/w138_and_h175_face${item.profile_path}`}
                                    alt={item.name}
                                />
                            ) : (
                                <Card.Img
                                    variant="top"
                                    width={138}
                                    src="https://via.placeholder.com/138x175"
                                    alt={item.name}
                                />
                            )}
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.character}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })}
        </>
    )
}

const MovieCast = ({ cast }: IMovieCastProps) => {
    const [statusModal, setStatusModal] = useState(false)

    const tmpCastLast = cast.slice(0, 12)

    const showModal = () => {
        setStatusModal(true)
    }

    return (
        <div className="mt-4">
            <h2 className="h4 mb-3">Reparto Principal</h2>
            <div className="position-relative">
                <ol className="castlist scrollbar">
                    {renderCastList(tmpCastLast)}
                </ol>
            </div>
            <div className="mt-4">
                <Button variant="primary" onClick={showModal}>
                    Reparto completo
                </Button>
            </div>
            <Modal
                show={statusModal}
                onHide={() => setStatusModal(false)}
                dialogClassName="modal-90w"
                aria-labelledby="modal-cast"
                fullscreen={true}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="modal-cast">Reparto Completo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container fluid>
                        <div className="castlist responsive row">
                            {renderCastList(cast, 'col-6')}
                        </div>
                    </Container>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default MovieCast
