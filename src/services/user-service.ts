import { db } from '../mock';
import { User } from '../types';
import UserResponse from '../types/get-user-response';

export default class UserService {
  public async getUser(email: string, password: string): Promise<UserResponse | Error> {
    return db.getUser(email, password);
  }

  public async registerUser(user: User): Promise<boolean | Error> {
    return db.registerUser(user);
  }

  public async checkUser(email: string): Promise<boolean | Error> {
    return db.checkUser(email);
  }
}
