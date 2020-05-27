import React from "react"
import { Router as MyRouter } from "@reach/router"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SweetCard from "../components/sweet-card"

import sweetData from "../data/sweets.json"
import Products from "../pages/products"
import Product from "./templates/product"

const IndexPage = () => (
  <Layout type="lander">
    <SEO title="Pick & Mix Homepage" />
    <div className="lander">
      <div className="lander__content">
        <div className="lander__title">
          <h1>Welcome to Pick &amp; Mix</h1>
          <h2>Click below to get started</h2>
        </div>
        <Link className="lander__link" to="/products">
          Get Started
        </Link>
      </div>
    </div>

    <MyRouter>
      <Products path="/products" />
      <Product path="/product/:id" />
    </MyRouter>
  </Layout>
)

export default IndexPage
