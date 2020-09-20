import IVideo from './video';

export default interface IVideoPageProps {
  ownVideos: Array<IVideo>;
  ownVideosLoading: boolean;
  sharedVideos: Array<IVideo>;
  sharedVideosLoading: boolean;
  onOwnVideo: (userEmail: string) => void;
  onSharedVideo: (userEmail: string) => void;
  userEmail: string;
}
