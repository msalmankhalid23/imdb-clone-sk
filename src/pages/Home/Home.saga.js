import axios from 'axios';
import { takeLatest, call, put, all} from 'redux-saga/effects';
import * as constants from '../../Constants/Cosntant'
import { sendRequestForGenre } from '../../Utils/apiUrls'
import {saveGenreToStore} from './Home.actions'

const fetchGenre = () => {
    const api = sendRequestForGenre()
    return axios.get(api)
}

function* getGenreSagaWorker(param) {
    try {
        const genreData = yield call(fetchGenre)
        if(genreData && genreData.data)
            yield put(saveGenreToStore(genreData.data)) // put is use to dispatch actions to reducer

    } catch (err) {
        console.log(err)
    }
}

export default function* homeSaga() {

    // takeLatest is a watcher saga which listen to actions
    // other one is takeEvery
    yield all([
        takeLatest(constants.GET_ALL_GENRE, getGenreSagaWorker)
    ]) 
} 