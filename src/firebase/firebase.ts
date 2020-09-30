import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import { Video } from '../types';
import { VideoAffilation } from './index';
import DataSnapshot = firebase.database.DataSnapshot;

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

export default class Firebase {
  private auth: app.auth.Auth;
  private usersVideosRef: app.database.Reference;
  private usersSharedVideosRef: app.database.Reference;
  private videosRef: app.database.Reference;
  private userRef: app.database.Reference;

  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.usersVideosRef = app.database().ref('users-videos');
    this.usersSharedVideosRef = app.database().ref('shared-users-videos');
    this.videosRef = app.database().ref('videos');
    this.userRef = app.database().ref('users');
  }

  public doCreateUserWithEmailAndPassword = async (
    email: string,
    password: string
  ): Promise<app.auth.UserCredential> => {
    const registerUser = await this.auth.createUserWithEmailAndPassword(email, password);
    const registerUserSnapShot = await this.userRef.once('value');
    const registerUserVal = registerUserSnapShot.val() || [];
    registerUserVal.push({ email, id: registerUser.user?.uid });
    await this.userRef.set(registerUserVal);
    return registerUser;
  };

  public doSignInWithEmailAndPassword = (
    email: string,
    password: string
  ): Promise<app.auth.UserCredential> => this.auth.signInWithEmailAndPassword(email, password);

  public doSignOut = (): Promise<void> => {
    return this.auth.signOut();
  };

  public getUsersVideos = (): Promise<app.database.DataSnapshot> => {
    return this.usersVideosRef.once('value');
  };

  public getUsersSharedVideos = (): Promise<app.database.DataSnapshot> => {
    return this.usersSharedVideosRef.once('value');
  };

  public getVideos = (): Promise<app.database.DataSnapshot> => {
    return this.videosRef.once('value');
  };

  public addNewVideo = async (data: {
    newVideo: Video;
    uid: string;
    videoId: string | undefined;
  }): Promise<unknown> => {
    const allVideosSnapshot = await this.getVideos();
    const allVideosVal = allVideosSnapshot.val() || [];
    allVideosVal.push(data.newVideo);
    const usersVideosSnapShot: DataSnapshot = await this.getUsersVideos();
    const usersVideosVal: Array<VideoAffilation> = usersVideosSnapShot.val() || [];
    const newUsersVideosItem = {
      userId: data.uid,
      videoId: data.newVideo.id,
    };
    usersVideosVal.push(newUsersVideosItem);
    await this.usersVideosRef.set(usersVideosVal);
    return await this.videosRef.set(allVideosVal);
  };

  public deleteVideo = async (id: string): Promise<unknown> => {
    const allVideosSnapshot = await this.getVideos();
    let allVideosVal = allVideosSnapshot.val() || [];
    const usersVideosSnapShot: DataSnapshot = await this.getUsersVideos();
    let usersVideosVal: Array<VideoAffilation> = usersVideosSnapShot.val() || [];
    const usersSharedVideosSnapShot: DataSnapshot = await this.getUsersSharedVideos();
    let usersSharedVideosVal: Array<VideoAffilation> = usersSharedVideosSnapShot.val() || [];
    allVideosVal = allVideosVal.filter((video: Video) => video.id !== id);
    usersVideosVal = usersVideosVal.filter((item: VideoAffilation) => item.videoId !== id);
    usersSharedVideosVal = usersSharedVideosVal.filter(
      (item: VideoAffilation) => item.videoId !== id
    );
    await this.usersVideosRef.set(usersVideosVal);
    await this.usersSharedVideosRef.set(usersSharedVideosVal);
    return await this.videosRef.set(allVideosVal);
  };

  public shareVideo = async ({
    email,
    videoId,
    userEmailWhoShareVideo,
  }: {
    email: string;
    videoId: string;
    userEmailWhoShareVideo: string;
  }): Promise<unknown> => {
    if (email === userEmailWhoShareVideo) {
      return Promise.reject(new Error("You can't share the video to yourself."));
    }
    const usersSnapShot = await this.userRef.once('value');
    const usersVal = usersSnapShot.val();
    const userId = usersVal.find((user: { id: string; email: string }) => user.email === email).id;
    const usersSharedVideosSnapShot = await this.usersSharedVideosRef.once('value');
    const usersSharedVideosVal = usersSharedVideosSnapShot.val() || [];
    usersSharedVideosVal.push({ userId, videoId });
    return await this.usersSharedVideosRef.set(usersSharedVideosVal);
  };

  public editVideo = async (data: { data: Video; videoId: string }): Promise<unknown> => {
    const videosSnapShot = await this.videosRef.once('value');
    let videosVal = videosSnapShot.val() || [];
    videosVal = videosVal.map((video: Video) => {
      if (data.videoId === video.id) {
        video.title = data.data.title;
        video.description = data.data.description;
        video.videoUrl = data.data.videoUrl;
      }
      return video;
    });
    return await this.videosRef.set(videosVal);
  };
}
