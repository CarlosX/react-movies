import React from 'react'
import { Col, Image } from 'react-bootstrap'
import MovieInfo from '../../components/MovieInfo'
import MovieActions from '../../components/MovieActions'
import { IMovieData } from '../../interfaces/iMovieData'
import './movieview.css'

interface MovieViewProps {
    movie: IMovieData
}

const MovieView = ({ movie }: MovieViewProps) => {
    const { title, poster_path, overview } = movie
    return (
        <>
            <Col xs={12} lg={4} className="mb-4 mb-md-0">
                <div className="movie-view-img">
                    <Image
                        rounded 
                        className="img-fluid img-round"
                        src={`https://image.tmdb.org/t/p/w780${poster_path}`}
                        alt=""
                    />
                </div>
            </Col>
            <Col>
                <h1 className="h3">{title}</h1>
                <MovieInfo movie={movie} />
                <MovieActions movie={movie} />
                <h2 className="h4">Resumen</h2>
                <p>{overview}</p>
            </Col>
        </>
    )
}

export default MovieView
