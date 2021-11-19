import { Spinner } from "react-bootstrap"

const Loading = () => {
    return (
        <div className="loading d-flex justify-content-center align-items-center">
            <div className="position-absolute">
                <Spinner animation="grow" variant="danger" />
                <Spinner animation="grow" variant="warning" />
                <Spinner animation="grow" variant="info" />
                <Spinner animation="grow" variant="dark" />
            </div>
        </div>
    )
}

export default Loading