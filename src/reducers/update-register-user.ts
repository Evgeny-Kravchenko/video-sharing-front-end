import Action from '../actions/types';
import { State, StateRegisterUser } from './types';

const updateRegisterUser = (state: State, action: Action): StateRegisterUser => {
  switch (action.type) {
    case 'REGISTER_USER_REQUEST': {
      return {
        ...state.registerUser,
        loading: true,
      };
    }
    case 'REGISTER_USER_SUCCESS': {
      return {
        ...state.registerUser,
        loading: false,
        isSuccess: true,
        error: null,
      };
    }
    case 'REGISTER_USER_FAILURE': {
      return {
        ...state.registerUser,
        loading: false,
        isSuccess: false,
        error: action.payload,
      };
    }
    case 'REGISTER_CLEAR_MESSAGE': {
      return {
        ...state.registerUser,
        isSuccess: null,
      };
    }
    default: {
      return state.registerUser;
    }
  }
};

export default updateRegisterUser;
