import { IState } from '../interfaces';
import IAction from '../interfaces/action.interface';

const updateCurrentPage = (state: IState, action: IAction): string => {
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
