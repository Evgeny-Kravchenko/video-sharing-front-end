import { videos } from '../mock';
import { Video } from '../types';

export default class VideoService {
  private videos: Array<Video>;

  constructor() {
    this.videos = videos;
  }

  public async getOwnVideos(userEmail: string): Promise<Array<Video>> {
    return this.videos.filter((video: Video): boolean => video.owner === userEmail);
  }

  public async getWhoSharedVideosWith(email: string): Promise<Array<Video>> {
    return this.videos.filter((video: Video): boolean => {
      return video.whoSharedWith.includes(email);
    });
  }

  public async addNewVideo(data: Video): Promise<boolean> {
    this.videos.push(data);
    return true;
  }

  public async deleteVideo(id: string): Promise<boolean> {
    this.videos = this.videos.filter((video: Video) => video.id !== id);
    return true;
  }
}
