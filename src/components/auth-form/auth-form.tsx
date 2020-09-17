import React, { FC, ReactElement } from 'react';

import styled from 'styled-components';

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
`;

const Label = styled.label`
  cursor: pointer;
`;

const AuthForm: FC = (): ReactElement => {
  return (
    <Form>
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
      </fieldset>
      <button type="submit" className="btn btn-primary">
        Log In
      </button>
    </Form>
  );
};

export default AuthForm;
