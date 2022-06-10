import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

const theme = {}

const GlobalStyles = createGlobalStyle``


export default function Theme({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Normalize />
      {children}
    </ThemeProvider>)
}
