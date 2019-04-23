import React from "react"
import Layout from "../components/layout"
import "../styling/contact.css"
import { InquiryForm } from "../components/Form"

// import ContactModal from "../components/ContactModal"

import { Container, Row, Col } from "react-bootstrap"

export default ({ data }) => (
  <Layout>
    <Container class="contact__main">
      <Row className="contact__main__dialogue">
        <Col>
          <i class="fas fa-quote-left" />
        </Col>
        <Col>
          <h1 className="contact__main__dialogue--center">
            EXPERIENCE THE SOUND OF KURUPTION
            <hr />
            BOOK YOUR MIXING &amp; MASTERING SERVICES TODAY
          </h1>
        </Col>
        <Col>
          <i class="fas fa-quote-right" />
        </Col>
      </Row>

      <Row className="contact__main__features">
        <Col>&lt;icons with commitments&gt;</Col>
      </Row>

      <Row className="contact__main__services">
        <Col>&lt;services as cards&gt;</Col>
        <Col>&lt;services as cards&gt;</Col>
        <Col>&lt;services as cards&gt;</Col>
      </Row>
      <InquiryForm />
    </Container>
  </Layout>
)
