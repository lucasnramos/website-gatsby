import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMugSaucer } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Footer to the bottom of the screen
const StyledLayout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  font-family: sans-serif;
`

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  color: ${({ theme }) => theme.colors.headerText};
  background-color: ${({ theme }) => theme.colors.headerBackground};
  max-height: 40px;
`

const StyledLogoText = styled(Link)`
  text-decoration: none;
  margin-right: 0.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.headerText};
`

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-right: 0.5rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.headerText};
`

const StyledFooter = styled.footer`
  padding: 1rem 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.footerText};
  background-color: ${({ theme }) => theme.colors.footerBackground};
`

export default function Layout({ children }) {
  return (
    <StyledLayout>
      <StyledHeader>
        <StyledLogoText to='/'>Lucas Nogueira Ramos</StyledLogoText>
        <p>
          <StyledLink href='mailto:contact@lucasnramos.com'>
            <FontAwesomeIcon icon={faEnvelope} />
          </StyledLink>
          <StyledLink
            href='https://www.linkedin.com/in/lucas-nogueira-ramos/?locale=en_US'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </StyledLink>
          <StyledLink
            href='https://github.com/lucasnramos'
            rel='noreferrer'
            target='_blank'
          >
            <FontAwesomeIcon icon={faGithubSquare} />
          </StyledLink>
        </p>
      </StyledHeader>
      <main>{children}</main>
      <StyledFooter>
        Lucas N. Ramos - Built with{' '}
        <FontAwesomeIcon icon={faMugSaucer} ariaHidden={true} /> and Insomnia
      </StyledFooter>
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.element,
}
