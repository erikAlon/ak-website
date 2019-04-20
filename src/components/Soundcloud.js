import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "../styling/Soundcloud.css"
import Img from "gatsby-image"
import { Container, Row, Col, Carousel } from "react-bootstrap"
import SC from "soundcloud"

SC.initialize({
  client_id: "4T2gPF6aeAa4QvMYLU0mgjxqDiHtSAbB",
})

let CURRENT_PLAYER = null
let PREVIOUS_PLAYER = null

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

  // Play track by calling play() on each audio element by index
  CURRENT_PLAYER = document.getElementById(`player${index}`)

  if (PREVIOUS_PLAYER !== null) {
    PREVIOUS_PLAYER.pause()
  }

  CURRENT_PLAYER.play()
  PREVIOUS_PLAYER = CURRENT_PLAYER
}

const next = () => {
  // Grab carousel inner items html collection
  // Set index to current active item
  // Set items to not active
  // Set previous item to index to active
  // If 0 index, set last item as active
}

const previous = () => {}

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
          <i class="fas fa-step-backward" />
          <Carousel
            interval={null}
            nextIcon={<i class="fas fa-step-forward" />}
            prevIcon={<i class="fas fa-step-backward" />}
            indicators={false}
            controls={false}
          >
            {data.soundcloudapi.playlist.tracksCollection.collection.map(
              (track, index) => {
                return (
                  <Carousel.Item>
                    {track.artworkUrl ? (
                      <div
                        onClick={player.bind(this, track.streamUrl, index)}
                        id={`player-container-${index}`}
                        className="audio-wrapper"
                      >
                        <img
                          src={`${track.artworkUrl}`}
                          alt="track_artwork"
                          height="150"
                          width="150"
                        />
                        <audio className="player" id={`player${index}`}>
                          <source
                            src={`${
                              track.streamUrl
                            }?client_id=4T2gPF6aeAa4QvMYLU0mgjxqDiHtSAbB`}
                          />
                        </audio>
                      </div>
                    ) : (
                      <div onClick={player.bind(this, track.streamUrl, index)}>
                        <Img fixed={data.ak.childImageSharp.fixed} />
                      </div>
                    )}
                  </Carousel.Item>
                )
              }
            )}
          </Carousel>
          <i class="fas fa-step-forward" />
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
