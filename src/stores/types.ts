import { IMovieData } from '../interfaces/iMovieData';
import { IAction } from './actions'


export interface IAppState {
    listFavorites: IMovieData[];
}

export interface IAppContextProps {
    state: IAppState
    dispatch: ({ type }: IAction) => void
}