import React, { FC, ReactElement } from 'react';

import AuthForm from '../../auth-form';

const AuthenticationPage: FC = (): ReactElement => {
  return (
    <div className="p-lg-5 p-md-3 p-2">
      <AuthForm />
    </div>
  );
};

export default AuthenticationPage;
