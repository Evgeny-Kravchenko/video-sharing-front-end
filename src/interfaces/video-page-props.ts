import IVideo from './video';

export default interface IVideoPageProps {
  ownVideos: Array<IVideo>;
  sharedVideos: Array<IVideo>;
  onOwnVideo: (userEmail: string) => void;
  onSharedVideo: (userEmail: string) => void;
  userEmail: string;
}
