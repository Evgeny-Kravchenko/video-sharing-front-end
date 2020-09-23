import { videos } from '../mock';
import { Video } from '../types';

export default class VideoService {
  private videos: Array<Video>;

  constructor() {
    this.videos = videos;
  }

  public async getOwnVideos(userEmail: string): Promise<Array<Video> | Error> {
    return this.videos.filter((video: Video): boolean => video.owner === userEmail);
  }

  public async getWhoSharedVideosWith(email: string): Promise<Array<Video> | Error> {
    return this.videos.filter((video: Video): boolean => {
      return video.whoSharedWith.includes(email);
    });
  }

  public async addNewVideo(data: Video): Promise<boolean | Error> {
    this.videos.push(data);
    return Promise.resolve(true);
  }

  public async deleteVideo(id: string): Promise<boolean | Error> {
    this.videos = this.videos.filter((video: Video) => video.id !== id);
    return Promise.resolve(true);
  }

  public async shareVideo({
    email,
    videoId,
    videoOwnerEmail,
  }: {
    email: string;
    videoId: string;
    videoOwnerEmail: string;
  }): Promise<boolean | Error> {
    if (videoOwnerEmail === email) {
      return Promise.reject(new Error("You can't share the video to yourself."));
    }
    this.videos.forEach((video: Video) => {
      if (video.id === videoId) {
        video.whoSharedWith.push(email);
      }
    });
    return Promise.resolve(true);
  }

  public async editVideo(data: Video): Promise<boolean | Error> {
    this.videos = this.videos.map((video: Video) => {
      if (data.id === video.id) {
        video.title = data.title;
        video.description = data.description;
        video.file = data.file;
      }
      return video;
    });
    return Promise.resolve(true);
  }
}
