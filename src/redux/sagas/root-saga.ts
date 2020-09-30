import { all } from 'redux-saga/effects';

import { usersSaga, videosSaga } from './index';

function* rootSaga(): any {
  yield all([usersSaga(), videosSaga()]);
}

export default rootSaga;
