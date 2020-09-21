import { put, takeLatest, delay } from 'redux-saga/effects';
import { userSharedVideosSuccess, userSharedVideosFailure } from '../actions';

import { videoService } from '../index';

import { ActionVideosTypes } from '../actions';
import IAction from '../interfaces/action.interface';

function* fetchUserSharedVideo(action: IAction) {
  try {
    const userEmail = action.payload;
    yield delay(1000);
    const videos = yield videoService.getWhoSharedVideosWith(userEmail);
    yield put(userSharedVideosSuccess(videos));
  } catch (err) {
    yield put(userSharedVideosFailure(err));
  }
}

function* userSharedVideosSaga() {
  yield takeLatest(ActionVideosTypes.USER_SHARED_VIDEOS_REQUEST, fetchUserSharedVideo);
}

export default userSharedVideosSaga;
