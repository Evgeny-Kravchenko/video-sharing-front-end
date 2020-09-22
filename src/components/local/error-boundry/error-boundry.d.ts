import { Component, ReactNode } from 'react';
import IErrorBoundryProps from '../../interfaces/error-boundry-props.interface';
interface IState {
    isError: boolean;
}
export default class ErrorBoundry extends Component<IErrorBoundryProps> {
    state: IState;
    componentDidCatch(): void;
    render(): ReactNode;
}
export {};
