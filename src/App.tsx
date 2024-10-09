import React, { useState } from 'react';
import { MantineProvider } from '@mantine/core';
import AppShellLayout from './AppShellLayout';
import theme from './theme';
import ErrorBoundary from './ErrorBoundary';

const App: React.FC = () => {
  

  return (
    
      <MantineProvider theme={{ ...theme }} >
        <ErrorBoundary>
          <AppShellLayout />
        </ErrorBoundary>
      </MantineProvider>
    
  );
};

export default App;