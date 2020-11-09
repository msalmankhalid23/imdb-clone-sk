import { createSelector } from 'reselect'

const getMovies = state => state.movies;
export const getPageNumber = state => state.pageNumber;

export const getAllMovies = createSelector(
   getMovies,
   (movies) => {return movies}
)

export const getPageNumberSelecter = createSelector(
    getPageNumber,
    (pageNumber) => {return pageNumber}
 )