import { combineReducers, reateStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  combineReducers(reducers),
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(saga);

export default store;