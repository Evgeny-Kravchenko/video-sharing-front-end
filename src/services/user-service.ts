import users from '../mock/index';
import IUser from '../interfaces/user.interface';

export default class UserService {
  private users: Array<IUser>;

  constructor() {
    this.users = users;
  }
  public async getUser(email: string, password: string): Promise<IUser | string> {
    const user = this.users.find(
      (user: IUser) => email === user.email && password === user.password
    );
    if (!user) {
      return Promise.reject('There is no such user!');
    }
    return user;
  }
}
