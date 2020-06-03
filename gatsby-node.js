/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")
const sweetData = require("./sweets.json")

// Create a page for each product in our data JSON file
exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve(`src/pages/templates/product.js`)
  sweetData.forEach(sweet => {
    createPage({
      path: `/product/${sweet.id}`,
      component: productTemplate,
      context: {
        product: sweet,
      },
    })
  })
}
