import { IState, IAction } from '../interfaces';
import { IStateUserVideo, IStateVideos } from '../interfaces/state.interface';

const updateOwnVideos = (state: IState, action: IAction): IStateVideos => {
  switch (action.type) {
    case 'USER_OWN_VIDEOS_REQUEST': {
      return {
        ...state.videosOfUser.ownVideos,
        loading: true,
      };
    }
    case 'USER_OWN_VIDEOS_SUCCESS': {
      return {
        loading: false,
        error: null,
        videos: action.payload,
      };
    }
    case 'USER_OWN_VIDEOS_FAILURE': {
      return {
        loading: false,
        error: action.payload,
        videos: [],
      };
    }
    default: {
      return state.videosOfUser.ownVideos;
    }
  }
};

const updateSharedVideos = (state: IState, action: IAction): IStateVideos => {
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

const updateUserVideos = (state: IState, action: IAction): IStateUserVideo => {
  return {
    ownVideos: updateOwnVideos(state, action),
    sharedVideos: updateSharedVideos(state, action),
  };
};

export default updateUserVideos;
