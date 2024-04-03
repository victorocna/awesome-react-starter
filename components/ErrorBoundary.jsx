import { createError } from '@api/client-error';
import { ErrorFallback } from '@components';
import { whoami } from '@functions';
import { withRouter } from 'next/router';
import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error) {
    // React error components are rendered twice, so we need to prevent the error from being sent twice
    if (ErrorBoundary.triggered) {
      return false;
    }
    // Set the flag to prevent the error from being sent twice
    ErrorBoundary.triggered = true;

    try {
      createError({
        pathname: this?.props?.router?.asPath || 'Unknown', // Send the path where the error occurred
        data: `Client side exception caught by Error handler: ${error?.message}`,
        user: whoami(),
      });
    } catch (e) {
      console.warn(`An error occurred while sending the error to the server: ${e.message}`);
    }
  }
  componentDidUpdate(prevProps) {
    // Check if the children have changed, which indicates a navigation between pages
    if (this.props.children !== prevProps.children) {
      this.setState({ hasError: false });
    }
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}

// Reset the flag when the component is unmounted
ErrorBoundary.triggered = false;

export default withRouter(ErrorBoundary);
