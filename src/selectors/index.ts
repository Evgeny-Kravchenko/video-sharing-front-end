import { State } from '../reducers/types';

import { getArrayFromSet } from '../helpers';

const getCurrentPage = (state: State) => state.currentPage;

const getIsAuth = (state: State) => state.user.statusOfAuthorizeUser.isSuccess;

const getAuthUser = (state: State) => state.user.statusOfAuthorizeUser;

const getEmail = (state: State) => state.user.email;

const getStatusOfRegisterUser = (state: State) => state.user.statusOfRegisterUser;

const getCollection = (state: State) => getArrayFromSet(state.videos.collection);

const getOwnVideosIds = (state: State) => state.videos.ownVideosIds;

const getOwnVideosLoading = (state: State) => state.videos.statusOfLoadingOwnVideos.loading;

const getSharedVideosIds = (state: State) => state.videos.sharedVideosIds;

const getSharedVideosLoading = (state: State) => state.videos.statusOfSharingVideoToUser.loading;

const getUid = (state: State) => state.user.uid;

const getIsSuccessDelete = (state: State) => state.videos.statusOfRemovingVideo.isSuccess;

const getLoadingRemovingVideo = (state: State) => state.videos.statusOfRemovingVideo.loading;

const getErrorLoadingOwnVideos = (state: State) => state.videos.statusOfLoadingOwnVideos.error;

const getErrorLoadingSharedVideos = (state: State) =>
  state.videos.statusOfLoadingSharedVideos.error;

const getErrorRemovingVideo = (state: State) => state.videos.statusOfRemovingVideo.error;

const getIsSuccessOfSharingVideoToUser = (state: State) =>
  state.videos.statusOfSharingVideoToUser.isSuccess;

const getErrorOfSharingVideoToUser = (state: State) =>
  state.videos.statusOfSharingVideoToUser.error;

export {
  getCurrentPage,
  getIsAuth,
  getAuthUser,
  getEmail,
  getStatusOfRegisterUser,
  getCollection,
  getOwnVideosIds,
  getOwnVideosLoading,
  getSharedVideosIds,
  getSharedVideosLoading,
  getUid,
  getIsSuccessDelete,
  getLoadingRemovingVideo,
  getErrorLoadingOwnVideos,
  getErrorLoadingSharedVideos,
  getErrorRemovingVideo,
  getIsSuccessOfSharingVideoToUser,
  getErrorOfSharingVideoToUser,
};
