import React, { FC, ReactElement, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

import { Form, Label } from '../../../../../styles/global-styled-components';
import RegistrationLink from './styled-components';

import { authorizeUserRequest, changeCurrentPage, PagesList } from '../../../../../redux/actions';

import { Auth } from './types';

const AuthForm: FC = (): ReactElement => {
  const dispatch: Dispatch = useDispatch();
  const handleOnClickItemMenu = (path: PagesList) => () => dispatch(changeCurrentPage(path));
  const onSubmit = useCallback((data: Auth) => {
    dispatch(authorizeUserRequest(data));
  }, []);
  const { handleSubmit, register } = useForm<Auth>();
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend className="text-center">Authentication</legend>
        <div className="form-group">
          <Label htmlFor="email">Email address</Label>
          <input
            type="email"
            name="email"
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
            name="password"
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
      <RegistrationLink to="registration" onClick={handleOnClickItemMenu(PagesList.Registrations)}>
        If you aren&apos;t our user, you should register and authenticate to use the application
      </RegistrationLink>
    </Form>
  );
};

export default AuthForm;
