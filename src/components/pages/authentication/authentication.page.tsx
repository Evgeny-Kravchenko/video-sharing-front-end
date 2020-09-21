import React, { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';

import AuthForm from '../../auth-form';
import AuthSuccessed from '../../auth-successed';
import MessageFailure from '../../message-failure';
import Spinner from '../../spinner';
import { State, StateAuthUser } from '../../../reducers/types';

const AuthenticationPage: FC = (): ReactElement => {
  const authUser: StateAuthUser = useSelector((state: State) => state.authUser);
  const { isAuth, error, loading } = authUser;
  return (
    <div className="p-lg-5 p-md-3 p-2">
      {error && (
        <MessageFailure
          header="There is no such user."
          title="You are logged in wrong an email or a password. Try again."
        />
      )}
      {loading && <Spinner />}
      {!isAuth && !loading && <AuthForm />}
      {isAuth && !error && !loading && <AuthSuccessed />}
    </div>
  );
};

export default AuthenticationPage;
