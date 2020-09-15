import React from 'react';

import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';

const App: React.FC = () => (
  <>
    <Spinner />
    <ErrorIndicator />
  </>
);

export default App;
