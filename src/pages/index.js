import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SweetCard from "../components/sweet-card"

import sweetData from "../data/sweets.json"

const IndexPage = () => (
  <Layout>
    <SEO title="Products" />
    {console.log(sweetData)}
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {sweetData.map(sweet => (
        <SweetCard currentSweet={sweet} key={sweet.id} />
      ))}
    </div>
  </Layout>
)

export default IndexPage
