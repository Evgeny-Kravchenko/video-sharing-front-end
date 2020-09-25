import { Action, UserActionTypes } from './types';
import { Auth } from '../components/pages/authentication/components/auth-form/types';
import { Registration } from '../components/pages/registration/components/registration-form/types';

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

const authorizeUserSuccsess = (user: { email: string; uid: string }): Action => {
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
