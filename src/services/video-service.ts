import { db } from '../mock';
import { Video } from '../types';

export default class VideoService {
  public async getOwnVideos(id: string): Promise<Array<Video> | Error> {
    return db.getOwnVideos(id);
  }

  public async getWhoSharedVideosWith(email: string): Promise<Array<Video> | Error> {
    return db.getWhoSharedVideosWith(email);
  }

  public async addNewVideo(data: Video): Promise<boolean | Error> {
    return db.addNewVideo(data);
  }

  public async deleteVideo(id: string): Promise<boolean | Error> {
    return db.deleteVideo(id);
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
    return db.shareVideo({ email, videoId, videoOwnerEmail });
  }

  public async editVideo(data: Video): Promise<boolean | Error> {
    return db.editVideo(data);
  }
}
