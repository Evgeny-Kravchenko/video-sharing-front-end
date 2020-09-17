import IAuth from './auth.interface';

export default interface IRegistration extends IAuth {
  name: string;
  lastName: string;
}
