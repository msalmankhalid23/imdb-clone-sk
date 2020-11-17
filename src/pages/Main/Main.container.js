import {connect} from 'react-redux'
import Main from './Main'
import {getAllMovies, addToFavorites, changeLanguage, loadNextPageMovies,loadPreviousPageMovies} from './Main.actions'
import {getAllMoviesWithLanguages, getAllFavoriteMoviesSelector,getPageNumberSelecter,getAllMoviesTotalPages, getAllMoviesTotalCount} from './Main.selectors'

const mapStateToProps = (state) =>(
{
    movies: getAllMoviesWithLanguages(state),
    favoriteMovies: getAllFavoriteMoviesSelector(state),
    pageNumbers:getPageNumberSelecter(state),
    totalPages:getAllMoviesTotalPages(state),
    totalMovies:getAllMoviesTotalCount(state)
})

const mapDispatchToProps = {
    // mapDispatchToprops wraps a function with dispatch
    getAllMovies,
    addToFavorites,
    changeLanguage,
    loadNextPageMovies,
    loadPreviousPageMovies,
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)