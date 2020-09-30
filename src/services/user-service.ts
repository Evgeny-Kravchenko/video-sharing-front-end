import { firebase } from '../index';
import { User } from '../types';
import UserCredential = firebase.auth.UserCredential;

export default class UserService {
  private static transformSignIn(response: any): { email: string; uid: string } {
    console.log(response);
    return {
      email: response.user.email,
      uid: response.user.uid,
    };
  }
  public async signIn(email: string, password: string): Promise<{ email: string; uid: string }> {
    const userResponse = await firebase.doSignInWithEmailAndPassword(email, password);
    return UserService.transformSignIn(userResponse);
  }

  public async signOut(): Promise<unknown> {
    return await firebase.doSignOut();
  }

  public async registerUser(user: User): Promise<UserCredential | Error> {
    return await firebase.doCreateUserWithEmailAndPassword(user.email, user.password);
  }
}
