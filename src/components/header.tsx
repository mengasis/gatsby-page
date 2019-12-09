import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  background: #369068;
`

const Title = styled.h1`
  margin: 0;
`

const Subtitle = styled.span`
  font-size: 16px;
  color: aliceblue;
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <Container>
      <Title>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {data.site.siteMetadata.title}
        </Link>
      </Title>

      <Subtitle>{data.site.siteMetadata.description}</Subtitle>
    </Container>
  )
}

export default Header
