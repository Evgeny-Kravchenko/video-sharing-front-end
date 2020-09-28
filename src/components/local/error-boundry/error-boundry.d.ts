import { Component, ReactNode } from 'react';
import { ErrorBoundryProps, ErrorBoundryState } from './types';
export default class ErrorBoundry extends Component<ErrorBoundryProps> {
    state: ErrorBoundryState;
    componentDidCatch(): void;
    render(): ReactNode;
}
