import IAuth from './auth.interface';
import UserService from '../services/user-service';

export default interface IAuthFormProps {
  onAuth: (data: IAuth) => void;
  userService: UserService;
}
