import { put, takeLatest, delay } from 'redux-saga/effects';
import { registerUserSuccess, registerUserFailure, registerClearMessage } from '../actions';

import { userService } from '../index';

import { Actions } from "../enums";
import { IAction } from '../interfaces';

function* fetchRegisterUserHandler(action: IAction) {
  try {
    yield delay(1000);
    yield userService.registerUser(action.payload);
    yield put(registerUserSuccess());
    yield delay(2000);
    yield put(registerClearMessage());
  } catch (err) {
    yield put(registerUserFailure(err));
  }
}

function* registerUserSaga() {
  yield takeLatest(Actions.REGISTER_USER_REQUEST, fetchRegisterUserHandler);
}

export default registerUserSaga;
