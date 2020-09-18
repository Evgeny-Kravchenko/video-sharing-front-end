import { Pages } from '../enums';
import IAction from '../interfaces/action.interface';
import IRegistration from '../interfaces/registration.interface';
import IAuth from '../interfaces/auth.interface';
import IUser from '../interfaces/user.interface';

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
    type: 'AUTH_USER_REQUEST',
    payload: authData,
  };
};

const authorizeUserSuccsess = (user: IUser | string): IAction => {
  return { type: 'AUTH_USER_SUCCSESS', payload: { user } };
};

const authorizeUserFailure = (error: Error): IAction => {
  return {
    type: 'AUTH_USER_FAILURE',
    payload: error,
  };
};

const unauthorize = (): IAction => {
  return {
    type: 'UNAUTHORIZE',
  };
};

export {
  changeCurrentPage,
  registerUserRequest,
  authorizeUserRequest,
  authorizeUserFailure,
  authorizeUserSuccsess,
  unauthorize,
};
