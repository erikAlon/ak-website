import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "../styling/Soundcloud.css"
import Img from "gatsby-image"
import { Container, Row, Col, Carousel } from "react-bootstrap"

const startSc = url => {
  // Fetch stream url
  // stream track url on click

  console.log(url)
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        soundcloudapi {
          playlist(id: "703111047") {
            tracksCollection {
              collection {
                title
                streamUrl
                artworkUrl
              }
            }
          }
        }
        ak: file(relativePath: { eq: "AK-sans-bk.png" }) {
          childImageSharp {
            fixed(width: 150, height: 151) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <Container className="sc">
        <Container className="sc__carousel">
          <Carousel
            interval={null}
            nextIcon={<i class="fas fa-step-forward" />}
            prevIcon={<i class="fas fa-step-backward" />}
          >
            {data.soundcloudapi.playlist.tracksCollection.collection.map(
              track => (
                <Carousel.Item>
                  {track.artworkUrl ? (
                    <img
                      src={`${track.artworkUrl}`}
                      alt="track_artwork"
                      height="150"
                      width="150"
                    />
                  ) : (
                    <Img fixed={data.ak.childImageSharp.fixed} />
                  )}
                </Carousel.Item>
              )
            )}
          </Carousel>
        </Container>
        <Container className="sc__table">
          <Row className="headers">
            <Col>Genres:</Col>
            <Col>&lt;Chosen Genre Display&gt;</Col>
          </Row>
          <Row className="list">
            <Col>
              {data.soundcloudapi.playlist.tracksCollection.collection.map(
                track => (
                  <div
                    className="track"
                    onClick={startSc.bind(this, track.streamUrl)}
                  >
                    {track.title}
                  </div>
                )
              )}
            </Col>
          </Row>
        </Container>
      </Container>
    )}
  />
)
