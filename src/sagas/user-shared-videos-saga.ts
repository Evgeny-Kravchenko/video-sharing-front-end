import { put, takeLatest, delay } from 'redux-saga/effects';
import { userSharedVideosSuccess, userSharedVideosFailure } from '../actions';

import { videoService } from '../index';

import { ActionVideosTypes } from '../actions';
import { Action } from '../actions';

function* fetchUserSharedVideo(action: Action) {
  try {
    const userEmail = action.payload;
    yield delay(1000);
    const videos = yield videoService.getSharedVideos(userEmail);
    yield put(userSharedVideosSuccess(videos));
  } catch (err) {
    yield put(userSharedVideosFailure(err));
  }
}

function* userSharedVideosSaga() {
  yield takeLatest(ActionVideosTypes.USER_SHARED_VIDEOS_REQUEST, fetchUserSharedVideo);
}

export default userSharedVideosSaga;
