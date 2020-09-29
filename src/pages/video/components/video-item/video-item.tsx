import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { VideoStyled, ButtonsWrapper } from './styled-components';
import { Wrapper } from '../../../../styles/global-styled-components';

import { VideoItemProps } from './types';

import { deleteVideoRequest, editVideoRequest } from '../../../../redux/actions';

import ShareVideoForm from '../share-video-form';
import ModalWindow from '../modal-window';

import { getOwnVideosIds, getStatusOfEditingVideo } from '../../../../redux/selectors';

const VideoItem: FC<VideoItemProps> = (props: VideoItemProps) => {
  const {
    video: { title, description, id },
  } = props;
  const dispatch = useDispatch();
  const onDeleteVideo = () => dispatch(deleteVideoRequest(id));

  const ownVideosIds = useSelector(getOwnVideosIds);
  const { isSuccess, error, loading } = useSelector(getStatusOfEditingVideo);
  const isOwner = ownVideosIds.includes(id);

  const [isShareWindowShown, setIsShareWindowShown] = useState(false);
  const [isEditingWindowShown, setIsEditingVideoShown] = useState(false);

  return (
    <Wrapper width="300px" margin="0">
      <div className="card my-2">
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <VideoStyled src="#" controls>
            Your browser does not support the video tag.
          </VideoStyled>
          <p className="card-text">{description}</p>
          <ButtonsWrapper>
            <button className="btn btn-outline-success">Watch video</button>
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
        />
      )}
    </Wrapper>
  );
};

export default VideoItem;
