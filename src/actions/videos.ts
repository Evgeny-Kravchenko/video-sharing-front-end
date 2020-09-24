import Action from './types';
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
  SHARE_VIDEO_REQUEST = 'SHARE_VIDEO_REQUEST',
  SHARE_VIDEO_SUCCESS = 'SHARE_VIDEO_SUCCESS',
  SHARE_VIDEO_FAILURE = 'SHARE_VIDEO_FAILURE',
  CLEAR_STATUS_OF_SHARING_VIDEO = 'CLEAR_STATUS_OF_SHARING_VIDEO',
  EDIT_VIDEO_REQUEST = 'EDIT_VIDEO_REQUEST',
  EDIT_VIDEO_SUCCESS = 'EDIT_VIDEO_SUCCESS',
  EDIT_VIDEO_FAILURE = 'EDIT_VIDEO_FAILURE',
  CLEAR_STATUS_OF_EDITING_VIDEO = 'CLEAR_STATUS_OF_EDITING_VIDEO',
}

const userOwnVideosRequest = (id: string): Action => {
  return {
    type: ActionVideosTypes.USER_OWN_VIDEOS_REQUEST,
    payload: id,
  };
};

const userOwnVideosSuccess = (videos: Array<Video>): Action => {
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

const userSharedVideosSuccess = (videos: Array<Video>): Action => {
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

const addNewVideoRequest = (data: { data: Video; userEmail: string }): Action => {
  return {
    type: ActionVideosTypes.ADD_NEW_VIDEO_REQUEST,
    payload: data,
  };
};

const addNewVideoSuccess = (data: { video: Video; videoId: string }): Action => {
  return {
    type: ActionVideosTypes.ADD_NEW_VIDEO_SUCCESS,
    payload: data,
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

const shareVideoRequest = (
  email: string,
  videoId: string,
  userEmailWhoShareVideo: string
): Action => {
  return {
    type: ActionVideosTypes.SHARE_VIDEO_REQUEST,
    payload: { email, videoId, userEmailWhoShareVideo },
  };
};

const shareVideoSuccess = ({
  email,
  videoId,
  userEmailWhoShareVideo,
}: {
  email: string;
  videoId: string;
  userEmailWhoShareVideo: string;
}): Action => {
  return {
    type: ActionVideosTypes.SHARE_VIDEO_SUCCESS,
    payload: { email, videoId, userEmailWhoShareVideo },
  };
};

const shareVideoFailure = (err: string): Action => {
  return {
    type: ActionVideosTypes.SHARE_VIDEO_FAILURE,
    payload: err,
  };
};

const clearStatusSharingVideo = (): Action => {
  return {
    type: ActionVideosTypes.CLEAR_STATUS_OF_SHARING_VIDEO,
  };
};

const editVideoRequest = (data: { data: Video; userEmail: string; videoId: string }): Action => {
  return {
    type: ActionVideosTypes.EDIT_VIDEO_REQUEST,
    payload: { data: data.data, videoId: data.videoId },
  };
};

const editVideoSuccess = (data: { data: Video; videoId: string }): Action => {
  return {
    type: ActionVideosTypes.EDIT_VIDEO_SUCCESS,
    payload: data,
  };
};

const editVideoFailure = (err: string): Action => {
  return {
    type: ActionVideosTypes.EDIT_VIDEO_FAILURE,
    payload: err,
  };
};

const clearStatusOfEditingVideo = (): Action => {
  return {
    type: ActionVideosTypes.CLEAR_STATUS_OF_EDITING_VIDEO,
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
  shareVideoRequest,
  shareVideoSuccess,
  shareVideoFailure,
  clearStatusSharingVideo,
  editVideoRequest,
  editVideoSuccess,
  editVideoFailure,
  clearStatusOfEditingVideo,
};
