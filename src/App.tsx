import React, { FC } from 'react';
import { Switch } from 'react-router-dom';

import Header from './components/header';
import VideoPage from './components/pages/video';
import AuthenticationPage from './components/pages/authentication';
import RegistrationPage from './components/pages/registration';
import PrivateRoute from './hoc/private-route';
import { Route } from 'react-router-dom';
import { GlobalStyle, Wrapper } from './styles/global-styled-components';

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
