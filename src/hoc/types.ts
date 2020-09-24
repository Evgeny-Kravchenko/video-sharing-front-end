import { ComponentType } from 'react';

export default interface PrivateRouteProps {
  component: ComponentType;
  path: string;
  exact: boolean;
}
