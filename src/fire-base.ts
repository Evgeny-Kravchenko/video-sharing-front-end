import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import { Video } from './types';
import VideoAffilation from './mock/types';
import DataSnapshot = firebase.database.DataSnapshot;

import { firebase } from './index';

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
  private usersVideosRef: app.database.Reference;
  private usersSharedVideosRef: app.database.Reference;
  private videosRef: app.database.Reference;

  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.usersVideosRef = app.database().ref('users-videos');
    this.usersSharedVideosRef = app.database().ref('shared-users-videos');
    this.videosRef = app.database().ref('videos');
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
    return this.usersVideosRef.once('value');
  };

  public getUsersSharedVideos = () => {
    return this.usersSharedVideosRef.once('value');
  };

  public getVideos = () => {
    return this.videosRef.once('value');
  };

  public addNewVideo = async (data: { data: Video; uid: string }) => {
    const allVideosSnapshot = await this.getVideos();
    const allVideosVal = allVideosSnapshot.val();
    allVideosVal.push(data.data);
    const usersVideosSnapShot: DataSnapshot = await firebase.getUsersVideos();
    const usersVideosVal: Array<VideoAffilation> = usersVideosSnapShot.val();
    const newUsersVideosItem = {
      userId: data.uid,
      videoId: data.data.id,
    };
    usersVideosVal.push(newUsersVideosItem);
    await this.usersVideosRef.set(usersVideosVal);
    return await this.videosRef.set(allVideosVal);
  };
}

export default Firebase;
