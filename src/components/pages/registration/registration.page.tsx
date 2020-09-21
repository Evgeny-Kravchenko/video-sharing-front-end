import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';

import RegistrationForm from '../../registration-form';
import MessageFailure from '../../message-failure';
import Spinner from '../../spinner';
import { State, StateRegisterUser } from '../../../reducers/types';

interface IRegistrationPageProps {
  registerUser: StateRegisterUser;
}

const RegistrationPage: FC<IRegistrationPageProps> = (
  props: IRegistrationPageProps
): ReactElement => {
  const { registerUser } = props;
  const { errorMessage, error, isSuccess, loading } = registerUser;
  return (
    <div className="p-lg-5 p-md-3 p-2">
      {error && !loading && (
        <MessageFailure header={errorMessage} title="You should enter another email." />
      )}
      {!loading && <RegistrationForm />}
      {loading && <Spinner />}
      {isSuccess && <p className="text-success text-center">You are successful registered.</p>}
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    registerUser: state.registerUser,
  };
};

export default connect(mapStateToProps)(RegistrationPage);
