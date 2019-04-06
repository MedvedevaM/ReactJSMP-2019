import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
    state = {
      hasError: false,
    }

    componentDidCatch() {
      this.setState({ hasError: true });
    }

    render() {
      const { hasError } = this.state;
      if (hasError) {
        return <h1 className="error">Something went wrong.</h1>;
      }
      return this.props.children;
    }
}
