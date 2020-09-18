import React from 'react';
import UserService from '../../services/user-service';

const bookstoreService: UserService = new UserService();

const { Provider: UserServiceProvider, Consumer: UserServiceConsumer } = React.createContext(
  bookstoreService
);

export { UserServiceProvider, UserServiceConsumer };
