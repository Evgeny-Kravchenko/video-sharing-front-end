import { all } from 'redux-saga/effects';

import {
  authUserSaga,
  registerUserSaga,
  userOwnVideosSaga,
  userSharedVideosSaga,
  addNewVideoSaga,
  deleteVideoSaga,
  shareVideoSaga,
  editVideoSaga,
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
    editVideoSaga(),
  ]);
}

export default rootSaga;
