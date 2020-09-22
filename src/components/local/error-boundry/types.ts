import { ReactNode } from 'react';

export interface ErrorBoundryProps {
  children: ReactNode;
}

export interface ErrorBoundryState {
  isError: boolean;
}
