import { createSelector } from 'reselect';

import { State, Status, UserState, VideoState } from '../reducers/types';

import { getArrayFromSet } from '../../utils/helpers';

const getCurrentPage = (state: State): string => state.currentPage;

const getUser = (state: State): UserState => state.user;

const getAuthUser = createSelector(getUser, (user: UserState) => user.statusOfAuthorizeUser);

const getIsAuth = createSelector(getAuthUser, (status: Status) => status.isSuccess);

const getEmail = createSelector(getUser, (user: UserState) => user.email);

const getStatusOfRegisterUser = createSelector(
  getUser,
  (user: UserState) => user.statusOfRegisterUser
);

const getStatusOfUnauthorizeUser = createSelector(
  getUser,
  (user: UserState) => user.statusOfUnauthorizeUser
);

const getUid = createSelector(getUser, (user: UserState) => user.uid);

const getVideos = (state: State): VideoState => state.videos;

const getCollection = createSelector(getVideos, (videos: VideoState) =>
  getArrayFromSet(videos.collection)
);

const getOwnVideosIds = createSelector(getVideos, (videos: VideoState) => videos.ownVideosIds);

const getStatusOfLoadingOwnVideos = createSelector(
  getVideos,
  (videos: VideoState) => videos.statusOfLoadingOwnVideos
);

const getOwnVideosLoading = createSelector(
  getStatusOfLoadingOwnVideos,
  (status: Status) => status.loading
);

const getSharedVideosIds = createSelector(
  getVideos,
  (videos: VideoState) => videos.sharedVideosIds
);

const getStatusOfSharedVideos = createSelector(
  getVideos,
  (videos: VideoState) => videos.statusOfLoadingSharedVideos
);

const getSharedVideosLoading = createSelector(
  getStatusOfSharedVideos,
  (status: Status) => status.loading
);

const getStatusOfRemovingVideo = createSelector(
  getVideos,
  (videos: VideoState) => videos.statusOfRemovingVideo
);

const getIsSuccessDelete = createSelector(
  getStatusOfRemovingVideo,
  (status: Status) => status.isSuccess
);

const getLoadingRemovingVideo = createSelector(
  getStatusOfRemovingVideo,
  (status: Status) => status.loading
);

const getErrorLoadingOwnVideos = createSelector(
  getStatusOfLoadingOwnVideos,
  (status: Status) => status.error
);

const getErrorLoadingSharedVideos = createSelector(
  getStatusOfSharedVideos,
  (status: Status) => status.error
);

const getErrorRemovingVideo = createSelector(
  getStatusOfRemovingVideo,
  (status: Status) => status.error
);

const getStatusSharingVideoToUser = createSelector(
  getVideos,
  (videos: VideoState) => videos.statusOfSharingVideoToUser
);

const getStatusOfAddingNewVideo = createSelector(
  getVideos,
  (videos: VideoState) => videos.statusOfAddingNewVideo
);

const getStatusOfEditingVideo = createSelector(
  getVideos,
  (videos: VideoState) => videos.statusOfEditingVideo
);

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
  getUser,
  getVideos,
  getStatusOfLoadingOwnVideos,
  getStatusOfSharedVideos,
  getStatusOfRemovingVideo,
  getStatusSharingVideoToUser,
  getStatusOfAddingNewVideo,
  getStatusOfEditingVideo,
  getStatusOfUnauthorizeUser,
};
