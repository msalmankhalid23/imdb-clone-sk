import {connect} from 'react-redux'
import Main from './Main'
import {getAllMovies, addToFavorites, changeLanguage} from './Main.actions'
import {getAllMoviesWithLanguages, getAllFavoriteMoviesSelector} from './Main.selectors'

const mapStateToProps = (state) =>(
{
    movies: getAllMoviesWithLanguages(state),
    favoriteMovies: getAllFavoriteMoviesSelector(state)
})

const mapDispatchToProps = {
    // mapDispatchToprops wraps a function with dispatch
    getAllMovies,
    addToFavorites,
    changeLanguage
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)