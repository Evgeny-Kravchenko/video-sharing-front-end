import { Action } from '../actions';
import {
  ActionVideosTypes,
  deleteVideoSuccess,
  deleteVideoFailure,
  clearStatusOfRemovingVideo,
} from '../actions';
import { put, takeLatest, delay } from 'redux-saga/effects';

import { videoService } from '../index';

function* fetchAddNewVideo(action: Action) {
  try {
    yield delay(1000);
    yield videoService.deleteVideo(action.payload);
    yield put(deleteVideoSuccess(action.payload));
    yield delay(2000);
    yield put(clearStatusOfRemovingVideo());
  } catch (err) {
    yield put(deleteVideoFailure(err));
  }
}

function* deleteVideoSaga() {
  yield takeLatest(ActionVideosTypes.DELETE_VIDEO_REQUEST, fetchAddNewVideo);
}

export default deleteVideoSaga;
