import React, { FC } from 'react';
import styled from 'styled-components';

interface VideoPlayerProps {
  src: string;
  onSetShownVideoPlayer: (value: boolean) => void;
}

const VideoPlayerStyled = styled.div`
  @media screen and (min-width: 576px) {
    max-width: 90vw;
  }
`;

const VideoPlayer: FC<VideoPlayerProps> = (props: VideoPlayerProps) => {
  const { src, onSetShownVideoPlayer } = props;
  return (
    <div className="modal d-block">
      <VideoPlayerStyled className="modal-dialog h-75" role="document">
        <div className="modal-content h-100">
          <div className="modal-header">
            <h5 className="modal-title">Video player</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => onSetShownVideoPlayer(false)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body h-100">
            <iframe
              className="w-100 h-100"
              src={src}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            />
          </div>
        </div>
      </VideoPlayerStyled>
    </div>
  );
};

export default VideoPlayer;
