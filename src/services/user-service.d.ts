import { User } from '../types';
import UserCredential = firebase.auth.UserCredential;
export default class UserService {
    private static transformSignIn;
    signIn(email: string, password: string): Promise<{
        email: string;
        uid: string;
    }>;
    signOut(): Promise<any>;
    registerUser(user: User): Promise<UserCredential | Error>;
}
