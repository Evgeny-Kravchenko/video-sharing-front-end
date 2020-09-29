import updateCurrentPage from './update-current-page';
import updateVideos from './update-videos';
import updateUser from './update-user';

import { Action } from '../actions';
import { State } from './types';
import { getInitialState } from '../../utils/helpers';

const {
  initialCurrentPage,
  initialEmail,
  initialOwnVideosIds,
  initialSharedVideosIds,
  initialCollection,
  initialUid,
} = getInitialState();

const initialState: State = {
  currentPage: initialCurrentPage,
  user: {
    uid: initialUid || '',
    email: initialEmail || '',
    statusOfAuthorizeUser: {
      isSuccess: !!initialEmail,
      loading: false,
      error: null,
    },
    statusOfRegisterUser: { loading: false, error: null, isSuccess: null },
    statusOfUnauthorizeUser: { loading: false, error: null, isSuccess: null },
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
