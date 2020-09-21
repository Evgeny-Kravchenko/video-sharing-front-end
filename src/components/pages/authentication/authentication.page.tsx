import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';

import AuthForm from '../../auth-form';
import AuthSuccessed from '../../auth-successed';
import IAuthenticationPageProps from './types';
import MessageFailure from '../../message-failure';
import Spinner from '../../spinner';
import { State, StateAuthUser } from '../../../reducers/types';

const AuthenticationPage: FC<IAuthenticationPageProps> = (
  props: IAuthenticationPageProps
): ReactElement => {
  const { authUser }: { authUser: StateAuthUser } = props;
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

const mapStateToProps = (state: State) => {
  return {
    authUser: state.authUser,
  };
};

export default connect(mapStateToProps)(AuthenticationPage);
