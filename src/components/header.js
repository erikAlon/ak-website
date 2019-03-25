import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { Breadcrumb } from "react-bootstrap"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: "1.45rem",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        textAlign: "center",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: "none",
            fontStyle: "italic",
          }}
        >
          {siteTitle}
        </Link>
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
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
