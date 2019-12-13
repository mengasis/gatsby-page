/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const query = `
query {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          path
          title
        }
      }
    }
  }
 }`

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const Post = path.resolve('src/templates/Post.tsx')

  const {
    data: {
      allMarkdownRemark: { edges },
    },
  } = await graphql(query)

  return edges.forEach(({ node }, index) => {
    const { path: pathSlug } = node.frontmatter

    console.log(edges[index])

    createPage({
      path: pathSlug,
      component: Post,
      context: {
        pathSlug,
        prev: index === 0 ? null : edges[index - 1].node,
        next: index === edges.length - 1 ? null : edges[index + 1].node,
      },
    })
  })
}
