import { all } from 'redux-saga/effects';

import authUserSaga from './auth-user-saga';

const rootSaga = function* () {
  yield all([authUserSaga()]);
};

export default rootSaga;
