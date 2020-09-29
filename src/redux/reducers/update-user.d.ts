import { State, UserState } from './types';
import { Action } from '../actions';
declare const updateUser: (state: State, action: Action) => UserState;
export default updateUser;
