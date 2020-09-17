import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import ErrorBoundry from './components/error-boundry';

import './styles/index.scss';

import store from './store';

const AppWithHot = hot(App);

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <Router>
        <AppWithHot />
      </Router>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
