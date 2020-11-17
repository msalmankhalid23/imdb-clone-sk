import * as constants from '../../Constants/Cosntant'
const initialState = { 'allMovie':1 , 'popularMovie':1 }

const pageReducers =(state =initialState, actions) =>{
    switch(actions.type){
        case constants.INCREMENT_PAGE:
            if(actions.appSection === constants.APP_SECTION_ALL_MOVIES)
            {
                return {
                    ...state,
                    allMovie: state.allMovie + 1
                }
            }
            return {
                ...state,
                popularMovie: state.popularMovie + 1
            }
            case constants.DECREMENT_PAGE:
                if(actions.appSection === constants.APP_SECTION_ALL_MOVIES)
                {
                    return {
                        ...state,
                        allMovie: state.allMovie - 1
                    }
                }
                return {
                    ...state,
                    popularMovie: state.popularMovie - 1
                }
        default:
            return state;
    }
}

export default pageReducers;