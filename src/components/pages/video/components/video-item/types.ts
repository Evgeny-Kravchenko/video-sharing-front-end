export interface Video {
  id: string;
  title: string;
  description: string;
  [key: string]: any;
}
export interface VideoItemProps {
  video: Video;
}
