import { all } from 'redux-saga/effects';

import {
  authUserSaga,
  registerUserSaga,
  userOwnVideosSaga,
  userSharedVideosSaga,
  addNewVideoSaga,
  deleteVideoSaga,
  shareVideoSaga,
} from './index';

function* rootSaga() {
  yield all([
    authUserSaga(),
    registerUserSaga(),
    userOwnVideosSaga(),
    userSharedVideosSaga(),
    addNewVideoSaga(),
    deleteVideoSaga(),
    shareVideoSaga(),
  ]);
}

export default rootSaga;
