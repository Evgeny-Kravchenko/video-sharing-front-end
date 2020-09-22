import { Video } from '../components/pages/video/components/video-item/types';

export interface StateRegisterUser {
  loading: boolean;
  error: boolean | null;
  isSuccess: boolean | null;
  errorMessage: string | null;
}

export interface StateAuthUser {
  name: string;
  email: string;
  isAuth: boolean;
  error: boolean;
  loading: boolean;
}

export interface StateVideos {
  loading: boolean;
  videos: Array<Video>;
  error: string | null;
}

export interface Status {
  loading: boolean;
  error: string | null;
  isSuccess: boolean | null;
}

export interface StateOwnVideos extends StateVideos {
  statusOfAddingNewVideo: Status;
  statusOfRemovingVideo: Status;
}

export interface StateUserVideo {
  ownVideos: StateOwnVideos;
  sharedVideos: StateVideos;
}

export interface State {
  currentPage: string;
  registerUser: StateRegisterUser;
  authUser: StateAuthUser;
  videosOfUser: StateUserVideo;
}
