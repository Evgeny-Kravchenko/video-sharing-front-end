import { all } from 'redux-saga/effects';

import { usersSaga, videosSaga } from './index';

function* rootSaga() {
  yield all([usersSaga(), videosSaga()]);
}

export default rootSaga;
