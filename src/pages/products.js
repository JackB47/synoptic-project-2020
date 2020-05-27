import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SweetCard from "../components/sweet-card"

import sweetData from "./sweets.json"

const IndexPage = () => (
  <Layout footerSpaced>
    <SEO title="Products" />
    <h2 className="title">Products</h2>
    <p className="sub-title">Add some sweets to get started: </p>
    <div className="flex-wrapper">
      {sweetData.map(sweet => (
        <SweetCard currentSweet={sweet} key={sweet.id} />
      ))}
    </div>
  </Layout>
)

export default IndexPage
