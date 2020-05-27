/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const sweetData = require("./public/data/sweets.json")

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
