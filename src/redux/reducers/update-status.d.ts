import { State, Status } from './types';
import { Action } from '../actions';
declare const updateStatus: (state: State, action: Action) => Status;
export default updateStatus;
