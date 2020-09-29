import { Action } from '../../../../redux/actions';

export interface ModalWindowProps {
  onSetModalWindow: (isShow: boolean) => void;
  isSuccess: boolean | null;
  isLoading: boolean;
  isError: Error | null;
  action: ([key]: any) => Action;
  title?: string;
  descr?: string;
  whoSharedWith?: Array<string>;
  id?: string;
}
