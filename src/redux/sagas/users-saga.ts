import { put, takeLatest, delay } from 'redux-saga/effects';
import {
  authorizeUserSuccsess,
  authorizeUserFailure,
  userOwnVideosRequest,
  registerUserSuccess,
  registerUserFailure,
  registerClearStatus,
} from '../actions';

import { userService, videoService } from '../../index';

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

function* fetchRegisterUserHandler(action: Action) {
  try {
    yield delay(1000);
    yield userService.registerUser(action.payload);
    yield put(registerUserSuccess());
  } catch (err) {
    yield put(registerUserFailure(err));
  }
  yield delay(2000);
  yield put(registerClearStatus());
}

function* usersSaga() {
  yield takeLatest(UserActionTypes.AUTH_USER_REQUEST, fetchAuthUserHandler);
  yield takeLatest(UserActionTypes.REGISTER_USER_REQUEST, fetchRegisterUserHandler);
}

export default usersSaga;
