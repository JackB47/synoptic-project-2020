/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve(`src/pages/templates/product.js`)
  const sweetData = path.resolve("src/static/data/sweets.json")
  console.log(sweetData)
  sweetData &&
    sweetData.length > 0 &&
    sweetData.map(sweet => {
      createPage({
        path: `/product/${sweet.id}`,
        component: productTemplate,
        context: {
          product: sweet,
        },
      })
    })
}
