import React, { ComponentType, ReactElement } from 'react';

import { UserServiceConsumer } from '../components/user-service-context';
import UserService from '../services/user-service';

const withUserService = () =>
  function <P>(Wrapped: ComponentType<P>): ComponentType<P> {
    const ComponentWithService: ComponentType<P> = (props: P) => {
      return (
        <UserServiceConsumer>
          {(userService: UserService): ReactElement => {
            return <Wrapped {...props} userService={userService} />;
          }}
        </UserServiceConsumer>
      );
    };
    return ComponentWithService;
  };

export default withUserService;
