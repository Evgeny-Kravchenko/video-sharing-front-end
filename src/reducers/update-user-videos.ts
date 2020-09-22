import Action from '../actions/types';
import { State, StateOwnVideos, StateUserVideo, StateVideos } from './types';
import { ActionVideosTypes } from '../actions';
import { Video } from '../components/pages/video/components/video-item/types';

const updateOwnVideos = (state: State, action: Action): StateOwnVideos => {
  switch (action.type) {
    case ActionVideosTypes.USER_OWN_VIDEOS_REQUEST: {
      return {
        ...state.videosOfUser.ownVideos,
        loading: true,
      };
    }
    case ActionVideosTypes.USER_OWN_VIDEOS_SUCCESS: {
      return {
        ...state.videosOfUser.ownVideos,
        loading: false,
        error: null,
        videos: action.payload,
      };
    }
    case ActionVideosTypes.USER_OWN_VIDEOS_FAILURE: {
      return {
        ...state.videosOfUser.ownVideos,
        loading: false,
        error: action.payload,
        videos: [],
      };
    }
    case ActionVideosTypes.ADD_NEW_VIDEO_REQUEST: {
      return {
        ...state.videosOfUser.ownVideos,
        statusOfAddingNewVideo: {
          isSuccess: null,
          error: null,
          loading: true,
        },
      };
    }
    case ActionVideosTypes.ADD_NEW_VIDEO_SUCCESS: {
      return {
        ...state.videosOfUser.ownVideos,
        videos: [...state.videosOfUser.ownVideos.videos, action.payload],
        statusOfAddingNewVideo: {
          isSuccess: true,
          loading: false,
          error: null,
        },
      };
    }
    case ActionVideosTypes.ADD_NEW_VIDEO_FAILURE: {
      return {
        ...state.videosOfUser.ownVideos,
        statusOfAddingNewVideo: {
          isSuccess: false,
          loading: false,
          error: action.payload,
        },
      };
    }
    case ActionVideosTypes.DELETE_VIDEO_REQUEST: {
      return {
        ...state.videosOfUser.ownVideos,
        statusOfRemovingVideo: {
          isSuccess: null,
          loading: true,
          error: null,
        },
      };
    }
    case ActionVideosTypes.DELETE_VIDEO_SUCCESS: {
      return {
        ...state.videosOfUser.ownVideos,
        videos: state.videosOfUser.ownVideos.videos.filter(
          (video: Video) => video.id !== action.payload
        ),
        statusOfRemovingVideo: {
          isSuccess: true,
          loading: false,
          error: null,
        },
      };
    }
    case ActionVideosTypes.DELETE_VIDEO_FAILURE: {
      return {
        ...state.videosOfUser.ownVideos,
        statusOfRemovingVideo: {
          isSuccess: false,
          loading: false,
          error: action.payload,
        },
      };
    }
    case ActionVideosTypes.CLEAR_STATUS_OF_REMOVING_VIDEO: {
      return {
        ...state.videosOfUser.ownVideos,
        statusOfRemovingVideo: {
          isSuccess: null,
          loading: false,
          error: null,
        },
      };
    }
    case ActionVideosTypes.CLEAR_STATUS_OF_ADDING_VIDEO: {
      return {
        ...state.videosOfUser.ownVideos,
        statusOfAddingNewVideo: {
          isSuccess: null,
          loading: false,
          error: null,
        },
      };
    }
    default: {
      return state.videosOfUser.ownVideos;
    }
  }
};

const updateSharedVideos = (state: State, action: Action): StateVideos => {
  switch (action.type) {
    case ActionVideosTypes.USER_SHARED_VIDEOS_REQUEST: {
      return {
        ...state.videosOfUser.sharedVideos,
        loading: true,
      };
    }
    case ActionVideosTypes.USER_SHARED_VIDEOS_SUCCESS: {
      return {
        loading: false,
        error: null,
        videos: action.payload,
      };
    }
    case ActionVideosTypes.USER_SHARED_VIDEOS_FAILURE: {
      return {
        loading: false,
        error: action.payload,
        videos: [],
      };
    }
    default: {
      return state.videosOfUser.sharedVideos;
    }
  }
};

const updateUserVideos = (state: State, action: Action): StateUserVideo => {
  return {
    ownVideos: updateOwnVideos(state, action),
    sharedVideos: updateSharedVideos(state, action),
  };
};

export default updateUserVideos;
