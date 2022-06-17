import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Normalize } from 'styled-normalize'

const theme = {
  colors: {
    text: '#010101',
    headerBackground: '#282828',
    headerText: '#ffffff',
    footerBackground: '#282828',
    footerText: '#ffffff',
  },
}

const GlobalStyles = createGlobalStyle``

export default function Theme({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Normalize />
      {children}
    </ThemeProvider>
  )
}

Theme.propTypes = {
  children: PropTypes.element,
}
