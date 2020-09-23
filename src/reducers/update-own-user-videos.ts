import { State, StateOwnVideos } from './types';
import { Video } from '../types';
import Action from '../actions/types';
import { ActionVideosTypes } from '../actions';

const updateOwnVideos = (state: State, action: Action): StateOwnVideos => {
  switch (action.type) {
    case ActionVideosTypes.USER_OWN_VIDEOS_REQUEST: {
      return {
        ...state.videos.ownVideos,
        loading: true,
      };
    }
    case ActionVideosTypes.USER_OWN_VIDEOS_SUCCESS: {
      return {
        ...state.videos.ownVideos,
        loading: false,
        error: null,
        videos: action.payload,
      };
    }
    case ActionVideosTypes.USER_OWN_VIDEOS_FAILURE: {
      return {
        ...state.videos.ownVideos,
        loading: false,
        error: action.payload,
        videos: [],
      };
    }
    case ActionVideosTypes.ADD_NEW_VIDEO_REQUEST: {
      return {
        ...state.videos.ownVideos,
        statusOfAddingNewVideo: {
          isSuccess: null,
          error: null,
          loading: true,
        },
      };
    }
    case ActionVideosTypes.ADD_NEW_VIDEO_SUCCESS: {
      return {
        ...state.videos.ownVideos,
        videos: [...state.videos.ownVideos.videos, action.payload],
        statusOfAddingNewVideo: {
          isSuccess: true,
          loading: false,
          error: null,
        },
      };
    }
    case ActionVideosTypes.ADD_NEW_VIDEO_FAILURE: {
      return {
        ...state.videos.ownVideos,
        statusOfAddingNewVideo: {
          isSuccess: false,
          loading: false,
          error: action.payload,
        },
      };
    }
    case ActionVideosTypes.DELETE_VIDEO_REQUEST: {
      return {
        ...state.videos.ownVideos,
        statusOfRemovingVideo: {
          isSuccess: null,
          loading: true,
          error: null,
        },
      };
    }
    case ActionVideosTypes.DELETE_VIDEO_SUCCESS: {
      return {
        ...state.videos.ownVideos,
        videos: state.videos.ownVideos.videos.filter((video: Video) => video.id !== action.payload),
        statusOfRemovingVideo: {
          isSuccess: true,
          loading: false,
          error: null,
        },
      };
    }
    case ActionVideosTypes.DELETE_VIDEO_FAILURE: {
      return {
        ...state.videos.ownVideos,
        statusOfRemovingVideo: {
          isSuccess: false,
          loading: false,
          error: action.payload,
        },
      };
    }
    case ActionVideosTypes.CLEAR_STATUS_OF_REMOVING_VIDEO: {
      return {
        ...state.videos.ownVideos,
        statusOfRemovingVideo: {
          isSuccess: null,
          loading: false,
          error: null,
        },
      };
    }
    case ActionVideosTypes.CLEAR_STATUS_OF_ADDING_VIDEO: {
      return {
        ...state.videos.ownVideos,
        statusOfAddingNewVideo: {
          isSuccess: null,
          loading: false,
          error: null,
        },
      };
    }
    case ActionVideosTypes.EDIT_VIDEO_REQUEST: {
      return {
        ...state.videos.ownVideos,
        statusOfEditingVideo: {
          ...state.videos.ownVideos.statusOfEditingVideo,
          loading: true,
        },
      };
    }
    case ActionVideosTypes.EDIT_VIDEO_SUCCESS: {
      return {
        ...state.videos.ownVideos,
        videos: state.videos.ownVideos.videos.map((video: Video) => {
          if (action.payload.id === video.id) {
            video.title = action.payload.title;
            video.description = action.payload.description;
            video.file = action.payload.file;
          }
          return video;
        }),
        statusOfEditingVideo: {
          isSuccess: true,
          error: null,
          loading: false,
        },
      };
    }
    case ActionVideosTypes.EDIT_VIDEO_FAILURE: {
      return {
        ...state.videos.ownVideos,
        statusOfEditingVideo: {
          isSuccess: false,
          error: action.payload,
          loading: false,
        },
      };
    }
    case ActionVideosTypes.CLEAR_STATUS_OF_EDITING_VIDEO: {
      return {
        ...state.videos.ownVideos,
        statusOfEditingVideo: {
          isSuccess: null,
          error: null,
          loading: false,
        },
      };
    }
    default: {
      return state.videos.ownVideos;
    }
  }
};

export default updateOwnVideos;
