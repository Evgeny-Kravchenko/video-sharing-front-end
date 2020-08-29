import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const AppWithHot = hot(App);

ReactDOM.render(<AppWithHot />, document.getElementById('root'));
