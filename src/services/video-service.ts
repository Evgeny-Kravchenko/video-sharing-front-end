import { videos } from '../mock';
import { Video } from '../components/pages/video/components/video-item/types';

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
}
