import { put, takeLatest, delay } from 'redux-saga/effects';
import {
  userOwnVideosSuccess,
  userOwnVideosFailure,
  userSharedVideosSuccess,
  userSharedVideosFailure,
  shareVideoSuccess,
  shareVideoFailure,
  clearStatusSharingVideo,
  editVideoSuccess,
  editVideoFailure,
  clearStatusOfEditingVideo,
  deleteVideoSuccess,
  clearStatusOfRemovingVideo,
  deleteVideoFailure,
  addNewVideoSuccess,
  addNewVideoFailure,
  clearStatusOfAddingVideo,
} from '../actions';

import { videoService } from '../../index';

import { ActionVideosTypes } from '../actions';
import { Action } from '../actions';
import { ForkEffect } from '@redux-saga/core/effects';

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

function* fetchDeleteVideo(action: Action) {
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

function* fetchAddNewVideo(action: Action) {
  try {
    yield delay(1000);
    const videoId = yield videoService.addNewVideo(action.payload);
    yield put(addNewVideoSuccess({ video: action.payload.newVideo, videoId }));
  } catch (err) {
    yield put(addNewVideoFailure(err));
  }
  yield delay(2000);
  yield put(clearStatusOfAddingVideo());
}

function* videosSaga(): Generator<unknown, void, ForkEffect<never>> {
  yield takeLatest(ActionVideosTypes.USER_OWN_VIDEOS_REQUEST, fetchUserOwnVideo);
  yield takeLatest(ActionVideosTypes.USER_SHARED_VIDEOS_REQUEST, fetchUserSharedVideo);
  yield takeLatest(ActionVideosTypes.SHARE_VIDEO_REQUEST, fetchShareVideo);
  yield takeLatest(ActionVideosTypes.EDIT_VIDEO_REQUEST, fetchEditNewVideo);
  yield takeLatest(ActionVideosTypes.DELETE_VIDEO_REQUEST, fetchDeleteVideo);
  yield takeLatest(ActionVideosTypes.ADD_NEW_VIDEO_REQUEST, fetchAddNewVideo);
}

export default videosSaga;
