import { db } from '../mock';
import { firebase } from '../index';
import { User } from '../types';

export default class UserService {
  private static transformSignIn(response: any): { email: string; uid: string } {
    return {
      email: response.user.email,
      uid: response.user.uid,
    };
  }
  public async signIn(email: string, password: string): Promise<{ email: string; uid: string }> {
    const userResponse = await firebase.doSignInWithEmailAndPassword(email, password);
    return UserService.transformSignIn(userResponse);
    // return db.getUser(email, password);
  }

  public async registerUser(user: User): Promise<boolean | Error> {
    await firebase.doCreateUserWithEmailAndPassword(user.email, user.password);
    return db.registerUser(user);
  }

  public async checkUser(email: string): Promise<boolean | Error> {
    return db.checkUser(email);
  }
}
