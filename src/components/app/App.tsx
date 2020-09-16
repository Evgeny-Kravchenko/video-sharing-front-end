import React, { FC } from 'react';

import { createGlobalStyle } from 'styled-components';

import Header from '../header';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const App: FC = () => (
  <>
    <GlobalStyle />
    <Header />
  </>
);

export default App;
