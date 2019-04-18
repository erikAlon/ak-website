import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "./Soundcloud.css"
import Img from "gatsby-image"
import { Container, Row, Col, Carousel } from "react-bootstrap"

// const Player = url => {
//   // Fetch stream url
//   // stream/ pause track url on click
// }

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
          <Carousel interval={null}>
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
          <Row>
            <Col>Genres:</Col>
            <Col>Main Genre</Col>
          </Row>
          <Row>
            {data.soundcloudapi.playlist.tracksCollection.collection.map(
              track => (
                <h1>{track.title}</h1>
              )
            )}
          </Row>
        </Container>
      </Container>
    )}
  />
)
