import updateCurrentPage from './update-current-page';
import updateRegisterUser from './update-register-user';
import updateAuthUser from './update-auth-user';
import updateUserVideos from './update-user-videos';
import Action from '../actions/types';
import { State } from './types';

const initialState: State = {
  currentPage: 'auth',
  registerUser: { loading: false, error: null, isSuccess: null, errorMessage: null },
  authUser: { name: '', email: '', isAuth: false, loading: false, error: false },
  videosOfUser: {
    ownVideos: {
      error: null,
      loading: false,
      videos: [],
      statusOfAddingNewVideo: { isSuccess: null, loading: false, error: null },
      statusOfRemovingVideo: { isSuccess: null, loading: false, error: null },
    },
    sharedVideos: { error: null, loading: false, videos: [] },
  },
};

const reducer = (state: State = initialState, action: Action): State => {
  return {
    currentPage: updateCurrentPage(state, action),
    registerUser: updateRegisterUser(state, action),
    authUser: updateAuthUser(state, action),
    videosOfUser: updateUserVideos(state, action),
  };
};

export default reducer;
