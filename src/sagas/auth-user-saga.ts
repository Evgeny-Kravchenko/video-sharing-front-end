import { put, takeLatest } from 'redux-saga/effects';

function* fetchAuthUserHandler() {
  debugger;
  try {
    const user = localStorage.getItem('name');
    yield put({ type: 'AUTH_SUCCSESS', payload: { user } });
  } catch (error) {
    yield put({ type: 'AUTH_FAILURE', payload: { error } });
  }
}
function* authUserSaga() {
  yield takeLatest('AUTH_REQUEST', fetchAuthUserHandler);
}

export default authUserSaga;
