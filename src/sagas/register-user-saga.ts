import { put, takeLatest } from 'redux-saga/effects';
import { registerUserSuccess, registerUserFailure } from '../actions';

import userService from '../index';

import { IAction } from '../interfaces';

function* fetchRegisterUserHandler(action: IAction) {
  try {
    yield userService.registerUser(action.payload);
    yield put(registerUserSuccess());
  } catch (err) {
    yield put(registerUserFailure(err));
  }
}

function* registerUserSaga() {
  yield takeLatest('REGISTER_USER_REQUEST', fetchRegisterUserHandler);
}

export default registerUserSaga;
