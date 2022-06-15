import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

// Footer to the bottom of the screen
const StyledLayout = styled.div`
min-height: 100vh;
display: grid;
grid-template-rows: auto 1fr auto;
`

const StyledFooter = styled.footer`
padding: 1rem 0;
text-align: center;
color: ${ ({theme}) => theme.colors.footerText };
background-color: ${ ({theme}) => theme.colors.footerBackground };
`

export default function Layout({ children }) {
  return ( 
    <StyledLayout>
      <header>
        <h1>Lucas Nogueira Ramos</h1>
        <p>
          <Link to="/">Home</Link> |{" "}
          <Link to="/test">Test</Link> |{" "}
          <a href="mailto:contact@lucasnramos.com">contact@lucasnramos.com</a> |{" "}
          <a
            href="https://www.linkedin.com/in/lucas-nogueira-ramos/?locale=en_US"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/lucasnramos"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </p>
      </header>
      <main>
        {children}
      </main>
      <StyledFooter>Lucas N. Ramos - Built with Coffee and Insomnia</StyledFooter>
    </StyledLayout>
  )
}
