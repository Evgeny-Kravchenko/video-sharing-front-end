import {
  UserActionTypes,
  authorizeUserRequest,
  authorizeUserFailure,
  authorizeUserSuccsess,
  unauthorize,
  registerUserRequest,
  registerUserSuccess,
  registerUserFailure,
  registerClearMessage,
} from './users';

import {
  ActionVideosTypes,
  userOwnVideosRequest,
  userOwnVideosSuccess,
  userOwnVideosFailure,
  userSharedVideosRequest,
  userSharedVideosSuccess,
  userSharedVideosFailure,
  addNewVideoRequest,
  addNewVideoSuccess,
  addNewVideoFailure,
  deleteVideoRequest,
  deleteVideoSuccess,
  deleteVideoFailure,
  clearStatusOfRemovingVideo,
  clearStatusOfAddingVideo,
  shareVideoRequest,
  shareVideoSuccess,
  shareVideoFailure,
  clearStatusSharingVideo,
  editVideoRequest,
  editVideoSuccess,
  editVideoFailure,
  clearStatusOfEditingVideo,
} from './videos';

import { changeCurrentPage, PagesTypesActions, PagesList } from './pages';

export {
  UserActionTypes,
  ActionVideosTypes,
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
  PagesTypesActions,
  PagesList,
  addNewVideoRequest,
  addNewVideoSuccess,
  addNewVideoFailure,
  deleteVideoRequest,
  deleteVideoSuccess,
  deleteVideoFailure,
  clearStatusOfRemovingVideo,
  clearStatusOfAddingVideo,
  shareVideoRequest,
  shareVideoSuccess,
  shareVideoFailure,
  clearStatusSharingVideo,
  editVideoRequest,
  editVideoSuccess,
  editVideoFailure,
  clearStatusOfEditingVideo,
};
