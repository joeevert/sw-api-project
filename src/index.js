import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

// Reducer that holds our results
const search = (state = {}, action) => {
    if(action.type === 'SET_SEARCH') {
        return action.payload;
    }
    return state;
}

function* fetchSwapi(action) {
    try {
      const response = yield call(axios.get, '/random');
      yield put({type: 'SET_SEARCH', payload: response.data});
      console.log('fetchSwapi', response.data);
    } 
    catch (error) {
      console.log('error', error);
    }
  };

function* watcherSaga() {
    yield takeEvery( 'FETCH_SEARCH', fetchSwapi) ;
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        search,
    }),
    applyMiddleware(
        sagaMiddleware, 
        logger
    ),
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
