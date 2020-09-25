import { Action, PagesList } from '../actions';
import { State } from './types';

const updateCurrentPage = (state: State, action: Action): string => {
  switch (action.type) {
    case 'MOVE_TO_ANOTHER_PAGE': {
      const { isSuccess }: { isSuccess: boolean | null } = state.user.statusOfAuthorizeUser;
      if (!isSuccess && action.payload === PagesList.Registrations) {
        return action.payload;
      }
      return !isSuccess ? 'auth' : action.payload;
    }
    default: {
      return state.currentPage;
    }
  }
};

export default updateCurrentPage;
