import { Action } from '../actions';
import {
  ActionVideosTypes,
  addNewVideoSuccess,
  addNewVideoFailure,
  clearStatusOfAddingVideo,
} from '../actions';
import { put, takeLatest, delay } from 'redux-saga/effects';

import { videoService } from '../index';

function* fetchAddNewVideo(action: Action) {
  try {
    yield delay(1000);
    const videoId = yield videoService.addNewVideo(action.payload);
    yield put(addNewVideoSuccess({ video: action.payload.data, videoId: videoId }));
  } catch (err) {
    yield put(addNewVideoFailure(err));
  }
  yield delay(2000);
  yield put(clearStatusOfAddingVideo());
}

function* addNewVideoSaga() {
  yield takeLatest(ActionVideosTypes.ADD_NEW_VIDEO_REQUEST, fetchAddNewVideo);
}

export default addNewVideoSaga;
