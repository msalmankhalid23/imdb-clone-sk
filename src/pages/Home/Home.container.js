import {connect} from 'react-redux'
import Home from './Home'
import {loadNextPageMovies,loadPreviousPageMovies} from './Home.actions'
import {getAllMovies,getPageNumberSelecter} from './Home.selectors'

const mapStateToProps = (state)=>({
    movies: getAllMovies(state),
    pageNumber:getPageNumberSelecter(state)
})

const mapDispatchToProps = {   
       loadNextPageMovies,
        loadPreviousPageMovies
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
