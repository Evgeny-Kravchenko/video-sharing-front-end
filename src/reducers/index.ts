import { IState } from '../interfaces';
import IAction from '../interfaces/action.interface';

import updateCurrentPage from './update-current-page';
import updateRegisterUser from './update-register-user';
import updateAuthUser from './update-auth-user';
import updateUserVideos from './update-user-videos';

const initialState: IState = {
  currentPage: 'auth',
  registerUser: { loading: false, error: null, isSuccess: null, errorMessage: null },
  authUser: { name: '', email: '', isAuth: true, loading: false, error: false },
  videosOfUser: {
    ownVideos: { error: null, loading: false, videos: [] },
    sharedVideos: { error: null, loading: false, videos: [] },
  },
};

const reducer = (state: IState = initialState, action: IAction): IState => {
  return {
    currentPage: updateCurrentPage(state, action),
    registerUser: updateRegisterUser(state, action),
    authUser: updateAuthUser(state, action),
    videosOfUser: updateUserVideos(state, action),
  };
};

export default reducer;
