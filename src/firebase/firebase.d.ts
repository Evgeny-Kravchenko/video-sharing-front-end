import app from 'firebase/app';
import 'firebase/auth';
declare class Firebase {
    private auth;
    constructor();
    doCreateUserWithEmailAndPassword: (email: string, password: string) => Promise<app.auth.UserCredential>;
    doSignInWithEmailAndPassword: (email: string, password: string) => Promise<app.auth.UserCredential>;
    doSignOut: () => Promise<void>;
    doPasswordReset: (email: string) => Promise<void>;
    doPasswordUpdate: (password: string) => Promise<void> | undefined;
}
export default Firebase;
