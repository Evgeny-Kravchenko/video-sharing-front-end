import React, { ReactElement } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { State } from '../../redux/reducers/types';
import PrivateRouteProps from './types';

const PrivateRoute = (props: PrivateRouteProps): ReactElement => {
  const isSuccess = useSelector((state: State) => state.user.statusOfAuthorizeUser.isSuccess);
  const { component: Component, ...rest } = props;
  return <Route {...rest} render={() => (isSuccess ? <Component /> : <Redirect to="/auth" />)} />;
};

export default PrivateRoute;
