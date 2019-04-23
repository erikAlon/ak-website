import React from "react"
import Layout from "../components/layout"
import "../styling/contact.css"
import { InquiryForm } from "../components/Form"

// import ContactModal from "../components/ContactModal"

import { Jumbotron, Container, Row, Col } from "react-bootstrap"

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
            BOOK YOUR MIXING &amp; MASTERING SERVICES
          </h1>
        </Col>
        <Col>
          <i class="fas fa-quote-right" />
        </Col>
      </Row>

      <Jumbotron>
        <Container className="contact__main__features">
          <Row>
            <Col>A unique sound born from the southern part of Texas</Col>
            <Col>Get your tracks mixed and mastered within 3 business days</Col>
          </Row>
          <Row>
            <Col>
              Receive a radio streaming mastered file and an uncompressed
              mix-level file for archiving and future remastering
            </Col>
            <Col>Four free revisions and capability of adding more</Col>
          </Row>
        </Container>
      </Jumbotron>

      <Row className="contact__main__services">
        <Col>&lt;services as cards&gt;</Col>
        <Col>&lt;services as cards&gt;</Col>
        <Col>&lt;services as cards&gt;</Col>
      </Row>
      <InquiryForm />
    </Container>
  </Layout>
)
