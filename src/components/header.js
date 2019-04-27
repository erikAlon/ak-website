import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { Breadcrumb, Container, Row, Col } from "react-bootstrap"
import "../styling/header.css"

const openNav = () => {
  document.getElementById("mySidenav").style.width = "190px"
}

const closeNav = () => {
  document.getElementById("mySidenav").style.width = "0"
}

const Sidenav = () => (
  <div id="mySidenav" className="sidenav">
    <i className="closebtn" onClick={closeNav} class="fas fa-times" />
    <Link className="header__link" to="/">
      About
    </Link>
    <Link className="header__link" to="store">
      Merch
    </Link>
    <Link className="header__link" to="discography">
      Samples
    </Link>
    <Link className="header__link" to="contact">
      Upload
    </Link>
  </div>
)

const Header = ({ siteTitle }) => (
  <header>
    <Sidenav />
    <Container className="header__main">
      <Row>
        <Col xs={9}>
          <h1>{siteTitle}</h1>
        </Col>
        <Col>
          <i onClick={openNav} class="fas fa-bars" />
        </Col>
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
