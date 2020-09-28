import { firebase } from '../index';
import { User } from '../types';
import UserCredential = firebase.auth.UserCredential;

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

  public async registerUser(user: User): Promise<UserCredential | Error> {
    return await firebase.doCreateUserWithEmailAndPassword(user.email, user.password);
  }
}
