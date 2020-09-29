import './styles/index.scss';
import UserService from './services/user-service';
import VideoService from './services/video-service';
import { Firebase } from './firebase/';
declare const firebase: Firebase;
declare const userService: UserService;
declare const videoService: VideoService;
export { userService, videoService, firebase };
