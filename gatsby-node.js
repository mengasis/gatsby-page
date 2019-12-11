/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const query = `
query {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          path
        }
      }
    }
  }
 }`

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const Post = path.resolve('src/templates/Post.tsx')

  const {
    data: { allMarkdownRemark },
  } = await graphql(query)

  return allMarkdownRemark.edges.forEach(({ node }) => {
    const { path: pathSlug } = node.frontmatter

    createPage({
      path: pathSlug,
      component: Post,
      context: {
        pathSlug,
      },
    })
  })
}
