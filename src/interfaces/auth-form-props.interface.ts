import IAuth from './auth.interface';

export default interface IAuthFormProps {
  onAuth: (data: IAuth) => void;
}
