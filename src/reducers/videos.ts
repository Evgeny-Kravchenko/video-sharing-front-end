import {Video} from "../components/pages/video/components/video-item/types";

export interface VideosState {
  collection: Video[],
  ownVideosIds: string[],
  sharedVideosIds: string[],
  suggestedVideosIds: string[]
}
