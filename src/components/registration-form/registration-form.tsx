import React, { FC, ReactElement } from 'react';

import { Form, Label } from '../../styles/global-styled-components';

const RegistrationForm: FC = (): ReactElement => (
  <Form>
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
        />
      </div>
      <div className="form-group">
        <Label htmlFor="lastname">Last name</Label>
        <input
          type="lastname"
          className="form-control"
          placeholder="Enter your last name"
          id="lastname"
        />
      </div>
      <div className="form-group">
        <Label htmlFor="email">Email address</Label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          id="email"
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
        />
      </div>
      <div className="form-group">
        <Label htmlFor="repeat-password">Repeat your password</Label>
        <input
          type="password"
          className="form-control"
          placeholder="Repeat your password"
          maxLength={30}
          id="repeat-password"
        />
      </div>
    </fieldset>
    <button type="submit" className="btn btn-primary">
      Register
    </button>
  </Form>
);

export default RegistrationForm;