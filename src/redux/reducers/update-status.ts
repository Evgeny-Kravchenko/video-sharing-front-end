import { State, Status } from './types';
import { Action, ActionVideosTypes, PagesTypesActions, UserActionTypes } from '../actions';

const updateStatus = (state: State, action: Action): Status => {
  switch (action.type) {
    case ActionVideosTypes.USER_OWN_VIDEOS_REQUEST:
    case ActionVideosTypes.ADD_NEW_VIDEO_REQUEST:
    case ActionVideosTypes.DELETE_VIDEO_REQUEST:
    case ActionVideosTypes.EDIT_VIDEO_REQUEST:
    case ActionVideosTypes.USER_SHARED_VIDEOS_REQUEST:
    case ActionVideosTypes.SHARE_VIDEO_REQUEST:
    case UserActionTypes.AUTH_USER_REQUEST:
    case UserActionTypes.REGISTER_USER_REQUEST:
    case UserActionTypes.UNAUTHORIZE_REQUEST: {
      return {
        isSuccess: null,
        error: null,
        loading: true,
      };
    }
    case ActionVideosTypes.USER_OWN_VIDEOS_SUCCESS:
    case ActionVideosTypes.ADD_NEW_VIDEO_SUCCESS:
    case ActionVideosTypes.DELETE_VIDEO_SUCCESS:
    case ActionVideosTypes.EDIT_VIDEO_SUCCESS:
    case ActionVideosTypes.USER_SHARED_VIDEOS_SUCCESS:
    case ActionVideosTypes.SHARE_VIDEO_SUCCESS:
    case UserActionTypes.AUTH_USER_SUCCSESS:
    case UserActionTypes.REGISTER_USER_SUCCESS:
    case UserActionTypes.UNAUTHORIZE_SUCCESS: {
      return {
        isSuccess: true,
        error: null,
        loading: false,
      };
    }
    case ActionVideosTypes.USER_OWN_VIDEOS_FAILURE:
    case ActionVideosTypes.ADD_NEW_VIDEO_FAILURE:
    case ActionVideosTypes.DELETE_VIDEO_FAILURE:
    case ActionVideosTypes.EDIT_VIDEO_FAILURE:
    case ActionVideosTypes.USER_SHARED_VIDEOS_FAILURE:
    case ActionVideosTypes.SHARE_VIDEO_FAILURE:
    case UserActionTypes.AUTH_USER_FAILURE:
    case UserActionTypes.REGISTER_USER_FAILURE:
    case UserActionTypes.UNAUTHORIZE_FAILURE: {
      return {
        isSuccess: false,
        error: action.payload,
        loading: false,
      };
    }
    case ActionVideosTypes.CLEAR_STATUS_OF_REMOVING_VIDEO:
    case ActionVideosTypes.CLEAR_STATUS_OF_ADDING_VIDEO:
    case ActionVideosTypes.CLEAR_STATUS_OF_EDITING_VIDEO:
    case ActionVideosTypes.CLEAR_STATUS_OF_SHARING_VIDEO:
    case UserActionTypes.CLEAR_STATUS_OF_UNAUTHORIZE_USER:
    case UserActionTypes.REGISTER_CLEAR_STATUS:
    case PagesTypesActions.MOVE_TO_ANOTHER_PAGE: {
      return {
        isSuccess: null,
        loading: false,
        error: null,
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
