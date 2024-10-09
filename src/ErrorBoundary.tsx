import React from 'react';
import { Text, Button, Group } from '@mantine/core';
import styles from '@/assets/styles/ErrorBoundary.module.css'; // Using absolute import

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<React.PropsWithChildren<{}>, ErrorBoundaryState> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <Group className={styles.centeredGroup}>
          <Text size="xl">Something went wrong.</Text>
          <Button onClick={this.handleReload}>Reload Page</Button>
        </Group>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;