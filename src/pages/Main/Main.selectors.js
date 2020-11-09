
// all selectors should be here
// general principle is write selectors once and use everywhere

import { createSelector } from 'reselect'
import { populateLanguageFullName } from './Main.utils'


export const getAllMovies = state => state.movies;
const getPoluplarMovieId = state => state.popularMovieId
const getFavoriteMovies = state => state.favoriteMovies


export const getAllMoviesWithLanguages = createSelector(
    getAllMovies,
    getFavoriteMovies,
    // here we are doing expensive calculations
    (movies,favoriteMovies) => movies.map(movie => ({
        ...movie,
        language: populateLanguageFullName(movie.language),
        isFavorite:checkForfavoriteMovie(movie,favoriteMovies)
    }))


)
const checkForfavoriteMovie = (movie,favoriteMovies) => {
    return favoriteMovies.some(m => m.id === movie.id);
}



// you can pass as many inputs to createSelector as you want
// just remember to look for order
export const getPolularMovie = createSelector(
    getAllMovies,
    getPoluplarMovieId,
    // order matters here
    // output of getAllMovies, getPopularMovieId whill be input to selector
    (movies, movieId) => movies.filter(movie => movie.id === movieId)
)

//Selctors form Favorite Movies
export const getAllFavoriteMovies = state => state.favoriteMovies;
export const getAllFavoriteMoviesSelector = createSelector(
    getAllFavoriteMovies,
    (favoriteMovies) => {
        return favoriteMovies
    }
)