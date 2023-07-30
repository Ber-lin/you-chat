import React, { ReactNode } from 'react';

interface Props{
  childrenNode:ReactNode;
}
export default class ErrorBoundary extends React.Component<Props> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.childrenNode;
  }
}
