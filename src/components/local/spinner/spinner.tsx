import React, { FC } from 'react';

const Spinner: FC = () => {
  return (
    <div className="spinner-border d-block my-0 mx-auto" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
