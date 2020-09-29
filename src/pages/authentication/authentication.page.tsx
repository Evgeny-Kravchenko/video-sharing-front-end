import React, { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';

import AuthForm from '../../pages/authentication/components/auth-form';
import AuthSuccessed from '../../pages/authentication/components/auth-successed';
import MessageFailure from '../../components/message-failure';
import Spinner from '../../components/spinner';

import { Status } from '../../redux/reducers/types';

import { getAuthUser, getStatusOfUnauthorizeUser } from '../../redux/selectors';

const AuthenticationPage: FC = (): ReactElement => {
  const authUser: Status = useSelector(getAuthUser);
  const statusOfUnauthorizeUser: Status = useSelector(getStatusOfUnauthorizeUser);
  const { isSuccess: isSuccessAuth, error: errorAuth, loading: loadingAuth } = authUser;
  const { loading: loadingUnauth } = statusOfUnauthorizeUser;
  return (
    <div className="p-lg-5 p-md-3 p-2">
      {errorAuth && (
        <MessageFailure
          header="There is no such user."
          title="Email or password is wrong. Try again."
        />
      )}
      {(loadingAuth || loadingUnauth) && <Spinner />}
      {!isSuccessAuth && !loadingAuth && <AuthForm />}
      {isSuccessAuth && !errorAuth && !loadingAuth && !loadingUnauth && <AuthSuccessed />}
    </div>
  );
};

export default AuthenticationPage;
