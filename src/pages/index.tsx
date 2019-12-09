import React from 'react'
import { Link } from 'gatsby'

import { createGlobalStyle } from 'styled-components'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const GlobalStyle = createGlobalStyle`
  body {
      margin: 0;
      font-family: Tahoma, Geneva, sans-serif;
  }
`

const IndexPage = () => (
  <>
    <GlobalStyle />
    <Layout>
      <SEO title="Home" />
    </Layout>
  </>
)

export default IndexPage
