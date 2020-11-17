import {connect} from 'react-redux'
import PopularMovies from './PopularMovies'
import {getPopularMovies,loadNextPageMovies,loadPreviousPageMovies} from './Main.actions'
import {getPopularMoviesSelector,getPageNumberSelecter,getPopularMoviesTotalPages,getPopularMoviesTotalCount} from './Main.selectors'
import {APP_SECTION_POPULAR_MOVIES} from '../../Constants/Cosntant'

const mapStateToProps = (state) =>(
{
    movies: getPopularMoviesSelector(state),
    pageNumbers:getPageNumberSelecter(state),
    totalPages:getPopularMoviesTotalPages(state),
    totalMovies:getPopularMoviesTotalCount(state),
    appSection:APP_SECTION_POPULAR_MOVIES
})

const mapDispatchToProps = {
    getPopularMovies,
    loadNextPageMovies,
    loadPreviousPageMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(PopularMovies)