import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { Video } from '../types';
import DataSnapshot = firebase.database.DataSnapshot;
export default class Firebase {
    private auth;
    private usersVideosRef;
    private usersSharedVideosRef;
    private videosRef;
    private userRef;
    constructor();
    doCreateUserWithEmailAndPassword: (email: string, password: string) => Promise<app.auth.UserCredential>;
    doSignInWithEmailAndPassword: (email: string, password: string) => Promise<app.auth.UserCredential>;
    doSignOut: () => any;
    getUsersVideos: () => Promise<DataSnapshot>;
    getUsersSharedVideos: () => Promise<DataSnapshot>;
    getVideos: () => Promise<DataSnapshot>;
    addNewVideo: (data: {
        newVideo: Video;
        uid: string;
        videoId: string | undefined;
    }) => Promise<any>;
    deleteVideo: (id: string) => Promise<any>;
    shareVideo: ({ email, videoId, userEmailWhoShareVideo, }: {
        email: string;
        videoId: string;
        userEmailWhoShareVideo: string;
    }) => Promise<any>;
    editVideo: (data: {
        data: Video;
        videoId: string;
    }) => Promise<any>;
}
