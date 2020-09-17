import { Redirect, Route } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { IStateAuthUser } from '../interfaces/state.interface';
import React, { ComponentType } from 'react';

const PrivateRoute = ({
  component: Component,
  isAuth,
  ...rest
}: {
  component: ComponentType;
  isAuth: boolean;
}) => {
  return <Route {...rest} render={() => (isAuth ? <Component /> : <Redirect to="/auth" />)} />;
};

const mapStateToProps = ({ authUser }: { authUser: IStateAuthUser }) => {
  return {
    isAuth: authUser.isAuth,
  };
};

export default compose(connect(mapStateToProps))(PrivateRoute);
