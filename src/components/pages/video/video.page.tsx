import React, { FC, ReactElement, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import VideoList from '../video/components/video-list';
import { userOwnVideosRequest, userSharedVideosRequest } from '../../../actions';
import TabItem from './styled-components';
import Spinner from '../../local/spinner';
import ModalWindow from './components/modal-window';

import { State } from '../../../reducers/types';
import { Video } from './components/video-item/types';

const VideoPage: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const ownVideos: Array<Video> = useSelector(
    (state: State) => state.videosOfUser.ownVideos.videos
  );
  const ownVideosLoading: boolean = useSelector(
    (state: State) => state.videosOfUser.ownVideos.loading
  );
  const sharedVideos: Array<Video> = useSelector(
    (state: State) => state.videosOfUser.sharedVideos.videos
  );
  const sharedVideosLoading: boolean = useSelector(
    (state: State) => state.videosOfUser.sharedVideos.loading
  );
  const userEmail: string = useSelector((state: State) => state.authUser.email);
  const [activeVideoPage, setActiveVideoPage] = useState('own');
  const [isModal, setIsModal] = useState(false);
  const videos = activeVideoPage === 'own' ? ownVideos : sharedVideos;
  const handleSetActiveVideoPage = (
    cb: (userEmail: string) => void,
    userEmail: string,
    path: string
  ) => () => {
    if (path !== activeVideoPage) {
      setActiveVideoPage(path);
      dispatch(cb(userEmail));
    }
  };
  const isLoading = !ownVideosLoading && !sharedVideosLoading;
  const downloadVideoButton =
    isLoading && activeVideoPage === 'own' ? (
      <button className="btn btn-primary" onClick={() => setIsModal(true)}>
        Add new video
      </button>
    ) : null;
  const spinner = ownVideosLoading || sharedVideosLoading ? <Spinner /> : null;
  const modal = isModal ? <ModalWindow onSetModalWindow={setIsModal} /> : null;
  const videoList = isLoading ? <VideoList videos={videos} /> : null;
  return (
    <div className="py-lg-4 py-md-3 px-sm-0 p-2">
      <ul className="nav nav-tabs mb-4">
        <li
          className="nav-item"
          onClick={handleSetActiveVideoPage(userOwnVideosRequest, userEmail, 'own')}
        >
          <TabItem className={`nav-link ${activeVideoPage === 'own' ? 'active' : null}`}>
            My videos
          </TabItem>
        </li>
        <li
          className="nav-item"
          onClick={handleSetActiveVideoPage(userSharedVideosRequest, userEmail, 'shared')}
        >
          <TabItem className={`nav-link ${activeVideoPage === 'shared' ? 'active' : null}`}>
            Video shared to me
          </TabItem>
        </li>
      </ul>
      {downloadVideoButton}
      {spinner}
      {videoList}
      {modal}
    </div>
  );
};

export default VideoPage;
