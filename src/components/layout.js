import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "normalize.css"
import sweetData from "../data/sweets.json"
import localForage from "localforage"

import Header from "./header"
import "../styles/app.scss"
import Footer from "./footer"

const Layout = ({ children, type, footerSpaced }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  if (type !== "lander") {
    return (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1200,
          }}
        >
          <main>{children}</main>
        </div>
        <Footer hasExtraSpacing={footerSpaced} />
      </>
    )
  }

  return <main>{children}</main>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  footerSpaced: PropTypes.bool,
  type: PropTypes.string,
}

Layout.defaultProps = {
  type: "default",
  footerSpaced: false,
}

export default Layout
