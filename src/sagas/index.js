import { all, spawn } from 'redux-saga/effects';
import moviesSaga from '../pages/Main/Main.saga'

// main saga file
export default function *(){
    // all is equivalant to promise.all, here saga is telling to run independently moviesSaga
    // spawn as many saga as you want
    yield all([
        // read more about spawn vs fork https://stackoverflow.com/questions/43259301/whats-the-difference-between-fork-and-spawn-in-redux-saga
        spawn(moviesSaga),
    ])
} 