import IState from '../interfaces/state.interface';
import IAction from '../interfaces/action.interface';

const initialState = {
  currentPage: 'authentication',
};

const reducer = (state: IState = initialState, action: IAction): IState => {
  switch (action.type) {
    case 'GO_TO_AUTHENTICATION_PAGE': {
      return {
        currentPage: 'authentication',
      };
    }
    case 'GO_TO_VIDEOS_PAGE': {
      return {
        currentPage: 'videos',
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
