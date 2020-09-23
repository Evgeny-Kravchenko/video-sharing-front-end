import { State, UserState } from './types';
import Action from '../actions/types';
import { UserActionTypes } from '../actions';

const updateUser = (state: State, action: Action): UserState => {
  switch (action.type) {
    case UserActionTypes.AUTH_USER_REQUEST: {
      return {
        ...state.user,
        statusOfAuthorizeUser: {
          ...state.user.statusOfAuthorizeUser,
          loading: true,
        },
      };
    }
    case UserActionTypes.AUTH_USER_SUCCSESS: {
      return {
        ...state.user,
        name: action.payload.user.user.name,
        email: action.payload.user.user.email,
        statusOfAuthorizeUser: {
          error: null,
          loading: false,
          isSuccess: true,
        },
      };
    }
    case UserActionTypes.AUTH_USER_FAILURE: {
      return {
        ...state.user,
        statusOfAuthorizeUser: {
          error: action.payload,
          loading: false,
          isSuccess: false,
        },
      };
    }
    case UserActionTypes.UNAUTHORIZE: {
      return {
        ...state.user,
        name: '',
        email: '',
        statusOfAuthorizeUser: {
          isSuccess: null,
          error: null,
          loading: false,
        },
      };
    }
    case UserActionTypes.REGISTER_USER_REQUEST: {
      return {
        ...state.user,
        statusOfRegisterUser: {
          ...state.user.statusOfRegisterUser,
          loading: true,
        },
      };
    }
    case UserActionTypes.REGISTER_USER_SUCCESS: {
      return {
        ...state.user,
        statusOfRegisterUser: {
          error: null,
          loading: false,
          isSuccess: true,
        },
      };
    }
    case UserActionTypes.REGISTER_USER_FAILURE: {
      return {
        ...state.user,
        statusOfRegisterUser: {
          loading: false,
          isSuccess: false,
          error: action.payload,
        },
      };
    }
    case UserActionTypes.REGISTER_CLEAR_STATUS: {
      return {
        ...state.user,
        statusOfRegisterUser: {
          isSuccess: null,
          error: null,
          loading: false,
        },
      };
    }
    default: {
      return {
        ...state.user,
      };
    }
  }
};

export default updateUser;
