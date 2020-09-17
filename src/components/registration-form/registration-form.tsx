import React, { FC, ReactElement, SyntheticEvent } from 'react';

import { Form, Label } from '../../styles/global-styled-components';

const RegistrationForm: FC = (): ReactElement => {
  return (
    <Form
      onSubmit={(event: SyntheticEvent) => {
        event.preventDefault();
        const target: HTMLFormElement = { ...event.target } as HTMLFormElement;
        localStorage.setItem('name', target['1'].value);
        localStorage.setItem('password', target['4'].value);
      }}
    >
      <fieldset>
        <legend className="text-center">Registration</legend>
        <div className="form-group">
          <Label htmlFor="name">First name</Label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter you first name"
            id="name"
            maxLength={30}
            required
          />
        </div>
        <div className="form-group">
          <Label htmlFor="lastname">Last name</Label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your last name"
            id="lastName"
            required
          />
        </div>
        <div className="form-group">
          <Label htmlFor="email">Email address</Label>
          <input type="email" className="form-control" placeholder="Enter email" id="email" />
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
