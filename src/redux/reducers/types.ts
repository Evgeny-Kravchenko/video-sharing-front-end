import { User } from '../../types';

export interface UserSuccessActionProperty {
  user: User;
  ownVideosIds: Array<string>;
  sharedVideosIds: Array<string>;
}

export interface Status {
  loading: boolean;
  error: Error | null;
  isSuccess: boolean | null;
}

export interface UserState {
  uid: string;
  email: string;
  statusOfAuthorizeUser: Status;
  statusOfRegisterUser: Status;
  statusOfUnauthorizeUser: Status;
}

export interface VideoState {
  collection: Set<string>;
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

export interface InitialPartOfState {
  initialCurrentPage: string;
  initialEmail: string | null;
  initialOwnVideosIds: Array<string>;
  initialSharedVideosIds: Array<string>;
  initialCollection: Set<string> | undefined;
  initialUid: string | null;
}
