import { put, takeLatest } from 'redux-saga/effects';
import { userOwnVideosSuccess, userOwnVideosFailure } from '../actions';

import { videoService } from '../index';

import IAction from '../interfaces/action.interface';

function* fetchUserOwnVideo(action: IAction) {
  const { user } = action.payload;
  try {
    const videos = yield videoService.getOwnVideos(user);
    yield put(userOwnVideosSuccess(videos));
  } catch (err) {
    yield put(userOwnVideosFailure(err));
  }
}

function* userOwnVideosSaga() {
  yield takeLatest('USER_OWN_VIDEOS_REQUEST', fetchUserOwnVideo);
}

export default userOwnVideosSaga;
