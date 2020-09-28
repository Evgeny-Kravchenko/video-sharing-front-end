import { put, takeLatest, delay } from 'redux-saga/effects';
import { authorizeUserSuccsess, authorizeUserFailure, userOwnVideosRequest } from '../actions';

import { userService, videoService } from '../index';

import { UserActionTypes } from '../actions';
import { Action } from '../actions';

function* fetchAuthUserHandler(action: Action) {
  try {
    const { email, password } = action.payload;
    yield delay(1000);
    const user = yield userService.signIn(email, password);
    const ownVideosIds = yield videoService.getOwnVideosIds(user.uid);
    const sharedVideosIds = yield videoService.getSharedVideosIds(user.uid);
    yield put(authorizeUserSuccsess({ user, ownVideosIds, sharedVideosIds }));
    yield put(userOwnVideosRequest(user.uid));
  } catch (error) {
    yield put(authorizeUserFailure(error));
  }
}
function* authUserSaga() {
  yield takeLatest(UserActionTypes.AUTH_USER_REQUEST, fetchAuthUserHandler);
}

export default authUserSaga;
