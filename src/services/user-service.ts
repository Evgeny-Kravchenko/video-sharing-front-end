import { users } from '../mock';
import { User } from '../types';

export default class UserService {
  private users: Array<User>;

  constructor() {
    this.users = users;
  }

  public async getUser(email: string, password: string): Promise<User | string> {
    const user = this.users.find(
      (user: User) => email === user.email && password === user.password
    );
    if (!user) {
      return Promise.reject('There is no such user!');
    }
    return user;
  }

  public async registerUser(user: User): Promise<boolean> {
    const isSuchUserIn = this.users.some((item) => item.email === user.email);
    if (isSuchUserIn) {
      return Promise.reject('Email is already in use');
    }
    this.users.push(user);
    return true;
  }

  public async checkUser(email: string): Promise<boolean | string> {
    const isUser = this.users.some((user: User) => {
      return user.email === email;
    });
    return isUser
      ? Promise.resolve<boolean>(true)
      : Promise.reject<string>('There is no such user.');
  }
}
