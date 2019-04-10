import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "./Twitter.css"

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
      <div>
        <img
          src={`${data.twitterapi.user_tweets[0].user.profile_image_url}`}
          alt="profile pic"
          height="50"
          width="50"
        />
        {data.twitterapi.user_tweets.map(tweets => {
          return <li>{tweets.text}</li>
        })}
      </div>
    )}
  />
)

export default Twitter
