import { all } from 'redux-saga/effects';

import { authUserSaga, registerUserSaga, userOwnVideosSaga, userSharedVideosSaga } from './index';

function* rootSaga() {
  yield all([authUserSaga(), registerUserSaga(), userOwnVideosSaga(), userSharedVideosSaga()]);
}

export default rootSaga;
