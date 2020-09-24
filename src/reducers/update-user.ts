import { State, UserState } from './types';

import { Action } from '../actions';
import { UserActionTypes } from '../actions';

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
      return {
        ...state.user,
        name: action.payload.user.user.name,
        email: action.payload.user.user.email,
        statusOfAuthorizeUser: updateStatus(state, action),
      };
    }
    case UserActionTypes.AUTH_USER_FAILURE: {
      return {
        ...state.user,
        statusOfAuthorizeUser: updateStatus(state, action),
      };
    }
    case UserActionTypes.UNAUTHORIZE: {
      return {
        ...state.user,
        name: '',
        email: '',
        statusOfAuthorizeUser: updateStatus(state, action),
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
    default: {
      return {
        ...state.user,
      };
    }
  }
};

export default updateUser;
