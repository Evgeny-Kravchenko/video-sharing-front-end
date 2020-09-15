import React, { FC } from 'react';

import icon from './error.png';

const ErrorIndicator: FC = () => (
  <div className="error-indicator alert alert-danger">
    <img className="error-indicator__icon icon" src={icon} alt="Error" />
    <strong className="error-indicator__title title">
      Something went wrong, but we have already started fixing it!
    </strong>
  </div>
);

export default ErrorIndicator;
