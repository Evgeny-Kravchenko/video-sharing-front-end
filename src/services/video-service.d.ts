import { Video } from '../types';
export default class VideoService {
    getOwnVideos(uid: string): Promise<Array<Video> | Error>;
    getSharedVideos(uid: string): Promise<Array<Video> | Error>;
    addNewVideo(data: {
        newVideo: Video;
        uid: string;
        videoId: string | undefined;
    }): Promise<string>;
    deleteVideo(id: string): Promise<any>;
    shareVideo({ email, videoId, userEmailWhoShareVideo, }: {
        email: string;
        videoId: string;
        userEmailWhoShareVideo: string;
    }): Promise<boolean | Error>;
    editVideo(data: {
        data: Video;
        videoId: string;
    }): Promise<boolean | Error>;
    getOwnVideosIds(uid: string): Promise<string[] | undefined>;
    getSharedVideosIds(uid: string): Promise<string[] | undefined>;
}
