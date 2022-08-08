import { Component } from 'react';
import { ErrorFallback } from '.';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.warn(error, errorInfo);
    // You can also log the error to an error reporting service
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
