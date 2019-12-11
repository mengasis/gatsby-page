/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from 'react'

import styled from 'styled-components'
import Header from './header'

const Body = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
`

const Footer = styled.footer`
  height: 80px;
  background: #369068;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  span {
    padding: 15px;
    justify-self: flex-end;
    color: aliceblue;
  }
`

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Body>
        <main>{children}</main>
      </Body>
      <Footer>
        <span>© 2019</span>
      </Footer>
    </>
  )
}

export default Layout
