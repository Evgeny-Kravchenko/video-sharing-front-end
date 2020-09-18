import { IState, IStateRegisterUser } from '../interfaces/state.interface';
import IAction from '../interfaces/action.interface';

const updateRegisterUser = (state: IState, action: IAction): IStateRegisterUser => {
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
      };
    }
    case 'REGISTER_USER_FAILURE': {
      return {
        ...state.registerUser,
        loading: false,
        isSuccess: false,
        error: true,
        errorMessage: action.payload,
      };
    }
    default: {
      return state.registerUser;
    }
  }
};

export default updateRegisterUser;
