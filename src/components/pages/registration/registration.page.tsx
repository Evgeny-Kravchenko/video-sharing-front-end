import React, { FC, ReactElement } from 'react';

import RegistrationForm from '../../registration-form';

const RegistrationPage: FC = (): ReactElement => (
  <div className="p-lg-5 p-md-3 p-2">
    <RegistrationForm />
  </div>
);

export default RegistrationPage;
