import * as constants from '../../Constants/Cosntant'
const initialState = []

const genreReducers =(state =initialState, actions) =>{
    
    switch(actions.type){
        // here we are filtering what type of action we want to process
        case constants.SAVE_GENRE_TO_STORE:
            return actions.payload
        default:
            return state;
    }
}

export default genreReducers;