import React, { FC } from 'react';
import { Switch } from 'react-router-dom';

import Header from './components/local/header';
import VideoPage from './components/pages/video';
import AuthenticationPage from './components/pages/authentication';
import RegistrationPage from './components/pages/registration';
import { PrivateRoute } from './hoc';
import { Route } from 'react-router-dom';
import { GlobalStyle, Wrapper } from './styles/global-styled-components';

const App: FC = () => (
  <>
    <GlobalStyle />
    <Wrapper width="1140px">
      <Header />
      <main>
        <Switch>
          <PrivateRoute path="/" component={VideoPage} exact />
          <Route path="/auth" component={AuthenticationPage} exact />
          <PrivateRoute path="/videos" component={VideoPage} exact />
          <Route path="/registration" component={RegistrationPage} exact />
        </Switch>
      </main>
    </Wrapper>
  </>
);

export default App;
