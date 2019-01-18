// import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';

// import rootSaga from './sagas/saga';
// import rootReducer from './reducers/reducer';

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(rootSaga);

// export default store;

/**
 * Create the store with asynchronously loaded reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import appSagas from './sagas';
import createReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}, history) {
  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    compose(...enhancers),
  );

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.asyncReducers = {}; // Async reducer registry

  // Run App sagas globaly
  store.runSaga(appSagas);

  return store;
}
