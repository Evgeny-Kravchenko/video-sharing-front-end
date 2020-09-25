import updateCurrentPage from './update-current-page';
import updateVideos from './update-videos';
import updateUser from './update-user';

import { Action } from '../actions';
import { State } from './types';
import { getInitialState } from '../helpers';

const {
  initialCurrentPage,
  initialName,
  initialEmail,
  initialOwnVideosIds,
  initialSharedVideosIds,
  initialCollection,
} = getInitialState();

const initialState: State = {
  currentPage: initialCurrentPage[1],
  user: {
    name: initialName || '',
    email: initialEmail || '',
    statusOfAuthorizeUser: {
      isSuccess: !!initialName,
      loading: false,
      error: null,
    },
    statusOfRegisterUser: { loading: false, error: null, isSuccess: null },
  },
  videos: {
    collection: initialCollection || new Set(),
    ownVideosIds: initialOwnVideosIds || [],
    sharedVideosIds: initialSharedVideosIds || [],
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
