import {ADD_FAVORITE, REMOVE_FAVORITE} from '../Constants/Cosntant'

export default (state, action) => {
    
    switch (action.type) {
        case ADD_FAVORITE:
            const val = {
                ...state,
                favoriteMovies: [...state.favoriteMovies, action.payload]
                
            };
            return val
            
        case REMOVE_FAVORITE:
            return {
                ...state,
                favoriteMovies: state.favoriteMovies.filter(movie => movie.id !== action.payload)
            };
        default: return state;
    }
    
}