import {FILTER_SELECTED} from '../Constants/Cosntant'

export default (state, action) => {
    
    const {name, value} = action.payload

    //1st approach
    //Clone new filters object based on that useEffect will be called. it is requuired to tell React that complete fileters object is changed
    // let newFilters = {...filters} //Object.assign({},filters) 
    // newFilters[name]=value

    //2nd approach use spread operator to get cloned object of filters

    switch (action.type) {
        case FILTER_SELECTED:
            const val = {
                 ...state,
                 filters: {...state.filters, [name]:value},
            }
            return val
       /* case 'RELEASE_DATE_SELECTED':
            tempFilter.filters.release = action.payload
            return {
                ...state,
                tempFilter
            }*/ //For code understanding
        default: return state;
    }

}