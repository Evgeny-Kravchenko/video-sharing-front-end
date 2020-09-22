import Action from '../actions/types';
import { ActionVideosTypes, addNewVideoSuccess, addNewVideoFailure } from '../actions';
import { put, takeLatest, delay } from 'redux-saga/effects';

import { videoService } from '../index';

function* fetchAddNewVideo(action: Action) {
  try {
    yield delay(1000);
    yield videoService.addNewVideo(action.payload);
    yield put(addNewVideoSuccess(action.payload));
  } catch (err) {
    yield put(addNewVideoFailure(err));
  }
}

function* addNewVideoSaga() {
  yield takeLatest(ActionVideosTypes.ADD_NEW_VIDEO_REQUEST, fetchAddNewVideo);
}

export default addNewVideoSaga;
