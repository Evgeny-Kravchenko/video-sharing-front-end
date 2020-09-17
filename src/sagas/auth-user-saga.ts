import { put, takeLatest } from 'redux-saga/effects';
import { authorizeUserSuccsess, authorizeUserFailure } from '../actions';

function* fetchAuthUserHandler() {
  try {
    const user: string | null = localStorage.getItem('name');
    yield put(authorizeUserSuccsess(user));
  } catch (error) {
    yield put(authorizeUserFailure(error));
  }
}
function* authUserSaga() {
  yield takeLatest('AUTH_USER_REQUEST', fetchAuthUserHandler);
}

export default authUserSaga;
