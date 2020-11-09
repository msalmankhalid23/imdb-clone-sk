import { REMOVE_FAVORITE } from '../../Constants/Cosntant'

export const removeFromFavorites = (movieId) => (
    {
        // search this constant to check where are we using 
        type: REMOVE_FAVORITE,
        payload: movieId
    }
)
