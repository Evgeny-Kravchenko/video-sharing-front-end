import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 50%;
  margin-bottom: 20px;
`;

const Message = styled.strong`
  font-size: 1rem;
`;

export { Wrapper, Image, Message };
