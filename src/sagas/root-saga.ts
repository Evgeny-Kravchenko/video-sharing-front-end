import { all } from 'redux-saga/effects';

import authUserSaga from './auth-user-saga';

function* rootSaga() {
  yield all([authUserSaga()]);
}

export default rootSaga;
