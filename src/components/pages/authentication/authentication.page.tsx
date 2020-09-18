import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';

import AuthForm from '../../auth-form';
import AuthSuccessed from '../../auth-successed';
import { IState, IStateAuthUser } from '../../../interfaces';
import MessageFailure from '../../message-failure';

interface IAuthenticationPageProps {
  authUser: IStateAuthUser;
}

const AuthenticationPage: FC<IAuthenticationPageProps> = (
  props: IAuthenticationPageProps
): ReactElement => {
  const { authUser }: { authUser: IStateAuthUser } = props;
  const { isAuth, error } = authUser;
  return (
    <div className="p-lg-5 p-md-3 p-2">
      {error && (
        <MessageFailure
          header="There is no such user."
          title="You are logged in wrong an email or a password. Try again."
        />
      )}
      {!isAuth && <AuthForm />}
      {isAuth && !error && <AuthSuccessed />}
    </div>
  );
};

const mapStateToProps = (state: IState) => {
  return {
    authUser: state.authUser,
  };
};

export default connect(mapStateToProps)(AuthenticationPage);
