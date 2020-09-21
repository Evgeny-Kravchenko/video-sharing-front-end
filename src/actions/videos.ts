import Action from './types';
import { StateVideos } from '../reducers/types';

enum ActionVideosTypes {
  USER_OWN_VIDEOS_REQUEST = 'USER_OWN_VIDEOS_REQUEST',
  USER_OWN_VIDEOS_SUCCESS = 'USER_OWN_VIDEOS_SUCCESS',
  USER_OWN_VIDEOS_FAILURE = 'USER_OWN_VIDEOS_FAILURE',
  USER_SHARED_VIDEOS_REQUEST = 'USER_SHARED_VIDEOS_REQUEST',
  USER_SHARED_VIDEOS_SUCCESS = 'USER_SHARED_VIDEOS_SUCCESS',
  USER_SHARED_VIDEOS_FAILURE = 'USER_SHARED_VIDEOS_FAILURE',
}

const userOwnVideosRequest = (email: string): Action => {
  return {
    type: ActionVideosTypes.USER_OWN_VIDEOS_REQUEST,
    payload: email,
  };
};

const userOwnVideosSuccess = (videos: Array<StateVideos>): Action => {
  return {
    type: ActionVideosTypes.USER_OWN_VIDEOS_SUCCESS,
    payload: videos,
  };
};

const userOwnVideosFailure = (error: Error): Action => {
  return {
    type: ActionVideosTypes.USER_OWN_VIDEOS_FAILURE,
    payload: error,
  };
};

const userSharedVideosRequest = (email: string): Action => {
  return {
    type: ActionVideosTypes.USER_SHARED_VIDEOS_REQUEST,
    payload: email,
  };
};

const userSharedVideosSuccess = (videos: Array<StateVideos>): Action => {
  return {
    type: ActionVideosTypes.USER_SHARED_VIDEOS_SUCCESS,
    payload: videos,
  };
};

const userSharedVideosFailure = (error: Error): Action => {
  return {
    type: ActionVideosTypes.USER_SHARED_VIDEOS_FAILURE,
    payload: error,
  };
};

export {
  ActionVideosTypes,
  userOwnVideosRequest,
  userOwnVideosSuccess,
  userOwnVideosFailure,
  userSharedVideosRequest,
  userSharedVideosSuccess,
  userSharedVideosFailure,
};
