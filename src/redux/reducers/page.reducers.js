import * as constants from '../../Constants/Cosntant'
const initialState = 1

const pageReducers =(state =initialState, actions) =>{
    console.log("Movies:::::",state,actions)
    switch(actions.type){
        // here we are filtering what type of action we want to process
        case constants.INCREMENT_PAGE:
            return state+1
            case constants.DECREMENT_PAGE:
            return state>initialState? state-1 :initialState
        default:
            return state;
    }
}

export default pageReducers;