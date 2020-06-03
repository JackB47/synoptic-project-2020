import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import { Link } from "gatsby"

export default function Footer({ hasExtraSpacing }) {
  return (
    <footer
      className={classnames("footer", {
        "footer--spaced": hasExtraSpacing,
      })}
    >
      <div className="footer__block">
        <h4 className="footer__header">Get in Touch</h4>
        <p>
          Email:{" "}
          <a
            target="_blank"
            href="mailto:'jack@endeavour-digital.com'"
            rel="noreferrer"
          >
            jack@endeavour-digital.com
          </a>
        </p>

        <p>
          Phone:{" "}
          <a target="_blank" href="tel:07000000000" rel="noreferrer">
            07000000000
          </a>
        </p>
      </div>
      <div className="footer__block">
        <h4 className="footer__header">Find Us</h4>
        <p>Address Line 1</p>
        <p>Address Line 2</p>
        <p>Post Code</p>
      </div>
      <div className="footer__block">
        <h4 className="footer__header">Sitemap</h4>
        <div className="footer__links">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/products">Products</Link>
          <Link to="/covid-19">Covid-19</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
      <div className="footer__block footer__block--right">
        <strong>&copy;Pick&amp;MixCandy 2020</strong>
        <p>
          Built with{" "}
          <a target="_blank" href="https://www.gatsbyjs.org" rel="noreferrer">
            Gatsby
          </a>
        </p>
        <p>
          Hosted on{" "}
          <a target="_blank" href="https://www.netlify.com/" rel="noreferrer">
            Netlify
          </a>
        </p>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  hasExtraSpacing: PropTypes.bool,
}

Footer.defaultProps = {
  hasExtraSpacing: false,
}
