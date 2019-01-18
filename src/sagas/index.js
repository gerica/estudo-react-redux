import { delay } from 'redux-saga';
import { put, takeEvery, call, all } from 'redux-saga/effects';

import { DATA_AVAILABLE } from '../actions/actions';

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  console.log('está no saga');
  yield call(delay, 1000);
  yield put({
    type: 'INCREMENT',
  });
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery(DATA_AVAILABLE, incrementAsync);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([watchIncrementAsync()]);
}
