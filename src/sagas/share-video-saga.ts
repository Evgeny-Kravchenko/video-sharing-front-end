import { put, takeLatest, delay } from 'redux-saga/effects';
import { shareVideoSuccess, shareVideoFailure, clearStatusSharingVideo } from '../actions';

import { videoService } from '../index';

import { ActionVideosTypes, Action } from '../actions';

function* fetchShareVideo(action: Action) {
  try {
    const data = action.payload;
    yield delay(1000);
    yield videoService.shareVideo(data);
    yield put(shareVideoSuccess(data));
  } catch (err) {
    yield put(shareVideoFailure(err));
  }
  yield delay(2000);
  yield put(clearStatusSharingVideo());
}

function* shareVideoSaga() {
  yield takeLatest(ActionVideosTypes.SHARE_VIDEO_REQUEST, fetchShareVideo);
}

export default shareVideoSaga;
