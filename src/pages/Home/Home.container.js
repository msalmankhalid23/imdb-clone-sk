import {connect} from 'react-redux'
import Home from './Home'
import {fetchGenreData} from './Home.actions'
import {getAllMoviesSelector,getGenreFiltersReferenceDataSelector,getPageNumberSelecter} from './Home.selectors'

const mapStateToProps = (state)=>({
    movies: getAllMoviesSelector(state),
    genres:getGenreFiltersReferenceDataSelector(state),
    pageNumber: getPageNumberSelecter(state)
})

const mapDispatchToProps = {   
    fetchGenreData
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
