import Action from '../actions/types';
import { State, StateAuthUser } from './types';

const updateAuthUser = (state: State, action: Action): StateAuthUser => {
  switch (action.type) {
    case 'AUTH_USER_REQUEST': {
      return {
        ...state.authUser,
        loading: true,
      };
    }
    case 'AUTH_USER_SUCCSESS': {
      return {
        loading: false,
        name: action.payload.user.name,
        email: action.payload.user.email,
        error: false,
        isAuth: true,
      };
    }
    case 'AUTH_USER_FAILURE': {
      return {
        ...state.authUser,
        loading: false,
        error: true,
      };
    }
    case 'UNAUTHORIZE': {
      return {
        ...state.authUser,
        loading: false,
        error: false,
        name: '',
        email: '',
        isAuth: false,
      };
    }
    default: {
      return state.authUser;
    }
  }
};

export default updateAuthUser;
