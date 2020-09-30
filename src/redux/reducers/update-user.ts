import { State, UserState } from './types';

import { Action } from '../actions';
import { UserActionTypes, PagesTypesActions } from '../actions';

import updateStatus from './update-status';

const updateUser = (state: State, action: Action): UserState => {
  switch (action.type) {
    case UserActionTypes.AUTH_USER_REQUEST: {
      return {
        ...state.user,
        statusOfAuthorizeUser: updateStatus(state, action),
      };
    }
    case UserActionTypes.AUTH_USER_SUCCSESS: {
      localStorage.setItem('email', action.payload.user.user.email);
      localStorage.setItem('uid', action.payload.user.user.uid);
      return {
        ...state.user,
        email: action.payload.user.user.email,
        uid: action.payload.user.user.uid,
        statusOfAuthorizeUser: updateStatus(state, action),
      };
    }
    case UserActionTypes.AUTH_USER_FAILURE: {
      return {
        ...state.user,
        statusOfAuthorizeUser: updateStatus(state, action),
      };
    }
    case UserActionTypes.UNAUTHORIZE_REQUEST: {
      return {
        ...state.user,
        statusOfUnauthorizeUser: updateStatus(state, action),
      };
    }
    case UserActionTypes.UNAUTHORIZE_SUCCESS: {
      localStorage.clear();
      return {
        ...state.user,
        email: '',
        statusOfAuthorizeUser: {
          loading: false,
          error: null,
          isSuccess: null,
        },
        statusOfUnauthorizeUser: updateStatus(state, action),
      };
    }
    case UserActionTypes.UNAUTHORIZE_FAILURE: {
      return {
        ...state.user,
        statusOfUnauthorizeUser: updateStatus(state, action),
      };
    }
    case UserActionTypes.CLEAR_STATUS_OF_UNAUTHORIZE_USER: {
      return {
        ...state.user,
        statusOfUnauthorizeUser: updateStatus(state, action),
      };
    }
    case UserActionTypes.REGISTER_USER_REQUEST: {
      return {
        ...state.user,
        statusOfRegisterUser: updateStatus(state, action),
      };
    }
    case UserActionTypes.REGISTER_USER_SUCCESS: {
      return {
        ...state.user,
        statusOfRegisterUser: updateStatus(state, action),
      };
    }
    case UserActionTypes.REGISTER_USER_FAILURE: {
      return {
        ...state.user,
        statusOfRegisterUser: updateStatus(state, action),
      };
    }
    case UserActionTypes.REGISTER_CLEAR_STATUS: {
      return {
        ...state.user,
        statusOfRegisterUser: updateStatus(state, action),
      };
    }
    case PagesTypesActions.MOVE_TO_ANOTHER_PAGE: {
      return {
        ...state.user,
        statusOfAuthorizeUser: {
          ...state.user.statusOfAuthorizeUser,
          error: null,
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
