import React, { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';

import RegistrationForm from '../../pages/registration/components/registration-form';
import MessageFailure from '../../local/message-failure';
import Spinner from '../../local/spinner';
import { State, Status } from '../../../reducers/types';

const RegistrationPage: FC = (): ReactElement => {
  const registerUserStatus: Status = useSelector((state: State) => state.user.statusOfRegisterUser);
  const { error, isSuccess, loading } = registerUserStatus;
  return (
    <div className="p-lg-5 p-md-3 p-2">
      {error && !loading && <MessageFailure header={error.name} title={error.message} />}
      {!loading && <RegistrationForm />}
      {loading && <Spinner />}
      {isSuccess && <p className="text-success text-center">You are successful registered.</p>}
    </div>
  );
};

export default RegistrationPage;
