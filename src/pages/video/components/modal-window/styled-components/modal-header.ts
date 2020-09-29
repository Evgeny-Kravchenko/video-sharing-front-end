import styled from 'styled-components';

const ButtonClose = styled.button`
  @media screen and (max-width: 450px) {
    order: 1;
  }
`;

const SpinnerWrapper = styled.div`
  @media screen and (max-width: 450px) {
    width: 100%;
    order: 2;
    padding: 5px 0;
  }
`;

const StatusMessage = styled.p`
  @media screen and (max-width: 450px) {
    width: 100%;
    order: 2;
    text-align: center;
  }
`;

export { ButtonClose, SpinnerWrapper, StatusMessage };
