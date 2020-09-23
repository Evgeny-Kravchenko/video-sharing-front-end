import { Video } from '../types';

export interface Status {
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

export interface StateRegisterUser {
  loading: boolean;
  error: Error | null;
  isSuccess: boolean | null;
}

export interface StateVideos {
  loading: boolean;
  videos: Array<Video>;
  error: Error | null;
}

export interface VideosState {
  ownVideos: StateOwnVideos;
  sharedVideos: StateSharedVideos;
}

export interface StateOwnVideos extends StateVideos {
  statusOfAddingNewVideo: Status;
  statusOfRemovingVideo: Status;
  statusOfEditingVideo: Status;
}

export interface StateSharedVideos extends StateVideos {
  statusOfSharingVideo: Status;
}

export interface State {
  currentPage: string;
  registerUser: StateRegisterUser;
  authUser: StateAuthUser;
  videos: VideosState;
}
