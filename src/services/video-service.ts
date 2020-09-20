import { videos } from '../mock';
import IVideo from '../interfaces/video';

export default class VideoService {
  private videos: Array<IVideo>;

  constructor() {
    this.videos = videos;
  }

  public async getOwnVideos(userEmail: string): Promise<Array<IVideo>> {
    return this.videos.filter((video: IVideo): boolean => video.owner === userEmail);
  }

  public async getWhoSharedVideosWith(email: string): Promise<Array<IVideo>> {
    return this.videos.filter((video: IVideo): boolean => {
      return video.whoSharedWith.includes(email);
    });
  }
}
