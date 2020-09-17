import React, { FC, ReactElement } from 'react';
import { useForm } from 'react-hook-form';

import { Form, Label } from '../../styles/global-styled-components';

type Inputs = {
  name: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
};

const RegistrationForm: FC = (): ReactElement => {
  const { handleSubmit, register } = useForm<Inputs>();

  const onSubmit = (value: Inputs) => {
    localStorage.setItem('name', value.name);
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
            ref={register}
            required
          />
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
            ref={register}
            required
          />
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
            ref={register}
            required
          />
        </div>
      </fieldset>
      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </Form>
  );
};

export default RegistrationForm;
