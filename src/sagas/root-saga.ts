import { all } from 'redux-saga/effects';

import {
  authUserSaga,
  registerUserSaga,
  userOwnVideosSaga,
  userSharedVideosSaga,
  addNewVideoSaga,
} from './index';

function* rootSaga() {
  yield all([
    authUserSaga(),
    registerUserSaga(),
    userOwnVideosSaga(),
    userSharedVideosSaga(),
    addNewVideoSaga(),
  ]);
}

export default rootSaga;
