import { State, VideoState } from './types';
import { Video } from '../types';

import { Action } from '../actions';
import { ActionVideosTypes, UserActionTypes } from '../actions';

import { getArrayFromSet, getSetFromArray } from '../helpers';

import updateStatus from './update-status';

const updateVideos = (state: State, action: Action): VideoState => {
  switch (action.type) {
    case UserActionTypes.UNAUTHORIZE: {
      return {
        ...state.videos,
        collection: new Set(),
        ownVideosIds: [],
        sharedVideosIds: [],
      };
    }
    case UserActionTypes.AUTH_USER_SUCCSESS: {
      localStorage.setItem('own-videos-ids', JSON.stringify(action.payload.user.ownVideosIds));
      localStorage.setItem(
        'shared-videos-ids',
        JSON.stringify(action.payload.user.sharedVideosIds)
      );
      return {
        ...state.videos,
        ownVideosIds: action.payload.user.ownVideosIds,
        sharedVideosIds: action.payload.user.sharedVideosIds,
      };
    }
    case ActionVideosTypes.USER_OWN_VIDEOS_REQUEST: {
      return {
        ...state.videos,
        statusOfLoadingOwnVideos: updateStatus(state, action),
      };
    }
    case ActionVideosTypes.USER_OWN_VIDEOS_SUCCESS: {
      const stateArray = getArrayFromSet(state.videos.collection);
      const newStateArray = [...stateArray, ...action.payload];
      localStorage.setItem('collection', JSON.stringify(newStateArray));
      const collection = getSetFromArray(newStateArray);
      return {
        ...state.videos,
        collection,
        statusOfLoadingOwnVideos: updateStatus(state, action),
      };
    }
    case ActionVideosTypes.USER_OWN_VIDEOS_FAILURE: {
      return {
        ...state.videos,
        statusOfLoadingOwnVideos: updateStatus(state, action),
      };
    }
    case ActionVideosTypes.ADD_NEW_VIDEO_REQUEST: {
      return {
        ...state.videos,
        statusOfAddingNewVideo: updateStatus(state, action),
      };
    }
    case ActionVideosTypes.ADD_NEW_VIDEO_SUCCESS: {
      const video: Video = {
        ...action.payload.video,
        id: action.payload.videoId,
      };
      const collectionArray = getArrayFromSet(state.videos.collection);
      const newStateOfCollectionArray = [...collectionArray, video];
      const newStateOfCollectionSet = getSetFromArray(newStateOfCollectionArray);
      localStorage.setItem('collection', JSON.stringify(newStateOfCollectionArray));
      localStorage.setItem(
        'own-videos-ids',
        JSON.stringify([...state.videos.ownVideosIds, action.payload.videoId])
      );
      return {
        ...state.videos,
        collection: newStateOfCollectionSet,
        ownVideosIds: [...state.videos.ownVideosIds, action.payload.videoId],
        statusOfAddingNewVideo: updateStatus(state, action),
      };
    }
    case ActionVideosTypes.ADD_NEW_VIDEO_FAILURE: {
      return {
        ...state.videos,
        statusOfAddingNewVideo: updateStatus(state, action),
      };
    }
    case ActionVideosTypes.DELETE_VIDEO_REQUEST: {
      return {
        ...state.videos,
        statusOfRemovingVideo: updateStatus(state, action),
      };
    }
    case ActionVideosTypes.DELETE_VIDEO_SUCCESS: {
      const stateArray = getArrayFromSet(state.videos.collection);
      const newStateArray = stateArray.filter((video: Video) => video.id !== action.payload);
      const newOwnVideosIds = state.videos.ownVideosIds.filter(
        (videoId: string) => videoId !== action.payload
      );
      localStorage.setItem('collection', JSON.stringify(newStateArray));
      localStorage.setItem('own-videos-ids', JSON.stringify(newOwnVideosIds));
      const collection = getSetFromArray(newStateArray);

      return {
        ...state.videos,
        collection,
        ownVideosIds: newOwnVideosIds,
        statusOfRemovingVideo: updateStatus(state, action),
      };
    }
    case ActionVideosTypes.DELETE_VIDEO_FAILURE: {
      return {
        ...state.videos,
        statusOfRemovingVideo: updateStatus(state, action),
      };
    }
    case ActionVideosTypes.CLEAR_STATUS_OF_REMOVING_VIDEO: {
      return {
        ...state.videos,
        statusOfRemovingVideo: updateStatus(state, action),
      };
    }
    case ActionVideosTypes.CLEAR_STATUS_OF_ADDING_VIDEO: {
      return {
        ...state.videos,
        statusOfAddingNewVideo: updateStatus(state, action),
      };
    }
    case ActionVideosTypes.EDIT_VIDEO_REQUEST: {
      return {
        ...state.videos,
        statusOfEditingVideo: updateStatus(state, action),
      };
    }
    case ActionVideosTypes.EDIT_VIDEO_SUCCESS: {
      const stateArray = getArrayFromSet(state.videos.collection);
      const newStateArray = stateArray.map((video: Video) => {
        if (action.payload.videoId === video.id) {
          video.title = action.payload.data.title;
          video.description = action.payload.data.description;
          video.file = action.payload.data.file;
        }
        return video;
      });
      localStorage.setItem('collection', JSON.stringify(newStateArray));
      const collection = getSetFromArray(newStateArray);
      return {
        ...state.videos,
        collection,
        statusOfEditingVideo: updateStatus(state, action),
      };
    }
    case ActionVideosTypes.EDIT_VIDEO_FAILURE: {
      return {
        ...state.videos,
        statusOfEditingVideo: updateStatus(state, action),
      };
    }
    case ActionVideosTypes.CLEAR_STATUS_OF_EDITING_VIDEO: {
      return {
        ...state.videos,
        statusOfEditingVideo: updateStatus(state, action),
      };
    }
    case ActionVideosTypes.USER_SHARED_VIDEOS_REQUEST: {
      return {
        ...state.videos,
        statusOfLoadingSharedVideos: updateStatus(state, action),
      };
    }
    case ActionVideosTypes.USER_SHARED_VIDEOS_SUCCESS: {
      const stateArray = getArrayFromSet(state.videos.collection);
      const newStateArray = [...stateArray, ...action.payload];
      localStorage.setItem('collection', JSON.stringify(newStateArray));
      const collection = getSetFromArray(newStateArray);
      return {
        ...state.videos,
        collection,
        statusOfLoadingSharedVideos: updateStatus(state, action),
      };
    }
    case ActionVideosTypes.USER_SHARED_VIDEOS_FAILURE: {
      return {
        ...state.videos,
        statusOfLoadingSharedVideos: updateStatus(state, action),
      };
    }
    case ActionVideosTypes.SHARE_VIDEO_REQUEST: {
      return {
        ...state.videos,
        statusOfSharingVideoToUser: updateStatus(state, action),
      };
    }
    case ActionVideosTypes.SHARE_VIDEO_SUCCESS: {
      return {
        ...state.videos,
        statusOfSharingVideoToUser: updateStatus(state, action),
      };
    }
    case ActionVideosTypes.SHARE_VIDEO_FAILURE: {
      return {
        ...state.videos,
        statusOfSharingVideoToUser: updateStatus(state, action),
      };
    }
    case ActionVideosTypes.CLEAR_STATUS_OF_SHARING_VIDEO: {
      return {
        ...state.videos,
        statusOfSharingVideoToUser: updateStatus(state, action),
      };
    }
    default: {
      return {
        ...state.videos,
      };
    }
  }
};

export default updateVideos;
