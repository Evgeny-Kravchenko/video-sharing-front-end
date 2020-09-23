import { Video } from '../types';

export interface Status {
  loading: boolean;
  error: Error | null;
  isSuccess: boolean | null;
}

export interface UserState {
  name: string;
  email: string;
  statusOfAuthorizeUser: Status;
  statusOfRegisterUser: Status;
}

export interface VideoState {
  collection: Array<Video>;
  ownVideosIds: Array<string>;
  sharedVideosIds: Array<string>;
  statusOfLoadingOwnVideos: Status;
  statusOfLoadingSharedVideos: Status;
  statusOfSharingVideoToUser: Status;
  statusOfAddingNewVideo: Status;
  statusOfRemovingVideo: Status;
  statusOfEditingVideo: Status;
}

export interface State {
  currentPage: string;
  user: UserState;
  videos: VideoState;
}
