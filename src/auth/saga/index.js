import { takeEvery, all } from 'redux-saga/effects';
import { LOGIN_REQUEST } from '../redux/actionTypes';

function* watchIncrementAsync() {
  
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* watchAuthReducer() {
  yield all([
    yield takeEvery(LOGIN_REQUEST, watchIncrementAsync)
  ]);
}
