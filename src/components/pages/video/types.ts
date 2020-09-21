import Video from "../../video-item/types";

export default interface VideoPageProps {
  ownVideos: Array<Video>;
  ownVideosLoading: boolean;
  sharedVideos: Array<Video>;
  sharedVideosLoading: boolean;
  onOwnVideo: (userEmail: string) => void;
  onSharedVideo: (userEmail: string) => void;
  userEmail: string;
}
