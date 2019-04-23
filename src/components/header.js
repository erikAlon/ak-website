import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { Breadcrumb, Container, Row, Col } from "react-bootstrap"
import "../styling/header.css"

const Header = ({ siteTitle }) => (
  <header>
    <Container className="header__main">
      <Row>
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </Row>
      <Row>
        <Breadcrumb>
          <Col>
            <Breadcrumb.Item>
              <Link className="header__link" to="/">
                About
              </Link>
            </Breadcrumb.Item>
          </Col>
          <Col>
            <Breadcrumb.Item>
              <Link className="header__link" to="store">
                Merch
              </Link>
            </Breadcrumb.Item>
          </Col>
          <Col>
            <Breadcrumb.Item>
              <Link className="header__link" to="discography">
                Samples
              </Link>
            </Breadcrumb.Item>
          </Col>
          <Col>
            <Breadcrumb.Item>
              <Link className="header__link" to="contact">
                Upload
              </Link>
            </Breadcrumb.Item>
          </Col>
        </Breadcrumb>
      </Row>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
