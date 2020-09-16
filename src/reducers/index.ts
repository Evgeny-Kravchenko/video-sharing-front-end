import IState from '../interfaces/state.interface';
import IAction from '../interfaces/action.interface';

const initialState = {
  currentPage: 'auth',
  isAuth: false,
};

const reducer = (state: IState = initialState, action: IAction): IState => {
  switch (action.type) {
    case 'MOVE_TO_ANOTHER_PAGE': {
      const { isAuth }: { isAuth: boolean } = state;
      return {
        ...state,
        currentPage: !isAuth ? 'auth' : action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
