import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "../styling/Soundcloud.css"
import Img from "gatsby-image"
import { Container, Row, Col, Carousel } from "react-bootstrap"
import SC from "soundcloud"

const player = (url, index) => {
  // Fetch stream url
  // stream track url on click

  // carousel-inner
  let itemList = document.getElementsByClassName("carousel-inner")[0].children
  for (let item of itemList) {
    item.setAttribute("class", "carousel-item carousel-item")
  }

  // carouse-indicator
  // let indicatorsList = document.getElementsByClassName("carousel-indicators")[0]
  //   .children
  // for (let item of indicatorsList) {
  //   item.setAttribute("class", "")
  // }

  // set active elements for list, item, and indicator
  itemList[index].setAttribute("class", "carousel-item active carousel-item")
  // indicatorsList[index].setAttribute("class", "active")
}

const progress = () => {}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        soundcloudapi {
          playlist(id: "703111047") {
            tracksCollection {
              collection {
                id
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
            indicators={false}
          >
            {data.soundcloudapi.playlist.tracksCollection.collection.map(
              (track, index) => (
                <Carousel.Item>
                  {track.artworkUrl ? (
                    <img
                      src={`${track.artworkUrl}`}
                      alt="track_artwork"
                      height="150"
                      width="150"
                      onClick={player.bind(this, track.streamUrl, index)}
                    />
                  ) : (
                    <div onClick={player.bind(this, track.streamUrl, index)}>
                      <Img fixed={data.ak.childImageSharp.fixed} />
                    </div>
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
                (track, index) => (
                  <div
                    className="track"
                    onClick={player.bind(this, track.streamUrl, index)}
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
