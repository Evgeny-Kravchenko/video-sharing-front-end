import { Component, ReactNode } from 'react';
import ErrorBoundryProps from './types';
interface IState {
    isError: boolean;
}
export default class ErrorBoundry extends Component<ErrorBoundryProps> {
    state: IState;
    componentDidCatch(): void;
    render(): ReactNode;
}
export {};
