import { User, Video } from '../types';
import UserResponse from '../types/get-user-response';

const users: Array<User> = [
  {
    id: '1',
    name: 'Yauhen',
    lastName: 'Krauchanka',
    email: 'evgen.kravchenko.vladimirovich@mail.ru',
    password: '11111111',
  },
  {
    id: '2',
    name: 'Valera',
    lastName: 'Zhevlakov',
    email: 'valera.zhevlakov@mail.ru',
    password: '11111111',
  },
  {
    id: '3',
    name: 'Stas',
    lastName: 'Sharendo',
    email: 'stas.sharendo.ivanovich@mail.ru',
    password: '11111111',
  },
];

const videos: Array<Video> = [
  {
    id: '1',
    title: 'Cats are good',
    description: 'Cats are good and they can calm you down.',
  },
  {
    id: '2',
    title: 'Favourite car',
    description:
      'It is a video about BMW E46. This car is really cool. Watch it and you will understand what I am talking about',
  },
  {
    id: '3',
    title: 'Favourite car',
    description:
      'It is a video about BMW E46. This car is really cool. Watch it and you will understand what I am talking about',
  },
  {
    id: '4',
    title: 'Cats are good',
    description: 'Cats are good and they can calm you down.',
  },
  {
    id: '5',
    title: 'Favourite car',
    description:
      'It is a video about BMW E46. This car is really cool. Watch it and you will understand what I am talking about',
  },
  {
    id: '6',
    title: 'Favourite car',
    description:
      'It is a video about BMW E46. This car is really cool. Watch it and you will understand what I am talking about',
  },
  {
    id: '7',
    title: 'Cats are good',
    description: 'Cats are good and they can calm you down.',
  },
  {
    id: '8',
    title: 'Favourite car',
    description:
      'It is a video about BMW E46. This car is really cool. Watch it and you will understand what I am talking about',
  },
  {
    id: '9',
    title: 'Favourite car',
    description:
      'It is a video about BMW E46. This car is really cool. Watch it and you will understand what I am talking about',
  },
  {
    id: '10',
    title: 'Cats are good',
    description: 'Cats are good and they can calm you down.',
  },
  {
    id: '11',
    title: 'Favourite car',
    description:
      'It is a video about BMW E46. This car is really cool. Watch it and you will understand what I am talking about',
  },
  {
    id: '12',
    title: 'Favourite car',
    description:
      'It is a video about BMW E46. This car is really cool. Watch it and you will understand what I am talking about',
  },
];

interface VideoAffilation {
  id: string;
  userId: string;
  videoId: string;
}

const usersVideos: Array<VideoAffilation> = [
  { id: '1', userId: '1', videoId: '1' },
  { id: '2', userId: '2', videoId: '2' },
  { id: '3', userId: '3', videoId: '3' },
  { id: '4', userId: '1', videoId: '4' },
  { id: '5', userId: '2', videoId: '5' },
  { id: '6', userId: '3', videoId: '6' },
  { id: '7', userId: '1', videoId: '7' },
  { id: '8', userId: '2', videoId: '8' },
  { id: '9', userId: '3', videoId: '9' },
  { id: '10', userId: '1', videoId: '10' },
  { id: '11', userId: '2', videoId: '11' },
  { id: '12', userId: '3', videoId: '12' },
];

const usersSharedVideos: Array<VideoAffilation> = [
  { id: '1', userId: '1', videoId: '12' },
  { id: '2', userId: '2', videoId: '11' },
  { id: '3', userId: '3', videoId: '10' },
  { id: '4', userId: '1', videoId: '9' },
  { id: '5', userId: '2', videoId: '8' },
  { id: '6', userId: '3', videoId: '7' },
  { id: '7', userId: '1', videoId: '6' },
  { id: '8', userId: '2', videoId: '5' },
  { id: '9', userId: '3', videoId: '4' },
  { id: '10', userId: '1', videoId: '3' },
  { id: '11', userId: '2', videoId: '2' },
  { id: '12', userId: '3', videoId: '1' },
];

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
    this.users.push(user);
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
    this.videos.push(data.data);
    const user = this.users.find((user: User) => user.email === data.userEmail);
    if (!user) {
      return Promise.reject(new Error('Something went wrong'));
    }
    const userId = user.id;
    const videoId = String(Math.floor(Math.random() * 10000));
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
