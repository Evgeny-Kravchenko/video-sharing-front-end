import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import ErrorBoundry from './components/error-boundry';
import { UserServiceProvider } from './components/user-service-context';

import './styles/index.scss';

import store from './store';
import UserService from './services/user-service';

const AppWithHot = hot(App);

const userService = new UserService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <UserServiceProvider value={userService}>
        <Router>
          <AppWithHot />
        </Router>
      </UserServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
