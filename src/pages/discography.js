import React from "react"

import Layout from "../components/layout"

import "./discography.css"

const Discography = () => (
  <Layout>
    <div class="disco">
      <div class="tweet">tweet</div>
      <div class="soundcloud">sc</div>
      <div class="insta">insta</div>
      <div class="blog">blog</div>
    </div>
  </Layout>
)

export default Discography

/*
Soundcloud appearing disappearing list vertical
- ul:
  - li:
    - tracks
      - img:
        - track pic
      - div:
        - name

Instagram carousel horizontal
- ul:
  - li:
    - img:
      - instagram pic

Twitter newsfeed on the far right
- ul:
  - li:
    - div:
      - twitter tweet

Database blog
- ul:
  - li:
    - div:
      - blog
        - h1:
          - title
        - h2:
          - date
        - p:
          - description
*/
