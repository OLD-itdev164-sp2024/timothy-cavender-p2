const path = require('path');
/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise ((resolve, reject) => {
    graphql(`
      {
        allContentfulReadAndMead {
          edges {
            node {
              title
            }
          }
        }
      }
    `).then(result => {
      if(result.errors) {
        reject(result.errors)
      }

      result.data.allContentfulReadAndMead.edges.forEach((edge) => {
        createPage({
          path: edge.node.title,
          component: require.resolve(`./src/templates/read-mead.js`),
          context: {
            title: edge.node.title
          },
        })
      })

      resolve()
    })
  })
}
