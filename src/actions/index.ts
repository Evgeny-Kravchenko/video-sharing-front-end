import { Pages } from '../enums';
import IAction from '../interfaces/action.interface';
import IAuth from '../interfaces/auth.interface';
import IUser from '../interfaces/user.interface';
import { IStateVideos } from '../interfaces/state.interface';

const changeCurrentPage = (currentPage: Pages): IAction => {
  return {
    type: 'MOVE_TO_ANOTHER_PAGE',
    payload: currentPage,
  };
};

const registerUserRequest = (registerUserData: IUser): IAction => {
  return {
    type: 'REGISTER_USER_REQUEST',
    payload: registerUserData,
  };
};

const registerUserSuccess = (): IAction => {
  return {
    type: 'REGISTER_USER_SUCCESS',
  };
};

const registerUserFailure = (err: Error): IAction => {
  return {
    type: 'REGISTER_USER_FAILURE',
    payload: err,
  };
};

const registerClearMessage = (): IAction => {
  return {
    type: 'REGISTER_CLEAR_MESSAGE',
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

const userOwnVideosRequest = (email: string): IAction => {
  return {
    type: 'USER_OWN_VIDEOS_REQUEST',
    payload: email,
  };
};

const userOwnVideosSuccess = (videos: Array<IStateVideos>): IAction => {
  return {
    type: 'USER_OWN_VIDEOS_SUCCESS',
    payload: videos,
  };
};

const userOwnVideosFailure = (error: Error): IAction => {
  return {
    type: 'USER_OWN_VIDEOS_SUCCESS',
    payload: error,
  };
};

const userSharedVideosRequest = (email: string): IAction => {
  return {
    type: 'USER_SHARED_VIDEOS_REQUEST',
    payload: email,
  };
};

const userSharedVideosSuccess = (videos: Array<IStateVideos>): IAction => {
  return {
    type: 'USER_SHARED_VIDEOS_SUCCESS',
    payload: videos,
  };
};

const userSharedVideosFailure = (error: Error): IAction => {
  return {
    type: 'USER_Shared_VIDEOS_SUCCESS',
    payload: error,
  };
};

export {
  changeCurrentPage,
  authorizeUserRequest,
  authorizeUserFailure,
  authorizeUserSuccsess,
  unauthorize,
  registerUserRequest,
  registerUserSuccess,
  registerUserFailure,
  registerClearMessage,
  userOwnVideosRequest,
  userOwnVideosSuccess,
  userOwnVideosFailure,
  userSharedVideosRequest,
  userSharedVideosSuccess,
  userSharedVideosFailure,
};
