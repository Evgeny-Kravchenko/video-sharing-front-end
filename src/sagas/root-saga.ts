import { all } from 'redux-saga/effects';

import { authUserSaga, registerUserSaga, userOwnVideosSaga } from './index';

function* rootSaga() {
  yield all([authUserSaga(), registerUserSaga(), userOwnVideosSaga()]);
}

export default rootSaga;
