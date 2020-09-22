import Action from './types';
import { StateVideos } from '../reducers/types';
import { Video } from '../types';

enum ActionVideosTypes {
  USER_OWN_VIDEOS_REQUEST = 'USER_OWN_VIDEOS_REQUEST',
  USER_OWN_VIDEOS_SUCCESS = 'USER_OWN_VIDEOS_SUCCESS',
  USER_OWN_VIDEOS_FAILURE = 'USER_OWN_VIDEOS_FAILURE',
  USER_SHARED_VIDEOS_REQUEST = 'USER_SHARED_VIDEOS_REQUEST',
  USER_SHARED_VIDEOS_SUCCESS = 'USER_SHARED_VIDEOS_SUCCESS',
  USER_SHARED_VIDEOS_FAILURE = 'USER_SHARED_VIDEOS_FAILURE',
  ADD_NEW_VIDEO_REQUEST = 'ADD_NEW_VIDEO_REQUEST',
  ADD_NEW_VIDEO_SUCCESS = 'ADD_NEW_VIDEO_SUCCESS',
  ADD_NEW_VIDEO_FAILURE = 'ADD_NEW_VIDEO_FAILURE',
  DELETE_VIDEO_REQUEST = 'DELETE_VIDEO_REQUEST',
  DELETE_VIDEO_SUCCESS = 'DELETE_VIDEO_SUCCESS',
  DELETE_VIDEO_FAILURE = 'DELETE_VIDEO_FAILURE',
  CLEAR_STATUS_OF_REMOVING_VIDEO = 'CLEAR_STATUS_OF_REMOVING_VIDEO',
  CLEAR_STATUS_OF_ADDING_VIDEO = 'CLEAR_STATUS_OF_ADDING_VIDEO',
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

const addNewVideoRequest = (video: Video): Action => {
  return {
    type: ActionVideosTypes.ADD_NEW_VIDEO_REQUEST,
    payload: video,
  };
};

const addNewVideoSuccess = (video: Video): Action => {
  return {
    type: ActionVideosTypes.ADD_NEW_VIDEO_SUCCESS,
    payload: video,
  };
};

const addNewVideoFailure = (err: Error): Action => {
  return {
    type: ActionVideosTypes.ADD_NEW_VIDEO_FAILURE,
    payload: err,
  };
};

const deleteVideoRequest = (id: string): Action => {
  return {
    type: ActionVideosTypes.DELETE_VIDEO_REQUEST,
    payload: id,
  };
};

const deleteVideoSuccess = (id: string): Action => {
  return {
    type: ActionVideosTypes.DELETE_VIDEO_SUCCESS,
    payload: id,
  };
};

const deleteVideoFailure = (err: string): Action => {
  return {
    type: ActionVideosTypes.DELETE_VIDEO_FAILURE,
    payload: err,
  };
};

const clearStatusOfAddingVideo = (): Action => {
  return {
    type: ActionVideosTypes.CLEAR_STATUS_OF_ADDING_VIDEO,
  };
};

const clearStatusOfRemovingVideo = (): Action => {
  return {
    type: ActionVideosTypes.CLEAR_STATUS_OF_REMOVING_VIDEO,
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
  addNewVideoRequest,
  addNewVideoSuccess,
  addNewVideoFailure,
  deleteVideoRequest,
  deleteVideoSuccess,
  deleteVideoFailure,
  clearStatusOfRemovingVideo,
  clearStatusOfAddingVideo,
};
