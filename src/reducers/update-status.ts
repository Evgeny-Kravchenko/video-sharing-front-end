import { State, Status } from './types';
import { Action, ActionVideosTypes } from '../actions';

const updateStatus = (state: State, action: Action): Status => {
  switch (action.type) {
    case ActionVideosTypes.USER_OWN_VIDEOS_REQUEST: {
      return {
        ...state.videos.statusOfLoadingOwnVideos,
        loading: true,
      };
    }
    case ActionVideosTypes.USER_OWN_VIDEOS_SUCCESS: {
      return {
        isSuccess: true,
        error: null,
        loading: false,
      };
    }
    case ActionVideosTypes.USER_OWN_VIDEOS_FAILURE: {
      return {
        isSuccess: false,
        error: action.payload,
        loading: false,
      };
    }
    default: {
      return {
        ...state.videos.statusOfLoadingOwnVideos,
      };
    }
  }
};

export default updateStatus;
