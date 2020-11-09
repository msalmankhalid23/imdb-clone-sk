import axios from 'axios';
import { takeLatest, call, put, all, select, take, takeEvery } from 'redux-saga/effects';
import * as constants from '../../Constants/Cosntant'
import { saveAllMoviesToStore, saveChangeLanguage } from './Main.actions'
import { getPopularMovies } from '../../Utils/apiUrls'
import { getAllFavoriteMovies, getAllMovies } from '../Main/Main.selectors'
import {getPageNumber} from '../Home/Home.selectors'
// call side effects
function getPopularMoviesAPI(param, pageNumber) {
    const { filters } = param.payload
    let api = getPopularMovies(filters,pageNumber)
    //calling of tag function
    //getPopularMoviesTagFunction `${filtersParam}` 
    console.log("Get All movies Saga called", api)
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
        const pageNumber = yield select(getPageNumber)
        console.log("Get All movies Saga called",pageNumber, param)

        const popularMovies = yield call(getPopularMoviesAPI, param,pageNumber)
        const parseResponse = yield call(customDataParsing, popularMovies.data.results)
        // put is use to dispatch actions to reducer
        yield put(saveAllMoviesToStore(parseResponse))
        yield put(saveChangeLanguage(parseResponse))

    } catch (err) {
        console.log(err)
    }
}

function* changeLanguageSagaWorker() {
    try {
        const favMovies = yield select(getAllFavoriteMovies)
        const movies = yield select(getAllMovies)
        console.log("saga worker", favMovies)
        // put is use to dispatch actions to reducer
        yield put(saveChangeLanguage(movies, favMovies))
    } catch (err) {
        console.log(err)
    }
}

export default function* moviesSaga() {

    // takeLatest is a watcher saga which listen to actions
    // other one is takeEvery
    console.log("Movies Saga Called")
    yield all([
        takeLatest(constants.GET_ALL_MOVIES, getAllMoviesSagaWorker), 
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





