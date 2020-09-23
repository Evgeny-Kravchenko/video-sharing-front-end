import { User } from './index';

export default interface UserResponse {
  user: User;
  ownVideosIds: Array<string>;
  sharedVideosIds: Array<string>;
}
