import './config/translations/i18n';
import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from './config/styles/theme';
import { RootRouter } from './RootRouter';

const client = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <RootRouter />
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
