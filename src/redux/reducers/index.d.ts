import { Action } from '../actions';
import { State } from './types';
declare const reducer: (state: State | undefined, action: Action) => State;
export default reducer;
