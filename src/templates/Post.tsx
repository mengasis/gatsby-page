import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Template = ({ data, pageContext: { prev, next } }: any) => {
  const {
    html,
    frontmatter: { title },
  } = data.markdownRemark

  return (
    <Wrapper>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      {prev && (
        <Link to={prev.frontmatter.path}>{`<- ${prev.frontmatter.title}`}</Link>
      )}
      {next && (
        <Link to={next.frontmatter.path}>{`${next.frontmatter.title} ->`}</Link>
      )}
    </Wrapper>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Template
