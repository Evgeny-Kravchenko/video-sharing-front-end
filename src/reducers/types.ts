import { Video } from '../components/video-item/types';

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

export interface StateUserVideo {
  ownVideos: StateVideos;
  sharedVideos: StateVideos;
}

export interface State {
  currentPage: string;
  registerUser: StateRegisterUser;
  authUser: StateAuthUser;
  videosOfUser: StateUserVideo;
}
