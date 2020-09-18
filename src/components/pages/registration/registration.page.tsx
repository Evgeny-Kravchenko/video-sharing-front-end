import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';

import RegistrationForm from '../../registration-form';
import { IState } from '../../../interfaces';
import { IStateRegisterUser } from '../../../interfaces/state.interface';
import MessageFailure from '../../message-failure';

interface IRegistrationPageProps {
  registerUser: IStateRegisterUser;
}

const RegistrationPage: FC<IRegistrationPageProps> = (
  props: IRegistrationPageProps
): ReactElement => {
  const { registerUser } = props;
  const { errorMessage, error, isSuccess } = registerUser;
  return (
    <div className="p-lg-5 p-md-3 p-2">
      {error && <MessageFailure header={errorMessage} title="You should enter another email." />}
      <RegistrationForm />
      {isSuccess && <p className="text-success text-center">You are successful registered.</p>}
    </div>
  );
};

const mapStateToProps = (state: IState) => {
  return {
    registerUser: state.registerUser,
  };
};

export default connect(mapStateToProps)(RegistrationPage);
