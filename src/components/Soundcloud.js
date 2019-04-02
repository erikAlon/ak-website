import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "./Soundcloud.css"

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
      }
    `}
    render={data => (
      <div>
        {data.soundcloudapi.playlist.tracksCollection.collection.map(track => {
          return (
            <div>
              <img
                src={`${track.artworkUrl}`}
                alt="track_artwork"
                height="100"
                width="100"
              />{" "}
              {track.title}{" "}
              <audio
                controls
                src={`${
                  track.streamUrl
                }?client_id=4T2gPF6aeAa4QvMYLU0mgjxqDiHtSAbB`}
              />
            </div>
          )
        })}
      </div>
    )}
  />
)
