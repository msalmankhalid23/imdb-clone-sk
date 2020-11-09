import * as constants from '../../Constants/Cosntant'
export const loadNextPageMovies = (filters) =>(
    {
        type: constants.INCREMENT_PAGE,
        payload:{
            filters
        }
    }
)

export const loadPreviousPageMovies = (filters) =>(
    {
        type: constants.DECREMENT_PAGE,
        payload:{
            filters
        }
    }
)