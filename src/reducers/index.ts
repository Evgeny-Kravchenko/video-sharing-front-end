import IState from '../interfaces/state.interface';
import IAction from '../interfaces/action.interface';

const initialState = {
  currentPage: 'authentication',
};

const reducer = (state: IState = initialState, action: IAction): IState => {
  switch (action.type) {
    case 'MOVE_TO_ANOTHER_PAGE': {
      return {
        currentPage: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
