import IUser from '../types/user.interface';
import Action from './types';
import { Auth } from '../components/local/auth-form/types';

enum UserActionTypes {
  REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST',
  REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS',
  REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE',
  REGISTER_CLEAR_MESSAGE = 'REGISTER_CLEAR_MESSAGE',
  AUTH_USER_REQUEST = 'AUTH_USER_REQUEST',
  AUTH_USER_SUCCSESS = 'AUTH_USER_SUCCSESS',
  AUTH_USER_FAILURE = 'AUTH_USER_FAILURE',
  UNAUTHORIZE = 'UNAUTHORIZE',
}

const registerUserRequest = (registerUserData: IUser): Action => {
  return {
    type: UserActionTypes.REGISTER_USER_REQUEST,
    payload: registerUserData,
  };
};

const registerUserSuccess = (): Action => {
  return {
    type: UserActionTypes.REGISTER_USER_SUCCESS,
  };
};

const registerUserFailure = (err: Error): Action => {
  return {
    type: UserActionTypes.REGISTER_USER_FAILURE,
    payload: err,
  };
};

const registerClearMessage = (): Action => {
  return {
    type: UserActionTypes.REGISTER_CLEAR_MESSAGE,
  };
};

const authorizeUserRequest = (authData: Auth): Action => {
  return {
    type: UserActionTypes.AUTH_USER_REQUEST,
    payload: authData,
  };
};

const authorizeUserSuccsess = (user: IUser | string): Action => {
  return { type: UserActionTypes.AUTH_USER_SUCCSESS, payload: { user } };
};

const authorizeUserFailure = (error: Error): Action => {
  return {
    type: UserActionTypes.AUTH_USER_FAILURE,
    payload: error,
  };
};

const unauthorize = (): Action => {
  return {
    type: UserActionTypes.UNAUTHORIZE,
  };
};

export {
  UserActionTypes,
  registerUserRequest,
  registerUserSuccess,
  registerUserFailure,
  registerClearMessage,
  authorizeUserRequest,
  authorizeUserSuccsess,
  authorizeUserFailure,
  unauthorize,
};
