import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { Breadcrumb } from "react-bootstrap"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header className="header--main">
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>

    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to="/">Home</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to="store">Store</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to="discography">Discography</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to="contact">Contact</Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
