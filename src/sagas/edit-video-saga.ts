import Action from '../actions/types';
import {
  ActionVideosTypes,
  editVideoSuccess,
  editVideoFailure,
  clearStatusOfEditingVideo,
} from '../actions';
import { put, takeLatest, delay } from 'redux-saga/effects';

import { videoService } from '../index';

function* fetchEditNewVideo(action: Action) {
  try {
    yield delay(1000);
    yield videoService.editVideo(action.payload);
    yield put(editVideoSuccess(action.payload));
  } catch (err) {
    yield put(editVideoFailure(err));
  }
  yield delay(2000);
  yield put(clearStatusOfEditingVideo());
}

function* editVideoSaga() {
  yield takeLatest(ActionVideosTypes.ADD_NEW_VIDEO_REQUEST, fetchEditNewVideo);
}

export default editVideoSaga;
