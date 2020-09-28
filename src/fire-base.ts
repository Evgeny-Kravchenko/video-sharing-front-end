import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

class Firebase {
  private auth: app.auth.Auth;
  private readUsersVideosRef: app.database.Reference;
  private readUsersSharedVideosRef: app.database.Reference;
  private readVideosRef: app.database.Reference;

  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.readUsersVideosRef = app.database().ref('users-videos');
    this.readUsersSharedVideosRef = app.database().ref('shared-users-videos');
    this.readVideosRef = app.database().ref('videos');
  }

  public doCreateUserWithEmailAndPassword = (
    email: string,
    password: string
  ): Promise<app.auth.UserCredential> => this.auth.createUserWithEmailAndPassword(email, password);

  public doSignInWithEmailAndPassword = (
    email: string,
    password: string
  ): Promise<app.auth.UserCredential> => this.auth.signInWithEmailAndPassword(email, password);

  public getUsersVideos = () => {
    return this.readUsersVideosRef.once('value');
  };

  public getUsersSharedVideos = () => {
    return this.readUsersSharedVideosRef.once('value');
  };

  public getVideos = () => {
    return this.readVideosRef.once('value');
  };

  // public doSignOut = (): Promise<void> => this.auth.signOut();
  //
  // public doPasswordReset = (email: string): Promise<void> =>
  //   this.auth.sendPasswordResetEmail(email);
  //
  // public doPasswordUpdate = (password: string): Promise<void> | undefined =>
  //   this.auth.currentUser?.updatePassword(password);
}

export default Firebase;
