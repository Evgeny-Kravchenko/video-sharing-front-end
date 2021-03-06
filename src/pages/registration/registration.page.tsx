import React, { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';

import RegistrationForm from '../../pages/registration/components/registration-form';
import MessageFailure from '../../components/message-failure';
import Spinner from '../../components/spinner';

import { Status } from '../../redux/reducers/types';

import { getStatusOfRegisterUser } from '../../redux/selectors';

const RegistrationPage: FC = (): ReactElement => {
  const registerUserStatus: Status = useSelector(getStatusOfRegisterUser);
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
