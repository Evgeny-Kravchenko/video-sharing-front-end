export interface Video {
  title: string;
  description: string;
  [key: string]: any;
}
export interface VideoItemProps {
  video: Video;
}
