import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import { Form, Label } from '../../styles/global-styled-components';
import styled from 'styled-components';

import IAuth from '../../interfaces/auth.interface';
import { authorizeUserRequest } from '../../actions';

const RegistrationLink = styled(Link)`
  display: block;
  padding: 0.5rem 0;
`;

const AuthForm: FC = ({ onAuth }): ReactElement => {
  const { handleSubmit, register } = useForm<IAuth>();
  const onSubmit = (data: IAuth) => {
    onAuth(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend className="text-center">Authentication</legend>
        <div className="form-group">
          <Label htmlFor="email">Email address</Label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            id="email"
            ref={register}
            required
          />
          <small id="emailHelp" className="form-text text-muted">
            We`&apos;ll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <Label htmlFor="password">Password</Label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            maxLength={30}
            id="password"
            ref={register}
            required
          />
        </div>
      </fieldset>
      <button type="submit" className="btn btn-primary">
        Log In
      </button>
      <RegistrationLink to="registration">
        If you aren&apos;t our user, you should register and authenticate to use the application
      </RegistrationLink>
    </Form>
  );
};

const mapDispatchToProps = {
  onAuth: authorizeUserRequest,
};

export default connect(null, mapDispatchToProps)(AuthForm);
