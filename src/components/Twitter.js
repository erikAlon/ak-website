import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "../styling/Twitter.css"

import { Popover, OverlayTrigger } from "react-bootstrap"

const popover = tweets => (
  <Popover id="popover-basic" title="Tweets" style={{ width: "1000px" }}>
    <ul>
      {tweets.map(tweet => {
        return (
          <div>
            <li>{tweet.text}</li>
            <hr />
          </div>
        )
      })}
    </ul>
  </Popover>
)

const Twitter = () => (
  <StaticQuery
    query={graphql`
      query {
        twitterapi {
          user_tweets {
            text
            user {
              name
              profile_image_url
            }
          }
        }
      }
    `}
    render={data => (
      // <div>
      //   <img
      //     src={`${data.twitterapi.user_tweets[0].user.profile_image_url}`}
      //     alt="profile pic"
      //     height="50"
      //     width="50"
      //   />
      //   {data.twitterapi.user_tweets.map(tweets => {
      //     return <li>{tweets.text}</li>
      //   })}
      // </div>
      <OverlayTrigger
        trigger="click"
        placement="right"
        overlay={popover(data.twitterapi.user_tweets)}
      >
        <img
          src={`${data.twitterapi.user_tweets[0].user.profile_image_url}`}
          alt="profile pic"
          height="50"
          width="50"
        />
      </OverlayTrigger>
    )}
  />
)

export default Twitter
