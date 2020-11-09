import {SAVE_ALL_MOVIES_STORE} from '../../Constants/Cosntant'
const initialState = []

const moviesReducers =(state =initialState, actions) =>{
    console.log("Movies:::::",state,actions)
    switch(actions.type){
        // here we are filtering what type of action we want to process
        case SAVE_ALL_MOVIES_STORE:
            // return modified state here
            // remember to pass new object always
            // do not change state directly otherwise redux wont be able to detect change in satte
            console.log("SAVE_ALL_MOVIES_STORE reducer called")
            return actions.movies;
        default:
            return state;
    }
}

export default moviesReducers;