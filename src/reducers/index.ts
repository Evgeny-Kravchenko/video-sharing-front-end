import updateCurrentPage from './update-current-page';
import updateVideos from './update-videos';
import updateUser from './update-user';

import { Action, PagesList } from '../actions';
import { State } from './types';

const initialCurrentPage = window.location.pathname.match(/\/(.+)\/*/) || PagesList.Authentication;

const initialState: State = {
  currentPage: initialCurrentPage[1],
  user: {
    name: '',
    email: '',
    statusOfAuthorizeUser: {
      isSuccess: false,
      loading: false,
      error: null,
    },
    statusOfRegisterUser: { loading: false, error: null, isSuccess: null },
  },
  videos: {
    collection: new Set(),
    ownVideosIds: [],
    sharedVideosIds: [],
    statusOfLoadingOwnVideos: { isSuccess: null, loading: false, error: null },
    statusOfLoadingSharedVideos: { isSuccess: null, loading: false, error: null },
    statusOfSharingVideoToUser: { isSuccess: null, loading: false, error: null },
    statusOfAddingNewVideo: { isSuccess: null, loading: false, error: null },
    statusOfRemovingVideo: { isSuccess: null, loading: false, error: null },
    statusOfEditingVideo: { isSuccess: null, loading: false, error: null },
  },
};

const reducer = (state: State = initialState, action: Action): State => {
  return {
    currentPage: updateCurrentPage(state, action),
    user: updateUser(state, action),
    videos: updateVideos(state, action),
  };
};

export default reducer;
