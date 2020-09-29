import { Video } from '../types';
export default class VideoService {
    getOwnVideos(id: string): Promise<Array<Video> | Error>;
    getSharedVideos(email: string): Promise<Array<Video> | Error>;
    addNewVideo(data: {
        data: Video;
        userEmail: string;
    }): Promise<string | Error>;
    deleteVideo(id: string): Promise<boolean | Error>;
    shareVideo({ email, videoId, userEmailWhoShareVideo, }: {
        email: string;
        videoId: string;
        userEmailWhoShareVideo: string;
    }): Promise<boolean | Error>;
    editVideo(data: {
        data: Video;
        videoId: string;
    }): Promise<boolean | Error>;
}
