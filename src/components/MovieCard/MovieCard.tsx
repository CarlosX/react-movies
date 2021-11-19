import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IMovieData } from '../../interfaces/iMovieData'
import { dateToLocale } from '../../utils/dateToLocale'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import './movieCard.css'

interface IMovieCardProps {
    movie: IMovieData
    onScroll?: () => void
}

const MovieCard = ({ movie, onScroll }: IMovieCardProps) => {
    const { id, title, poster_path, release_date, vote_average } = movie
    const posterImg = poster_path
        ? `https://image.tmdb.org/t/p/w500${poster_path}`
        : 'https://via.placeholder.com/500x750'
    let rateValue = Math.round(vote_average * 10)
    const onClickLink = () => {
        onScroll && onScroll()
    }
    return (
        <Col xs={12} md={6} lg={3}>
            <Link
                to={`/view/${id}`}
                className="text-dark"
                onClick={onClickLink}
            >
                <Card className="card bg-dark mb-3">
                    <Card.Img
                        variant="top"
                        width={320}
                        style={{ minHeight: 400 }}
                        src={posterImg}
                        alt=""
                    />
                    <Card.ImgOverlay className="d-flex align-items-end">
                        <div className="bg-white w-100 p-2 shadow-lg bg-body rounded">
                            <h2 className="h6">{title}</h2>
                            <p className="mb-0">
                                Fecha estreno:{' '}
                                {release_date && dateToLocale(release_date)}
                            </p>
                        </div>
                    </Card.ImgOverlay>
                    <div className="position-absolute" style={{ width: 60, height: 60, color: '#fff' }}>
                        <CircularProgressbarWithChildren background backgroundPadding={6} value={rateValue}>
                            <div style={{ fontSize: 12, marginTop: -2 }}>
                                <strong>{`${rateValue}%`}</strong>
                            </div>
                        </CircularProgressbarWithChildren>
                    </div>
                </Card>
            </Link>
        </Col>
    )
}

export default MovieCard
