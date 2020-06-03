import { Link } from "gatsby"
import React from "react"
import ShoppingCart from "./icon"

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="link">
          <h1 className="title title--navbar">Pick &amp; Mix Candy</h1>
        </Link>
        <ul className="navbar__links">
          <li className="navbar__link-item">
            <Link className="link" to="/covid-19">
              Covid-19
            </Link>
          </li>
          <li className="navbar__link-item">
            <Link className="link" to="/products">
              Products
            </Link>
          </li>
          <li className="navbar__link-item">
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li className="navbar__link-item">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="link" to="/basket">
              <ShoppingCart />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
