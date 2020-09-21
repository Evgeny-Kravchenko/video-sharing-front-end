import React, { FC, ReactElement, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import VideoList from '../../video-list';
import { userOwnVideosRequest, userSharedVideosRequest } from '../../../actions';
import TabItem from './styled-components';
import Spinner from '../../spinner';
import { State } from '../../../reducers/types';
import { Video } from '../../video-item/types';

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
  return (
    <div className="py-lg-4 py-md-3 p-2">
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
      {ownVideosLoading || sharedVideosLoading ? <Spinner /> : null}
      {!ownVideosLoading && !sharedVideosLoading ? <VideoList videos={videos} /> : null}
    </div>
  );
};

export default VideoPage;
