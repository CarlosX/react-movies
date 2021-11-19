import { IMovieCasting } from './iMovieCasting'

export interface IGenre {
    id: number
    name: string
}

export interface IMovieData {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
    genres: IGenre[] | null
    runtime: number | null
    credits: IMovieCasting | null
}
