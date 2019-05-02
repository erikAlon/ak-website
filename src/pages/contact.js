import React from "react"
import Layout from "../components/layout"
import "../styling/contact.css"
import InquiryForm from "../components/InquiryForm"
import { Container, Row, Col, Card } from "react-bootstrap"
import BackgroundImage from "gatsby-background-image"

export default ({ data }) => (
  <Layout>
    <Container className="contact__main">
      <Row className="dialogue">
        <Col>
          <i class="fas fa-quote-left" />
        </Col>
        <Col>
          <h1 className="dialogue--center">
            EXPERIENCE THE SOUND OF KURUPTION
            <hr />
            BOOK YOUR MIXING &amp; MASTERING SERVICES
          </h1>
        </Col>
        <Col>
          <i class="fas fa-quote-right" />
        </Col>
      </Row>

      <Row>
        <Container className="features">
          <Row>
            <Col xs={1}>
              <i class="fas fa-compact-disc" />
            </Col>
            <Col xs={5}>
              <h3>Expertise</h3>
              <span>A unique sound born from the southern part of Texas</span>
            </Col>
            <Col xs={1}>
              <i class="far fa-clock" />
            </Col>
            <Col xs={5}>
              <h3>Fast turn-around</h3>
              <span>
                Get your tracks mixed and mastered within 3 business days
              </span>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs={1}>
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
            </Col>
            <Col xs={5}>
              <h3>Stream/ Radio ready</h3>
              <span>
                Receive a stream-ready mastered file and an uncompressed
                mix-level file for archiving and future remastering
              </span>
            </Col>
            <Col xs={1}>
              <i class="fas fa-layer-group" />
            </Col>
            <Col xs={5}>
              <h3>4 Revisions</h3>
              <span>Four free revisions and capability of adding more</span>
            </Col>
          </Row>
        </Container>
      </Row>

      <Row className="services">
        <Col>
          <Card>
            <Card.Header>STANDARD</Card.Header>
            <BackgroundImage fluid={data.cardImg.childImageSharp.fluid}>
              <Card.Body>
                <Card.Text>&bull; Up to 24 tracks/ files</Card.Text>
                <div className="tag">
                  <div className="tag--price">
                    <h1>$50</h1>
                    <h6>per song</h6>
                  </div>
                </div>
              </Card.Body>
            </BackgroundImage>
            <Card.Footer className="text-muted">SELECT</Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>PREMIUM</Card.Header>
            <BackgroundImage fluid={data.cardImg.childImageSharp.fluid}>
              <Card.Body>
                <Card.Text>&bull; Up to 50 tracks/ files</Card.Text>
                <div className="tag">
                  <div className="tag--price">
                    <h1>$75</h1>
                    <h6>per song</h6>
                  </div>
                </div>
              </Card.Body>
            </BackgroundImage>
            <Card.Footer className="text-muted">SELECT</Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>DELUXE</Card.Header>
            <BackgroundImage fluid={data.cardImg.childImageSharp.fluid}>
              <Card.Body>
                <Card.Text>&bull; Up to 72 tracks/ files</Card.Text>
                <div className="tag">
                  <div className="tag--price">
                    <h1>$100</h1>
                    <h6>per song</h6>
                  </div>
                </div>
              </Card.Body>
            </BackgroundImage>
            <Card.Footer className="text-muted">SELECT</Card.Footer>
          </Card>
        </Col>
      </Row>

      <Row className="inquiry">
        <InquiryForm />
      </Row>
    </Container>
  </Layout>
)

export const query = graphql`
  query {
    cardImg: file(relativePath: { eq: "AK99.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 301, maxHeight: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
