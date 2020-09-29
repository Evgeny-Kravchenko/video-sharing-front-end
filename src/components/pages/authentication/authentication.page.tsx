import React, { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';

import AuthForm from '../../pages/authentication/components/auth-form';
import AuthSuccessed from '../../pages/authentication/components/auth-successed';
import MessageFailure from '../../local/message-failure';
import Spinner from '../../local/spinner';

import { Status } from '../../../redux/reducers/types';

import { getAuthUser } from '../../../redux/selectors';

const AuthenticationPage: FC = (): ReactElement => {
  const authUser: Status = useSelector(getAuthUser);
  const { isSuccess, error, loading } = authUser;
  return (
    <div className="p-lg-5 p-md-3 p-2">
      {error && (
        <MessageFailure
          header="There is no such user."
          title="Email or password is wrong. Try again."
        />
      )}
      {loading && <Spinner />}
      {!isSuccess && !loading && <AuthForm />}
      {isSuccess && !error && !loading && <AuthSuccessed />}
    </div>
  );
};

export default AuthenticationPage;
