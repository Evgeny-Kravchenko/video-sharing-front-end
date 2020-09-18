import { all } from 'redux-saga/effects';

import { authUserSaga, registerUserSaga } from './index';

function* rootSaga() {
  yield all([authUserSaga(), registerUserSaga()]);
}

export default rootSaga;
