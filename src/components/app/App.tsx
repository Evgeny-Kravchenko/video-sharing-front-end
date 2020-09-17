import React, { FC } from 'react';
import { Switch } from 'react-router-dom';

import styled, { createGlobalStyle } from 'styled-components';

import Header from '../header';
import VideoPage from '../pages/video';
import AuthenticationPage from '../pages/authentication';
import RegistrationPage from '../pages/registration';
import PrivateRoute from '../../hoc/private-route';
import { Route } from 'react-router-dom';

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
      <main>
        <Switch>
          <Route path="/auth" component={AuthenticationPage} exact />
          <PrivateRoute path="/videos" component={VideoPage} exact />
          <Route path="/registration" component={RegistrationPage} exact />
        </Switch>
      </main>
    </Wrapper>
  </>
);

export default App;
