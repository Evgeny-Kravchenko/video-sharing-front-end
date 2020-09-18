import React, { FC, ReactElement } from 'react';

import { Wrapper } from '../../styles/global-styled-components';

const AuthFailure: FC = (): ReactElement => {
  return (
    <Wrapper width="500px">
      <div className="card border-danger mb-3">
        <div className="card-header">There is no such user.</div>
        <div className="card-body">
          <h4 className="card-title">You are logged in wrong an email or a password. Try again.</h4>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card
            content.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default AuthFailure;
