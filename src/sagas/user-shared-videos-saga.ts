import { put, takeLatest, delay } from 'redux-saga/effects';
import { userSharedVideosSuccess, userSharedVideosFailure } from '../actions';

import { videoService } from '../index';

import { Actions } from '../enums';
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
  yield takeLatest(Actions.USER_SHARED_VIDEOS_REQUEST, fetchUserSharedVideo);
}

export default userSharedVideosSaga;
