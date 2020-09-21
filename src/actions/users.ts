import IAuth from '../interfaces/auth.interface';
import IUser from '../interfaces/user.interface';
import IAction from '../interfaces/action.interface';

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

const registerUserRequest = (registerUserData: IUser): IAction => {
  return {
    type: UserActionTypes.REGISTER_USER_REQUEST,
    payload: registerUserData,
  };
};

const registerUserSuccess = (): IAction => {
  return {
    type: UserActionTypes.REGISTER_USER_SUCCESS,
  };
};

const registerUserFailure = (err: Error): IAction => {
  return {
    type: UserActionTypes.REGISTER_USER_FAILURE,
    payload: err,
  };
};

const registerClearMessage = (): IAction => {
  return {
    type: UserActionTypes.REGISTER_CLEAR_MESSAGE,
  };
};

const authorizeUserRequest = (authData: IAuth): IAction => {
  return {
    type: UserActionTypes.AUTH_USER_REQUEST,
    payload: authData,
  };
};

const authorizeUserSuccsess = (user: IUser | string): IAction => {
  return { type: UserActionTypes.AUTH_USER_SUCCSESS, payload: { user } };
};

const authorizeUserFailure = (error: Error): IAction => {
  return {
    type: UserActionTypes.AUTH_USER_FAILURE,
    payload: error,
  };
};

const unauthorize = (): IAction => {
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
