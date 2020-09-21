import { Redirect, Route } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

import React, { ComponentType } from 'react';
import { StateAuthUser } from '../reducers/types';

interface IPrivateRoute {
  component: ComponentType;
  isAuth: boolean;
  path: string;
  exact: boolean;
}

const PrivateRoute = (props: IPrivateRoute) => {
  const { component: Component, isAuth, ...rest } = props;
  return <Route {...rest} render={() => (isAuth ? <Component /> : <Redirect to="/auth" />)} />;
};

const mapStateToProps = ({ authUser }: { authUser: StateAuthUser }) => {
  return {
    isAuth: authUser.isAuth,
  };
};

export default compose(connect(mapStateToProps))(PrivateRoute);
