import React from "react"
import Layout from "../components/layout"
import "../styling/contact.css"
import { InquiryForm } from "../components/Form"

// import ContactModal from "../components/ContactModal"

import { Jumbotron, Container, Row, Col } from "react-bootstrap"

import Img from "gatsby-image"

export default ({ data }) => (
  <Layout>
    <Container className="contact__main">
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
            <Col>
              <i class="fas fa-compact-disc" />A unique sound born from the
              southern part of Texas
            </Col>
            <Col>
              <i class="fas fa-calendar-alt" />
              Get your tracks mixed and mastered within 3 business days
            </Col>
          </Row>
          <Row>
            <Col>
              <Container className="circle__container">
                <Row>
                  <i id="deg0" class="fab fa-itunes-note" />
                  <i id="deg45" class="fab fa-youtube" />
                </Row>
                <Row>
                  <i id="deg135" class="fab fa-google-play" />
                  <i id="deg180" class="fab fa-soundcloud" />
                </Row>
                <Row>
                  <i id="deg225" class="fab fa-spotify" />
                  <i id="deg315" class="fab fa-bandcamp" />
                </Row>
              </Container>
              Receive a stream-ready mastered file and an uncompressed mix-level
              file for archiving and future remastering
            </Col>
            <Col>
              <i class="fas fa-layer-group" />
              Four free revisions and capability of adding more
            </Col>
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

export const query = graphql`
  query {
    icons: file(relativePath: { eq: "mediafire.png" }) {
      childImageSharp {
        fixed(width: 40, height: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
