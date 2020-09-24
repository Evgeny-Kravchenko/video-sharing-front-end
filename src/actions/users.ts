import Action from './types';
import { Auth } from '../components/pages/authentication/components/auth-form/types';
import UserResponse from '../types/get-user-response';
import { Registration } from '../components/pages/registration/components/registration-form/types';

enum UserActionTypes {
  REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST',
  REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS',
  REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE',
  REGISTER_CLEAR_STATUS = 'REGISTER_CLEAR_STATUS',
  AUTH_USER_REQUEST = 'AUTH_USER_REQUEST',
  AUTH_USER_SUCCSESS = 'AUTH_USER_SUCCSESS',
  AUTH_USER_FAILURE = 'AUTH_USER_FAILURE',
  UNAUTHORIZE = 'UNAUTHORIZE',
}

const registerUserRequest = (registerUserData: Registration): Action => {
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

const registerClearStatus = (): Action => {
  return {
    type: UserActionTypes.REGISTER_CLEAR_STATUS,
  };
};

const authorizeUserRequest = (authData: Auth): Action => {
  return {
    type: UserActionTypes.AUTH_USER_REQUEST,
    payload: authData,
  };
};

const authorizeUserSuccsess = (user: UserResponse): Action => {
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
  registerClearStatus,
  authorizeUserRequest,
  authorizeUserSuccsess,
  authorizeUserFailure,
  unauthorize,
};
