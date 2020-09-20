import { put, takeLatest, delay } from 'redux-saga/effects';
import { authorizeUserSuccsess, authorizeUserFailure, userOwnVideosRequest } from '../actions';

import { userService } from '../index';

import { Actions } from "../enums";
import { IAction } from '../interfaces';

function* fetchAuthUserHandler(action: IAction) {
  try {
    const { email, password } = action.payload;
    yield delay(1000);
    const user = yield userService.getUser(email, password);
    yield put(authorizeUserSuccsess(user));
    yield put(userOwnVideosRequest(email));
  } catch (error) {
    yield put(authorizeUserFailure(error));
  }
}
function* authUserSaga() {
  yield takeLatest(Actions.AUTH_USER_REQUEST, fetchAuthUserHandler);
}

export default authUserSaga;
