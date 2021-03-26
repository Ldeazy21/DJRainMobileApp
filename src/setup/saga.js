import { all, spawn, call } from 'redux-saga/effects';

import authSaga from '../auth/saga';

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga(dispatch) {
  yield all([
    spawn(function* () {
      yield call(authSaga, dispatch);
    })
  ])
}