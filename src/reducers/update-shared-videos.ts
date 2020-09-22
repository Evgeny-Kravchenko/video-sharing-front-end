import { State, StateVideos } from './types';
import Action from '../actions/types';
import { ActionVideosTypes } from '../actions';

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

export default updateSharedVideos;
