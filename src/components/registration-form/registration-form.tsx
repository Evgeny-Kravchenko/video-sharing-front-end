import React, { FC, ReactElement, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import { Form, Label } from '../../styles/global-styled-components';

import { IRegistration, IRegistrationFormProps } from '../../interfaces';
import { registerUserRequest } from '../../actions';

import ValidationError from './styled-components';

const RegistrationForm: FC<IRegistrationFormProps> = (
  props: IRegistrationFormProps
): ReactElement => {
  const { handleSubmit, register, errors, watch } = useForm<IRegistration>();
  const password = useRef<string>();
  password.current = watch('password', '');
  const { onRegister } = props;

  const onSubmit = (data: IRegistration) => {
    const { name, lastName, password, email } = data;
    onRegister({ name, lastName, password, email });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend className="text-center">Registration</legend>
        <div className="form-group">
          <Label htmlFor="name">First name</Label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter you first name"
            id="name"
            maxLength={30}
            ref={register()}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div className="form-group">
          <Label htmlFor="lastname">Last name</Label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            placeholder="Enter your last name"
            id="lastName"
            ref={register}
            required
          />
        </div>
        <div className="form-group">
          <Label htmlFor="email">Email address</Label>
          <input
            type="email"
            name="email"
            className="form-control"
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
            name="password"
            ref={register({
              required: 'You must specify a password',
              minLength: {
                value: 8,
                message: 'Password must have at least 8 characters',
              },
            })}
          />
          {errors.password && <ValidationError>{errors.password.message}</ValidationError>}
        </div>
        <div className="form-group">
          <Label htmlFor="repeat-password">Repeat your password</Label>
          <input
            type="password"
            className="form-control"
            placeholder="Repeat your password"
            maxLength={30}
            id="repeatPassword"
            name="repeatPassword"
            ref={register({
              validate: (value) => value === password.current || 'The passwords do not match',
            })}
            required
          />
          {errors.repeatPassword && (
            <ValidationError>{errors.repeatPassword.message}</ValidationError>
          )}
        </div>
      </fieldset>
      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </Form>
  );
};

const mapDispatchToProps = {
  onRegister: registerUserRequest,
};

export default connect(null, mapDispatchToProps)(RegistrationForm);
