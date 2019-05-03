import React from "react"
import { Container, Row, Button } from "react-bootstrap"
import "../styling/StoreNav.css"

const StoreNav = props => (
  <Container className="storeNav">
    <Row>
      <button id="hat" onClick={props.toggleItemView}>
        <span id="hat">Hats</span>
      </button>
    </Row>
    <Row>
      <button id="hoodie" onClick={props.toggleItemView}>
        <span id="hoodie">Hoodies</span>
      </button>
    </Row>
    <Row>
      <button id="tshirt" onClick={props.toggleItemView}>
        <span id="tshirt">T-Shirts</span>
      </button>
    </Row>
    <Row>
      <button id="acc" onClick={props.toggleItemView}>
        <span id="acc">Accessories</span>
      </button>
    </Row>
  </Container>
)

export default StoreNav
