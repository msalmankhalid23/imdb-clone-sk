import * as constants from '../../Constants/Cosntant'
export const getAllMovies = (filters) => (
    {
        // search this constant to check where are we using 
        type: constants.GET_ALL_MOVIES,
        payload:{
            filters
        }
    }
)

export const getPopularMovies = (filters) => (
    {
        type: constants.GET_POPULAR_MOVIES,
        payload:{
            filters
        }
    }
)


export const saveAllMoviesToStore = (movies, totalPagesAllMovies,totalMovies) => ({
    type: constants.SAVE_ALL_MOVIES_STORE,
    movies,
    totalPagesAllMovies,
    totalMovies
})
export const savePopularMoviesToStore = (popularMovies,totalPages,totalMovies) => ({
    type: constants.SAVE_ALL_POPULAR_MOVIES_STORE,
    popularMovies,
    totalPages,
    totalMovies
})

export const addToFavorites = (movie) => (
    {
        type: constants.ADD_FAVORITE,
        payload: movie
    }
)


export const changeLanguage = (language) => (
    {
        // search this constant to check where are we using 
        type: constants.CHANGE_LANGUAGE,
        payload: language
    }
)
export const saveChangeLanguage = (movies) => (
    {
        // search this constant to check where are we using 
        type: constants.SAVE_CHANGE_LANGUAGE,
        payload: movies
    }
)

export const loadNextPageMovies = (filters,appSection) =>(
    {
        type: constants.INCREMENT_PAGE,
        appSection,
        payload:{
            filters
        }
    }
)

export const loadPreviousPageMovies = (filters,appSection) =>(
    {
        type: constants.DECREMENT_PAGE,
        appSection,
        payload:{
            filters
        }
    }
)