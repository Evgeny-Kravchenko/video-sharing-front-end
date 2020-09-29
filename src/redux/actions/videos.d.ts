import { Action, ActionVideosTypes } from './types';
import { Video } from '../types';
declare const userOwnVideosRequest: (id: string) => Action;
declare const userOwnVideosSuccess: (videos: Array<Video>) => Action;
declare const userOwnVideosFailure: (error: Error) => Action;
declare const userSharedVideosRequest: (email: string) => Action;
declare const userSharedVideosSuccess: (videos: Array<Video>) => Action;
declare const userSharedVideosFailure: (error: Error) => Action;
declare const addNewVideoRequest: (data: {
    data: Video;
    userEmail: string;
}) => Action;
declare const addNewVideoSuccess: (data: {
    video: Video;
    videoId: string;
}) => Action;
declare const addNewVideoFailure: (err: Error) => Action;
declare const deleteVideoRequest: (id: string) => Action;
declare const deleteVideoSuccess: (id: string) => Action;
declare const deleteVideoFailure: (err: string) => Action;
declare const clearStatusOfAddingVideo: () => Action;
declare const clearStatusOfRemovingVideo: () => Action;
declare const shareVideoRequest: (email: string, videoId: string, userEmailWhoShareVideo: string) => Action;
declare const shareVideoSuccess: ({ email, videoId, userEmailWhoShareVideo, }: {
    email: string;
    videoId: string;
    userEmailWhoShareVideo: string;
}) => Action;
declare const shareVideoFailure: (err: string) => Action;
declare const clearStatusSharingVideo: () => Action;
declare const editVideoRequest: (data: {
    data: Video;
    userEmail: string;
    videoId: string;
}) => Action;
declare const editVideoSuccess: (data: {
    data: Video;
    videoId: string;
}) => Action;
declare const editVideoFailure: (err: string) => Action;
declare const clearStatusOfEditingVideo: () => Action;
export { ActionVideosTypes, userOwnVideosRequest, userOwnVideosSuccess, userOwnVideosFailure, userSharedVideosRequest, userSharedVideosSuccess, userSharedVideosFailure, addNewVideoRequest, addNewVideoSuccess, addNewVideoFailure, deleteVideoRequest, deleteVideoSuccess, deleteVideoFailure, clearStatusOfRemovingVideo, clearStatusOfAddingVideo, shareVideoRequest, shareVideoSuccess, shareVideoFailure, clearStatusSharingVideo, editVideoRequest, editVideoSuccess, editVideoFailure, clearStatusOfEditingVideo, };
