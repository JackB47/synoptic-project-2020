import React from "react"
import PropTypes from "prop-types"
import Layout from "../../components/layout"
import SweetInputGroup from "../../components/sweet-input-group"

export default function Product({ pageContext }) {
  const { product } = pageContext
  return (
    <Layout>
      {product ? (
        <div className="product">
          <img
            alt={`Stock example of ${product.type}`}
            className="product__image"
            src={`/${product.imageUrl}`}
            style={{
              width: 400,
              height: 400,
              objectFit: "cover",
              borderRadius: 16,
            }}
          />
          <div className="product__content">
            {console.log(product)}
            <h2 className="title product__title">{product.type}</h2>
            <div dangerouslySetInnerHTML={{ __html: product.description }} />
            <div className="product__divider" />
            <h3 className="product__subtitle">Select Quantity</h3>
            <SweetInputGroup sweet={product} variant="inline" />
          </div>
        </div>
      ) : (
        <h2 className="title">Product not found</h2>
      )}
    </Layout>
  )
}

Product.propTypes = {
  pageContext: PropTypes.shape.isRequired,
}
