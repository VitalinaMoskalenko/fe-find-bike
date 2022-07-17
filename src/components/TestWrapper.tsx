import '../config/translations/i18n';
import React, { ReactNode } from 'react';

import { ThemeProvider } from 'styled-components';

import { theme } from '../config/styles/theme';

type PropsType = {
  children: ReactNode;
};

export const TestWrapper: React.FC<PropsType> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
