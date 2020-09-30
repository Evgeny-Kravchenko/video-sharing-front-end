import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header';
import VideoPage from './pages/video';
import AuthenticationPage from './pages/authentication';
import RegistrationPage from './pages/registration';
import { PrivateRoute } from './components/private-route';
import NotFound from './components/not-found';
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
          <Route path="*" exact component={NotFound} />
        </Switch>
      </main>
    </Wrapper>
  </>
);

export default App;
