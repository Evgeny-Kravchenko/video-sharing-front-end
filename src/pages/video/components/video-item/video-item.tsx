import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { VideoStyled, ButtonsWrapper } from './styled-components';
import { Wrapper } from '../../../../styles/global-styled-components';

import { VideoItemProps } from './types';

import { deleteVideoRequest, editVideoRequest } from '../../../../redux/actions';

import ShareVideoForm from '../share-video-form';
import ModalWindow from '../modal-window';
import VideoPlayer from '../video-player';

import { getOwnVideosIds, getStatusOfEditingVideo } from '../../../../redux/selectors';

const VideoItem: FC<VideoItemProps> = (props: VideoItemProps) => {
  const {
    video: { title, description, id, videoUrl },
  } = props;
  const dispatch = useDispatch();
  const onDeleteVideo = () => dispatch(deleteVideoRequest(id));

  const ownVideosIds = useSelector(getOwnVideosIds);
  const { isSuccess, error, loading } = useSelector(getStatusOfEditingVideo);
  const isOwner = ownVideosIds.includes(id);

  const [isShareWindowShown, setIsShareWindowShown] = useState(false);
  const [isEditingWindowShown, setIsEditingVideoShown] = useState(false);
  const [isShownVideoPlayer, setShownVideoPlayer] = useState(false);

  return (
    <Wrapper width="300px" margin="10px">
      <div className="card my-2 h-100">
        <div className="card-body d-flex flex-column justify-content-between">
          <h4 className="card-title">{title}</h4>
          <VideoStyled
            src={videoUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          />
          <p className="card-text">{description}</p>
          <ButtonsWrapper>
            <button className="btn btn-outline-success" onClick={() => setShownVideoPlayer(true)}>
              Watch video
            </button>
            {isOwner && (
              <>
                <button
                  type="button"
                  className="btn btn-outline-warning ml-auto mr-1"
                  onClick={() => setIsEditingVideoShown(true)}
                >
                  <i className="fa fa-cog" aria-hidden="true"></i>
                </button>
                <button
                  className="btn btn-outline-info mr-1"
                  onClick={() => setIsShareWindowShown(true)}
                >
                  <i className="fa fa-share-square-o"></i>
                </button>
                <button className="btn btn-outline-danger" onClick={onDeleteVideo}>
                  <i className="fa fa-trash-o"></i>
                </button>
              </>
            )}
          </ButtonsWrapper>
        </div>
      </div>
      {isShareWindowShown && (
        <ShareVideoForm onSetIsShareWindowShown={setIsShareWindowShown} title={title} id={id} />
      )}
      {isEditingWindowShown && (
        <ModalWindow
          onSetModalWindow={setIsEditingVideoShown}
          isError={error}
          isSuccess={isSuccess}
          isLoading={loading}
          action={editVideoRequest}
          title={title}
          descr={description}
          id={id}
          videoUrl={videoUrl}
        />
      )}
      {isShownVideoPlayer ? (
        <VideoPlayer src={videoUrl} onSetShownVideoPlayer={setShownVideoPlayer} />
      ) : null}
    </Wrapper>
  );
};

export default VideoItem;
