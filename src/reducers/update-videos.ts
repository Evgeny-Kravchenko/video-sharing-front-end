import { State, VideoState } from './types';
import Action from '../actions/types';
import { ActionVideosTypes } from '../actions';
import { Video } from '../types';

const updateVideos = (state: State, action: Action): VideoState => {
  switch (action.payload) {
    case ActionVideosTypes.USER_OWN_VIDEOS_REQUEST: {
      return {
        ...state.videos,
        statusOfLoadingOwnVideos: {
          ...state.videos.statusOfLoadingOwnVideos,
          loading: true,
        },
      };
    }
    case ActionVideosTypes.USER_OWN_VIDEOS_SUCCESS: {
      return {
        ...state.videos,
        statusOfLoadingOwnVideos: {
          isSuccess: true,
          error: null,
          loading: false,
        },
      };
    }
    case ActionVideosTypes.USER_OWN_VIDEOS_FAILURE: {
      return {
        ...state.videos,
        statusOfLoadingOwnVideos: {
          isSuccess: false,
          error: action.payload,
          loading: false,
        },
      };
    }
    case ActionVideosTypes.ADD_NEW_VIDEO_REQUEST: {
      return {
        ...state.videos,
        statusOfAddingNewVideo: {
          isSuccess: null,
          error: null,
          loading: true,
        },
      };
    }
    case ActionVideosTypes.ADD_NEW_VIDEO_SUCCESS: {
      return {
        ...state.videos,
        collection: [...state.videos.collection, action.payload],
        statusOfAddingNewVideo: {
          isSuccess: true,
          loading: false,
          error: null,
        },
      };
    }
    case ActionVideosTypes.ADD_NEW_VIDEO_FAILURE: {
      return {
        ...state.videos,
        statusOfAddingNewVideo: {
          isSuccess: false,
          loading: false,
          error: action.payload,
        },
      };
    }
    case ActionVideosTypes.DELETE_VIDEO_REQUEST: {
      return {
        ...state.videos,
        statusOfRemovingVideo: {
          isSuccess: null,
          loading: true,
          error: null,
        },
      };
    }
    case ActionVideosTypes.DELETE_VIDEO_SUCCESS: {
      return {
        ...state.videos,
        collection: state.videos.collection.filter((video: Video) => video.id !== action.payload),
        statusOfRemovingVideo: {
          isSuccess: true,
          loading: false,
          error: null,
        },
      };
    }
    case ActionVideosTypes.DELETE_VIDEO_FAILURE: {
      return {
        ...state.videos,
        statusOfRemovingVideo: {
          isSuccess: false,
          loading: false,
          error: action.payload,
        },
      };
    }
    case ActionVideosTypes.CLEAR_STATUS_OF_REMOVING_VIDEO: {
      return {
        ...state.videos,
        statusOfRemovingVideo: {
          isSuccess: null,
          loading: false,
          error: null,
        },
      };
    }
    case ActionVideosTypes.CLEAR_STATUS_OF_ADDING_VIDEO: {
      return {
        ...state.videos,
        statusOfAddingNewVideo: {
          isSuccess: null,
          loading: false,
          error: null,
        },
      };
    }
    case ActionVideosTypes.EDIT_VIDEO_REQUEST: {
      return {
        ...state.videos,
        statusOfEditingVideo: {
          ...state.videos.statusOfEditingVideo,
          loading: true,
        },
      };
    }
    case ActionVideosTypes.EDIT_VIDEO_SUCCESS: {
      return {
        ...state.videos,
        collection: state.videos.collection.map((video: Video) => {
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
        ...state.videos,
        statusOfEditingVideo: {
          isSuccess: false,
          error: action.payload,
          loading: false,
        },
      };
    }
    case ActionVideosTypes.CLEAR_STATUS_OF_EDITING_VIDEO: {
      return {
        ...state.videos,
        statusOfEditingVideo: {
          isSuccess: null,
          error: null,
          loading: false,
        },
      };
    }
    case ActionVideosTypes.USER_SHARED_VIDEOS_REQUEST: {
      return {
        ...state.videos,
        statusOfLoadingSharedVideos: {
          ...state.videos.statusOfLoadingSharedVideos,
          loading: true,
        },
      };
    }
    case ActionVideosTypes.USER_SHARED_VIDEOS_SUCCESS: {
      return {
        ...state.videos,
        collection: [...state.videos.collection, action.payload],
        statusOfLoadingSharedVideos: {
          loading: false,
          error: null,
          isSuccess: true,
        },
      };
    }
    case ActionVideosTypes.USER_SHARED_VIDEOS_FAILURE: {
      return {
        ...state.videos,
        statusOfLoadingSharedVideos: {
          loading: false,
          error: action.payload,
          isSuccess: false,
        },
      };
    }
    case ActionVideosTypes.SHARE_VIDEO_REQUEST: {
      return {
        ...state.videos,
        statusOfSharingVideoToUser: {
          ...state.videos.statusOfSharingVideoToUser,
          loading: true,
        },
      };
    }
    case ActionVideosTypes.SHARE_VIDEO_SUCCESS: {
      return {
        ...state.videos,
        statusOfSharingVideoToUser: {
          loading: false,
          error: null,
          isSuccess: true,
        },
      };
    }
    case ActionVideosTypes.SHARE_VIDEO_FAILURE: {
      return {
        ...state.videos,
        statusOfSharingVideoToUser: {
          loading: false,
          error: action.payload,
          isSuccess: false,
        },
      };
    }
    case ActionVideosTypes.CLEAR_STATUS_OF_SHARING_VIDEO: {
      return {
        ...state.videos,
        statusOfSharingVideoToUser: {
          loading: false,
          error: null,
          isSuccess: null,
        },
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
