import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "normalize.css"

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
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1200,
            flex: "1 1 auto",
          }}
        >
          <main>{children}</main>
        </div>
        <Footer hasExtraSpacing={footerSpaced} />
      </div>
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
