import { State } from '../../../../../redux/reducers/types';
import { Action } from '../../../../../redux/actions';

export interface ModalWindowProps {
  onSetModalWindow: (isShow: boolean) => void;
  isSuccessCallback: (state: State) => boolean | null;
  isLoadingCallback: (state: State) => boolean;
  isErrorCallback: (state: State) => Error | null;
  action: ([key]: any) => Action;
  title?: string;
  descr?: string;
  whoSharedWith?: Array<string>;
  id?: string;
}
