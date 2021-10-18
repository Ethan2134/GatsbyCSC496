const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allWpPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)
  const postTemplate = path.resolve(`./src/templates/post.js`)
  result.data.allWpPost.edges.forEach(edge => {
    createPage({
      path: edge.node.slug,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })
}