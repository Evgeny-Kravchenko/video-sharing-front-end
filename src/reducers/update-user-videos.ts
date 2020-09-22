import Action from '../actions/types';
import { State, StateOwnVideos, StateUserVideo, StateVideos } from './types';

const updateOwnVideos = (state: State, action: Action): StateOwnVideos => {
  switch (action.type) {
    case 'USER_OWN_VIDEOS_REQUEST': {
      return {
        ...state.videosOfUser.ownVideos,
        loading: true,
      };
    }
    case 'USER_OWN_VIDEOS_SUCCESS': {
      return {
        ...state.videosOfUser.ownVideos,
        loading: false,
        error: null,
        videos: action.payload,
      };
    }
    case 'USER_OWN_VIDEOS_FAILURE': {
      return {
        ...state.videosOfUser.ownVideos,
        loading: false,
        error: action.payload,
        videos: [],
      };
    }
    case 'ADD_NEW_VIDEO_REQUEST': {
      return {
        ...state.videosOfUser.ownVideos,
        statusOfAddingNewVideo: {
          isSuccess: null,
          error: null,
          loading: true,
        },
      };
    }
    case 'ADD_NEW_VIDEO_SUCCESS': {
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
    case 'ADD_NEW_VIDEO_FAILURE': {
      return {
        ...state.videosOfUser.ownVideos,
        statusOfAddingNewVideo: {
          isSuccess: false,
          loading: false,
          error: action.payload,
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
    case 'USER_SHARED_VIDEOS_REQUEST': {
      return {
        ...state.videosOfUser.sharedVideos,
        loading: true,
      };
    }
    case 'USER_SHARED_VIDEOS_SUCCESS': {
      return {
        loading: false,
        error: null,
        videos: action.payload,
      };
    }
    case 'USER_SHARED_VIDEOS_FAILURE': {
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
