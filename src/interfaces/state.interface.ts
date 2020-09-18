import IVideo from './video';

export interface IStateRegisterUser {
  loading: boolean;
  error: boolean | null;
  isSuccess: boolean | null;
  errorMessage: string | null;
}

export interface IStateAuthUser {
  name: string;
  email: string;
  isAuth: boolean;
  error: boolean;
  loading: boolean;
}

export interface IStateVideos {
  loading: boolean;
  videos: Array<IVideo>;
  error: string | null;
}

export interface IStateUserVideo {
  ownVideos: IStateVideos;
  sharedVideos: IStateVideos;
}

export interface IState {
  currentPage: string;
  registerUser: IStateRegisterUser;
  authUser: IStateAuthUser;
  videosOfUser: IStateUserVideo;
}
