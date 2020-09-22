import React, { Component, ReactNode } from 'react';

import ErrorIndicator from '../error-indicator';
import ErrorBoundryProps from './types';

interface IState {
  isError: boolean;
}

export default class ErrorBoundry extends Component<ErrorBoundryProps> {
  public state: IState = {
    isError: false,
  };

  public componentDidCatch(): void {
    this.setState({ isError: true });
  }

  public render(): ReactNode {
    const { isError } = this.state;
    const { children } = this.props;
    if (isError) {
      return <ErrorIndicator />;
    }
    return children;
  }
}
