import { createSelector } from 'reselect'

export const getAllMoviesTotalPages = state => state.allMovies.totalPagesAllMovies;
export const getAllMoviesTotalCount = state => state.allMovies.totalMovies;

const getAllMovies = state => state.allMovies;
export const getAllMoviesSelector = createSelector(
   getAllMovies,
   (allMovies) => {return allMovies.movies}
)

 const getFiltersReferenceData = state => state.referenceFiltersData? state.referenceFiltersData:'';
 export const getGenreFiltersReferenceDataSelector = createSelector(
   getFiltersReferenceData,
   (refrencedata) => {
      return refrencedata.genres
   }
 )

 /*Page Numbers */
export const getPageNumber = state => state.pageNumbers;
export const getPageNumberSelecter = createSelector(
    getPageNumber,
    (pageNumbers) => {return pageNumbers.allMovie}
 )