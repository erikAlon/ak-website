const fetch = require("node-fetch")
require("dotenv").config()

const USER1 = "erikalon12"
const USER2 = "SethMonroy"
const GET_TIMELINE = `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${USER2}`

// GET timeline using twitter API
async function user_tweets() {
  const tweetList = await fetch(GET_TIMELINE, {
    headers: {
      Authorization: `Bearer ${process.env.TWITTER_API}`,
    },
  }).then(res => res.json())

  return tweetList
}

module.exports = {
  user_tweets,
}
