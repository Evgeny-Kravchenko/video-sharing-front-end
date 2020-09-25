import React, { FC } from 'react';
import WrapperSpinner from './styled-components';

const Spinner: FC = () => {
  return (
    <WrapperSpinner className="spinner-border d-block my-0 mx-auto" role="status">
      <span className="sr-only">Loading...</span>
    </WrapperSpinner>
  );
};

export default Spinner;
