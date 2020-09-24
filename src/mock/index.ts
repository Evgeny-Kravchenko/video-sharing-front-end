import { User, Video } from '../types';
import UserResponse from '../types/get-user-response';
import usersSharedVideos from './users-shared-videos';
import VideoAffilation from './types';
import videos from './videos';

import usersVideos from './usersVideos';
import users from './users';

export class MockDataBase {
  private users: Array<User>;
  private videos: Array<Video>;
  private usersVideo: Array<VideoAffilation>;
  private usersSharedVideos: Array<VideoAffilation>;

  constructor(users: Array<User>, videos: Array<Video>) {
    this.users = users;
    this.videos = videos;
    this.usersVideo = usersVideos;
    this.usersSharedVideos = usersSharedVideos;
  }

  private static async getIds(id: string, arr: Array<VideoAffilation>) {
    return arr
      .filter((item: VideoAffilation) => item.userId === id)
      .map((item: VideoAffilation) => item.videoId);
  }

  public async getUser(email: string, password: string): Promise<UserResponse | Error> {
    const user = this.users.find(
      (user: User) => email === user.email && password === user.password
    );
    if (!user) {
      return Promise.reject(new Error('There is no such user!'));
    }
    const ownVideosIds = await MockDataBase.getIds(user.id, this.usersVideo);
    const sharedVideosIds = await MockDataBase.getIds(user.id, this.usersSharedVideos);
    return { user, ownVideosIds, sharedVideosIds };
  }

  public async registerUser(user: User): Promise<boolean | Error> {
    const isSuchUserIn = this.users.some((item) => item.email === user.email);
    if (isSuchUserIn) {
      return Promise.reject(new Error('Email is already in use'));
    }
    const id = String(Math.round(Math.random() * 100000));
    this.users.push({ ...user, id });
    return Promise.resolve(true);
  }

  public async checkUser(email: string): Promise<boolean | Error> {
    const isUser = this.users.some((user: User) => {
      return user.email === email;
    });
    return isUser
      ? Promise.resolve<boolean>(true)
      : Promise.reject<Error>(new Error('There is no such user.'));
  }

  public async getOwnVideos(id: string): Promise<Array<Video> | Error> {
    const ownVideosIds = await MockDataBase.getIds(id, this.usersVideo);
    const videos = this.videos.filter((video: Video) => ownVideosIds.includes(video.id));
    return Promise.resolve(videos);
  }

  public async getSharedVideos(email: string): Promise<Array<Video> | Error> {
    const userId = this.users.find((user: User) => user.email === email)?.id;
    const sharedVideosIds = this.usersSharedVideos
      .filter((item: VideoAffilation) => item.userId === userId)
      .map((item: VideoAffilation) => item.videoId);
    return this.videos.filter((video: Video) => sharedVideosIds.includes(video.id));
  }

  public async addNewVideo(data: { data: Video; userEmail: string }): Promise<string | Error> {
    const videoId = String(Math.floor(Math.random() * 10000));
    this.videos.push({ ...data.data, id: videoId });
    console.log(this.videos);
    const user = this.users.find((user: User) => user.email === data.userEmail);
    if (!user) {
      return Promise.reject(new Error('Something went wrong'));
    }
    const userId = user.id;
    const usersVideosId = String(Math.floor(Math.random() * 10000));
    this.usersVideo.push({ id: usersVideosId, videoId, userId });
    return Promise.resolve(videoId);
  }

  public async deleteVideo(id: string): Promise<boolean | Error> {
    this.videos = this.videos.filter((video: Video) => video.id !== id);
    this.usersVideo = this.usersVideo.filter((item: VideoAffilation) => item.videoId !== id);
    this.usersSharedVideos = this.usersSharedVideos.filter(
      (item: VideoAffilation) => item.videoId !== id
    );
    return Promise.resolve(true);
  }

  public async shareVideo({
    email,
    videoId,
    userEmailWhoShareVideo,
  }: {
    email: string;
    videoId: string;
    userEmailWhoShareVideo: string;
  }): Promise<boolean | Error> {
    const userIdWhoShareVideo = this.users.find(
      (user: User) => user.email === userEmailWhoShareVideo
    )?.id;
    const userIdWhomShareVideo = this.users.find((user: User) => user.email === email)?.id;
    if (!userIdWhoShareVideo || !userIdWhomShareVideo) {
      return Promise.reject('Something went wrong');
    }
    if (userIdWhoShareVideo === userIdWhomShareVideo) {
      return Promise.reject(new Error("You can't share the video to yourself."));
    }
    this.usersSharedVideos = [
      ...this.usersSharedVideos,
      { id: String(Math.floor(Math.random() * 100000)), userId: userIdWhomShareVideo, videoId },
    ];
    return Promise.resolve(true);
  }

  public async editVideo(data: { data: Video; videoId: string }): Promise<boolean | Error> {
    this.videos = this.videos.map((video: Video) => {
      if (data.videoId === video.id) {
        video.title = data.data.title;
        video.description = data.data.description;
        video.file = data.data.file;
      }
      return video;
    });
    return Promise.resolve(true);
  }
}

const db = new MockDataBase(users, videos);

export { db };
