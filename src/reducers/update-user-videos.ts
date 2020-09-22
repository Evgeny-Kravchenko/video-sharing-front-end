import Action from '../actions/types';
import { State, StateUserVideo } from './types';

import updateOwnVideos from './update-own-user-videos';
import updateSharedVideos from './update-shared-videos';

const updateUserVideos = (state: State, action: Action): StateUserVideo => {
  return {
    ownVideos: updateOwnVideos(state, action),
    sharedVideos: updateSharedVideos(state, action),
  };
};

export default updateUserVideos;
