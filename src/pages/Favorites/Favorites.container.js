import Favorites from './Favorites'
import {connect } from 'react-redux'
import {removeFromFavorites} from './Favorites.action'
import {getAllFavoriteMoviesSelector} from '../Main/Main.selectors'

const mapStateToProps = (state) =>(
{
    favoriteMovies: getAllFavoriteMoviesSelector(state)
})

const mapDispatchToProps = {
    removeFromFavorites
}
export default connect(mapStateToProps,mapDispatchToProps)(Favorites)