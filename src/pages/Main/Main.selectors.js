
// all selectors should be here
// general principle is write selectors once and use everywhere

import { createSelector } from 'reselect'
import { populateLanguageFullName } from './Main.utils'


export const getAllMovies = state => state.allMovies;
export const getPopularMovies = state => state.popularMovies;
const getFavoriteMovies = state => state.favoriteMovies


export const getAllMoviesWithLanguages = createSelector(
    getAllMovies,
    getFavoriteMovies,
    // here we are doing expensive calculations
    (allMovies,favoriteMovies) => allMovies.movies.map(movie => ({
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
export const getPopularMoviesSelector = createSelector(
    getPopularMovies,
    (popularMovies) => {
        return popularMovies.movies
    }
)

//Selctors form Favorite Movies
export const getAllFavoriteMovies = state => state.favoriteMovies;
export const getAllFavoriteMoviesSelector = createSelector(
    getAllFavoriteMovies,
    (favoriteMovies) => {
        return favoriteMovies
    }
)

/*Page Numbers */
export const getPageNumber = state => state.pageNumbers;
export const getPageNumberSelecter = createSelector(
    getPageNumber,
    (pageNumbers) => {return pageNumbers}
 )

 export const getAllMoviesTotalCount = state => state.allMovies.totalMovies;
 export const getAllMoviesTotalPages = state => state.allMovies.totalPagesAllMovies;

 export const getPopularMoviesTotalPages = state => state.popularMovies.totalPages;
 export const getPopularMoviesTotalCount = state => state.popularMovies.totalMovies;