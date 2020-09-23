import { Video } from '../types';

export interface StateRegisterUser {
  loading: boolean;
  error: Error | null;
  isSuccess: boolean | null;
}

export interface StateAuthUser {
  name: string;
  email: string;
  isAuth: boolean;
  error: Error | null;
  loading: boolean;
}

export interface StateVideos {
  loading: boolean;
  videos: Array<Video>;
  error: Error | null;
}

export interface Status {
  loading: boolean;
  error: Error | null;
  isSuccess: boolean | null;
}

export interface StateOwnVideos extends StateVideos {
  statusOfAddingNewVideo: Status;
  statusOfRemovingVideo: Status;
  statusOfEditingVideo: Status;
}

export interface StateSharedVideos extends StateVideos {
  statusOfSharingVideo: Status;
}

export interface StateUserVideo {
  ownVideos: StateOwnVideos;
  sharedVideos: StateSharedVideos;
}

export interface State {
  currentPage: string;
  registerUser: StateRegisterUser;
  authUser: StateAuthUser;
  videosOfUser: StateUserVideo;
}
