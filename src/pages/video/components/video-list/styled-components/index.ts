import styled from 'styled-components';

const VideoListStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;

  @media screen and (max-width: 680px) {
    justify-content: center;
  }
`;

export default VideoListStyled;
