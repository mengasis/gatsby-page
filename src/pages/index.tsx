import React from 'react'

import styled, { createGlobalStyle } from 'styled-components'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const GlobalStyle = createGlobalStyle`
  body {
      margin: 0;
      font-family: Tahoma, Geneva, sans-serif;
  }
`

const Post = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: black;
    text-decoration-line: none;

    &:hover {
      color: #369068;
    }
  }
`

const IndexPage = (props: { data: any }) => {
  const { edges } = props.data.allMarkdownRemark

  return (
    <>
      <GlobalStyle />
      <Layout>
        <SEO title="Home" />
        {edges.map((edge: any) => {
          const { frontmatter } = edge.node
          return (
            <Post key={frontmatter.path}>
              <Link to={frontmatter.path}>
                <h1>{frontmatter.title}</h1>
              </Link>
            </Post>
          )
        })}
      </Layout>
    </>
  )
}

export const query = graphql`
  query IndexPageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`

export default IndexPage
