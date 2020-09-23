import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import React, { ComponentType } from 'react';
import { State } from '../reducers/types';

interface IPrivateRoute {
  component: ComponentType;
  path: string;
  exact: boolean;
}

const PrivateRoute = (props: IPrivateRoute) => {
  const isSuccess = useSelector((state: State) => state.user.statusOfAuthorizeUser.isSuccess);
  const { component: Component, ...rest } = props;
  return <Route {...rest} render={() => (isSuccess ? <Component /> : <Redirect to="/auth" />)} />;
};

export default PrivateRoute;
