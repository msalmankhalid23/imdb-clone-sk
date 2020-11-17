import React,{createContext,useReducer} from 'react'
import FiltersReducer from './FiltersReducer'
import {FILTER_SELECTED} from '../Constants/Cosntant'


const ratingsList = () => {
    let ratings = ['All'];
    for (let i = 1; i <= 10; i++) {
        ratings.push(""+i)
    }
    return `"rating":${JSON.stringify(ratings)}`;
}

const yearList = () => {
    let years = ['All'];
    let maxYear = 2020
    for (let i = 0; i < 12; i++) {
        years.push(""+maxYear)
        maxYear -= 1
    }
    return `"releaseDate":${JSON.stringify(years)}`;
}

export const makeFiltersJson = () => {
    let filtersString = `[{"genres":["All"]},
    {${yearList()}},
    {${ratingsList()}},
    {"sortBy":["Popularity","Release Date","Top Rated"]},
    {"language":["English","French","German","Spanish"]}]`
    return JSON.parse(filtersString)
}
export const Filters_Data = makeFiltersJson()

export const Filters_Display_Fields = 
    {"genres":"Genres:",
    "releaseDate":"Release Year:",
    "rating":"Ratings:",
    "sortBy":"Sort By:",
    "language":"Language:"
}

const initialState ={
    filters : {
        genres: "All",
        releaseDate: "All",
        rating: "All",
        sortBy: "Popularity",
        language: "English",
        titleSearch:""
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