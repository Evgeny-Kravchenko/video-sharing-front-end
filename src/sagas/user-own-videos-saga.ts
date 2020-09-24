import { put, takeLatest, delay } from 'redux-saga/effects';
import { userOwnVideosSuccess, userOwnVideosFailure } from '../actions';

import { videoService } from '../index';

import { ActionVideosTypes } from '../actions';
import Action from '../actions/types';

function* fetchUserOwnVideo(action: Action) {
  try {
    const id = action.payload;
    yield delay(1000);
    const videos = yield videoService.getOwnVideos(id);
    yield put(userOwnVideosSuccess(videos));
  } catch (err) {
    yield put(userOwnVideosFailure(err));
  }
}

function* userOwnVideosSaga() {
  yield takeLatest(ActionVideosTypes.USER_OWN_VIDEOS_REQUEST, fetchUserOwnVideo);
}

export default userOwnVideosSaga;
