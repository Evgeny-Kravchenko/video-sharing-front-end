import { Pages } from '../enums';
import IAction from '../interfaces/action.interface';
import IRegistration from '../interfaces/registration.interface';
import IAuth from '../interfaces/auth.interface';

const changeCurrentPage = (currentPage: Pages): IAction => {
  return {
    type: 'MOVE_TO_ANOTHER_PAGE',
    payload: currentPage,
  };
};

const registerUserRequest = (registerUserData: IRegistration): IAction => {
  return {
    type: 'REGISTER_USER_REQUEST',
    payload: registerUserData,
  };
};

const authorizeUserRequest = (authData: IAuth): IAction => {
  return {
    type: 'AUTHORIZE_USER_REQUEST',
    payload: authData,
  };
};

const authorizeUserFailure = (error: Error): IAction => {
  return {
    type: 'AUTHORIZE_USER_FAILURE',
    payload: error,
  };
};

export { changeCurrentPage, registerUserRequest, authorizeUserRequest, authorizeUserFailure };
