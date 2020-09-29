import { Video } from '../types';
import { VideoAffilation } from '../firebase';

import { firebase } from '../index';
import DataSnapshot = firebase.database.DataSnapshot;

export default class VideoService {
  public async getOwnVideos(uid: string): Promise<Array<Video> | Error> {
    const allVideosSnapshot = await firebase.getVideos();
    const allVideosVal = allVideosSnapshot.val() || [];
    const usersVideosSnapShot: DataSnapshot = await firebase.getUsersVideos();
    const usersVideosVal: Array<VideoAffilation> = usersVideosSnapShot.val() || [];
    const ownVideosIds = usersVideosVal
      .filter((item: VideoAffilation) => item.userId === uid)
      .map((item: VideoAffilation) => item.videoId);
    return allVideosVal.filter((video: Video) => ownVideosIds.includes(video.id));
  }

  public async getSharedVideos(uid: string): Promise<Array<Video> | Error> {
    const allVideosSnapshot = await firebase.getVideos();
    const allVideosVal = allVideosSnapshot.val() || [];
    const usersSharedVideosSnapShot: DataSnapshot = await firebase.getUsersSharedVideos();
    const usersSharedVideosVal: Array<VideoAffilation> = usersSharedVideosSnapShot.val() || [];
    const sharedVideosIds = usersSharedVideosVal
      .filter((item: VideoAffilation) => item.userId === uid)
      .map((item: VideoAffilation) => item.videoId);
    return allVideosVal.filter((video: Video) => sharedVideosIds.includes(video.id));
  }

  public async addNewVideo(data: { newVideo: Video; uid: string; videoId: string | undefined }) {
    const videoId = String(Math.floor(Math.random() * 10000));
    data.newVideo.id = videoId;
    await firebase.addNewVideo(data);
    return videoId;
  }

  public async deleteVideo(id: string) {
    return await firebase.deleteVideo(id);
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
    return await firebase.shareVideo({ email, videoId, userEmailWhoShareVideo });
  }

  public async editVideo(data: { data: Video; videoId: string }): Promise<boolean | Error> {
    return firebase.editVideo(data);
  }

  public async getOwnVideosIds(uid: string) {
    try {
      const usersVideosSnapShot: DataSnapshot = await firebase.getUsersVideos();
      const usersVideosVal: Array<VideoAffilation> = usersVideosSnapShot.val() || [];
      return usersVideosVal
        .filter((item: VideoAffilation) => item.userId === uid)
        .map((item: VideoAffilation) => item.videoId);
    } catch (err: unknown) {}
  }

  public async getSharedVideosIds(uid: string) {
    try {
      const usersSharedVideosSnapShot: DataSnapshot = await firebase.getUsersSharedVideos();
      const usersSharedVideosVal: Array<VideoAffilation> = usersSharedVideosSnapShot.val() || [];
      return usersSharedVideosVal
        .filter((item: VideoAffilation) => item.userId === uid)
        .map((item: VideoAffilation) => item.videoId);
    } catch (err: unknown) {}
  }
}
