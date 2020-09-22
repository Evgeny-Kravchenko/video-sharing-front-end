import { all } from 'redux-saga/effects';

import {
  authUserSaga,
  registerUserSaga,
  userOwnVideosSaga,
  userSharedVideosSaga,
  addNewVideoSaga,
  deleteVideoSaga,
} from './index';

function* rootSaga() {
  yield all([
    authUserSaga(),
    registerUserSaga(),
    userOwnVideosSaga(),
    userSharedVideosSaga(),
    addNewVideoSaga(),
    deleteVideoSaga(),
  ]);
}

export default rootSaga;
