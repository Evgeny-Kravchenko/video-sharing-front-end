import { State, StateSharedVideos } from './types';
import Action from '../actions/types';
import { ActionVideosTypes } from '../actions';

const updateSharedVideos = (state: State, action: Action): StateSharedVideos => {
  switch (action.type) {
    case ActionVideosTypes.USER_SHARED_VIDEOS_REQUEST: {
      return {
        ...state.videos.sharedVideos,
        loading: true,
      };
    }
    case ActionVideosTypes.USER_SHARED_VIDEOS_SUCCESS: {
      return {
        ...state.videos.sharedVideos,
        loading: false,
        error: null,
        videos: action.payload,
      };
    }
    case ActionVideosTypes.USER_SHARED_VIDEOS_FAILURE: {
      return {
        ...state.videos.sharedVideos,
        loading: false,
        error: action.payload,
        videos: [],
      };
    }
    case ActionVideosTypes.SHARE_VIDEO_REQUEST: {
      return {
        ...state.videos.sharedVideos,
        statusOfSharingVideo: {
          ...state.videos.sharedVideos.statusOfSharingVideo,
          loading: true,
        },
      };
    }
    case ActionVideosTypes.SHARE_VIDEO_SUCCESS: {
      return {
        ...state.videos.sharedVideos,
        statusOfSharingVideo: {
          loading: false,
          error: null,
          isSuccess: true,
        },
      };
    }
    case ActionVideosTypes.SHARE_VIDEO_FAILURE: {
      return {
        ...state.videos.sharedVideos,
        statusOfSharingVideo: {
          loading: false,
          error: action.payload,
          isSuccess: false,
        },
      };
    }
    case ActionVideosTypes.CLEAR_STATUS_OF_SHARING_VIDEO: {
      return {
        ...state.videos.sharedVideos,
        statusOfSharingVideo: {
          loading: false,
          error: null,
          isSuccess: null,
        },
      };
    }
    default: {
      return state.videos.sharedVideos;
    }
  }
};

export default updateSharedVideos;
