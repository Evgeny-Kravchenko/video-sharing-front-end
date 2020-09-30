import React, { FC, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header';
import AuthenticationPage from './pages/authentication';
import RegistrationPage from './pages/registration';
import { PrivateRoute } from './components/private-route';
import NotFound from './components/not-found';
import { GlobalStyle, Wrapper } from './styles/global-styled-components';
import Spinner from './components/spinner';

const VideoPage = lazy(() => import('./pages/video'));

const App: FC = () => (
  <>
    <GlobalStyle />
    <Wrapper width="1140px">
      <Header />
      <main>
        <Suspense
          fallback={
            <div className="p-5">
              <Spinner />
            </div>
          }
        >
          <Switch>
            <PrivateRoute path="/" component={VideoPage} exact />
            <Route path="/auth" component={AuthenticationPage} exact />
            <PrivateRoute path="/videos" component={VideoPage} exact />
            <Route path="/registration" component={RegistrationPage} exact />
            <Route path="*" exact component={NotFound} />
          </Switch>
        </Suspense>
      </main>
    </Wrapper>
  </>
);

export default App;
