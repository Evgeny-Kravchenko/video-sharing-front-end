import React, { FC } from 'react';

import styled from 'styled-components';

import { createGlobalStyle } from 'styled-components';

import Header from '../header';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const Wrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

const App: FC = () => (
  <>
    <GlobalStyle />
    <Wrapper>
      <Header />
    </Wrapper>
  </>
);

export default App;
