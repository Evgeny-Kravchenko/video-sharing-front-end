import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';

import './styles/index.scss';

const AppWithHot = hot(App);

ReactDOM.render(
  <Router>
    <AppWithHot />
  </Router>,
  document.getElementById('root')
);
