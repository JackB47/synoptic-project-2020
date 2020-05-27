import React from "react"
import Layout from "../../components/layout"

export default function Product({ pageContext }) {
  const { product } = pageContext
  return (
    <Layout>
      {product ? (
        <div>
          <img
            src={`/${product.imageUrl}`}
            style={{ height: 200, width: 200 }}
          />
          <h2>{product.type}</h2>
        </div>
      ) : (
        <h2>Product not found</h2>
      )}
    </Layout>
  )
}
