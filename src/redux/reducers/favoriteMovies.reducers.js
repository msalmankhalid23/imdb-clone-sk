import {ADD_FAVORITE, REMOVE_FAVORITE, SAVE_CHANGE_LANGUAGE} from '../../Constants/Cosntant'
const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
         case ADD_FAVORITE:
            return [
                ...state,
                action.payload
            ]

        case REMOVE_FAVORITE:
            return [
                ...state.filter(movie => movie.id !== action.payload)
            ];
         case SAVE_CHANGE_LANGUAGE:
             return [...state.map(movie => action.payload.find( f => f.id === movie.id) || movie)]
        default: return state;
    }
    
}


