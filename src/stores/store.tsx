import React, { createContext, useContext, useReducer } from 'react'
import { ADD_FAVORITE, REMOVE_FAVORITE } from './actions'
import { IAppContextProps } from './types'

const initialState = {
    listFavorites: []
}

const reducers = (state: any, action: any) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                listFavorites: [...state.listFavorites, action.payload]
            }
        case REMOVE_FAVORITE:
            return {
                ...state,
                listFavorites: state.listFavorites.filter(
                    (item: any) => item.id !== action.payload
                )
            }
        default:
            return state
    }
}

export const AppContext = createContext({} as IAppContextProps)

export const AppProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(reducers, initialState)
    const value = { state, dispatch } as IAppContextProps
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}


export const useStore = () => useContext(AppContext)