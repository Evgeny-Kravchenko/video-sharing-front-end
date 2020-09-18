import { put, takeLatest } from 'redux-saga/effects';
import { authorizeUserSuccsess, authorizeUserFailure } from '../actions';

import userService from '../index';

import { IAction } from '../interfaces';

function* fetchAuthUserHandler(action: IAction) {
  const { email, password } = action.payload;
  try {
    const user = yield userService.getUser(email, password);
    yield put(authorizeUserSuccsess(user));
  } catch (error) {
    yield put(authorizeUserFailure(error));
  }
}
function* authUserSaga() {
  yield takeLatest('AUTH_USER_REQUEST', fetchAuthUserHandler);
}

export default authUserSaga;
