import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers'
import createSagaMiddleware from 'redux-saga'
import sagas from '../../sagas'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
)

sagaMiddleware.run(sagas)

store.subscribe(() => {
    console.log("Store:::>>",store.getState())
})
export default store