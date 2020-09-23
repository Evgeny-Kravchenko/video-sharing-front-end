import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { VideoStyled, ButtonsWrapper } from './styled-components';
import { Wrapper } from '../../../../../styles/global-styled-components';

import { VideoItemProps } from './types';
import { State } from '../../../../../reducers/types';

import { deleteVideoRequest, editVideoRequest } from '../../../../../actions';

import ShareVideoForm from '../share-video-form';
import ModalWindow from '../modal-window';

const VideoItem: FC<VideoItemProps> = (props: VideoItemProps) => {
  const dispatch = useDispatch();
  const [isShareWindowShown, setIsShareWindowShown] = useState(false);
  const [isEditingWindowShown, setIsEditingVideoShown] = useState(false);
  const {
    video: { title, description, owner, id, whoSharedWith },
  } = props;
  const isOwner = useSelector((state: State) => state.user.email) === owner;
  const isLoadingCallback = (state: State) => state.videos.statusOfEditingVideo.loading;
  const isSuccessCallback = (state: State) => state.videos.statusOfEditingVideo.isSuccess;
  const isErrorCallback = (state: State) => state.videos.statusOfEditingVideo.error;
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
                <button
                  className="btn btn-outline-danger"
                  onClick={() => dispatch(deleteVideoRequest(id))}
                >
                  <i className="fa fa-trash-o"></i>
                </button>
              </>
            )}
          </ButtonsWrapper>
        </div>
      </div>
      {isShareWindowShown && (
        <ShareVideoForm
          onSetIsShareWindowShown={setIsShareWindowShown}
          title={title}
          id={id}
          owner={owner}
        />
      )}
      {isEditingWindowShown && (
        <ModalWindow
          onSetModalWindow={setIsEditingVideoShown}
          isErrorCallback={isErrorCallback}
          isSuccessCallback={isSuccessCallback}
          isLoadingCallback={isLoadingCallback}
          action={editVideoRequest}
          whoSharedWith={whoSharedWith}
          title={title}
          descr={description}
          id={id}
        />
      )}
    </Wrapper>
  );
};

export default VideoItem;
