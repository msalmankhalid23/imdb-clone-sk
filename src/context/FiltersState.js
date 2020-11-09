import React,{createContext,useReducer} from 'react'
import FiltersReducer from './FiltersReducer'
import {FILTER_SELECTED} from '../Constants/Cosntant'

export const Filters_Data = [
    {"genre":["Comedy","Horror","Romance","Fiction"]},
    {"releaseDate":["All","Year"]},
    {"rating":["All","Name"]},
    {"sortBy":["All","Year"]},
    {"language":["All","English","Spanish"]}
]

export const Filters_Display_Fields = 
    {"genre":"Genere:",
    "releaseDate":"Release Date:",
    "rating":"Ratings:",
    "sortBy":"Sort By:",
    "language":"Language:"
}



const initialState ={
    filters : {
        genre: "Comedy",
        releaseDate: "All",
        rating: "All",
        sortBy: "All",
        language: "All",
        titleSearch:"Title Search"
    }
}

export const FiltersContext = createContext(initialState)

export const FiltersProvider = ({children}) => {

    const [state, dispatch] = useReducer(FiltersReducer, initialState)

    const filterSelected = (name,value) => {
        dispatch({
            type: FILTER_SELECTED,
            payload: {name,value}
        });
    }

    return (
        <FiltersContext.Provider
            value={{
                filters: state.filters,
                filterSelected
            }}
        >
            {children}
        </FiltersContext.Provider>
    )

}