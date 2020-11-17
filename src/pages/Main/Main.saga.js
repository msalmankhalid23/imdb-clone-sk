import axios from 'axios';
import { takeLatest, call, put, all, select} from 'redux-saga/effects';
import * as constants from '../../Constants/Cosntant'
import { saveAllMoviesToStore, saveChangeLanguage, savePopularMoviesToStore } from './Main.actions'
import { sendRequestForPopularMovies, sendRequestForAllMovies } from '../../Utils/apiUrls'
import {getGenreFiltersReferenceDataSelector} from '../Home/Home.selectors'
import {getPageNumber} from '../Main/Main.selectors'

// call side effects
function getPopularMoviesAPI(param, pageNumber) {
    const { filters } = param.payload
    let api = sendRequestForPopularMovies(filters,pageNumber)
    //calling of tag function
    //getPopularMoviesTagFunction `${filtersParam}` 
    return axios.get(api)
}

function getAllMoviesAPI(param, pageNumber, genresRefereneData) {
    const { filters } = param.payload
    let api = sendRequestForAllMovies(filters,pageNumber, genresRefereneData)
    //calling of tag function
    //getPopularMoviesTagFunction `${filtersParam}`     
    return axios.get(api)
}

// transform response 
function customDataParsing(data) {
    return data.map(element => ({
        id: element.id,
        popularity: element.popularity,
        language: element.original_language,
        title: element.title,
        overview: element.overview,
        releaseDate: element.release_date,
        rating: element.vote_average,
        imagePath: element.poster_path,
        isFavorite: false

    }))
}


// worker saga, call api and update data, then dispatch to store
function* getAllMoviesSagaWorker(param) {
    try {
        const pageNumbers = yield select(getPageNumber)
        const genresRefereneData = yield select(getGenreFiltersReferenceDataSelector)
        if(param.appSection === constants.APP_SECTION_POPULAR_MOVIES || param.type === constants.GET_POPULAR_MOVIES)
        {
            yield call(handlePopularMoviesSectionSaga,param,pageNumbers.popularMovie,genresRefereneData)
        }
        else
        {
            yield call(handleAllMoviesSectionSaga,param,pageNumbers.allMovie,genresRefereneData)   
        }
    } catch (err) {
        console.log(err)
    }
}

function* handleAllMoviesSectionSaga(param,pageNumber,genresRefereneData)
{
    const allMovies = yield call(getAllMoviesAPI, param,pageNumber, genresRefereneData)
    const {results,total_pages,total_results} = allMovies.data;
    
    const parseResponse = yield call(customDataParsing, results)
    // put is use to dispatch actions to reducer
    yield put(saveAllMoviesToStore(parseResponse,total_pages,total_results))
    yield put(saveChangeLanguage(parseResponse))

}
function* handlePopularMoviesSectionSaga(param,pageNumber,genresRefereneData)
{
    const popularMovies = yield call(getPopularMoviesAPI, param,pageNumber, genresRefereneData)
    const {results,total_pages,total_results} = popularMovies.data;
    const parseResponse = yield call(customDataParsing,results)
    // put is use to dispatch actions to reducer
    yield put(savePopularMoviesToStore(parseResponse,total_pages,total_results))
}

export default function* moviesSaga() {

    // takeLatest is a watcher saga which listen to actions
    // other one is takeEvery
    yield all([
        takeLatest(constants.GET_ALL_MOVIES, getAllMoviesSagaWorker),
        takeLatest(constants.GET_POPULAR_MOVIES, getAllMoviesSagaWorker), 
        takeLatest(constants.INCREMENT_PAGE, getAllMoviesSagaWorker),
        takeLatest(constants.DECREMENT_PAGE, getAllMoviesSagaWorker)
    ]) 

} 

/*
1 To wait for the excution of sagaworkder use take
 e.g:
    const params = yield take(GET_ALL_MOVIES)
    yield call(getAllMoviesSagaWorker,params) //this call will be executed then next saga worker will be executed

    yield take(CHANGE_LANGUAGE)
    yield call(changeLanguageSagaWorker)

2- yield take -> return the input/params

3- if yield take needs to listen that action again and again then add in loop
    e.g:
    while (true) {
        const params = yield take(GET_ALL_MOVIES)
        yield call(getAllMoviesSagaWorker,params)
    }
 
 */





