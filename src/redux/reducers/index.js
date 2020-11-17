import { combineReducers } from 'redux'
import moviesReducers from './movies.reducers'
import favoriteMoviesReducers from './favoriteMovies.reducers'
import pageReducers from './page.reducers'
import genreReducers from './genere.reducers'
import popularMovies from './popularMovies.reducers'
// main reducers file
// pass all reducers here
export default combineReducers({
    allMovies: moviesReducers,
    favoriteMovies:favoriteMoviesReducers,
    pageNumbers:pageReducers,
    referenceFiltersData:genreReducers,
    popularMovies
})