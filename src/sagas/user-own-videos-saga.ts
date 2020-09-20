import { put, takeLatest, delay } from 'redux-saga/effects';
import { userOwnVideosSuccess, userOwnVideosFailure } from '../actions';

import { videoService } from '../index';

import { Actions } from '../enums';
import IAction from '../interfaces/action.interface';

function* fetchUserOwnVideo(action: IAction) {
  try {
    const userEmail = action.payload;
    yield delay(1000);
    const videos = yield videoService.getOwnVideos(userEmail);
    yield put(userOwnVideosSuccess(videos));
  } catch (err) {
    yield put(userOwnVideosFailure(err));
  }
}

function* userOwnVideosSaga() {
  yield takeLatest(Actions.USER_OWN_VIDEOS_REQUEST, fetchUserOwnVideo);
}

export default userOwnVideosSaga;
