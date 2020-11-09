import { combineReducers } from 'redux'
import moviesReducers from './movies.reducers'
import favoriteMoviesReducers from './favoriteMovies.reducers'
import pageReducers from './page.reducers'

// main reducers file
// pass all reducers here
export default combineReducers({
    movies: moviesReducers,
    favoriteMovies:favoriteMoviesReducers,
    pageNumber:pageReducers
})