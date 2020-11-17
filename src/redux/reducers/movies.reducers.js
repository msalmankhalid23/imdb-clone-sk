import {SAVE_ALL_MOVIES_STORE} from '../../Constants/Cosntant'
const initialState = {'movies':[], 'totalPagesAllMovies':0, 'totalMovies':0}

const moviesReducers =(state =initialState, actions) =>{
    switch(actions.type){
        // here we are filtering what type of action we want to process
        case SAVE_ALL_MOVIES_STORE:
            // return modified state here
            // remember to pass new object always
            // do not change state directly otherwise redux wont be able to detect change in satte
            return {
                ...state,
                movies:actions.movies,
                totalPagesAllMovies:actions.totalPagesAllMovies,
                totalMovies:actions.totalMovies
            };
        default:
            return state;
    }
}

export default moviesReducers;