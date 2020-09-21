import Action from '../actions/types';
import { State } from './types';

const updateCurrentPage = (state: State, action: Action): string => {
  switch (action.type) {
    case 'MOVE_TO_ANOTHER_PAGE': {
      const { isAuth }: { isAuth: boolean } = state.authUser;
      return !isAuth ? 'auth' : action.payload;
    }
    default: {
      return state.currentPage;
    }
  }
};

export default updateCurrentPage;
