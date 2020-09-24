import { put, takeLatest, delay } from 'redux-saga/effects';
import { registerUserSuccess, registerUserFailure, registerClearStatus } from '../actions';

import { userService } from '../index';

import { UserActionTypes } from '../actions';
import { Action } from '../actions';

function* fetchRegisterUserHandler(action: Action) {
  try {
    yield delay(1000);
    yield userService.registerUser(action.payload);
    yield put(registerUserSuccess());
    yield delay(2000);
    yield put(registerClearStatus());
  } catch (err) {
    yield put(registerUserFailure(err));
  }
}

function* registerUserSaga() {
  yield takeLatest(UserActionTypes.REGISTER_USER_REQUEST, fetchRegisterUserHandler);
}

export default registerUserSaga;
