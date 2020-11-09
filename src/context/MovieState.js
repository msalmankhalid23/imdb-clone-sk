import React, { createContext, useReducer } from "react";
import MovieReducer from './MovieReducer'
import {ADD_FAVORITE,REMOVE_FAVORITE} from '../Constants/Cosntant'


const initialState = {
    favoriteMovies: []
}
export const MovieContext = createContext(initialState);

export const MovieProvider = ({ children }) => {
    const [state, dispatch] = useReducer(MovieReducer, initialState);

    const addToFavorite = (movie) => {
        dispatch({
            type: ADD_FAVORITE,
            payload: movie
        });
    }

    const removeFromFavorite = (id) => {
        dispatch({
            type: REMOVE_FAVORITE,
            payload: id
        });
    }

    return (<MovieContext.Provider value={{
        favoriteMovies: state.favoriteMovies,
        addToFavorite,
        removeFromFavorite
    }}>
        {children}
    </MovieContext.Provider>);

}