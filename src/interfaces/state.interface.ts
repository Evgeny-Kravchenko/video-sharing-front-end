export interface IStateRegisterUser {
  loading: boolean;
  error: boolean | null;
  isSuccess: boolean | null;
  errorMessage: string | null;
}

export interface IStateAuthUser {
  name: string;
  email: string;
  isAuth: boolean;
  error: boolean;
  loading: boolean;
}

export interface IState {
  currentPage: string;
  registerUser: IStateRegisterUser;
  authUser: IStateAuthUser;
}
