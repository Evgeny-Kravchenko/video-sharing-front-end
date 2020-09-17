import { IState, IStateAuthUser } from '../interfaces/state.interface';
import IAction from '../interfaces/action.interface';

const updateAuthUser = (state: IState, action: IAction): IStateAuthUser => {
  switch (action.type) {
    case 'AUTH_REQUEST': {
      return {
        ...state.authUser,
        loading: true,
      };
    }
    case 'AUTH_SUCCSESS': {
      return {
        loading: false,
        name: action.payload.name,
        email: action.payload.email,
        error: false,
        isAuth: true,
      };
    }
    case 'AUTH_FAILURE': {
      return {
        ...state.authUser,
        loading: false,
        error: true,
      };
    }
    default: {
      return state.authUser;
    }
  }
};

export default updateAuthUser;
