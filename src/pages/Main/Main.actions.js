import { SAVE_CHANGE_LANGUAGE, GET_ALL_MOVIES, SAVE_ALL_MOVIES_STORE, ADD_FAVORITE, SAVE_FAVORITES_TO_STORE, CHANGE_LANGUAGE } from '../../Constants/Cosntant'

export const getAllMovies = (filters) => (
    {
        // search this constant to check where are we using 
        type: GET_ALL_MOVIES,
        payload:{
            filters
        }
    }
)


export const saveAllMoviesToStore = (movies) => ({
    type: SAVE_ALL_MOVIES_STORE,
    movies
})

export const addToFavorites = (movie) => (
    {
        type: ADD_FAVORITE,
        payload: movie
    }
)


export const changeLanguage = (language) => (
    {
        // search this constant to check where are we using 
        type: CHANGE_LANGUAGE,
        payload: language
    }
)
export const saveChangeLanguage = (movies) => (
    {
        // search this constant to check where are we using 
        type: SAVE_CHANGE_LANGUAGE,
        payload: movies
    }
)