import { IState } from '../interfaces';
import IAction from '../interfaces/action.interface';

import updateCurrentPage from './update-current-page';
import updateRegisterUser from './update-register-user';
import updateAuthUser from './update-auth-user';

const initialState: IState = {
  currentPage: 'auth',
  registerUser: { loading: false, error: null, isSuccess: null, errorMessage: null },
  authUser: { name: '', email: '', isAuth: true, loading: false, error: false },
};

const reducer = (state: IState = initialState, action: IAction): IState => {
  return {
    currentPage: updateCurrentPage(state, action),
    registerUser: updateRegisterUser(state, action),
    authUser: updateAuthUser(state, action),
  };
};

export default reducer;
