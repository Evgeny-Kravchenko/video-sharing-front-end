import { users } from '../mock';
import { User } from '../types';

export default class UserService {
  private users: Array<User>;

  constructor() {
    this.users = users;
  }

  public async getUser(email: string, password: string): Promise<User | Error> {
    const user = this.users.find(
      (user: User) => email === user.email && password === user.password
    );
    if (!user) {
      return Promise.reject(new Error('There is no such user!'));
    }
    return user;
  }

  public async registerUser(user: User): Promise<boolean | Error> {
    const isSuchUserIn = this.users.some((item) => item.email === user.email);
    if (isSuchUserIn) {
      return Promise.reject(new Error('Email is already in use'));
    }
    this.users.push(user);
    return Promise.resolve(true);
  }

  public async checkUser(email: string): Promise<boolean | Error> {
    const isUser = this.users.some((user: User) => {
      return user.email === email;
    });
    return isUser
      ? Promise.resolve<boolean>(true)
      : Promise.reject<Error>(new Error('There is no such user.'));
  }
}
