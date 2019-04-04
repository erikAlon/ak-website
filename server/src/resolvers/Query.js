const fetch = require("node-fetch")
require("dotenv").config()

const USER1 = "erikalon12"
const USER2 = "SethMonroy"
const GET_TIMELINE = `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${USER2}`

const GET_USSTATES =
  "https://gist.githubusercontent.com/erikAlon/4f6193205eb9e44ad41a4d9184607888/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_titlecase.json"

// GET timeline using twitter API
async function user_tweets() {
  const tweetList = await fetch(GET_TIMELINE, {
    headers: {
      Authorization: `Bearer ${process.env.TWITTER_API}`,
    },
  }).then(res => res.json())

  return tweetList
}

// GET usa states and count
async function get_states() {
  const states = await fetch(GET_USSTATES).then(res => res.json())

  const count = Object.keys(states).length

  const obj = Object.assign({ count }, { states })

  console.log(obj)

  return obj
}

module.exports = {
  user_tweets,
  get_states,
}
