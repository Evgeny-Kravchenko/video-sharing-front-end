import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { VideoStyled, ButtonsWrapper } from './styled-components';
import { Wrapper } from '../../../../../styles/global-styled-components';

import { VideoItemProps } from './types';
import { State } from '../../../../../reducers/types';

import { deleteVideoRequest } from '../../../../../actions';

const VideoItem: FC<VideoItemProps> = (props: VideoItemProps) => {
  const dispatch = useDispatch();
  const {
    video: { title, description, owner, id },
  } = props;
  const isOwner = useSelector((state: State) => state.authUser.email) === owner;
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
                <button className="btn btn-outline-info ml-auto mr-1">
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
    </Wrapper>
  );
};

export default VideoItem;
