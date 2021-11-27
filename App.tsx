import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { Dashboard } from './src/screens/Dashboard';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard title="Welcome to Go Finances"/>
    </ThemeProvider>
    
  );
}
